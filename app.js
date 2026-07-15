/* QCMTrainer — app.js (multi-cours + reprise de session) */
(function () {
  "use strict";
  var KEYS = ["A", "B", "C", "D"];
  var LS_STATS = "qcmtrainer.stats.v1";              // stats d'erreurs long terme (inchangé)
  var SESSION_PREFIX = "qcmtrainer.session.v1.";     // 1 clé par cours : ...v1.<courseId>
  function sessionKey(courseId) { return SESSION_PREFIX + courseId; }

  var state = {
    courseId: null, course: null,
    qById: {}, qmod: {},         // index id -> question / id -> {module}
    selModules: [],              // modules sélectionnés (ids)
    bank: null, order: [], i: 0, // bank[order[i]] = question courante (ordre tiré)
    sel: null, revealed: false,
    answers: {}                  // { qid: { sel, ok } }
  };

  function el(id) { return document.getElementById(id); }
  function shuffle(a) { a = a.slice(); for (var i = a.length - 1; i > 0; i--) { var j = Math.floor(Math.random() * (i + 1)); var t = a[i]; a[i] = a[j]; a[j] = t; } return a; }

  /* ---------- Questions à choix multiple ---------- */
  function isMulti(q) { return Array.isArray(q.correct); }                 // correct = tableau -> plusieurs bonnes réponses
  function correctSet(q) { return isMulti(q) ? q.correct : [q.correct]; }
  function selSet(sel) { return Array.isArray(sel) ? sel : (sel === null || sel === undefined ? [] : [sel]); }
  function sameSet(a, b) {
    if (a.length !== b.length) return false;
    var x = a.slice().sort(function (p, q) { return p - q; }), y = b.slice().sort(function (p, q) { return p - q; });
    for (var i = 0; i < x.length; i++) if (x[i] !== y[i]) return false;
    return true;
  }
  function answerOk(q, sel) { return isMulti(q) ? sameSet(selSet(sel), q.correct) : sel === q.correct; }
  function selEmpty() { return selSet(state.sel).length === 0; }
  function keysOf(arr) { return arr.slice().sort(function (a, b) { return a - b; }).map(function (i) { return KEYS[i]; }).join(", "); }
  function show(s) { ["home", "quiz", "result"].forEach(function (x) { el("scr-" + x).classList.toggle("hidden", x !== s); }); }
  function esc(t) { var d = document.createElement("div"); d.textContent = t; return d.innerHTML; }

  /* ---------- Stats long terme (comportement inchangé) ---------- */
  function loadStats() { try { return JSON.parse(localStorage.getItem(LS_STATS)) || {}; } catch (e) { return {}; } }
  function saveStat(champ, ok) { var s = loadStats(), k = champ || "?"; s[k] = s[k] || { ok: 0, n: 0 }; s[k].n++; if (ok) s[k].ok++; localStorage.setItem(LS_STATS, JSON.stringify(s)); }

  /* ---------- Session persistée ---------- */
  function drawnIds() { return state.order.map(function (idx) { return state.bank[idx].id; }); }
  function idAt(pos) { return state.bank[state.order[pos]].id; }
  function total() { return state.order.length; }
  function answeredCount() { var n = 0; for (var p = 0; p < total(); p++) if (state.answers[idAt(p)]) n++; return n; }
  function allAnswered() { return total() > 0 && answeredCount() === total(); }
  function firstUnanswered(from) {
    var n = total(); if (!n) return 0;
    for (var k = 0; k < n; k++) { var j = (((from | 0) % n) + n + k) % n; if (!state.answers[idAt(j)]) return j; }
    return from | 0;
  }

  function persist() {
    if (!state.courseId || !state.bank || !total()) return;
    try {
      localStorage.setItem(sessionKey(state.courseId), JSON.stringify({
        v: 1, courseId: state.courseId, modules: state.selModules,
        orderIds: drawnIds(), i: state.i, answers: state.answers
      }));
    } catch (e) { /* quota dépassé : on ignore, la session courante reste jouable */ }
  }
  function clearSession(courseId) { try { localStorage.removeItem(sessionKey(courseId)); } catch (e) {} }
  function savedAllAnswered(s) {
    var a = s.answers || {}, c = 0;
    for (var k = 0; k < s.orderIds.length; k++) if (a[s.orderIds[k]]) c++;
    return c === s.orderIds.length;
  }
  function readSession(courseId) {
    var s;
    try { s = JSON.parse(localStorage.getItem(sessionKey(courseId))); } catch (e) { return null; }
    if (!s || !s.orderIds || !s.orderIds.length) return null;
    if (savedAllAnswered(s)) { clearSession(courseId); return null; }  // série terminée -> pas de reprise
    return s;
  }

  /* ---------- Chargement des cours (registre -> bundle .js) ---------- */
  function loadScript(src) {
    return new Promise(function (res, rej) {
      var s = document.createElement("script"); s.src = src;
      s.onload = res; s.onerror = function () { rej(new Error("Impossible de charger " + src)); };
      document.head.appendChild(s);
    });
  }

  function populateCourses() {
    var courses = window.QCM_COURSES || [];
    var sel = el("course"); sel.innerHTML = "";
    courses.forEach(function (c) {
      var o = document.createElement("option"); o.value = c.id; o.textContent = c.titre; sel.appendChild(o);
    });
    sel.onchange = function () { loadCourse(sel.value); };
    if (courses.length) loadCourse(courses[0].id);
    else el("mods").innerHTML = '<p class="sub">Aucun cours dans le registre.</p>';
  }

  function courseMeta(id) { return (window.QCM_COURSES || []).filter(function (c) { return c.id === id; })[0]; }

  function indexCourse(bank) {
    state.qById = {}; state.qmod = {};
    ((bank && bank.modules) || []).forEach(function (m) {
      (m.questions || []).forEach(function (q) {
        state.qById[q.id] = q;
        state.qmod[q.id] = { id: m.id, titre: m.titre };
      });
    });
  }

  function loadCourse(id) {
    var meta = courseMeta(id); if (!meta) return;
    state.courseId = id;
    var have = window.QCM_BANK && window.QCM_BANK[id];
    var p = have ? Promise.resolve() : loadScript(meta.bundle);
    el("mods").innerHTML = '<p class="sub">Chargement…</p>';
    p.then(function () {
      state.course = (window.QCM_BANK || {})[id];
      indexCourse(state.course);
      renderModules();
      checkResume();
    }).catch(function (e) {
      el("mods").innerHTML = '<p class="sub">⚠️ ' + esc(e.message) + "</p>";
    });
  }

  function renderModules() {
    var c = state.course, host = el("mods"); host.innerHTML = "";
    el("course-title").textContent = c ? c.titre : "";
    if (!c || !c.modules || !c.modules.length) { host.innerHTML = '<p class="sub">Aucun module.</p>'; return; }
    c.modules.forEach(function (m, idx) {
      var l = document.createElement("label"); l.className = "mod";
      l.innerHTML = '<input type="checkbox" data-i="' + idx + '" checked><span class="box"></span>' +
        '<span class="m-code">' + esc(m.id) + '</span>' +
        '<span class="m-title">' + esc(m.titre) + '</span>' +
        '<span class="m-n">' + m.questions.length + ' Q</span>';
      host.appendChild(l);
    });
  }

  /* ---------- Bandeau de reprise ---------- */
  function checkResume() {
    var host = el("resume"); if (!host) return;
    var s = state.courseId ? readSession(state.courseId) : null;
    if (!s) { host.classList.add("hidden"); host.innerHTML = ""; return; }
    var pos = Math.min((s.i | 0) + 1, s.orderIds.length);
    host.classList.remove("hidden");
    host.innerHTML =
      '<div class="resume-txt"><b>Session en cours</b> — question ' + pos + '/' + s.orderIds.length + '</div>' +
      '<div class="resume-actions">' +
        '<button class="btn btn-primary" id="btn-resume">Reprendre</button>' +
        '<button class="btn btn-ghost" id="btn-forget">Recommencer</button>' +
      '</div>';
    el("btn-resume").onclick = function () { resumeSession(s); };
    el("btn-forget").onclick = function () { clearSession(state.courseId); checkResume(); };
  }

  function resumeSession(s) {
    var bank = [];
    for (var k = 0; k < s.orderIds.length; k++) { var q = state.qById[s.orderIds[k]]; if (q) bank.push(q); }
    if (!bank.length) { clearSession(state.courseId); checkResume(); return; }
    state.bank = bank;
    state.order = bank.map(function (_, i) { return i; });   // ordre déjà fixé -> indices identité
    state.selModules = s.modules || [];
    state.answers = s.answers || {};
    state.i = Math.min(Math.max(s.i | 0, 0), bank.length - 1); // position exacte restaurée
    persist();
    renderQuestion(); show("quiz");
  }

  /* ---------- Démarrage d'une série ---------- */
  function startFromSelection() {
    if (!state.course) return;
    var picked = [], mods = [];
    document.querySelectorAll("#mods input:checked").forEach(function (c) {
      var m = state.course.modules[+c.dataset.i];
      if (m) { picked = picked.concat(m.questions); mods.push(m.id); }
    });
    if (!picked.length) return;
    clearSession(state.courseId);          // nouvelle série -> on efface toute session précédente
    state.selModules = mods;
    startQuiz(picked);
  }

  function startQuiz(qs) {
    state.bank = qs;
    state.order = shuffle(qs.map(function (_, i) { return i; }));  // <-- MÉLANGE aléatoire
    state.i = 0; state.answers = {};
    persist();
    renderQuestion(); show("quiz");
  }
  function currentQ() { return state.bank[state.order[state.i]]; }

  /* ---------- Rendu question ---------- */
  function renderQuestion() {
    var q = currentQ();
    var multi = isMulti(q);
    var prev = state.answers[q.id] || null;
    state.sel = prev ? prev.sel : (multi ? [] : null);
    state.revealed = !!prev;

    el("count").textContent = (state.i + 1) + " / " + total();
    el("bar").style.width = Math.round(state.i / total() * 100) + "%";
    el("champ").textContent = (q.champ || "") + (multi ? "  ·  plusieurs réponses" : "");
    var d = el("diff"); d.innerHTML = ""; var lvl = q.difficulte || 3;
    for (var k = 0; k < 5; k++) { var i2 = document.createElement("i"); if (k < lvl) i2.className = "on"; d.appendChild(i2); }
    d.title = "Difficulté " + lvl + "/5";
    el("qtext").textContent = q.question;

    var opts = el("opts"); opts.innerHTML = "";
    q.options.forEach(function (opt, idx) {
      var l = document.createElement("label"); l.className = "opt"; l.dataset.i = idx;
      var input = multi ? '<input type="checkbox">' : '<input type="radio" name="qopt">';
      l.innerHTML = input + '<span class="mark"></span>' +
        '<span class="txt"><b>' + KEYS[idx] + '</b>&nbsp;&nbsp;' + esc(opt) + '</span>';
      l.querySelector("input").onchange = function () { selectOption(idx); };
      opts.appendChild(l);
    });

    updateGotoField();

    if (state.revealed) {                     // question déjà répondue -> correction verrouillée
      renderCorrection(q, prev.sel);
      el("btn-validate").classList.add("hidden");
      var bn = el("btn-next"); bn.classList.remove("hidden");
      bn.textContent = allAnswered() ? "Voir le résultat" : "Suivant";
    } else {                                  // répondable
      el("corr").classList.add("hidden");
      el("btn-validate").classList.remove("hidden"); el("btn-validate").disabled = true;
      el("btn-next").classList.add("hidden");
    }
  }

  function updateGotoField() {
    var g = el("goto"); if (!g) return;
    g.max = total(); g.placeholder = "1–" + total();
    if (document.activeElement !== g) g.value = "";
  }

  function selectOption(idx) {
    if (state.revealed) return;
    var q = currentQ();
    if (isMulti(q)) {                                   // toggle dans l'ensemble sélectionné
      var s = Array.isArray(state.sel) ? state.sel : [];
      var pos = s.indexOf(idx);
      if (pos >= 0) s.splice(pos, 1); else s.push(idx);
      state.sel = s;
      document.querySelectorAll("#opts .opt").forEach(function (o) {
        var on = s.indexOf(+o.dataset.i) >= 0; o.classList.toggle("sel", on);
        o.querySelector("input").checked = on;
      });
      el("btn-validate").disabled = s.length === 0;
    } else {
      state.sel = idx;
      document.querySelectorAll("#opts .opt").forEach(function (o) {
        var on = +o.dataset.i === idx; o.classList.toggle("sel", on);
        if (on) o.querySelector("input").checked = true;
      });
      el("btn-validate").disabled = false;
    }
  }

  function renderCorrection(q, sel) {
    var cset = correctSet(q), sset = selSet(sel);
    document.querySelectorAll("#opts .opt").forEach(function (o) {
      var i = +o.dataset.i; o.classList.add("locked"); o.classList.remove("sel");
      var inp = o.querySelector("input"); inp.disabled = true;
      var isC = cset.indexOf(i) >= 0, isS = sset.indexOf(i) >= 0;
      if (isC) o.classList.add("correct");
      else if (isS) o.classList.add("wrong");
      else o.classList.add("dim");
      inp.checked = isS;
    });
    var ok = answerOk(q, sel);
    var v = el("verdict"); v.className = "verdict " + (ok ? "ok" : "ko");
    v.textContent = ok ? "✓ Bonne réponse"
      : "✗ Réponse incorrecte — " + (isMulti(q) ? "réponses correctes : " : "la bonne réponse est ") + keysOf(cset);
    var ul = el("expl"); ul.innerHTML = "";
    if (Array.isArray(q.explications)) {          // explication par option (format historique)
      q.explications.forEach(function (ex, i) {
        var li = document.createElement("li");
        li.className = cset.indexOf(i) >= 0 ? "ok" : (sset.indexOf(i) >= 0 ? "ko" : "");
        li.innerHTML = '<span class="k">' + KEYS[i] + ".</span>" + esc(ex);
        ul.appendChild(li);
      });
    } else if (q.explication) {                   // explication unique (quiz convertis)
      var li = document.createElement("li");
      li.className = ok ? "ok" : "ko";
      li.innerHTML = '<span class="k">' + keysOf(cset) + ".</span>" + esc(q.explication);
      ul.appendChild(li);
    }
    el("tags").innerHTML = '<span class="tag mem">Mémento ' + esc(q.memento || "—") + "</span>" +
      (q.piege ? '<span class="tag piege">piège : ' + esc(q.piege) + "</span>" : "");
    el("corr").classList.remove("hidden");
  }

  function validate() {
    if (selEmpty() || state.revealed) return;
    var q = currentQ(), ok = answerOk(q, state.sel);
    var already = !!state.answers[q.id];
    state.answers[q.id] = { sel: state.sel, ok: ok };
    if (!already) saveStat(q.champ, ok);      // stats long terme : 1 seule fois par question
    state.revealed = true;
    renderCorrection(q, state.sel);
    el("btn-validate").classList.add("hidden");
    var bn = el("btn-next"); bn.classList.remove("hidden");
    bn.textContent = allAnswered() ? "Voir le résultat" : "Suivant";
    bn.focus();
    persist();                                 // SAUVEGARDE après chaque question validée
  }

  function next() {
    if (allAnswered()) { renderResult(); return; }
    state.i = firstUnanswered(state.i + 1);     // séquentiel = i+1 ; sinon 1re non répondue (wrap)
    persist();
    renderQuestion();
  }

  /* ---------- Navigation dans l'ordre tiré ---------- */
  function gotoPos(x) {
    var n = total(); if (!n) return;
    x = parseInt(x, 10); if (isNaN(x)) return;
    state.i = Math.max(1, Math.min(n, x)) - 1;
    persist();
    renderQuestion();
  }
  function stepBy(delta) {
    var n = total(); if (!n) return;
    state.i = Math.max(0, Math.min(n - 1, state.i + delta));
    persist();
    renderQuestion();
  }

  /* ---------- Résultat (global + par module) puis effacement session ---------- */
  function renderResult() {
    var n = total(), good = 0, ansN = 0, byMod = {}, modOrder = [];
    for (var p = 0; p < n; p++) {
      var id = idAt(p), a = state.answers[id];
      var mod = state.qmod[id] || { id: "?", titre: "?" };
      if (!byMod[mod.id]) { byMod[mod.id] = { titre: mod.titre, ok: 0, n: 0 }; modOrder.push(mod.id); }
      byMod[mod.id].n++;
      if (a) { ansN++; if (a.ok) { good++; byMod[mod.id].ok++; } }
    }
    var pct = ansN ? Math.round(good / ansN * 100) : 0;
    el("ring").style.setProperty("--p", pct);
    el("ring-txt").textContent = good + "/" + ansN;
    el("score-pct").textContent = pct + "% de réussite";
    el("score-line").textContent = good + (good > 1 ? " bonnes réponses" : " bonne réponse") + " sur " + ansN;

    var mb = el("bymod");
    if (mb) {
      mb.innerHTML = "";
      modOrder.forEach(function (mid) {
        var m = byMod[mid], mp = m.n ? Math.round(m.ok / m.n * 100) : 0;
        var row = document.createElement("div"); row.className = "modrow";
        row.innerHTML =
          '<span class="mr-code">' + esc(mid) + '</span>' +
          '<span class="mr-title">' + esc(m.titre) + '</span>' +
          '<span class="mr-bar"><i style="width:' + mp + '%"></i></span>' +
          '<span class="mr-num">' + m.ok + '/' + m.n + ' · ' + mp + '%</span>';
        mb.appendChild(row);
      });
    }

    var host = el("reslist"); host.innerHTML = "";
    for (var p2 = 0; p2 < n; p2++) {
      var id2 = idAt(p2), a2 = state.answers[id2];
      var r = document.createElement("div"); r.className = "resrow";
      var cls = a2 ? (a2.ok ? "ok" : "ko") : "na";
      r.innerHTML = '<span class="resdot ' + cls + '"></span>' +
        "<span><b>Q" + (p2 + 1) + "</b></span><span class=\"rc\">" + esc((state.qmod[id2] || {}).titre || "") + "</span>";
      host.appendChild(r);
    }

    clearSession(state.courseId);   // FIN DE SÉRIE : la session sauvegardée est effacée
    show("result");
  }

  /* ---------- Clavier ---------- */
  document.addEventListener("keydown", function (e) {
    if (el("scr-quiz").classList.contains("hidden")) return;
    if (e.target && e.target.id === "goto") {            // saisie du n° -> Entrée = aller à
      if (e.key === "Enter") { gotoPos(e.target.value); e.preventDefault(); }
      return;
    }
    if (!state.revealed && /^[1-4]$/.test(e.key)) selectOption(+e.key - 1);
    else if (!state.revealed && /^[a-dA-D]$/.test(e.key)) selectOption(KEYS.indexOf(e.key.toUpperCase()));
    else if (e.key === "Enter") { if (!state.revealed) { if (!selEmpty()) validate(); } else next(); }
  });

  window.addEventListener("DOMContentLoaded", function () {
    el("btn-start").onclick = startFromSelection;
    el("btn-validate").onclick = validate;
    el("btn-next").onclick = next;
    el("btn-home").onclick = function () { show("home"); checkResume(); };
    el("btn-restart").onclick = function () { show("home"); checkResume(); };
    var bg = el("btn-goto"); if (bg) bg.onclick = function () { gotoPos(el("goto").value); };
    var bp = el("btn-prev"); if (bp) bp.onclick = function () { stepBy(-1); };
    var bnn = el("btn-next-nav"); if (bnn) bnn.onclick = function () { stepBy(1); };
    populateCourses();
    show("home");
  });
})();

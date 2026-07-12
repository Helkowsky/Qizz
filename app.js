/* QCMTrainer — app.js (multi-cours) */
(function () {
  "use strict";
  var KEYS = ["A", "B", "C", "D"];
  var LS_STATS = "qcmtrainer.stats.v1";

  var state = { course: null, bank: null, order: [], i: 0, sel: null, revealed: false, answers: [] };

  function el(id) { return document.getElementById(id); }
  function shuffle(a) { a = a.slice(); for (var i = a.length - 1; i > 0; i--) { var j = Math.floor(Math.random() * (i + 1)); var t = a[i]; a[i] = a[j]; a[j] = t; } return a; }
  function show(s) { ["home", "quiz", "result"].forEach(function (x) { el("scr-" + x).classList.toggle("hidden", x !== s); }); }
  function esc(t) { var d = document.createElement("div"); d.textContent = t; return d.innerHTML; }

  function loadStats() { try { return JSON.parse(localStorage.getItem(LS_STATS)) || {}; } catch (e) { return {}; } }
  function saveStat(champ, ok) { var s = loadStats(), k = champ || "?"; s[k] = s[k] || { ok: 0, n: 0 }; s[k].n++; if (ok) s[k].ok++; localStorage.setItem(LS_STATS, JSON.stringify(s)); }

  // ---- Chargement des cours (registre → bundle .js à la volée) ----
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

  function loadCourse(id) {
    var meta = courseMeta(id); if (!meta) return;
    var have = window.QCM_BANK && window.QCM_BANK[id];
    var p = have ? Promise.resolve() : loadScript(meta.bundle);
    el("mods").innerHTML = '<p class="sub">Chargement…</p>';
    p.then(function () {
      state.course = (window.QCM_BANK || {})[id];
      renderModules();
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

  // ---- Quiz ----
  function startFromSelection() {
    if (!state.course) return;
    var picked = [];
    document.querySelectorAll("#mods input:checked").forEach(function (c) {
      var m = state.course.modules[+c.dataset.i]; if (m) picked = picked.concat(m.questions);
    });
    if (!picked.length) return;
    startQuiz(picked);
  }

  function startQuiz(qs) {
    state.bank = qs; state.order = shuffle(qs.map(function (_, i) { return i; }));
    state.i = 0; state.answers = []; renderQuestion(); show("quiz");
  }
  function currentQ() { return state.bank[state.order[state.i]]; }

  function renderQuestion() {
    state.sel = null; state.revealed = false;
    var q = currentQ();
    el("count").textContent = (state.i + 1) + " / " + state.order.length;
    el("bar").style.width = Math.round(state.i / state.order.length * 100) + "%";
    el("champ").textContent = q.champ || "";
    var d = el("diff"); d.innerHTML = ""; var lvl = q.difficulte || 3;
    for (var k = 0; k < 5; k++) { var i2 = document.createElement("i"); if (k < lvl) i2.className = "on"; d.appendChild(i2); }
    d.title = "Difficulté " + lvl + "/5";
    el("qtext").textContent = q.question;
    var opts = el("opts"); opts.innerHTML = "";
    q.options.forEach(function (opt, idx) {
      var l = document.createElement("label"); l.className = "opt"; l.dataset.i = idx;
      l.innerHTML = '<input type="radio" name="qopt"><span class="mark"></span>' +
        '<span class="txt"><b>' + KEYS[idx] + '</b>&nbsp;&nbsp;' + esc(opt) + '</span>';
      l.querySelector("input").onchange = function () { selectOption(idx); };
      opts.appendChild(l);
    });
    el("corr").classList.add("hidden");
    el("btn-validate").classList.remove("hidden"); el("btn-validate").disabled = true;
    el("btn-next").classList.add("hidden");
  }

  function selectOption(idx) {
    if (state.revealed) return;
    state.sel = idx;
    document.querySelectorAll("#opts .opt").forEach(function (o) {
      var on = +o.dataset.i === idx; o.classList.toggle("sel", on);
      if (on) o.querySelector("input").checked = true;
    });
    el("btn-validate").disabled = false;
  }

  function validate() {
    if (state.sel === null || state.revealed) return;
    state.revealed = true;
    var q = currentQ(), ok = state.sel === q.correct;
    state.answers.push({ q: q, ok: ok }); saveStat(q.champ, ok);
    document.querySelectorAll("#opts .opt").forEach(function (o) {
      var i = +o.dataset.i; o.classList.add("locked"); o.classList.remove("sel");
      o.querySelector("input").disabled = true;
      if (i === q.correct) o.classList.add("correct");
      else if (i === state.sel) o.classList.add("wrong");
      else o.classList.add("dim");
    });
    el("corr").classList.remove("hidden");
    var v = el("verdict"); v.className = "verdict " + (ok ? "ok" : "ko");
    v.textContent = ok ? "✓ Bonne réponse" : "✗ Réponse incorrecte — la bonne réponse est " + KEYS[q.correct];
    var ul = el("expl"); ul.innerHTML = "";
    q.explications.forEach(function (ex, i) {
      var li = document.createElement("li");
      li.className = i === q.correct ? "ok" : (i === state.sel ? "ko" : "");
      li.innerHTML = '<span class="k">' + KEYS[i] + ".</span>" + esc(ex);
      ul.appendChild(li);
    });
    el("tags").innerHTML = '<span class="tag mem">Mémento ' + esc(q.memento || "—") + "</span>" +
      (q.piege ? '<span class="tag piege">piège : ' + esc(q.piege) + "</span>" : "");
    el("btn-validate").classList.add("hidden");
    var bn = el("btn-next"); bn.classList.remove("hidden");
    bn.textContent = (state.i + 1 >= state.order.length) ? "Voir le résultat" : "Suivant";
    bn.focus();
  }

  function next() { if (state.i + 1 >= state.order.length) renderResult(); else { state.i++; renderQuestion(); } }

  function renderResult() {
    var n = state.answers.length, good = state.answers.filter(function (a) { return a.ok; }).length;
    var pct = Math.round(good / n * 100);
    el("ring").style.setProperty("--p", pct);
    el("ring-txt").textContent = good + "/" + n;
    el("score-pct").textContent = pct + "% de réussite";
    el("score-line").textContent = good + (good > 1 ? " bonnes réponses" : " bonne réponse") + " sur " + n;
    var host = el("reslist"); host.innerHTML = "";
    state.answers.forEach(function (a, i) {
      var r = document.createElement("div"); r.className = "resrow";
      r.innerHTML = '<span class="resdot ' + (a.ok ? "ok" : "ko") + '"></span>' +
        "<span><b>Q" + (i + 1) + "</b></span><span class=\"rc\">" + esc(a.q.champ || "") + "</span>";
      host.appendChild(r);
    });
    show("result");
  }

  document.addEventListener("keydown", function (e) {
    if (el("scr-quiz").classList.contains("hidden")) return;
    if (!state.revealed && /^[1-4]$/.test(e.key)) selectOption(+e.key - 1);
    else if (!state.revealed && /^[a-dA-D]$/.test(e.key)) selectOption(KEYS.indexOf(e.key.toUpperCase()));
    else if (e.key === "Enter") { if (!state.revealed) { if (state.sel !== null) validate(); } else next(); }
  });

  window.addEventListener("DOMContentLoaded", function () {
    el("btn-start").onclick = startFromSelection;
    el("btn-validate").onclick = validate;
    el("btn-next").onclick = next;
    el("btn-home").onclick = function () { show("home"); };
    el("btn-restart").onclick = function () { show("home"); };
    populateCourses();
    show("home");
  });
})();

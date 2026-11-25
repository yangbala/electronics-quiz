(() => {
  const { chapters, sources, questions } = questionBank;
  const main = document.querySelector("main");
  const view = document.body.dataset.view;
  const prefix = view === "chapter" ? "../" : "";
  const query = new URLSearchParams(location.search);
  const label = q => `${sources[q.source].year} 年第 ${q.number} 題`;
  const escape = value => String(value).replace(/[&<>"']/g, char =>
    ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" })[char]);
  const link = (id, from = "") => `${prefix}quiz.html?id=${encodeURIComponent(id)}${from ? "&from=" + encodeURIComponent(from) : ""}`;
  const card = (href, title, detail, key = "") => `<article class="entry">${key ? `<strong>${escape(key)}</strong>` : ""}<div><h2><a href="${href}">${escape(title)}</a></h2><small>${escape(detail)}</small></div></article>`;

  function rows(list, from) {
    return list.map(q => card(link(q.id, from), q.topic || label(q),
      `${sources[q.source].title}・原卷第 ${q.page} 頁`, q.id)).join("");
  }

  function chapterView() {
    const chapter = document.body.dataset.chapter;
    const title = chapters[chapter];
    const list = questions.filter(q => String(q.chapter) === chapter);
    document.title = `第 ${chapter} 章 ${title}｜電子學題庫`;
    main.innerHTML = `<a class="back" href="../index.html">← 題庫首頁</a><h1>第 ${chapter} 章　${title}</h1><p>${list.length} 題・等級一選擇題</p>
      <section aria-label="章節試題">${list.length ? rows(list, "chapter-" + chapter) : '<p>本章目前沒有歸類的統測試題。</p>'}</section>`;
  }

  function papersView() {
    const scope = query.get("paper");
    const source = Object.hasOwn(sources, scope) ? sources[scope] : null;
    if (source) {
      const list = questions.filter(q => q.source === scope);
      main.innerHTML = `<a class="back" href="exams-108-110.html">← 返回年度試卷</a><h1>${source.year} 年・${source.title}</h1>
        <p>${list.length} 題・<a href="assets/exam-sources/${scope}.pdf">試題本</a>・<a href="assets/exam-sources/${scope}-answers.pdf">公告答案</a></p>
        <section aria-label="試卷題目">${rows(list, scope)}</section>`;
      return;
    }
    const labs = query.get("collection") === "lab";
    const list = labs ? questions.filter(q => q.lab) : [];
    main.innerHTML = `<a class="back" href="index.html">← 題庫首頁</a><h1>${labs ? "電子學實習" : "108–110 年年度試卷"}</h1>
      <p>${labs ? list.length + " 道電子學實習題" : "九份試卷共 450 題。專業一由電機類與資電類共用。"}</p>
      <section aria-label="${labs ? "實習題目" : "年度試卷"}">${labs ? rows(list, "lab") : Object.entries(sources)
        .filter(([, paper]) => paper.year <= 110)
        .map(([id, paper]) => card("exams-108-110.html?paper=" + id, paper.title, "50 題", paper.year + " 年")).join("")}</section>`;
  }

  function homeView() {
    main.innerHTML = `<h1>統測電子學題庫</h1><p>${questions.length} 題・等級一選擇題</p>
      <section aria-label="題庫入口">
        ${card("exams-108-110.html", "108–110 年年度試卷", "電機類、資電類・九份試卷共 450 題")}
        ${card("exams-108-110.html?collection=lab", "電子學實習", "108–110 年兩類專業二・81 題")}
      </section>
      <h2>依滄海《微電子學》第八版中文版章節練習</h2>
      <section aria-label="Smith 教材章節">${Object.entries(chapters).map(([number, title]) =>
        card("chapters/chapter-" + number + ".html", title, questions.filter(q => String(q.chapter) === number).length + " 題", "第 " + number + " 章")).join("")}</section>
      <p><a href="https://eshop.tsanghai.com.tw/products/ee0490cset">查閱滄海中文第八版目錄</a></p>`;
  }

  function quizView() {
    const id = query.get("id") || (query.has("question") ? "111-" + query.get("question") : "");
    const q = questions.find(item => item.id === id);
    if (!q) {
      main.innerHTML = '<h1>選擇一道試題</h1><p><a href="index.html">前往題庫首頁</a></p>';
      return;
    }
    const from = query.get("from");
    let list = questions.filter(item => item.source === q.source);
    let back = "exams-108-110.html?paper=" + q.source;
    if (from === "lab" && q.lab) {
      list = questions.filter(item => item.lab);
      back = "exams-108-110.html?collection=lab";
    } else if (q.chapter && (from === "chapter-" + q.chapter || (!from && sources[q.source].year >= 111))) {
      list = questions.filter(item => item.chapter === q.chapter);
      back = "chapters/chapter-" + q.chapter + ".html";
    }
    const position = list.findIndex(item => item.id === q.id);
    const ref = "assets/exam-sources/" + q.source;
    document.title = label(q) + "｜電子學題庫";
    const preview = `${ref}-p${q.page}.webp`;
    main.innerHTML = `<a class="back" href="${back}">← 返回題目列表</a>
      <h1>${label(q)}</h1><p>${sources[q.source].title}・等級一${q.chapter ? "・第 " + q.chapter + " 章 " + chapters[q.chapter] : ""}</p>
      ${q.topic ? `<p>${escape(q.topic)}</p>` : ""}
      <article class="paper"><p>請看原卷第 ${q.page} 頁的第 ${q.number} 題。跨頁題及共用題幹可在試題本查看。</p>
        <a href="${ref}.pdf#page=${q.page}" target="_blank" rel="noopener">開啟原始試題本第 ${q.page} 頁</a>
        <img src="${preview}" alt="${label(q)}所在的官方試卷第 ${q.page} 頁">
      </article>
      <form aria-label="等級一選擇題">
        <fieldset><legend>選擇答案</legend><div class="choices">${[..."ABCD"].map(letter =>
          `<label><input type="radio" name="choice" value="${letter}" required> ${letter}</label>`).join("")}</div></fieldset>
        <button type="submit">檢查答案</button> <button type="reset">重設</button>
        <p class="feedback" role="status"></p><p class="practice-stats"></p>
      </form>
      <nav class="pagination" aria-label="相鄰試題">
        ${position > 0 ? `<a href="${link(list[position - 1].id, from)}">← 上一題</a>` : ""}
        ${position + 1 < list.length ? `<a href="${link(list[position + 1].id, from)}">下一題 →</a>` : ""}
      </nav><p><a href="${ref}-answers.pdf" target="_blank" rel="noopener">技專校院入學測驗中心公告答案</a></p>`;
    const form = main.querySelector("form");
    const feedback = form.querySelector(".feedback");
    const key = "electronicsQuizStatsV1";
    const practiceStats = form.querySelector(".practice-stats");
    function renderStats() {
      try {
        const { attempts = [] } = JSON.parse(localStorage.getItem(key)) || {};
        const singleChoice = attempts.filter(attempt => attempt.level === 1 && attempt.total === 1);
        if (!singleChoice.length) return;
        const correct = singleChoice.reduce((sum, attempt) => sum + attempt.right, 0);
        practiceStats.textContent = `等級一累計 ${singleChoice.length} 次，答對率 ${Math.round(correct / singleChoice.length * 100)}%。`;
      } catch { practiceStats.textContent = ""; }
    }
    renderStats();
    form.addEventListener("submit", event => {
      event.preventDefault();
      const choice = new FormData(form).get("choice");
      if (!choice) return;
      const isBonus = q.answer === "bonus";
      const correct = isBonus || q.answer.includes(choice);
      feedback.textContent = isBonus ? `你的答案是 ${choice}。本題依官方公告送分。`
        : `${correct ? "答對了" : "答錯了"}。你的答案是 ${choice}，正確答案是 ${q.answer.join("、")}。`;
      try {
        const stored = JSON.parse(localStorage.getItem(key)) || { attempts: [] };
        stored.attempts.push({ question: q.id, level: 1, total: 1, right: Number(correct), unitTotal: 0, unitRight: 0, time: Date.now() });
        localStorage.setItem(key, JSON.stringify(stored)); renderStats();
      } catch { /* Scoring still works when local storage is unavailable. */ }
    });
    form.addEventListener("reset", () => { feedback.textContent = ""; });
  }

  if (view === "chapter") chapterView();
  else if (view === "papers") papersView();
  else if (view === "quiz") quizView();
  else if (view === "legacy") {
    const year = query.get("year");
    const number = query.get("number");
    location.replace(year && number ? link(year + "-" + number) : "index.html");
  } else homeView();
})();

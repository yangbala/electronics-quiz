(() => {
  const id = new URLSearchParams(location.search).get("id");
  const questions = {
    "108-4": {
      topic: "橋式全波整流漣波率", answer: "B", choices: ["121%", "48%", "21%", "0%"],
      steps: [
        ["建立輸出波形", "理想橋式整流把負半週翻到正半週，輸出為 \\(V_m|\\sin(\\omega t)|\\)。"],
        ["求直流分量", "對半個正弦週期求平均，\\(V_{\\mathrm{DC}}=2V_m/\\pi\\)。"],
        ["求總有效值", "整流前後的瞬時電壓平方相同，\\(V_{\\mathrm{rms}}=V_m/\\sqrt{2}\\)。求 \\(V_{\\mathrm{rms}}/V_{\\mathrm{DC}}=\\pi/(2\\sqrt{2})\\)，取三位小數。", "1.111"],
        ["分離交流分量", "由 \\(V_{\\mathrm{AC,rms}}^2=V_{\\mathrm{rms}}^2-V_{\\mathrm{DC}}^2\\)，得到漣波比 \\(r=\\sqrt{\\pi^2/8-1}\\)。"],
        ["換算漣波百分率", "將未四捨五入的漣波比乘以 100 並取最接近的整數。", "48", "%"],
        ["反算驗證", "用 \\(\\sqrt{1+r^2}\\) 反算總有效值與直流分量之比。取 \\(r=0.48\\)，求所得比值並取兩位小數。", "1.11"]
      ]
    },
    "109-6": {
      topic: "振盪器的迴路增益", answer: "B", choices: ["75", "50", "48", "45"],
      steps: [
        ["建立迴路模型", String.raw`以放大器增益 \(A_v\) 和回授係數 \(\beta\) 描述一圈訊號傳遞。`],
        ["檢查相位", String.raw`欲在該頻率維持正回授，一圈總相移須為 \(2\pi\) 的整數倍。`],
        ["寫出穩態條件", String.raw`穩定振幅要求 \(|A_v\beta|=1\)，因此 \(|A_v|=1/|\beta|\)。`],
        ["確認回授係數", String.raw`將題示的回授係數代入倒數公式。`, "0.02"],
        ["求放大器增益", "取回授係數的倒數，得到所需增益。", "50"],
        ["反算一圈增益", String.raw`將所求增益代回，計算 \(50\times0.02\)。若結果為一，振幅每圈維持相同。`, "1"]
      ]
    },
    "109-17": {
      topic: "NPN 電晶體主動區電壓關係", answer: "C",
      choices: [String.raw`\(V_B>V_C>V_E\)`, String.raw`\(V_C>V_E>V_B\)`, String.raw`\(V_C>V_B>V_E\)`, String.raw`\(V_E>V_C>V_B\)`],
      steps: [
        ["建立接面模型", "NPN 有兩個 PN 接面。基極是 P 側，射極和集極是 N 側。"],
        ["辨認工作區", "正向主動區的射極接面順向偏壓，集極接面反向偏壓。"],
        ["比較基極與射極", String.raw`基射接面順向偏壓，\(V_B-V_E\) 為正。`, "正"],
        ["比較基極與集極", String.raw`基集接面反向偏壓，\(V_B-V_C\) 為負，電位較高的是哪一極？`, "集極"],
        ["合併關係", "依兩個接面的偏壓，把三個端點由高至低排列。"],
        ["反向驗證", String.raw`由 \(V_C>V_B>V_E\) 可反推出基集反偏及基射順偏。求 \(V_C-V_E\) 的符號。`, "正"]
      ]
    },
    "109-23": {
      topic: "運算放大器轉動率", answer: "B",
      choices: ["0.25 V/μs", "0.5 V/μs", "5 V/μs", "10 V/μs"],
      steps: [
        ["辨認量測區段", "取輸出方波的上升沿，使用題示起點、終點及經過時間。"],
        ["寫出定義", String.raw`轉動率是上升沿電壓變化率的大小，\(\mathrm{SR}=|\Delta v_o|/\Delta t\)。`],
        ["求電壓變化", String.raw`\(\Delta v_o=5-(-5)\)，以伏特表示。`, "10", "V"],
        ["求轉動率", String.raw`代入電壓差及 \(20\,\mu\mathrm{s}\) 的時間間隔。`, "0.5", "V/μs"],
        ["核對量綱", String.raw`伏特除以微秒為 \(\mathrm{V}/\mu\mathrm{s}\)，符合輸出變化率的量綱。`],
        ["反算終點", String.raw`用 \(-5\,\mathrm{V}+\mathrm{SR}\,\Delta t\) 反算輸出終點。`, "5", "V"]
      ]
    },
    "110-2": {
      topic: "矽二極體障壁電壓的溫度係數", answer: "A",
      choices: ["85 °C", "60 °C", "−45 °C", "−60 °C"],
      steps: [
        ["建立線性模型", String.raw`依題意，\(V_D(T)=V_D(T_0)+k(T-T_0)\)，其中 \(k=-2.5\,\mathrm{mV}/{}^\circ\mathrm{C}\)。`],
        ["求相對電壓變化", String.raw`\(\Delta V_D=0.55-0.70=-0.15\,\mathrm{V}\)，因此溫度上升。`],
        ["求溫升", String.raw`\(\Delta T=\Delta V_D/k=(-0.15)/(-0.0025)\)。`, "60", "°C"],
        ["求實際溫度", String.raw`把溫升加到題示基準 \(25\,{}^\circ\mathrm{C}\)。`, "85", "°C"],
        ["檢查正負號", "係數為負，較高的溫度應對應較低的障壁電壓，和題意一致。"],
        ["代回障壁電壓", String.raw`計算 \(0.70-0.0025(85-25)\) 以恢復題示電壓。`, "0.55", "V"]
      ]
    }
  };
  const question = questions[id];
  if (!question) return;
  document.querySelector("main").insertAdjacentHTML("afterbegin", '<p><a href="exams-108-110.html">返回 108–110 年題目索引</a></p>');

  const escape = value => value.replace(/[&<>"']/g, char => ({
    "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;"
  })[char]);
  const normalize = value => value.trim().toLowerCase()
    .replace(/[\s,]/g, "").replace(/−/g, "-").replace(/[µμ]/g, "u");
  const unitAliases = { V: ["v", "伏特"], "°C": ["°c", "℃", "攝氏度"], "V/μs": ["v/us", "伏特/微秒"], "%": ["%", "百分比"] };
  const blankCounts = { 2: 1, 3: 2, 4: 3 };
  const blankSteps = question.steps.flatMap((step, index) => step[2] ? [index] : []);
  const solution = reveal => {
    const visible = new Set([blankSteps[1], blankSteps[0], blankSteps[2]].slice(0, blankCounts[level] ?? 0));
    return `<div class="steps">${question.steps.map(([title, body, answer, unit], index) => {
      const field = !answer ? "" : !reveal && visible.has(index)
        ? `<span class="answerPair"><input class="blank" aria-label="步驟 ${index + 1} 答案" data-answer="${escape(answer)}">${unit
          ? `<input class="unitInput" aria-label="步驟 ${index + 1} 單位" data-unit="${escape(unit)}" placeholder="單位">`
          : '<span class="dimensionless">無單位</span>'}</span>`
        : `<strong>${escape(answer)}${unit ? " " + escape(unit) : ""}</strong>`;
      return `<div class="step"><b>${index + 1}. ${title}</b><br>${body}${field ? " " + field : ""}</div>`;
    }).join("")}</div>`;
  };
  content = () => level === 1
    ? `<div class="choices">${question.choices.map((choice, index) => `<button class="choice" data-value="${"ABCD"[index]}"><span>${"ABCD"[index]}</span><b>${choice}</b></button>`).join("")}</div>`
    : solution(false);

  const baseRender = render;
  render = () => {
    baseRender();
    const [year, number] = id.split("-");
    document.querySelector(".meta .tag:first-child").textContent = `${year} 年第 ${number} 題`;
    document.querySelector(".meta .tag:last-child").textContent = question.topic;
    const image = document.querySelector(".imageWrap img");
    image.src = `assets/exams-108-110/${id}.png`;
    image.alt = `${id} 原始試題切圖`;
    
  };
  document.getElementById("check").onclick = () => {
    if (level === 1) {
      const selected = document.querySelector(".choice.selected");
      if (!selected) return show(false, "請先選擇答案。");
      const correct = selected.dataset.value === question.answer;
      document.querySelectorAll(".choice").forEach(choice => {
        choice.classList.toggle("correct", choice.dataset.value === question.answer);
        choice.classList.toggle("wrong", choice === selected && !correct);
      });
      show(correct, `你的答案 ${selected.dataset.value}，正確答案 ${question.answer}。`);
      if (!document.getElementById("historical-solution")) {
        document.getElementById("answerArea").insertAdjacentHTML("beforeend", `<section id="historical-solution"><h3>完整解題</h3>${solution(true)}</section>`);
        typesetAnswerArea();
      }
      saveChapter5Attempt({ question: id, level, total: 1, right: Number(correct), unitTotal: 0, unitRight: 0 });
      return;
    }
    const values = [...document.querySelectorAll("#answerArea [data-answer]")];
    const units = [...document.querySelectorAll("#answerArea [data-unit]")];
    const feedback = [];
    const score = (fields, validate, key) => fields.filter(field => {
      const answer = field.dataset[key];
      const actual = normalize(field.value);
      const correct = actual !== "" && validate(actual, normalize(answer), answer);
      field.classList.toggle("good", correct);
      field.classList.toggle("bad", !correct);
      if (!correct) feedback.push(`${field.getAttribute("aria-label")}：你的答案 ${field.value.trim() || "未填"}，正解 ${answer}`);
      return correct;
    }).length;
    const right = score(values, (actual, expected) => actual === expected ||
      (Number.isFinite(Number(expected)) && Number(actual) === Number(expected)), "answer");
    const unitRight = score(units, (actual, expected, answer) =>
      actual === expected || unitAliases[answer].includes(actual), "unit");
    show(right === values.length && unitRight === units.length,
      `數值／文字 ${right}/${values.length}，單位 ${unitRight}/${units.length}。${feedback.join("；")}`);
    saveChapter5Attempt({ question: id, level, total: values.length, right, unitTotal: units.length, unitRight });
  };
  document.getElementById("clearStats").onclick = () => {
    if (confirm("確定要清除這台裝置上的學習統計嗎？")) {
      localStorage.removeItem(chapter5StatsKey);
      renderChapter5Stats();
    }
  };
  renderChapter5Stats();
  render();
})();

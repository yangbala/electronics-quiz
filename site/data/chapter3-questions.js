const chapter3Questions = {
  "112-27": {
    year: 112, number: 27, topic: "半導體材料與摻雜", answer: "C",
    choices: ["半導體因電位差產生載子移動而形成擴散電流", "外質半導體中電洞與自由電子的載子濃度相同", "P 型矽半導體是由本質矽半導體摻雜三價元素而成", "N 型半導體多數載子為自由電子，少數載子為電洞，帶負電位"],
    blanks: [
      {answer:"漂移電流|漂移", label:"①", why:"電場或電位差驅動載子定向移動，這種機制稱為漂移；擴散則由濃度梯度造成。"},
      {answer:"電中性|中性", label:"②", why:"摻雜只改變自由載子的比例；離化雜質與自由載子的總電荷仍互相平衡。"},
      {answer:"三價受體|三價元素|受體", label:"③", why:"三價原子少一個鍵結電子，形成受體能階並留下電洞，使矽成為 P 型。"},
      {answer:"電洞", label:"④", why:"N 型的少數載子是電洞；但材料整體不因此帶負電。"},
      {answer:"C|c", label:"⑤", why:"只有選項 C 同時符合摻雜價數、受體型雜質與 P 型材料的物理關係。"}
    ],
    blocks: [
      {title:"一、電路分析起手式（物理建模）", html:String.raw`本題雖無外接電路，仍先建立載子模型：本質半導體在熱平衡時 \(n=p=n_i\)；摻雜後由電荷中性與質量作用定律判斷多數、少數載子。電位差形成電場時，載子運動形成 {{0}}；濃度不均才形成擴散電流。`},
      {title:"二、核心電路定律推導（含鷹架填空與代數卸載）", html:String.raw`<b>步驟 1：建立基本定律</b><br>熱平衡時必須滿足整體 {{1}}：\[p+N_D^+=n+N_A^-\]且\[np=n_i^2\]<br><br><b>步驟 2：逐項完整判斷</b><br>(A) 電位差造成電場，對應漂移，不是擴散，因此錯誤。<br>(B) 外質半導體的多數與少數載子濃度通常不相同，因此錯誤。<br>(C) 矽摻入 {{2}} 後形成 P 型半導體。<br>(D) N 型多數載子為電子、少數載子為 {{3}}，但離化施體帶正電，與電子電荷互相平衡，材料仍為電中性。<br><br><b>步驟 3：工程簡化與近似</b><br>當受體完全離化且 \(N_A\gg n_i\) 時，可用 \(p\approx N_A\)、\(n\approx n_i^2/N_A\)；這是多數載子近似，不代表材料帶正電。<br><br><b>步驟 4：目標指標提煉</b><br>正確選項為 {{4}}。`},
      {title:"三、填空解答與思維導引（Teacher's Key）", key:true},
      {title:"四、自主遷移挑戰題（Faded Step to Independence）", html:String.raw`將三價硼改為五價磷，判斷半導體型別、多數載子與材料淨電荷。<br><b>第一步提示：</b>先寫出 \(p+N_D^+=n+N_A^-\)，再辨認磷屬於施體或受體。`}
    ],
    self:"為什麼 N 型材料有較多自由電子，整塊材料卻仍不帶負電？請用『離化施體』與『電荷中性』回答。"
  },
  "114-26": {
    year: 114, number: 26, topic: "摻雜與電中性", answer: "B",
    choices: ["矽摻雜砷，形成 P 型半導體", "N 型半導體為電中性，其多數載子為電子", "P 型半導體為正電性，其多數載子為電洞", "本質半導體摻雜三價元素，形成 N 型半導體"],
    blanks: [
      {answer:"五價|五價元素", label:"①", why:"砷有五個價電子，在矽晶格中多出一個容易游離的電子，屬於施體。"},
      {answer:"電子|自由電子", label:"②", why:"施體摻雜提高電子濃度，所以電子是 N 型的多數載子。"},
      {answer:"電中性|中性", label:"③", why:"自由載子與離化雜質電荷互相補償，N 型與 P 型材料宏觀上皆保持中性。"},
      {answer:"電洞", label:"④", why:"三價受體使價帶出現電洞，因此形成 P 型而非 N 型。"},
      {answer:"B|b", label:"⑤", why:"B 同時正確描述 N 型的電中性及其多數載子。"}
    ],
    blocks: [
      {title:"一、電路分析起手式（物理建模）", html:String.raw`以四價矽晶格為基準：摻入 {{0}} 施體會形成 N 型；摻入三價受體會形成 P 型。模型同時保留自由載子與離化雜質，避免把『多數載子的符號』誤當成『材料淨電荷』。`},
      {title:"二、核心電路定律推導（含鷹架填空與代數卸載）", html:String.raw`<b>步驟 1：建立基本定律</b><br>一般熱平衡電荷中性式為\[p+N_D^+=n+N_A^-\]N 型以 {{1}} 為多數載子，但材料仍保持 {{2}}。<br><br><b>步驟 2：逐項完整判斷</b><br>(A) 砷為五價施體，應形成 N 型，錯誤。<br>(B) N 型材料為電中性，多數載子為電子，正確。<br>(C) P 型多數載子雖為電洞，材料卻不是正電性，錯誤。<br>(D) 三價元素提供受體能階，使 {{3}} 成為多數載子並形成 P 型，錯誤。<br><br><b>步驟 3：工程簡化與近似</b><br>若施體完全離化、\(N_D\gg n_i\) 且無受體補償，則 \(n\approx N_D\)、\(p\approx n_i^2/N_D\)。這只近似載子濃度，不改變電中性。<br><br><b>步驟 4：目標指標提煉</b><br>正確選項為 {{4}}。`},
      {title:"三、填空解答與思維導引（Teacher's Key）", key:true},
      {title:"四、自主遷移挑戰題（Faded Step to Independence）", html:String.raw`一塊矽同時摻入 \(N_D=10^{16}\,\mathrm{cm^{-3}}\) 的施體與 \(N_A=2\times10^{15}\,\mathrm{cm^{-3}}\) 的受體，判斷材料型別與近似多數載子濃度。<br><b>第一步提示：</b>先比較 \(N_D\) 與 \(N_A\)，並從電荷中性式列出補償後的淨摻雜濃度。`}
    ],
    self:"為什麼 P 型的『P』不能解讀成整塊材料帶正電？請指出固定離子與自由載子如何平衡。"
  },
  "115-1": {
    year: 115, number: 1, topic: "原子結構與價電子", answer: "B",
    choices: ["一個原子中的電子數目為質子數目與中子數目之和", "原子最外層軌道上的電子稱為價電子", "失去電子的原子稱為負離子", "原子核中有質子故原子呈正電性"],
    blanks: [
      {answer:"質子數|質子數目", label:"①", why:"中性原子的電子數等於質子數；中子不帶電，不參與電荷平衡。"},
      {answer:"價電子", label:"②", why:"最外層電子直接參與化學鍵結，也決定半導體的摻雜行為。"},
      {answer:"正離子|陽離子", label:"③", why:"失去負電荷後，原子的淨電荷為正，因此成為正離子。"},
      {answer:"電子|電子電荷", label:"④", why:"原子核的正電荷由核外電子的負電荷抵消，中性原子不呈正電性。"},
      {answer:"B|b", label:"⑤", why:"選項 B 正確定義價電子；其餘選項皆違反電荷守恆或離子定義。"}
    ],
    blocks: [
      {title:"一、電路分析起手式（物理建模）", html:String.raw`先把原子分成帶正電的質子、電中性的中子與帶負電的電子。中性原子的控制關係為\[N_e={{0}}\]最外層軌道電子稱為 {{1}}，是判斷矽鍵結與摻雜效果的關鍵。`},
      {title:"二、核心電路定律推導（含鷹架填空與代數卸載）", html:String.raw`<b>步驟 1：建立電荷守恆</b><br>原子淨電荷為\[Q=(N_p-N_e)e\]中性時 \(Q=0\)，所以 \(N_e=N_p\)，與中子數無關。<br><br><b>步驟 2：逐項完整判斷</b><br>(A) 中性原子滿足電子數等於質子數，不是質子與中子之和，錯誤。<br>(B) 最外層軌道電子就是價電子，正確。<br>(C) 失去一個電子後，\(N_p-N_e=1\)，故形成 {{2}}，錯誤。<br>(D) 原子核雖含正電質子，核外 {{3}} 會抵消其電荷；中性原子不呈正電性。<br><br><b>步驟 3：工程簡化與近似</b><br>分析半導體鍵結時，內層電子視為束縛且不參與導電，聚焦於最外層價電子；這是模型簡化，不是把內層電子刪除。<br><br><b>步驟 4：目標指標提煉</b><br>正確選項為 {{4}}。`},
      {title:"三、填空解答與思維導引（Teacher's Key）", key:true},
      {title:"四、自主遷移挑戰題（Faded Step to Independence）", html:String.raw`一個中性矽原子失去兩個電子後，求其淨電荷並判斷離子種類。<br><b>第一步提示：</b>先由 \(Q=(N_p-N_e)e\) 寫出失去電子前後 \(N_p-N_e\) 的變化。`}
    ],
    self:"價電子為何比內層電子更能決定材料的鍵結與導電性？請從束縛強弱與能量需求說明。"
  }
};

(function activateChapter3(){
  const id=new URLSearchParams(location.search).get("id");
  const q=chapter3Questions[id];
  if(!q)return;
  const requestedLevel=Number(new URLSearchParams(location.search).get("level"));
  if([1,2,3,4].includes(requestedLevel))level=requestedLevel;
  const blankLimit=()=>({2:3,3:4,4:5}[level]||0);
  const normalize=value=>value.trim().replace(/\s+/g,"").toLowerCase();
  function scaffold(){
    let token=0;
    const limit=blankLimit();
    const replace=html=>html.replace(/\{\{(\d+)\}\}/g,(_,index)=>{
      const item=q.blanks[Number(index)],current=++token;
      if(current>limit)return `<strong>${item.answer.split("|")[0]}</strong>`;
      return `<span class="cltBlank"><span class="blankRef">${item.label}</span>[ <input class="blank wide" data-answer="${item.answer}" aria-label="填空 ${item.label}"> ]</span>`;
    });
    return `<div class="scaffold">${q.blocks.map(block=>{
      if(block.key)return `<section class="scaffoldBlock teacherKey" id="teacherKey" hidden><h3>${block.title}</h3><p>送出答案後顯示每一格的標準答案與物理線索。</p></section>`;
      return `<section class="scaffoldBlock"><h3>${block.title}</h3><div>${replace(block.html)}</div></section>`;
    }).join("")}</div>`;
  }
  content=function(){
    if(level===1)return `<div class="choices">${q.choices.map((choice,i)=>`<button class="choice" data-value="${"ABCD"[i]}"><span>${"ABCD"[i]}</span><b>${choice}</b></button>`).join("")}</div>`;
    return scaffold();
  };
  function showTeacherKey(){
    const key=document.getElementById("teacherKey");
    if(!key)return;
    key.hidden=false;
    key.innerHTML=`<h3>三、填空解答與思維導引（Teacher's Key）</h3><ol class="keyList">${q.blanks.slice(0,blankLimit()).map(item=>`<li><b>${item.label}【標準答案】：${item.answer.split("|")[0]}</b><br><span>【思維線索（Why）】：${item.why}</span></li>`).join("")}</ol><div class="selfPrompt"><b>電路物理觀念解析（Self-Explanation Prompt）</b><br>${q.self}</div>`;
    window.MathJax?.typesetPromise?.([key]);
  }
  const previousRender=render;
  function renderChapter3(){
    previousRender();
    const chapterGoals={
      1:["觀念辨識","從選項辨認半導體核心概念。","訓練目標：辨認基本名詞、材料型別與正確敘述。"],
      2:["少量填空","完整保留推理，只挖空 3 個核心物理關係。","訓練目標：在高度鷹架下辨認模型、守恆關係與關鍵結論。"],
      3:["中量填空","完整保留推理，增加為 4 個關鍵空格。","訓練目標：串聯摻雜、載子與電中性的因果關係。"],
      4:["大量填空","完整保留代數與逐項判斷，自行完成 5 個關鍵空格。","訓練目標：獨立完成物理建模、定律判斷、近似與結論提煉。"]
    };
    const [note,help,goal]=chapterGoals[level];
    document.getElementById("levelNote").textContent=note;
    document.getElementById("workTitle").textContent=`等級 ${level}・${note}`;
    document.getElementById("workHelp").textContent=help;
    document.getElementById("levelGoal").textContent=goal;
    document.querySelector(".meta .tag:first-child").textContent=`${q.year} 年第 ${q.number} 題`;
    document.querySelector(".meta .tag:last-child").textContent=q.topic;
    const img=document.querySelector(".imageWrap img");
    const localRoot="file:///C:/Users/Eli/.codex/visualizations/2026/08/13/019ffba4-80b5-7ed3-a9a4-ee902d86127c/";
    img.src=location.protocol==="file:"?`${localRoot}chapter3-${id}.png`:`assets/chapter3/${id}.png`;
    img.alt=`${id} 原始試題切圖`;
    const nav=document.getElementById("questionTabs");
    if(nav)nav.innerHTML=Object.keys(chapter3Questions).map(key=>`<button class="chapterQuestion ${key===id?"active":""}" onclick="location.href='?id=${key}'">${key}</button>`).join("");
  }
  render=renderChapter3;
  document.getElementById("check").onclick=()=>{
    if(level===1){
      const picked=document.querySelector(".choice.selected");
      if(!picked){show(false,"請先選擇一個答案。");return;}
      document.querySelectorAll(".choice").forEach(button=>{button.classList.toggle("correct",button.dataset.value===q.answer);button.classList.toggle("wrong",button===picked&&button.dataset.value!==q.answer)});
      const ok=picked.dataset.value===q.answer;
      show(ok,`${ok?"答對了":"答案不正確"}；正確答案是 ${q.answer}。進入等級 2 可練習物理建模與關鍵填空。`);
      saveAttempt({question:id,level,total:1,right:ok?1:0,unitTotal:0,unitRight:0});
      return;
    }
    const fields=[...document.querySelectorAll(".blank")];let right=0;
    fields.forEach(field=>{const accepted=field.dataset.answer.split("|").map(normalize);const ok=accepted.includes(normalize(field.value));field.classList.toggle("good",ok);field.classList.toggle("bad",!ok);right+=ok?1:0});
    const ok=right===fields.length;
    show(ok,`關鍵物理關係答對 ${right}/${fields.length} 格。${ok?"鷹架推導完成！":"紅色欄位請配合 Teacher's Key 檢查觀念。"}`);
    showTeacherKey();
    saveAttempt({question:id,level,total:fields.length,right,unitTotal:0,unitRight:0});
  };
  document.getElementById("reset").onclick=()=>renderChapter3();
  renderChapter3();
})();

(()=>{
const initialParams=new URLSearchParams(location.search);
const legacyIds=["111-27","111-28","111-29","111-30","111-43"];
if(!initialParams.has("question")&&!legacyIds.includes(initialParams.get("id")))return;
const moreQuestions = {
  28: { topic: "BJT 直流偏壓", answer: "D", choices: ["4.13", "3.24", "2.47", "1.55"], counts: [4, 8, 13], steps: [
    String.raw`<b>① 求基極電流</b><br>由 \(I_C=\beta I_B\)，得 \(I_B=\dfrac{I_C}{\beta}=\dfrac{[[2]]\,\mathrm{mA}}{[[100]]}=[[0.02]]\,\mathrm{mA}=20\,\mu\mathrm{A}\)。`,
    String.raw`<b>② 分壓網路的戴維寧等效</b><br>\(V_{TH}=20\times\dfrac{10}{40+10}=[[4]]\,\mathrm{V}\)，\(R_{TH}=40\parallel10=[[8]]\,\mathrm{k}\Omega\)。`,
    String.raw`<b>③ 求基極電壓</b><br>\(V_B=V_{TH}-I_BR_{TH}=4-(20\,\mu\mathrm{A})(8\,\mathrm{k}\Omega)=[[3.84]]\,\mathrm{V}\)。`,
    String.raw`<b>④ 求射極電壓與電流</b><br>\(V_E=V_B-V_{BE}=3.84-[[0.7]]=[[3.14]]\,\mathrm{V}\)，\(I_E=I_C+I_B=2+0.02=[[2.02]]\,\mathrm{mA}\)。`,
    String.raw`<b>⑤ 求射極電阻</b><br>\(R_E=\dfrac{V_E}{I_E}=\dfrac{3.14}{2.02}=[[1.55]]\,\mathrm{k}\Omega\)，故選 D。`,
    String.raw`<b>⑥ 代回驗算</b><br>\(I_ER_E\approx(2.02\,\mathrm{mA})(1.55\,\mathrm{k}\Omega)=[[3.13]]\,\mathrm{V}\)，\(V_B\approx3.13+0.7=[[3.83]]\,\mathrm{V}\)，與 \(3.84\,\mathrm{V}\) 的差異來自四捨五入，答案正確。`
  ]},
  29: { topic: "BJT 小信號模型", answer: "A", choices: ["25", "50", "75", "100"], counts: [4, 7, 9], steps: [
    String.raw`<b>① 合併射極交流負載</b><br>\(R'_E=4\parallel4=[[2]]\,\mathrm{k}\Omega\)。`,
    String.raw`<b>② 求基極看入電阻</b><br>\(R_{in,B}=r_\pi+(\beta+1)R'_E=1+(99+1)\times2=[[201]]\,\mathrm{k}\Omega\)。`,
    String.raw`<b>③ 以基極電流表示輸入電壓</b><br>\(v_i=i_bR_{in,B}=[[201]]\,\mathrm{k}\Omega\,i_b\)。`,
    String.raw`<b>④ 求輸入總電流</b><br>\(i_i=i_b+\dfrac{v_i}{200\,\mathrm{k}\Omega}=i_b+\dfrac{201}{200}i_b=[[2.005]]i_b\)。`,
    String.raw`<b>⑤ 求負載輸出電流</b><br>射極總電流 \((\beta+1)i_b=[[100]]i_b\)，由兩個相同的 \(4\,\mathrm{k}\Omega\) 均分，故 \(i_o=[[50]]i_b\)。`,
    String.raw`<b>⑥ 求增益並驗算</b><br>\(\dfrac{i_o}{i_i}=\dfrac{50}{2.005}=[[24.94]]\approx[[25]]\)，故選 A；代回得 \(i_o\approx25i_i\)，答案正確。`
  ]},
  30: { topic: "BJT 電壓增益", answer: "C", choices: ["-135", "-115", "-95", "-75"], counts: [4, 7, 10], steps: [
    String.raw`<b>① 分壓網路的戴維寧等效</b><br>\(V_{TH}=12\times\dfrac{5.7}{6.3+5.7}=[[5.7]]\,\mathrm{V}\)，\(R_{TH}=6.3\parallel5.7=[[2.99]]\,\mathrm{k}\Omega\)。`,
    String.raw`<b>② 求基極電流</b><br>\(I_B=\dfrac{V_{TH}-V_{BE}}{R_{TH}+(\beta+1)R_E}=\dfrac{5.7-[[0.7]]}{2.99+101\times4}=[[0.01229]]\,\mathrm{mA}\)。`,
    String.raw`<b>③ 求集極電流</b><br>\(I_C=\beta I_B=100\times0.01229=[[1.229]]\,\mathrm{mA}\)。`,
    String.raw`<b>④ 求轉移電導</b><br>\(g_m=\dfrac{I_C}{V_T}=\dfrac{1.229\,\mathrm{mA}}{[[26]]\,\mathrm{mV}}=[[0.0473]]\,\mathrm{S}\)。`,
    String.raw`<b>⑤ 求交流電壓增益</b><br>射極電阻被旁路，\(A_v\approx-g_mR_C=-(0.0473)([[2000]])=[[−94.6]]\approx-95\)，故選 C。`,
    String.raw`<b>⑥ 工作區驗算</b><br>\(V_E\approx(1.241\,\mathrm{mA})(4\,\mathrm{k}\Omega)=[[4.96]]\,\mathrm{V}\)，\(V_C=12-(1.229\,\mathrm{mA})(2\,\mathrm{k}\Omega)=[[9.54]]\,\mathrm{V}\)，\(V_{CE}\approx[[4.58]]\,\mathrm{V}\)，位於主動區，答案正確。`
  ]},
  31: { topic: "串級放大器", answer: "C", choices: ["80", "1000", "10000", "16000"], counts: [3, 5, 7], steps: [
    String.raw`<b>① dB 增益相加</b><br>\(A_{vT}(\mathrm{dB})=20+40+20=[[80]]\,\mathrm{dB}\)。`,
    String.raw`<b>② 由 dB 轉回線性增益</b><br>\(A_{vT}(\mathrm{dB})=20\log_{10}|A_{vT}|\)，故 \(80=20\log_{10}|A_{vT}|\)。`,
    String.raw`<b>③ 解對數</b><br>\(\log_{10}|A_{vT}|=\dfrac{80}{[[20]]}=[[4]]\)。`,
    String.raw`<b>④ 求總電壓增益</b><br>\(|A_{vT}|=10^4=[[10000]]\)，故選 C。`,
    String.raw`<b>⑤ 各級轉為線性增益</b><br>\(20\,\mathrm{dB}\to10^{20/20}=[[10]]\)，\(40\,\mathrm{dB}\to10^{40/20}=[[100]]\)。`,
    String.raw`<b>⑥ 相乘驗算</b><br>\(10\times100\times10=[[10000]]\)，與 dB 相加結果一致，答案正確。`
  ]},
  43: { topic: "橋式整流電容濾波、漣波率", answer: "B", choices: ["12%", "8%", "5%", "2%"], counts: [3, 6, 9], steps: [
    String.raw`<b>① 讀取漣波上下限</b><br>輸出直流電壓的最大值為 \(V_{\max}=[[16]]\,\mathrm{V}\)，最小值為 \(V_{\min}=[[12]]\,\mathrm{V}\)。`,
    String.raw`<b>② 求直流平均值</b><br>近似鋸齒波以中點作為直流分量：\(V_{DC}=\dfrac{V_{\max}+V_{\min}}{2}=\dfrac{16+12}{2}=[[14]]\,\mathrm{V}\)。`,
    String.raw`<b>③ 求峰對峰漣波電壓</b><br>\(V_{r(pp)}=V_{\max}-V_{\min}=16-12=[[4]]\,\mathrm{V}\)。`,
    String.raw`<b>④ 求漣波的有效值</b><br>鋸齒波（近似三角波）的交流有效值為 \(V_{r(rms)}=\dfrac{V_{r(pp)}}{2\sqrt{3}}=\dfrac{4}{2\sqrt{3}}\approx[[1.155]]\,\mathrm{V}\)。`,
    String.raw`<b>⑤ 求漣波百分率</b><br>\(r=\dfrac{V_{r(rms)}}{V_{DC}}\times100\%=\dfrac{1.155}{14}\times100\%\approx[[8.25]]\%\approx[[8]]\%\)，故選 B。`,
    String.raw`<b>⑥ 代回驗算</b><br>以 \(V_{DC}\pm\dfrac{V_{r(pp)}}{2}\) 重建上下限：\(14+2=[[16]]\,\mathrm{V}\)，\(14-2=[[12]]\,\mathrm{V}\)，與題目相符。`
  ]}
};
const legacyChapter4CLT={
  27:{
    blanks:[
      {a:"V_O=V_Z|Vo=Vz|6V",label:"①",why:"齊納在崩潰穩壓區時，與負載並聯的輸出節點被箝在齊納電壓。"},
      {a:"I_S=I_Z+I_L|Is=Iz+Il",label:"②",why:"串聯電阻電流在輸出節點分流成齊納電流與負載電流，這是節點 KCL。"},
      {a:"I_Z=I_{ZK}|Iz=Izk|1mA",label:"③",why:"負載電阻最小時負載電流最大，臨界穩壓條件是齊納仍保有膝點電流。"},
      {a:"I_{L(max)}=I_S-I_{ZK}|ILmax=Is-Izk",label:"④",why:"由輸出節點 KCL 解出最大可供負載的電流，不能把全部串聯電流都交給負載。"},
      {a:"1.2kΩ|1.2kohm|1200Ω",label:"⑤",why:String.raw`由 \(R_L=V_O/I_L\) 得到最小負載電阻，並代回確認齊納電流恰為 1 mA。`}
    ],
    model:String.raw`忽略齊納內阻，並假設二極體仍在崩潰穩壓區，因此 {{0}}。輸出節點的核心電流關係為 {{1}}。`,
    derivation:String.raw`<b>步驟 1：求串聯支路電流</b>
\[V_{R_S}=V_S-V_Z=12-6=6\,\mathrm{V}\]
\[I_S=\frac{V_{R_S}}{R_S}=\frac{6\,\mathrm{V}}{1\,\mathrm{k}\Omega}=6\,\mathrm{mA}\]
<b>步驟 2：建立最小負載電阻的邊界</b><br>當 \(R_L\) 最小時，\(I_L\) 最大；為維持穩壓，臨界條件取 {{2}}。由 KCL 得 {{3}}。
\[I_{L(\max)}=6-1=5\,\mathrm{mA}\]
<b>步驟 3：完整代入</b>
\[R_{L(\min)}=\frac{V_O}{I_{L(\max)}}\]
\[R_{L(\min)}=\frac{6\,\mathrm{V}}{5\,\mathrm{mA}}=1.2\,\mathrm{k}\Omega\]
<b>步驟 4：目標指標與代回驗算</b><br>{{4}}，故選 D。
\[I_L=\frac{6\,\mathrm{V}}{1.2\,\mathrm{k}\Omega}=5\,\mathrm{mA}\]
\[I_Z=I_S-I_L=6-5=1\,\mathrm{mA}\]
\[I_{ZK}\le I_Z\le I_{ZM}\quad\Rightarrow\quad1\le1\le16\,\mathrm{mA}\]`,
    self:"為什麼求最小負載電阻時，齊納電流不能設為零？請說明膝點電流在維持穩壓上的意義。",
    challenge:String.raw`若 \(R_S\) 改為 \(1.5\,\mathrm{k}\Omega\)，其他條件不變，重新求 \(R_{L(\min)}\)。<br><b>第一步提示：</b>先以新的 \(R_S\) 重算串聯電流 \(I_S\)。`
  },
  43:{
    blanks:[
      {a:"V_{DC}=(V_{max}+V_{min})/2|VDC=(Vmax+Vmin)/2",label:"①",why:"近似鋸齒漣波以最大、最小值的中點作為直流分量。"},
      {a:"V_{r(pp)}=V_{max}-V_{min}|Vrpp=Vmax-Vmin",label:"②",why:"峰對峰漣波定義就是輸出波形最大值與最小值之差。"},
      {a:"V_{r(rms)}=V_{r(pp)}/(2sqrt(3))|Vrrms=Vrpp/(2√3)",label:"③",why:String.raw`零平均三角波若峰對峰值為 \(V_{r(pp)}\)，其峰值為一半，有效值再除以 \(\sqrt3\)。`},
      {a:"r=V_{r(rms)}/V_{DC}|r=Vrrms/VDC",label:"④",why:"漣波率是交流漣波有效值相對於直流分量的比值。"},
      {a:"8.25%|8%|0.0825",label:"⑤",why:"計算結果約 8.25%，依選項取約 8%，對應 B。"}
    ],
    model:String.raw`把輸出分解為直流分量與零平均交流漣波。題目說明漣波近似鋸齒波，可用三角波有效值模型；直流分量近似為 {{0}}。`,
    derivation:String.raw`<b>步驟 1：求直流分量與峰對峰漣波</b><br>峰對峰定義為 {{1}}。
\[V_{DC}=\frac{16+12}{2}=14\,\mathrm{V}\]
\[V_{r(pp)}=16-12=4\,\mathrm{V}\]
<b>步驟 2：將峰對峰值換成交流有效值</b><br>鋸齒波近似三角波時使用 {{2}}。
\[V_{r(rms)}=\frac{4}{2\sqrt3}=1.155\,\mathrm{V}\]
<b>步驟 3：建立漣波率</b><br>核心定義為 {{3}}。
\[r=\frac{1.155}{14}\times100\%=8.25\%\]
<b>步驟 4：目標指標與波形驗算</b><br>{{4}}，約為選項 B 的 \(8\%\)。以直流值加減半個峰對峰值重建：
\[14+\frac42=16\,\mathrm{V},\qquad14-\frac42=12\,\mathrm{V}\]
與題目上下限一致。`,
    self:"為什麼漣波率的分子使用交流有效值，而不是直接使用峰對峰值 4 V？請區分兩種波形量的定義。",
    challenge:String.raw`若波形上下限改為 \(15\,\mathrm{V}\) 與 \(13\,\mathrm{V}\)，仍近似三角漣波，求新的漣波百分率。<br><b>第一步提示：</b>先分別計算 \(V_{DC}\) 與 \(V_{r(pp)}\)。`
  }
};
const params=new URLSearchParams(location.search);
const idAlias={"111-27":27,"111-28":28,"111-29":29,"111-30":30,"111-43":43};
const requestedQuestion=idAlias[params.get("id")]||Number(params.get("question"));
let selectedQuestion=[27,28,29,30,31,43].includes(requestedQuestion)?requestedQuestion:27;
const requestedLevel=Number(params.get("level"));
if([1,2,3,4].includes(requestedLevel))level=requestedLevel;
const baseContent = content;
const originalContent = () => baseContent().replace(
  `\\dfrac{\\) ${input("d", "6")} \\(\\mathrm{V}}`,
  `\\dfrac{6\\,\\mathrm{V}}`
);
function otherContent(q) {
  if (level === 1) return `<div class="choices">${q.choices.map((v,i)=>{const k="ABCD"[i];return `<button class="choice" data-value="${k}"><span>${k}</span><b>\(${v}\)</b></button>`}).join("")}</div>`;
  let token = 0, limit = q.counts[level-2];
  const fillStep = step => step.replace(/\[\[(.*?)\]\]/g, (marker, answer, offset) => {
    const prefix = step.slice(0, offset);
    let braces = 0;
    for (const char of prefix) {
      if (char === "{") braces++;
      if (char === "}") braces--;
    }
    // HTML inputs may only be inserted at a complete LaTeX boundary.
    // A marker inside an unfinished \dfrac, \sqrt, subscript, etc. stays literal.
    if (braces !== 0) return answer;
    token++;
    return token <= limit ? `\\) ${input(`q${selectedQuestion}x${token}`,answer)} \\(` : answer;
  });
  return `<div class="steps">${q.steps.map(step=>`<div class="step">${fillStep(step)}</div>`).join("")}</div>`;
}
const cltLimit=()=>({2:3,3:4,4:5}[level]||0);
const cltMathContext=(html,offset)=>{const before=html.slice(0,offset);const inline=(before.match(/\\\(/g)||[]).length>(before.match(/\\\)/g)||[]).length;const display=(before.match(/\\\[/g)||[]).length>(before.match(/\\\]/g)||[]).length;return inline?"inline":display?"display":null};
function cltReplace(html,q){return html.replace(/\{\{(\d+)\}\}/g,(_,i,offset)=>{const n=Number(i),item=q.blanks[n];const markup=n>=cltLimit()?`<strong>\(${item.a.split("|")[0]}\)</strong>`:`<span class="cltBlank"><span class="blankRef">${item.label}</span>[ <input class="blank wide" data-answer="${item.a}" aria-label="填空 ${item.label}" autocomplete="off"> ]</span>`;const context=cltMathContext(html,offset);return context==="inline"?`\)${markup}\(`:context==="display"?`\]${markup}\[` : markup})}
function cltContent(q){return `<div class="scaffold"><section class="scaffoldBlock"><h3>一、電路分析起手式（物理建模）</h3><div>${cltReplace(q.model,q)}</div></section><section class="scaffoldBlock"><h3>二、核心電路定律推導（鷹架填空＋代數卸載）</h3><div>${cltReplace(q.derivation,q)}</div></section><section class="scaffoldBlock teacherKey" id="teacherKey" hidden></section><section class="scaffoldBlock"><h3>四、自主遷移挑戰題（Faded Step to Independence）</h3><div>${q.challenge}</div></section></div>`}
function showLegacyTeacherKey(q){const key=document.getElementById("teacherKey");if(!key)return;key.hidden=false;key.innerHTML=`<h3>三、填空解答與思維導引（Teacher's Key）</h3><ol class="keyList">${q.blanks.slice(0,cltLimit()).map(item=>`<li><b>${item.label}【標準答案】：\\(${item.a.split("|")[0]}\\)</b><br><span>【思維線索（Why）】：${item.why}</span></li>`).join("")}</ol><div class="selfPrompt"><b>電路物理觀念解析（Self-Explanation Prompt）</b><br>${q.self}</div>`;window.MathJax?.typesetPromise?.([key])}
content = function(){const clt=legacyChapter4CLT[selectedQuestion];if(level>1&&clt)return cltContent(clt);return selectedQuestion === 27 ? originalContent() : otherContent(moreQuestions[selectedQuestion]); };
const originalRender = render;
render = function(){
  originalRender();
  document.getElementById("levelGoal").textContent = levels[level-1].goal;
  const q = moreQuestions[selectedQuestion];
  document.querySelector(".meta .tag:first-child").textContent = `111 年第 ${selectedQuestion} 題`;
  document.querySelector(".meta .tag:last-child").textContent = q ? q.topic : "稽納二極體";
  const img = document.querySelector(".imageWrap img");
  const localRoot="file:///C:/Users/Eli/.codex/visualizations/2026/08/13/019ffba4-80b5-7ed3-a9a4-ee902d86127c/";
  img.src = location.protocol==="file:"
    ? (selectedQuestion===43?`${localRoot}chapter4_questions/111-43.png`:`${localRoot}q${selectedQuestion}.jpg`)
    : (selectedQuestion===43?"assets/chapter4/111-43.png":`assets/questions/q${selectedQuestion}.jpg`);
  img.alt = `第 ${selectedQuestion} 題原始試題切圖`;
  const nav = document.getElementById("questionTabs");
  if (nav) nav.innerHTML = [27,28,29,30,31,43].map(n=>`<button style="margin:0 8px 12px 0;padding:9px 14px;border:1px solid #dce3e8;border-radius:9px;cursor:pointer;${n===selectedQuestion?'color:#fff;background:#1764d7;':''}" data-question="${n}">第 ${n} 題</button>`).join("");
  nav?.querySelectorAll("button").forEach(b=>b.onclick=()=>{selectedQuestion=Number(b.dataset.question);render()});
  if(!(level>1&&legacyChapter4CLT[selectedQuestion]))decorateUnitInputs();
  renderStats();
  typesetAnswerArea();
};
const unitPlans={
  27:{2:["V","mA","mA","kΩ"],3:["V","mA","V","mA","mA","kΩ","mA"],4:["V","kΩ","V","mA","V","V","V","V","mA","mA","mA","mA","kΩ","mA"]},
  28:["mA","V","kΩ","V","V","mA","kΩ","V","V"],
  29:["kΩ","kΩ","kΩ",null,null,null,null,null],
  30:["V","kΩ","mA","mA","S","Ω",null,"V","V","V"],
  31:["dB",null,null,null,null,null]
  ,43:["V","V","V","V","V","%","%","V","V"]
};
function unitsForCurrent(){const plan=unitPlans[selectedQuestion];return selectedQuestion===27?(plan[level]||[]):plan||[]}
function decorateUnitInputs(){
  if(level===1)return;
  const units=unitsForCurrent();
  document.querySelectorAll(".blank").forEach((field,i)=>{
    const expected=units[i];
    const unitLatex={V:String.raw`\(\mathrm{V}\)`,mA:String.raw`\(\mathrm{mA}\)`,"kΩ":String.raw`\(\mathrm{k}\Omega\)`,Ω:String.raw`\(\Omega\)`,S:String.raw`\(\mathrm{S}\)`,dB:String.raw`\(\mathrm{dB}\)`}[expected];
    const next=field.nextSibling;
    if(unitLatex&&next?.nodeType===Node.TEXT_NODE){
      const spacedUnit=unitLatex.replace(String.raw`\mathrm`,String.raw`\,\mathrm`).replace(String.raw`\Omega`,String.raw`\,\Omega`);
      next.nodeValue=next.nodeValue.replace(spacedUnit,"").replace(unitLatex,"");
    }
    const ref=document.createElement("span");
    ref.className="blankRef";
    ref.textContent=`第 ${i+1} 格`;
    ref.setAttribute("aria-hidden","true");
    field.parentNode.insertBefore(ref,field);
    const step=field.closest(".step");
    let tray=step.querySelector(".stepAnswers");
    if(!tray){tray=document.createElement("div");tray.className="stepAnswers";step.appendChild(tray)}
    const item=document.createElement("div");
    item.className=`answerItem ${expected?"":"noUnit"}`;
    item.innerHTML=`<label for="${field.id}">第 ${i+1} 格作答</label>`;
    tray.appendChild(item);
    field.placeholder="數值";
    item.appendChild(field);
    item.insertAdjacentHTML("beforeend",expected?`<input class="unitInput" data-unit="${expected}" aria-label="第 ${i+1} 格單位" placeholder="${expected}">`:`<span class="dimensionless">無單位</span>`);
  });
}
function normalizedValue(value){return value.trim().replace(/,/g,"").replace(/−/g,"-")}
function normalizedUnit(value){return value.trim().replace(/Ｋ/g,"k").replace(/ｋ/g,"k").replace(/Ω/g,"Ω").replace(/ohms?/gi,"Ω").replace(/kohms?/gi,"kΩ").replace(/μ/g,"µ").replace(/\s/g,"").toLowerCase()}
function unitOK(value,expected){const aliases={"v":["v","伏特"],"ma":["ma","毫安","毫安培"],"kω":["kω","kΩ".toLowerCase(),"千歐","千歐姆"],"ω":["ω","Ω".toLowerCase(),"歐","歐姆"],"s":["s","西門子"],"db":["db","分貝"]};return (aliases[expected.toLowerCase()]||[expected.toLowerCase()]).includes(normalizedUnit(value))}
const statsKey="electronicsQuizStatsV1";
function loadStats(){try{return JSON.parse(localStorage.getItem(statsKey))||{attempts:[]}}catch{return{attempts:[]}}}
function saveAttempt(data){const stats=loadStats();stats.attempts.push({...data,time:Date.now()});localStorage.setItem(statsKey,JSON.stringify(stats));renderStats()}
function renderStats(){
  const host=document.getElementById("statsContent");if(!host)return;const a=loadStats().attempts;
  if(!a.length){host.innerHTML='<div class="advice">完成一次作答後，這裡會分析數值、單位與各等級表現。</div>';return}
  const total=a.reduce((s,x)=>s+x.total,0),right=a.reduce((s,x)=>s+x.right,0),ut=a.reduce((s,x)=>s+x.unitTotal,0),ur=a.reduce((s,x)=>s+x.unitRight,0);
  const pct=(n,d)=>d?Math.round(n/d*100)+"%":"—";const byLevel=[1,2,3,4].map(n=>{const rows=a.filter(x=>x.level===n);return pct(rows.reduce((s,x)=>s+x.right,0),rows.reduce((s,x)=>s+x.total,0))});
  let advice="目前數值與單位都很穩定，可以挑戰更高等級。";if(ut&&ur/ut<.8)advice="單位正確率較低：下一輪請先判斷物理量，再寫 V、mA、kΩ、S 或 dB。";else if(total&&right/total<.8)advice="計算正確率需要加強：建議降低一級，逐步確認公式代入與正負號。";
  host.innerHTML=`<div class="statsGrid"><div class="metric"><strong>${a.length}</strong><span>作答次數</span></div><div class="metric"><strong>${pct(right,total)}</strong><span>數值／選項正確率</span></div><div class="metric"><strong>${pct(ur,ut)}</strong><span>單位正確率</span></div><div class="metric"><strong>${byLevel.map((v,i)=>`L${i+1} ${v}`).join(" · ")}</strong><span>各等級表現</span></div></div><div class="advice"><b>個人化建議：</b>${advice}</div>`;
}
document.getElementById("check").onclick=()=>{
  if(level===1){
    const picked=document.querySelector(".choice.selected"),correct=selectedQuestion===27?"D":moreQuestions[selectedQuestion].answer;
    if(!picked){show(false,"請先選擇答案。");return}
    document.querySelectorAll(".choice").forEach(b=>{b.classList.toggle("correct",b.dataset.value===correct);b.classList.toggle("wrong",b===picked&&b.dataset.value!==correct)});
    const ok=picked.dataset.value===correct;show(ok,`${ok?"答對了":"這題答錯了"}。你的答案：${picked.dataset.value}；正確答案：${correct}。${ok?"已掌握此題型辨識。":"請展開計算層級，確認觀念與關鍵公式。"}`);saveAttempt({question:selectedQuestion,level,total:1,right:ok?1:0,unitTotal:0,unitRight:0});return;
  }
  const clt=legacyChapter4CLT[selectedQuestion];
  if(clt){
    const fields=[...document.querySelectorAll(".blank")];let right=0;
    const normalize=s=>s.trim().replace(/\s+/g,"").replace(/[ΩΩ]/g,"ohm").replace(/µ/g,"u").toLowerCase();
    fields.forEach(f=>{const ok=f.dataset.answer.split("|").map(normalize).includes(normalize(f.value));f.classList.toggle("good",ok);f.classList.toggle("bad",!ok);right+=ok?1:0});
    const ok=right===fields.length;show(ok,`關鍵物理關係答對 ${right}/${fields.length} 格。${ok?"鷹架推導完成！":"紅色欄位請配合 Teacher's Key 檢查觀念。"}`);showLegacyTeacherKey(clt);saveAttempt({question:selectedQuestion,level,total:fields.length,right,unitTotal:0,unitRight:0});return;
  }
  const fields=[...document.querySelectorAll(".blank")],units=[...document.querySelectorAll(".unitInput")];let right=0,unitRight=0;const mistakes=[];
  fields.forEach((f,i)=>{const ok=normalizedValue(f.value)===normalizedValue(f.dataset.answer);f.classList.toggle("good",ok);f.classList.toggle("bad",!ok);if(ok)right++;else mistakes.push(`數值第 ${i+1} 格：你填「${f.value||"未填"}」，正確答案是 ${f.dataset.answer}`)});
  units.forEach((u,i)=>{const ok=unitOK(u.value,u.dataset.unit);u.classList.toggle("good",ok);u.classList.toggle("bad",!ok);if(ok)unitRight++;else mistakes.push(`單位第 ${i+1} 格：你填「${u.value||"未填"}」，正確單位是 ${u.dataset.unit}`)});
  const all=right===fields.length&&unitRight===units.length;show(all,`數值答對 ${right}/${fields.length}；單位答對 ${unitRight}/${units.length}。`);const result=document.getElementById("result");result.insertAdjacentHTML("beforeend",mistakes.length?`<ul class="feedback">${mistakes.map(x=>`<li>${x}</li>`).join("")}</ul>`:'<div class="answerKey">全部正確，包含單位與量綱。</div>');saveAttempt({question:selectedQuestion,level,total:fields.length,right,unitTotal:units.length,unitRight});
};
document.getElementById("clearStats").onclick=()=>{if(confirm("確定要清除這台裝置上的學習統計嗎？")){localStorage.removeItem(statsKey);renderStats()}};
const hostIntro=document.querySelector(".intro");hostIntro.insertAdjacentHTML("afterend",'<div style="margin:-8px 0 16px;padding:12px 14px;border-left:4px solid #1764d7;background:#eaf2ff;border-radius:8px;line-height:1.6"><b>公式與填答說明</b><br>所有數學式皆以 LaTeX 排版；填空欄位位於數學區塊之外。請只輸入數值，不必輸入單位。系統接受一般負號 <code>-</code> 與數學負號 <code>−</code>。</div><nav id="questionTabs" aria-label="範例題目"></nav>');
render();
})();

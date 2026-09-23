const chapter5CLTBatch1={
"111-35":{blanks:[
{a:"V_{SG}=V_S-V_G|VSG=VS-VG",label:"①",why:String.raw`P 通道元件以源極為電位參考，改用正值的 \(V_{SG}\) 可減少負號錯誤。`},
{a:"V_{SG}>|V_t|",label:"②",why:"P 通道增強型 MOSFET 必須有足夠的源閘電壓才形成通道。"},
{a:"V_{OV}=V_{SG}-|V_t|",label:"③",why:"過驅電壓代表控制電壓超過臨界值的部分。"},
{a:"V_{SD}<V_{OV}",label:"④",why:String.raw`通道尚未在汲極端夾止時屬歐姆區；飽和區需 \(V_{SD}\ge V_{OV}\)。`},
{a:"歐姆區|triode",label:"⑤",why:String.raw`實際 \(V_{SD}=0.3\,V\) 遠小於 \(V_{OV}=2.8\,V\)。`}],
model:String.raw`採 P 通道常用的正值電壓定義，控制變數為 {{0}}；形成通道的條件是 {{1}}。`,
derivation:String.raw`<b>步驟 1：求控制電壓與過驅</b>\[V_{SG}=3.3-0=3.3\,\mathrm{V}\]過驅電壓定義為 {{2}}：\[V_{OV}=3.3-0.5=2.8\,\mathrm{V}\]<b>步驟 2：求源汲極電壓</b>\[V_{SD}=V_S-V_D=3.3-3.0=0.3\,\mathrm{V}\]<b>步驟 3：工作區條件</b><br>歐姆區條件為 {{3}}，代入得到 \(0.3\lt 2.8\)。<br><br><b>步驟 4：結論與邊界驗算</b><br>工作區為 {{4}}，選 B；飽和至少需 \(V_{SD}=2.8\,V\)，實際並未達到。`,
self:String.raw`為什麼 P 通道題目改用 \(V_{SG}\)、\(V_{SD}\) 能降低符號錯誤？`,challenge:String.raw`若汲極電壓降為 \(0.2\,\mathrm{V}\)，其餘不變，判斷工作區。<br><b>第一步提示：</b>重新計算 \(V_{SD}=V_S-V_D\)。`},
"111-48":{blanks:[
{a:"I_D=K(V_{GS}-V_t)^2",label:"①",why:String.raw`題目指定飽和區，並採用未含二分之一的 \(K\) 定義。`},
{a:"V_{OV}=V_{GS}-V_t",label:"②",why:"過驅電壓是閘源電壓超過臨界電壓的部分。"},
{a:"g_m=2KV_{OV}",label:"③",why:String.raw`轉移電導是 \(I_D\) 對 \(V_{GS}\) 的微分斜率。`},
{a:"8mA/V|8 mA/V",label:"④",why:String.raw`代入 \(K\) 與過驅電壓得到工作點小訊號轉移電導。`},
{a:"g_m=2I_D/V_{OV}",label:"⑤",why:"利用平方律可得到第二條等價驗算式。"}],
model:String.raw`假設 MOSFET 位於飽和區，使用題目給定模型 {{0}}，並定義 {{1}}。`,
derivation:String.raw`<b>步驟 1：求過驅電壓</b>\[V_{OV}=3-1=2\,\mathrm{V}\]<b>步驟 2：微分取得轉移電導</b><br>{{2}}。\[g_m=2(2\,\mathrm{mA/V^2})(2\,\mathrm{V})=8\,\mathrm{mA/V}\]<b>步驟 3：目標指標</b><br>{{3}}，選 C。<br><br><b>步驟 4：交叉驗算</b>\[I_D=K V_{OV}^2=2(2^2)=8\,\mathrm{mA}\]再用 {{4}} 得 \(g_m=16/2=8\,\mathrm{mA/V}\)。`,
self:String.raw`\(g_m\) 為什麼是工作點附近的斜率，而不是直流電流本身？`,challenge:String.raw`若 \(V_{GS}\) 增加到 \(4\,V\)，求新的 \(g_m\)。<br><b>第一步提示：</b>先重算 \(V_{OV}\)。`},
"112-32":{blanks:[
{a:"I_C=beta I_B|IC=βIB",label:"①",why:"BJT 的輸出電流主要由基極電流控制。"},
{a:"I_D=f(V_{GS})|ID=f(VGS)",label:"②",why:"FET 閘極近似不取電流，汲極電流由閘源電壓控制。"},
{a:"FET輸入阻抗較高|FET",label:"③",why:"絕緣閘或反向偏壓閘極使輸入電流極小。"},
{a:"FET為單載子元件|單載子",label:"④",why:"FET 主要由一種多數載子傳導，與 BJT 的雙載子機制不同。"},
{a:"A",label:"⑤",why:"只有 BJT 電流控制、FET 電壓控制的敘述正確。"}],
model:String.raw`比較元件時先建立控制關係：BJT 近似為 {{0}}；FET 則為 {{1}}。`,
derivation:String.raw`<b>步驟 1：控制方式</b><br>BJT 是電流控制；FET 是電壓控制。<br><br><b>步驟 2：輸入端比較</b><br>{{2}}，因此選項 B 錯。<br><br><b>步驟 3：載子與熱特性</b><br>FET 通常熱穩定度較佳，且 {{3}}，所以 C、D 皆錯。<br><br><b>步驟 4：目標判斷</b><br>正確答案為 {{4}}。`,
self:"『電壓控制』不代表完全沒有電流；它描述的是哪一個輸入量主導輸出？",challenge:String.raw`比較 MOSFET 與 JFET 的閘極結構及輸入電流。<br><b>第一步提示：</b>先判斷閘極是絕緣層隔離，還是反向偏壓 PN 接面。`},
"112-33":{blanks:[
{a:"V_P=-3V|Vp=-3V",label:"①",why:"N 通道空乏型元件的夾止電壓為負值。"},
{a:"g_{m0}=2I_{DSS}/|V_P|",label:"②",why:String.raw`零偏壓最大轉移電導由 \(I_{DSS}\) 與夾止電壓決定。`},
{a:"g_m=g_{m0}(1-V_{GS}/V_P)",label:"③",why:"工作點轉移電導隨轉移特性的線性因子改變。"},
{a:"2/3|0.667",label:"④",why:"代入兩個負電壓時商為正，外層再以 1 減去。"},
{a:"4.44mA/V|4.44 mA/V",label:"⑤",why:"將零偏壓轉移電導乘上比例因子得到答案 D。"}],
model:String.raw`N 通道空乏型 MOSFET 的夾止電壓為 {{0}}，並使用 Shockley 轉移特性。`,
derivation:String.raw`<b>步驟 1：零偏壓轉移電導</b><br>{{1}}。\[g_{m0}=\frac{2(10)}3=6.667\,\mathrm{mA/V}\]<b>步驟 2：工作點公式</b><br>{{2}}。\[1-\frac{-1}{-3}=\frac23=0.667\]<b>步驟 3：完整代入</b>\[g_m=6.667(0.667)=4.44\,\mathrm{mA/V}\]<b>步驟 4：目標與驗算</b><br>比例因子為 {{3}}，所以 \(g_m={{4}}\)，選 D。另由 \(I_D=10(2/3)^2=4.44\,mA\) 代入等價式可得相同結果。`,
self:String.raw`計算 \(1-V_{GS}/V_P\) 時為什麼最容易發生負號錯誤？`,challenge:String.raw`若 \(V_{GS}=-2\,V\)，求新的 \(g_m\)。<br><b>第一步提示：</b>先計算 \(1-V_{GS}/V_P\)。`},
"112-34":{blanks:[
{a:"I_D=(V_{DD}-V_D)/R_D",label:"①",why:"由汲極支路 KVL 可利用汲極電壓反求直流電流。"},
{a:"V_G=V_{DD}R_2/(R_1+R_2)",label:"②",why:"MOS 閘極電流近似為零，分壓器可視為無負載。"},
{a:"V_{OV}=sqrt(I_D/K)|VOV=√(ID/K)",label:"③",why:"由飽和區平方律反解過驅電壓。"},
{a:"V_S=V_G-V_{GS}",label:"④",why:String.raw`控制變數定義 \(V_{GS}=V_G-V_S\) 決定源極電位。`},
{a:"0.5kΩ|0.5kohm",label:"⑤",why:"由源極電壓除以汲極電流求源極電阻，且飽和區驗算成立。"}],
model:String.raw`假設閘極電流為零、MOSFET 位於飽和區。汲極支路由 {{0}} 求電流；閘極電壓由無負載分壓式 {{1}} 求得。`,
derivation:String.raw`<b>步驟 1：直流工作點</b>\[I_D=\frac{15-10.6}{2.2\,\mathrm{k}\Omega}=2\,\mathrm{mA}\]\[V_G=15\frac1{2+1}=5\,\mathrm{V}\]<b>步驟 2：由平方律求控制電壓</b><br>{{2}}。\[V_{OV}=\sqrt{2/0.5}=2\,\mathrm{V}\]\[V_{GS}=V_t+V_{OV}=2+2=4\,\mathrm{V}\]<b>步驟 3：源極電阻</b><br>{{3}}。\[V_S=5-4=1\,\mathrm{V}\]\[R_S=\frac{V_S}{I_D}=\frac1{2\,\mathrm{mA}}=0.5\,\mathrm{k}\Omega\]<b>步驟 4：目標與工作區驗算</b><br>{{4}}，選 A。\(V_{DS}=10.6-1=9.6\,V>V_{OV}=2\,V\)，飽和假設成立。`,
self:String.raw`本題為什麼必須在算出 \(R_S\) 後再檢查飽和區，而不能一開始就把平方律視為必然成立？`,challenge:String.raw`若指定 \(V_D=8.4\,V\)，其他條件不變，重新設計 \(R_S\)。<br><b>第一步提示：</b>先由汲極支路重算 \(I_D\)。`}
};

const chapter5StatsKey="electronicsQuizStatsV1";
function loadChapter5Stats(){try{return JSON.parse(localStorage.getItem(chapter5StatsKey))||{attempts:[]}}catch{return{attempts:[]}}}
function renderChapter5Stats(){
  const host=document.getElementById("statsContent");if(!host)return;const rows=loadChapter5Stats().attempts;
  if(!rows.length){host.innerHTML='<div class="advice">完成一次作答後，這裡會分析關鍵關係、單位與各等級表現。</div>';return}
  const total=rows.reduce((s,x)=>s+x.total,0),right=rows.reduce((s,x)=>s+x.right,0),ut=rows.reduce((s,x)=>s+x.unitTotal,0),ur=rows.reduce((s,x)=>s+x.unitRight,0),pct=(n,d)=>d?Math.round(n/d*100)+"%":"—";
  const byLevel=[1,2,3,4].map(n=>{const a=rows.filter(x=>x.level===n);return pct(a.reduce((s,x)=>s+x.right,0),a.reduce((s,x)=>s+x.total,0))});
  let advice="目前關鍵關係與單位都很穩定，可以挑戰更高等級。";if(ut&&ur/ut<.8)advice="單位正確率較低：下一輪請在計算後主動核對 V、mA、kΩ、mA/V 或 mA/V²。";else if(total&&right/total<.8)advice="關鍵關係正確率需要加強：建議降低一級，先確認工作區、控制變數與首行方程式。";
  host.innerHTML=`<div class="statsGrid"><div class="metric"><strong>${rows.length}</strong><span>作答次數</span></div><div class="metric"><strong>${pct(right,total)}</strong><span>關鍵關係正確率</span></div><div class="metric"><strong>${pct(ur,ut)}</strong><span>單位答案正確率</span></div><div class="metric"><strong>${byLevel.map((v,i)=>`L${i+1} ${v}`).join(" · ")}</strong><span>各等級表現</span></div></div><div class="advice"><b>個人化建議：</b>${advice}</div>`;
}
function saveChapter5Attempt(data){try{const stats=loadChapter5Stats();stats.attempts.push({...data,time:Date.now()});localStorage.setItem(chapter5StatsKey,JSON.stringify(stats))}catch{}renderChapter5Stats()}

function activateChapter5CLTBatch(map){
  const params=new URLSearchParams(location.search),id=params.get("id"),q=map[id];
  if(!q)return;
  const requested=Number(params.get("level"));if([1,2,3,4].includes(requested))level=requested;
  const limit=()=>({2:3,3:4,4:5}[level]||0);
  const normalize=s=>s.trim().replace(/\s+/g,"").replace(/[ΩΩ]/g,"ohm").replace(/µ/g,"u").toLowerCase();
  const context=(html,offset)=>{const b=html.slice(0,offset),i=(b.match(/\\\(/g)||[]).length>(b.match(/\\\)/g)||[]).length,d=(b.match(/\\\[/g)||[]).length>(b.match(/\\\]/g)||[]).length;return i?"inline":d?"display":null};
  const replace=html=>html.replace(/\{\{(\d+)\}\}/g,(_,i,offset)=>{const n=Number(i),item=q.blanks[n],markup=n>=limit()?`<strong>\(${item.a.split("|")[0]}\)</strong>`:`<span class="cltBlank"><span class="blankRef">${item.label}</span>[ <input class="blank wide" data-answer="${item.a}" aria-label="填空 ${item.label}" autocomplete="off"> ]</span>`,c=context(html,offset);return c==="inline"?`\)${markup}\(`:c==="display"?`\]${markup}\[` :markup});
  const scaffold=()=>`<div class="scaffold"><section class="scaffoldBlock"><h3>一、電路分析起手式（物理建模）</h3>${replace(q.model)}</section><section class="scaffoldBlock"><h3>二、核心電路定律推導（鷹架填空＋代數卸載）</h3>${replace(q.derivation)}</section><section class="scaffoldBlock teacherKey" id="teacherKey" hidden></section><section class="scaffoldBlock"><h3>四、自主遷移挑戰題（Faded Step to Independence）</h3>${q.challenge}</section></div>`;
  content=function(){if(level===1){const source=chapter5Questions[id];return `<div class="choices">${source.choices.map((x,i)=>`<button class="choice" data-value="${"ABCD"[i]}"><span>${"ABCD"[i]}</span><b>${x}</b></button>`).join("")}</div>`}return scaffold()};
  const baseRender=render;render=function(){baseRender();typesetAnswerArea()};
  document.getElementById("check").onclick=()=>{
    const source=chapter5Questions[id];
    if(level===1){const picked=document.querySelector(".choice.selected");if(!picked){show(false,"請先選擇答案。");return}const ok=picked.dataset.value===source.answer;document.querySelectorAll(".choice").forEach(b=>{b.classList.toggle("correct",b.dataset.value===source.answer);b.classList.toggle("wrong",b===picked&&!ok)});show(ok,`${ok?"答對了":"答案不正確"}；正確答案是 ${source.answer}。`);saveChapter5Attempt({question:id,level,total:1,right:ok?1:0,unitTotal:0,unitRight:0});return}
    const fields=[...document.querySelectorAll(".blank")];let right=0,unitTotal=0,unitRight=0;fields.forEach((f,i)=>{const ok=f.dataset.answer.split("|").map(normalize).includes(normalize(f.value)),isUnit=/(?:\d|^)(?:mA\/V(?:\^2|²)?|k?Ω)/i.test(q.blanks[i].a.split("|")[0]);f.classList.toggle("good",ok);f.classList.toggle("bad",!ok);right+=ok?1:0;if(isUnit){unitTotal++;unitRight+=ok?1:0}});const ok=right===fields.length;show(ok,`關鍵物理關係答對 ${right}/${fields.length} 格。${ok?"鷹架推導完成！":"紅色欄位請配合 Teacher's Key 檢查觀念。"}`);const key=document.getElementById("teacherKey");key.hidden=false;key.innerHTML=`<h3>三、填空解答與思維導引（Teacher's Key）</h3><ol class="keyList">${q.blanks.slice(0,limit()).map(x=>`<li><b>${x.label}【標準答案】：\\(${x.a.split("|")[0]}\\)</b><br><span>【思維線索（Why）】：${x.why}</span></li>`).join("")}</ol><div class="selfPrompt"><b>電路物理觀念解析（Self-Explanation Prompt）</b><br>${q.self}</div>`;window.MathJax?.typesetPromise?.([key]);saveChapter5Attempt({question:id,level,total:fields.length,right,unitTotal,unitRight});
  };
  const clear=document.getElementById("clearStats");if(clear)clear.onclick=()=>{if(confirm("確定要清除這台裝置上的學習統計嗎？")){localStorage.removeItem(chapter5StatsKey);renderChapter5Stats()}};
  renderChapter5Stats();render();
}
activateChapter5CLTBatch(chapter5CLTBatch1);

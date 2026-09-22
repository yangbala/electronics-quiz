const chapter6Questions={
"111-44":{year:111,number:44,topic:"BJT 飽和區與基集極電壓",answer:"C",choices:["-2 V","-0.6 V","0.6 V","2 V"],counts:[3,6,9],steps:[
String.raw`<b>① 假設主動區並求基極電流</b><br>\(I_B=(10-0.7)/372\,\mathrm{k}\Omega=\) {{25|µA}}。`,
String.raw`<b>② 求主動區預測集極電流</b><br>\(I_C=\beta I_B=100(25\,\mu\mathrm{A})=\) {{2.5|mA}}。`,
String.raw`<b>③ 檢查是否可能維持主動區</b><br>預測 \(V_C=10-I_CR_C=10-(2.5\,\mathrm{mA})(4.7\,\mathrm{k}\Omega)=\) {{-1.75|V}}，不合理，故電晶體進入飽和。`,
String.raw`<b>④ 使用飽和電壓</b><br>飽和時 \(V_B=V_{BE(sat)}=\) {{0.8|V}}，\(V_C=V_{CE(sat)}=\) {{0.2|V}}。`,
String.raw`<b>⑤ 求基集極電壓</b><br>\(V_{BC}=V_B-V_C=0.8-0.2=\) {{0.6|V}}，所以選 C。`,
String.raw`<b>⑥ 驗算工作區</b><br>\(I_B=(10-0.8)/372\,\mathrm{k}\Omega=24.7\,\mu\mathrm{A}\)，\(I_C=(10-0.2)/4.7\,\mathrm{k}\Omega=2.09\,\mathrm{mA}\)，強迫 \(\beta=I_C/I_B\approx\) {{84.6|—}} 小於 100，符合飽和。`]},
"111-45":{year:111,number:45,topic:"BJT 主動區集極電壓",answer:"B",choices:["6.7 V","5.6 V","4.5 V","0.2 V"],counts:[3,6,9],steps:[
String.raw`<b>① 求基極電流</b><br>\(I_B=(V_{CC}-V_{BE})/R_B=(10-0.7)/1\,\mathrm{M}\Omega=\) {{9.3|µA}}。`,
String.raw`<b>② 求集極電流</b><br>\(I_C=\beta I_B=100(9.3\,\mu\mathrm{A})=\) {{0.93|mA}}。`,
String.raw`<b>③ 求集極電阻壓降</b><br>\(V_{RC}=I_CR_C=(0.93\,\mathrm{mA})(4.7\,\mathrm{k}\Omega)=\) {{4.371|V}}。`,
String.raw`<b>④ 求集極電壓</b><br>\(V_C=V_{CC}-V_{RC}=10-4.371=\) {{5.629|V}}。`,
String.raw`<b>⑤ 對照選項</b><br>\(V_C\approx\) {{5.6|V}}，所以選 B。`,
String.raw`<b>⑥ 驗算工作區</b><br>\(V_{CE}=5.629\,\mathrm{V}>V_{CE(sat)}=\) {{0.2|V}}，且 \(V_C>V_B=0.7\,\mathrm{V}\)，主動區假設成立。`]},
"112-29":{year:112,number:29,topic:"BJT 飽和區觀念",answer:"B",choices:["集極電流與基極電流成正比","集射極間猶如開關導通","基射順偏且基集逆偏","基射逆偏且基集順偏"],counts:[2,4,6],steps:[
String.raw`<b>① 主動區特性</b><br>只有主動區近似滿足 \(I_C=\beta I_B\)，因此 A 不是飽和區的一般敘述。`,
String.raw`<b>② 飽和區接面偏壓</b><br>飽和時基射極與基集極接面均為 {{順向偏壓|—}}。`,
String.raw`<b>③ 排除 C</b><br>基射順偏、基集逆偏描述的是 {{主動區|—}}。`,
String.raw`<b>④ 排除 D</b><br>基射逆偏、基集順偏不是一般放大或開關飽和狀態。`,
String.raw`<b>⑤ 得出答案</b><br>飽和區 \(V_{CE}\approx V_{CE(sat)}\) 很小，集射極近似閉合開關，選 {{B|—}}。`,
String.raw`<b>⑥ 電壓驗算</b><br>矽 BJT 飽和時常取 \(V_{CE(sat)}\approx\) {{0.2|V}}，符合導通開關模型。`]},
"112-30":{year:112,number:30,topic:"負電源 BJT 直流偏壓",answer:"D",choices:["6.35 V","-6.35 V","5.65 V","-5.65 V"],counts:[3,6,9],steps:[
String.raw`<b>① 求射極與基極電壓</b><br>\(V_E=-12\,\mathrm{V}\)，主動區 \(V_B=V_E+0.7=\) {{-11.3|V}}。`,
String.raw`<b>② 求基極電流</b><br>\(I_B=(0-V_B)/R_B=11.3/200\,\mathrm{k}\Omega=\) {{56.5|µA}}。`,
String.raw`<b>③ 求集極電流</b><br>\(I_C=\beta I_B=100(56.5\,\mu\mathrm{A})=\) {{5.65|mA}}。`,
String.raw`<b>④ 判斷集極電流方向</b><br>電流由接地端經 \(R_C\) 流向集極，因此集極相對地為負電位。`,
String.raw`<b>⑤ 求集極電壓</b><br>\(V_C=0-I_CR_C=-(5.65\,\mathrm{mA})(1\,\mathrm{k}\Omega)=\) {{-5.65|V}}，選 D。`,
String.raw`<b>⑥ 驗算工作區</b><br>\(V_{CE}=V_C-V_E=-5.65-(-12)=\) {{6.35|V}}，大於飽和電壓，主動區成立。`]},
"112-38":{year:112,number:38,topic:"運算放大器與 BJT 電流源設計",answer:"D",choices:["7.5 V、2.5 Ω","7.5 V、10 Ω","10 V、50 Ω","10 V、100 Ω"],counts:[3,6,9],steps:[
String.raw`<b>① 使用負回授虛短</b><br>理想運算放大器使 \(V_-=V_+=10\,\mathrm{V}\)，所以 \(V_R=\) {{10|V}}。`,
String.raw`<b>② 辨認輸出電流</b><br>圖中 \(I_O\) 流入 BJT 基極，因此 \(I_B=I_O=\) {{1|mA}}。`,
String.raw`<b>③ 求集極電流</b><br>\(I_C=\beta I_B=99(1\,\mathrm{mA})=\) {{99|mA}}。`,
String.raw`<b>④ 求射極電流</b><br>\(I_E=I_C+I_B=(\beta+1)I_B=100(1\,\mathrm{mA})=\) {{100|mA}}。`,
String.raw`<b>⑤ 求電阻</b><br>\(R=V_R/I_E=10\,\mathrm{V}/100\,\mathrm{mA}=\) {{100|Ω}}，選 D。`,
String.raw`<b>⑥ 功率驗算</b><br>\(P_R=V_RI_E=(10)(0.1)=\) {{1|W}}，且 \(I_ER=0.1(100)=10\,\mathrm{V}\)，一致。`]},
"112-48":{year:112,number:48,topic:"由量測電壓求 BJT β",answer:"D",choices:["120","100","80","50"],counts:[3,6,9],steps:[
String.raw`<b>① 求基極電壓</b><br>\(V_B=V_E+V_{BE}=2.04+0.7=\) {{2.74|V}}。`,
String.raw`<b>② 求基極電流</b><br>\(I_B=(20-V_B)/431.5\,\mathrm{k}\Omega=(20-2.74)/431.5\,\mathrm{k}\Omega=\) {{40|µA}}。`,
String.raw`<b>③ 求集極電阻壓降</b><br>\(V_{RC}=20-V_C=20-16=\) {{4|V}}。`,
String.raw`<b>④ 求集極電流</b><br>\(I_C=V_{RC}/2\,\mathrm{k}\Omega=4/2\,\mathrm{k}\Omega=\) {{2|mA}}。`,
String.raw`<b>⑤ 求電流增益</b><br>\(\beta=I_C/I_B=2\,\mathrm{mA}/40\,\mu\mathrm{A}=\) {{50|—}}，選 D。`,
String.raw`<b>⑥ 射極支路驗算</b><br>\(I_E=(\beta+1)I_B=51(40\,\mu\mathrm{A})=\) {{2.04|mA}}，\(V_E=I_E(1\,\mathrm{k}\Omega)=2.04\,\mathrm{V}\)，與量測一致。`]},
"113-27":{year:113,number:27,topic:"PNP BJT 主動區電位關係",answer:"B",choices:["VB>VC>VE","VE>VB>VC","VC>VE>VB","VB>VE>VC"],counts:[2,4,6],steps:[
String.raw`<b>① PNP 主動區的基射接面</b><br>基射接面順偏，所以射極電位比基極高約 \(0.7\,\mathrm{V}\)，即 \(V_E>V_B\)。`,
String.raw`<b>② PNP 主動區的基集接面</b><br>基集接面逆偏，因此基極電位高於集極，即 \(V_B>V_C\)。`,
String.raw`<b>③ 合併不等式</b><br>得到 {{VE>VB>VC|—}}。`,
String.raw`<b>④ 對照選項</b><br>正確答案為 {{B|—}}。`,
String.raw`<b>⑤ 電壓差檢查</b><br>\(V_{EB}=V_E-V_B\approx\) {{0.7|V}}。`,
String.raw`<b>⑥ 範例驗算</b><br>若 \(V_E=5\,\mathrm{V}\)、\(V_B=4.3\,\mathrm{V}\)、\(V_C=2\,\mathrm{V}\)，則兩個接面偏壓符合主動區。`]},
"113-28":{year:113,number:28,topic:"BJT 工作區判斷",answer:"D",choices:["齊納崩潰區","截止區","主動區","飽和區"],counts:[2,4,6],steps:[
String.raw`<b>① 先以主動區公式預測</b><br>\(I_{C(active)}=\beta I_B=150(1\,\mathrm{mA})=\) {{150|mA}}。`,
String.raw`<b>② 與實際電流比較</b><br>題示實際 \(I_C=120\,\mathrm{mA}\)，小於主動區預測值 {{150|mA}}。`,
String.raw`<b>③ 判斷是否截止</b><br>因 \(I_B\ne0\) 且 \(I_C\) 很大，不是截止區。`,
String.raw`<b>④ 判斷飽和</b><br>外部電路已限制集極電流，增加基極驅動也無法維持 \(I_C=\beta I_B\)，表示進入 {{飽和區|—}}。`,
String.raw`<b>⑤ 得出答案</b><br>選 {{D|—}}。`,
String.raw`<b>⑥ 強迫 β 驗算</b><br>\(\beta_{forced}=I_C/I_B=120/1=\) {{120|—}} 小於元件 \(\beta=150\)，符合飽和判據。`]},
"113-29":{year:113,number:29,topic:"雙電源分壓偏壓 BJT",answer:"A",choices:["7.4 V","6.2 V","5.1 V","4.2 V"],counts:[3,7,11],steps:[
String.raw`<b>① 求基極分壓戴維寧電壓</b><br>\(V_{TH}=-12+24(50/(450+50))=\) {{-9.6|V}}。`,
String.raw`<b>② 求戴維寧電阻</b><br>\(R_{TH}=450\parallel50=\) {{45|kΩ}}。`,
String.raw`<b>③ 建立基極迴路</b><br>\(I_B=(V_{TH}-V_{BE}-V_{EE})/[R_{TH}+(\beta+1)R_E]\)。`,
String.raw`<b>④ 求基極電流</b><br>\(I_B=[-9.6-0.7-(-12)]/[45+55]\,\mathrm{k}\Omega=1.7/100\,\mathrm{k}\Omega=\) {{17|µA}}。`,
String.raw`<b>⑤ 求集極電壓</b><br>\(I_C=54(17\,\mu\mathrm{A})=\) {{0.918|mA}}，\(V_C=12-I_C(5\,\mathrm{k}\Omega)=12-4.59=\) {{7.41|V}}，選 A。`,
String.raw`<b>⑥ 代回驗算</b><br>\(I_E=55(17\,\mu\mathrm{A})=0.935\,\mathrm{mA}\)，\(V_E=-12+0.935=\) {{-11.065|V}}，\(V_B=V_E+0.7=-10.365\,\mathrm{V}\)，也等於 \(V_{TH}-I_BR_{TH}\)。`]},
"114-41":{year:114,number:41,topic:"指針電表判別 BJT",answer:"D",choices:["NPN，黑棒接射極","PNP，黑棒接基極","PNP，黑棒接射極","NPN，黑棒接基極"],counts:[2,4,6],steps:[
String.raw`<b>① 指針式歐姆檔極性</b><br>傳統指針式三用電表在電阻檔時，黑測棒相對紅測棒為 {{正電位|—}}。`,
String.raw`<b>② 兩次皆為低電阻的意義</b><br>固定接腳同時能對另外兩腳形成順偏接面，因此固定腳是 {{基極|—}}。`,
String.raw`<b>③ 判斷 NPN 或 PNP</b><br>基極接正、射極與集極接負時兩個 PN 接面順偏，對應 {{NPN|—}}。`,
String.raw`<b>④ 組合判斷</b><br>黑棒所接腳為基極，電晶體為 NPN。`,
String.raw`<b>⑤ 得出答案</b><br>選 {{D|—}}。`,
String.raw`<b>⑥ 接面模型驗算</b><br>NPN 可視為由基極 P 區分別連到射極、集極 N 區的兩個二極體；P 端接正時皆導通。`]},
"114-43":{year:114,number:43,topic:"固定偏壓對 β 的穩定度",answer:"D",choices:["7.5 V","6.5 V","5.5 V","4.5 V"],counts:[3,6,9],steps:[
String.raw`<b>① 由原工作點求集極電流</b><br>\(I_C=(V_{CC}-V_C)/R_C=(12-6)/3\,\mathrm{k}\Omega=\) {{2|mA}}。`,
String.raw`<b>② 由原 β 求基極電流</b><br>\(I_B=I_C/\beta=2\,\mathrm{mA}/80=\) {{25|µA}}。`,
String.raw`<b>③ 確認固定偏壓的基極電流</b><br>\(I_B=(12-0.7)/452\,\mathrm{k}\Omega=\) {{25|µA}}，與上一步一致。`,
String.raw`<b>④ β 改為 100 後求集極電流</b><br>\(I_C=100(25\,\mu\mathrm{A})=\) {{2.5|mA}}。`,
String.raw`<b>⑤ 求新集極電壓</b><br>\(V_C=12-(2.5\,\mathrm{mA})(3\,\mathrm{k}\Omega)=\) {{4.5|V}}，選 D。`,
String.raw`<b>⑥ 驗算工作區與穩定度</b><br>\(V_C=4.5\,\mathrm{V}>V_B=0.7\,\mathrm{V}\)，仍在主動區；但 β 增加 25% 使 \(V_C\) 下降 {{1.5|V}}，顯示固定偏壓穩定度差。`]},
"115-28":{year:115,number:28,topic:"PNP BJT 直流偏壓",answer:"A",choices:["-6.1 V","-5.1 V","4.2 V","8.1 V"],counts:[3,7,11],steps:[
String.raw`<b>① 建立 PNP 基射關係</b><br>\(V_E=V_B+V_{EB}=V_B+0.7\)。`,
String.raw`<b>② 寫出基極與射極電流</b><br>\(I_B=(V_B+16)/690\,\mathrm{k}\Omega\)，\(I_E=(0-V_E)/0.75\,\mathrm{k}\Omega\)。`,
String.raw`<b>③ 使用電流關係</b><br>\(I_E=(\beta+1)I_B=100I_B\)。`,
String.raw`<b>④ 解基極與射極電壓</b><br>\(-(V_B+0.7)/0.75=100(V_B+16)/690\)，解得 \(V_B=\) {{-2.2|V}}、\(V_E=\) {{-1.5|V}}。`,
String.raw`<b>⑤ 求集極電壓</b><br>\(I_B=13.8/690\,\mathrm{k}\Omega=20\,\mu\mathrm{A}\)，\(I_C=99I_B=\) {{1.98|mA}}；\(V_C=-16+I_CR_C=-16+1.98(5)=\) {{-6.1|V}}，選 A。`,
String.raw`<b>⑥ 代回驗算</b><br>\(I_E=2.00\,\mathrm{mA}\)，\(V_E=-I_ER_E=-(2)(0.75)=\) {{-1.5|V}}，且 \(V_E>V_B>V_C\)，符合 PNP 主動區。`]},
"115-45":{year:115,number:45,topic:"由實驗量測求 BJT β",answer:"D",choices:["125","110","99","80"],counts:[3,6,9],steps:[
String.raw`<b>① 由量測電壓求基極支路電流</b><br>\(V_{AB}=2.5\,\mathrm{V}\) 為 \(100\,\mathrm{k}\Omega\) 壓降，因此 \(I_B=V_{AB}/100\,\mathrm{k}\Omega=\) {{25|µA}}。`,
String.raw`<b>② 求集極電阻壓降</b><br>\(V_{RC}=V_{CC}-V_C=12-6=\) {{6|V}}。`,
String.raw`<b>③ 求集極電流</b><br>\(I_C=V_{RC}/R_C=6/3\,\mathrm{k}\Omega=\) {{2|mA}}。`,
String.raw`<b>④ 求電流增益</b><br>\(\beta=I_C/I_B=2\,\mathrm{mA}/25\,\mu\mathrm{A}=\) {{80|—}}。`,
String.raw`<b>⑤ 對照選項</b><br>答案為 {{D|—}}。`,
String.raw`<b>⑥ 反算驗證</b><br>\(I_C=\beta I_B=80(25\,\mu\mathrm{A})=2\,\mathrm{mA}\)，\(V_C=12-(2\,\mathrm{mA})(3\,\mathrm{k}\Omega)=\) {{6|V}}，與量測一致。`]}
};

(function activateChapter6(){
const id=new URLSearchParams(location.search).get("id"),q=chapter6Questions[id];if(!q)return;
const cropRoot=location.protocol==="file:"?"file:///C:/Users/Eli/.codex/visualizations/2026/08/13/019ffba4-80b5-7ed3-a9a4-ee902d86127c/chapter6_questions/":"assets/chapter6/";
const aliases={V:["v","伏特"],mA:["ma","毫安培"],"µA":["µa","μa","ua","微安培"],kΩ:["kω","kΩ","kohm","kohms","千歐姆"],Ω:["ω","Ω","ohm","ohms","歐姆"],W:["w","瓦特"],"—":[]};
const norm=v=>v.trim().replace(/,/g,"").replace(/\s/g,"").toLowerCase();
function solution(){let token=0,limit=q.counts[level-2];return `<div class="steps">${q.steps.map(step=>`<div class="step">${step.replace(/\{\{(.*?)\|(.*?)\}\}/g,(_,answer,unit,offset)=>{token++;if(token>limit)return `<strong>${answer}</strong>${unit==="—"?"":` \\(${unit}\\)`}`;const unitField=unit==="—"?`<span class="dimensionless">無單位</span>`:`<input class="unitInput" data-unit="${unit}" placeholder="${unit}">`;const field=`<span class="blankRef">${token}</span><span class="answerPair"><input class="blank" data-answer="${answer}" placeholder="數值或文字">${unitField}</span>`;const prefix=step.slice(0,offset),inInline=prefix.lastIndexOf("\\(")>prefix.lastIndexOf("\\)"),inDisplay=prefix.lastIndexOf("\\[")>prefix.lastIndexOf("\\]");return inInline?`\\) ${field} \\(`:inDisplay?`\\] ${field} \\[`:field})}</div>`).join("")}</div>`}
content=function(){if(level===1)return `<div class="choices">${q.choices.map((x,i)=>`<button class="choice" data-value="${"ABCD"[i]}"><span>${"ABCD"[i]}</span><b>${x}</b></button>`).join("")}</div>`;return solution()};
const priorRender=render;render=function(){priorRender();document.querySelector(".meta .tag:first-child").textContent=`${q.year} 年第 ${q.number} 題`;document.querySelector(".meta .tag:last-child").textContent=q.topic;const img=document.querySelector(".imageWrap img");img.src=cropRoot+id+".png";img.alt=`${id} 原始試題切圖`;document.getElementById("questionTabs").innerHTML=Object.keys(chapter6Questions).map(key=>`<button style="margin:0 8px 12px 0;padding:9px 14px;border:1px solid #dce3e8;border-radius:9px;cursor:pointer;${key===id?'color:#fff;background:#1764d7;':''}" onclick="location.href='?id=${key}'">${key}</button>`).join("")};
document.getElementById("check").onclick=()=>{if(level===1){const p=document.querySelector(".choice.selected");if(!p){show(false,"請先選擇一個答案。");return}document.querySelectorAll(".choice").forEach(b=>{b.classList.toggle("correct",b.dataset.value===q.answer);b.classList.toggle("wrong",b===p&&b.dataset.value!==q.answer)});const ok=p.dataset.value===q.answer;show(ok,`${ok?"答對了":"答案不正確"}；正確答案是 ${q.answer}。`);saveAttempt({question:id,level,total:1,right:ok?1:0,unitTotal:0,unitRight:0});return}const vs=[...document.querySelectorAll(".blank")],us=[...document.querySelectorAll(".unitInput")];let right=0,unitRight=0;vs.forEach(f=>{const ok=norm(f.value)===norm(f.dataset.answer);f.classList.toggle("good",ok);f.classList.toggle("bad",!ok);right+=ok});us.forEach(u=>{const ok=(aliases[u.dataset.unit]||[u.dataset.unit]).map(norm).includes(norm(u.value));u.classList.toggle("good",ok);u.classList.toggle("bad",!ok);unitRight+=ok});const ok=right===vs.length&&unitRight===us.length;show(ok,`數值／文字答對 ${right}/${vs.length} 格；單位答對 ${unitRight}/${us.length} 格。${ok?"完整計算正確！":"紅色欄位請再檢查。"}`);saveAttempt({question:id,level,total:vs.length,right,unitTotal:us.length,unitRight})};render();
})();

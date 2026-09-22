const chapter5Questions={
"111-35":{year:111,number:35,topic:"P 通道增強型 MOSFET 工作區",answer:"B",choices:["截止區","歐姆區","飽和區","崩潰區"],counts:[3,6,9],steps:[
String.raw`<b>① 改用 P 通道常用電壓</b><br>\(V_{SG}=V_S-V_G=3.3-0=\) {{3.3|V}}。`,
String.raw`<b>② 檢查是否導通</b><br>\(V_{SG}=3.3\,\mathrm{V}>|V_t|=\) {{0.5|V}}，故不是截止區。`,
String.raw`<b>③ 求過驅電壓</b><br>\(V_{OV}=V_{SG}-|V_t|=3.3-0.5=\) {{2.8|V}}。`,
String.raw`<b>④ 求源汲極電壓</b><br>\(V_{SD}=V_S-V_D=3.3-3.0=\) {{0.3|V}}。`,
String.raw`<b>⑤ 判斷工作區</b><br>因 \(0<V_{SD}<V_{OV}\)，即 \(0.3<2.8\)，工作於 {{歐姆區|—}}，選 B。`,
String.raw`<b>⑥ 邊界驗算</b><br>P 通道飽和須 \(V_{SD}\ge V_{SG}-|V_t|=2.8\,\mathrm{V}\)；實際僅 {{0.3|V}}，故不在飽和區。`]},
"111-48":{year:111,number:48,topic:"增強型 MOSFET 轉移電導",answer:"C",choices:["4 mA/V","6 mA/V","8 mA/V","10 mA/V"],counts:[3,6,9],steps:[
String.raw`<b>① 確認飽和區公式</b><br>題目指定飽和區，採 \(I_D=K(V_{GS}-V_t)^2\)。`,
String.raw`<b>② 求過驅電壓</b><br>\(V_{OV}=V_{GS}-V_t=3-1=\) {{2|V}}。`,
String.raw`<b>③ 寫出轉移電導</b><br>\(g_m=2K(V_{GS}-V_t)=2KV_{OV}\)。`,
String.raw`<b>④ 代入數值</b><br>\(g_m=2(2\,\mathrm{mA/V^2})(2\,\mathrm{V})=\) {{8|mA/V}}。`,
String.raw`<b>⑤ 對照選項</b><br>答案為 {{C|—}}。`,
String.raw`<b>⑥ 由汲極電流交叉驗算</b><br>\(I_D=K V_{OV}^2=2(2^2)=8\,\mathrm{mA}\)，\(g_m=2I_D/V_{OV}=16/2=\) {{8|mA/V}}。`]},
"112-32":{year:112,number:32,topic:"BJT 與 FET 比較",answer:"A",choices:["BJT 為電流控制，FET 為電壓控制","BJT 輸入阻抗較 FET 高","BJT 熱穩定度較 FET 高","兩者皆為雙載子元件"],counts:[2,4,6],steps:[
String.raw`<b>① BJT 控制方式</b><br>BJT 的集極電流主要由基極電流控制，屬 {{電流控制|—}} 元件。`,
String.raw`<b>② FET 控制方式</b><br>FET 的汲極電流由閘源電壓控制，屬 {{電壓控制|—}} 元件。`,
String.raw`<b>③ 比較輸入阻抗</b><br>FET 閘極電流近似為零，輸入阻抗通常比 BJT {{高|—}}，故 B 錯。`,
String.raw`<b>④ 比較熱穩定度</b><br>FET 通常具有較佳熱穩定度，故 C 錯。`,
String.raw`<b>⑤ 比較載子</b><br>BJT 是雙載子元件，FET 是 {{單載子|—}} 元件，故 D 錯。`,
String.raw`<b>⑥ 得出答案</b><br>唯一正確敘述為 {{A|—}}。`]},
"112-33":{year:112,number:33,topic:"空乏型 MOSFET 轉移電導",answer:"D",choices:["1.11 mA/V","2.22 mA/V","3.33 mA/V","4.44 mA/V"],counts:[3,6,9],steps:[
String.raw`<b>① 統一夾止電壓符號</b><br>N 通道空乏型 MOSFET 的 \(V_P=-3\,\mathrm{V}\)，故 \(|V_P|=\) {{3|V}}。`,
String.raw`<b>② 求零偏壓轉移電導</b><br>\(g_{m0}=2I_{DSS}/|V_P|=2(10)/3=\) {{6.667|mA/V}}。`,
String.raw`<b>③ 寫出工作點轉移電導</b><br>\(g_m=g_{m0}(1-V_{GS}/V_P)\)。`,
String.raw`<b>④ 求比例因子</b><br>\(1-V_{GS}/V_P=1-(-1)/(-3)=\) {{0.667|—}}。`,
String.raw`<b>⑤ 計算答案</b><br>\(g_m=6.667(0.667)\approx\) {{4.44|mA/V}}，選 D。`,
String.raw`<b>⑥ 由電流公式驗算</b><br>\(I_D=I_{DSS}(1-V_{GS}/V_P)^2=10(2/3)^2=4.44\,\mathrm{mA}\)，\(g_m=2\sqrt{I_{DSS}I_D}/|V_P|=\) {{4.44|mA/V}}。`]},
"112-34":{year:112,number:34,topic:"MOSFET 直流偏壓設計",answer:"A",choices:["0.5 kΩ","0.9 kΩ","1.2 kΩ","1.5 kΩ"],counts:[3,7,11],steps:[
String.raw`<b>① 由汲極電壓求汲極電流</b><br>\(I_D=(V_{DD}-V_D)/R_D=(15-10.6)/2.2\,\mathrm{k}\Omega=\) {{2|mA}}。`,
String.raw`<b>② 求閘極直流電壓</b><br>閘極電流近似零，\(V_G=15[1/(2+1)]=\) {{5|V}}。`,
String.raw`<b>③ 求過驅電壓</b><br>\(V_{OV}=\sqrt{I_D/K}=\sqrt{2/0.5}=\) {{2|V}}。`,
String.raw`<b>④ 求閘源電壓</b><br>\(V_{GS}=V_t+V_{OV}=2+2=\) {{4|V}}。`,
String.raw`<b>⑤ 求源極電壓與電阻</b><br>\(V_S=V_G-V_{GS}=5-4=\) {{1|V}}，\(R_S=V_S/I_D=1/2\,\mathrm{mA}=\) {{0.5|kΩ}}，選 A。`,
String.raw`<b>⑥ 飽和區驗算</b><br>\(V_{DS}=V_D-V_S=10.6-1=\) {{9.6|V}}，大於 \(V_{OV}=2\,\mathrm{V}\)，飽和區假設成立。`]}
};
Object.assign(chapter5Questions,window.chapter5More||{});
(function(){const id=new URLSearchParams(location.search).get("id"),q=chapter5Questions[id];if(!q)return;const root=location.protocol==="file:"?"file:///C:/Users/Eli/.codex/visualizations/2026/08/13/019ffba4-80b5-7ed3-a9a4-ee902d86127c/chapter5_questions/":"assets/chapter5/",norm=v=>v.trim().replace(/,/g,"").replace(/\s/g,"").toLowerCase(),aliases={V:["v","伏特"],mA:["ma","毫安培"],"mA/V":["ma/v","ms","毫安培/伏特"],kΩ:["kω","kΩ","kohm","千歐姆"],"—":[]};function sol(){let n=0,l=q.counts[level-2];return `<div class="steps">${q.steps.map(s=>`<div class="step">${s.replace(/\{\{(.*?)\|(.*?)\}\}/g,(_,a,u,offset)=>{n++;if(n>l)return `<strong>${a}</strong>${u==="—"?"":` \\(${u}\\)`}`;const field=`<span class="blankRef">${n}</span><span class="answerPair"><input class="blank" data-answer="${a}" placeholder="數值或文字">${u==="—"?'<span class="dimensionless">無單位</span>':`<input class="unitInput" data-unit="${u}" placeholder="${u}">`}</span>`;const prefix=s.slice(0,offset),inInline=(prefix.match(/\\\(/g)||[]).length>(prefix.match(/\\\)/g)||[]).length,inDisplay=(prefix.match(/\\\[/g)||[]).length>(prefix.match(/\\\]/g)||[]).length;return inInline?`\\)${field}\\(`:inDisplay?`\\]${field}\\[`:field})}</div>`).join("")}</div>`}content=function(){return level===1?`<div class="choices">${q.choices.map((x,i)=>`<button class="choice" data-value="${"ABCD"[i]}"><span>${"ABCD"[i]}</span><b>${x}</b></button>`).join("")}</div>`:sol()};const old=render;render=function(){old();document.querySelector(".meta .tag:first-child").textContent=`${q.year} 年第 ${q.number} 題`;document.querySelector(".meta .tag:last-child").textContent=q.topic;const im=document.querySelector(".imageWrap img");im.src=root+id+".png";im.alt=id+" 原始試題切圖"};document.getElementById("check").onclick=()=>{if(level===1){const p=document.querySelector(".choice.selected");if(!p){show(false,"請先選擇答案。");return}const ok=p.dataset.value===q.answer;document.querySelectorAll(".choice").forEach(b=>{b.classList.toggle("correct",b.dataset.value===q.answer);b.classList.toggle("wrong",b===p&&!ok)});show(ok,`${ok?"答對了":"答案不正確"}；正確答案是 ${q.answer}。`);return}const vs=[...document.querySelectorAll(".blank")],us=[...document.querySelectorAll(".unitInput")];let r=0,u=0;vs.forEach(f=>{const ok=norm(f.value)===norm(f.dataset.answer);f.classList.toggle("good",ok);f.classList.toggle("bad",!ok);r+=ok});us.forEach(f=>{const ok=(aliases[f.dataset.unit]||[f.dataset.unit]).map(norm).includes(norm(f.value));f.classList.toggle("good",ok);f.classList.toggle("bad",!ok);u+=ok});show(r===vs.length&&u===us.length,`數值／文字 ${r}/${vs.length}；單位 ${u}/${us.length}。`)};render()})();

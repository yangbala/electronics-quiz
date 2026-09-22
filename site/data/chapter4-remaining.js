const chapter4Remaining = {
  "112-28": {year:112, number:28, topic:"齊納二極體穩壓範圍", answer:"A", choices:["32 V、46 V","34 V、46 V","32 V、50 V","34 V、58 V"], image:"112-28.png", counts:[3,7,11], steps:[
    `<b>① 求負載電流</b><br>穩壓時 \(V_O=V_Z=20\,\mathrm{V}\)，所以 \(I_L=V_O/R_L=20/2\,\mathrm{k}\Omega=\) {{10|mA}}。`,
    `<b>② 求齊納二極體最大電流</b><br>\(I_{Z(\max)}=P_{Z(\max)}/V_Z=320\,\mathrm{mW}/20\,\mathrm{V}=\) {{16|mA}}。`,
    `<b>③ 最小電源電壓的臨界條件</b><br>令 \(I_Z=I_{ZK}=2\,\mathrm{mA}\)，則 \(I_S=I_L+I_Z=10+2=\) {{12|mA}}。`,
    `<b>④ 求電源最小值</b><br>\(V_{S(\min)}=V_Z+I_SR_S=20+(12\,\mathrm{mA})(1\,\mathrm{k}\Omega)=\) {{32|V}}。`,
    `<b>⑤ 求電源最大值</b><br>\(I_S=I_L+I_{Z(\max)}=10+16=\) {{26|mA}}，故 \(V_{S(\max)}=20+(26\,\mathrm{mA})(1\,\mathrm{k}\Omega)=\) {{46|V}}，選 A。`,
    `<b>⑥ 代回驗算</b><br>當 \(V_S=32\,\mathrm{V}\) 時，\(I_Z=(32-20)/1-10=\) {{2|mA}}；當 \(V_S=46\,\mathrm{V}\) 時，\(I_Z=(46-20)/1-10=\) {{16|mA}}，均落在 \(2\sim16\,\mathrm{mA}\)。`
  ]},
  "112-45": {year:112, number:45, topic:"中心抽頭全波整流", answer:"D", choices:["平均值為 20/π V","有效值為 12 V","漣波頻率為 50 Hz","漣波週期為 0.01 秒"], image:"112-45.png", counts:[2,5,8], steps:[
    `<b>① 修正變壓器實際次級電壓</b><br>一次側額定 \(120\,\mathrm{V}\) 時次級為 \(0-12-24\,\mathrm{V}\)；實際輸入只有 \(100\,\mathrm{V}\)，每半繞組有效值為 \(12(100/120)=\) {{10|V}}。`,
    `<b>② 求輸出峰值</b><br>理想二極體下，\(V_m=10\sqrt2=\) {{14.14|V}}。`,
    `<b>③ 檢查平均值</b><br>\(V_{O(\mathrm{avg})}=2V_m/\pi=20\sqrt2/\pi\approx\) {{9.00|V}}，不是 \(20/\pi\,\mathrm{V}\)。`,
    `<b>④ 檢查有效值</b><br>全波整流波形有效值等於半繞組正弦有效值，即 \(V_{O(\mathrm{rms})}=\) {{10|V}}，不是 \(12\,\mathrm{V}\)。`,
    `<b>⑤ 求漣波頻率與週期</b><br>\(f_r=2f_s=2(50)=\) {{100|Hz}}，\(T_r=1/f_r=\) {{0.01|s}}，因此選 D。`,
    `<b>⑥ 交叉驗算</b><br>每個輸入週期有兩個輸出脈波，所以 \(50\,\mathrm{Hz}\times2=\) {{100|Hz}}，週期確為 {{0.01|s}}。`
  ]},
  "113-26": {year:113, number:26, topic:"橋式整流平均值與 PIV", answer:"A", choices:["24√2/π V、12√2 V","24√2/π V、12 V","24/π V、12√2 V","24√2 V、12√2/π V"], image:"113-26.png", counts:[2,5,8], steps:[
    `<b>① 求次級有效值</b><br>變壓器匝數比為 \(110:12\)，一次側為 \(110\,\mathrm{V_{rms}}\)，故次級為 {{12|V}}。`,
    `<b>② 求次級峰值</b><br>\(V_m=\sqrt2V_{rms}=12\sqrt2\approx\) {{16.97|V}}。`,
    `<b>③ 求全波整流平均值</b><br>\(V_{O(\mathrm{avg})}=2V_m/\pi=2(12\sqrt2)/\pi=\) {{24√2/π|V}}。`,
    `<b>④ 判斷橋式整流 PIV</b><br>橋式整流中，截止二極體承受的最大反向電壓等於次級峰值，因此 \(PIV=V_m=\) {{12√2|V}}。`,
    `<b>⑤ 對照選項</b><br>平均值為 {{24√2/π|V}}、PIV 為 {{12√2|V}}，所以選 A。`,
    `<b>⑥ 數值驗算</b><br>\(24\sqrt2/\pi\approx\) {{10.80|V}}，且 {{10.80|V}} 小於峰值 {{16.97|V}}，量值關係合理。`
  ]},
  "113-43": {year:113, number:43, topic:"全波整流電容濾波", answer:"D", choices:["漣波頻率與輸入相同","輸入峰值愈大，漣波愈小","負載電阻愈大，漣波愈大","電容量愈大，漣波愈小"], image:"113-43.png", counts:[2,4,7], steps:[
    `<b>① 建立近似式</b><br>全波整流加電容濾波的峰對峰漣波近似為 \(V_{r(pp)}\approx I_L/(f_rC)\)。`,
    `<b>② 判斷漣波頻率</b><br>全波整流 \(f_r=2f_s\)，所以選項 A 錯誤。`,
    `<b>③ 判斷負載電阻影響</b><br>\(I_L\approx V_{DC}/R_L\)，因此 \(R_L\) 增大會使 \(I_L\) {{減小|—}}，漣波也 {{減小|—}}，選項 C 錯誤。`,
    `<b>④ 判斷電容量影響</b><br>由 \(V_{r(pp)}\propto1/C\)，\(C\) 愈大，漣波 {{愈小|—}}。`,
    `<b>⑤ 得出答案</b><br>符合公式者為選項 {{D|—}}。`,
    `<b>⑥ 極限驗算</b><br>若 \(C\to\infty\)，放電斜率趨近零，則 \(V_{r(pp)}\to\) {{0|V}}；再次確認 D。`
  ]},
  "113-44": {year:113, number:44, topic:"齊納穩壓可調電阻範圍", answer:"D", choices:["300 Ω、600 Ω","250 Ω、600 Ω","250 Ω、500 Ω","240 Ω、500 Ω"], image:"113-44.png", counts:[3,7,11], steps:[
    `<b>① 求負載電流</b><br>\(I_L=V_O/R_L=10\,\mathrm{V}/1\,\mathrm{k}\Omega=\) {{10|mA}}。`,
    `<b>② 求最大齊納電流</b><br>\(I_{Z(\max)}=P_{Z(\max)}/V_Z=150\,\mathrm{mW}/10\,\mathrm{V}=\) {{15|mA}}。`,
    `<b>③ 求電阻最小值時的總電流</b><br>\(I_{S(\max)}=I_L+I_{Z(\max)}=10+15=\) {{25|mA}}。`,
    `<b>④ 求電阻最小值</b><br>\(R_{\min}=(V_S-V_Z)/I_{S(\max)}=(16-10)/25\,\mathrm{mA}=\) {{240|Ω}}。`,
    `<b>⑤ 求電阻最大值</b><br>臨界穩壓時 \(I_Z=I_{ZK}=2\,\mathrm{mA}\)，\(I_{S(\min)}=10+2=\) {{12|mA}}，故 \(R_{\max}=6/12\,\mathrm{mA}=\) {{500|Ω}}，選 D。`,
    `<b>⑥ 代回驗算</b><br>代入 \(R=240\,\Omega\)，得 \(I_Z=25-10=\) {{15|mA}}；代入 \(R=500\,\Omega\)，得 \(I_Z=12-10=\) {{2|mA}}，恰為兩個邊界。`
  ]},
  "114-27": {year:114, number:27, topic:"全波整流波形因數", answer:"C", choices:["1/√2","2√2/π","π/(2√2)","√2"], image:"114-27.png", counts:[2,4,7], steps:[
    `<b>① 寫出波形因數定義</b><br>\(K_f=V_{rms}/V_{avg}\)。`,
    `<b>② 全波整流有效值</b><br>\(V_{rms}=V_m/\sqrt2\)。`,
    `<b>③ 全波整流平均值</b><br>\(V_{avg}=2V_m/\pi\)。`,
    `<b>④ 代入定義</b><br>\(K_f=(V_m/\sqrt2)/(2V_m/\pi)=\) {{π/(2√2)|—}}。`,
    `<b>⑤ 數值檢查</b><br>\(K_f=\pi/(2\sqrt2)\approx\) {{1.111|—}}，所以選 {{C|—}}。`,
    `<b>⑥ 反向驗算</b><br>\(V_{rms}/K_f=(V_m/\sqrt2)/(\pi/2\sqrt2)=\) {{2Vm/π|V}}，回到正確平均值。`
  ]},
  "114-28": {year:114, number:28, topic:"二極體與 LED 基本觀念", answer:"D", choices:["空乏區電位差稱為順向偏壓","溫度升高時逆向飽和電流降低","LED 顏色主要由工作電壓決定","順向偏壓復合時釋放能量發光"], image:"114-28.png", counts:[2,4,7], steps:[
    `<b>① 檢查 A</b><br>空乏區內建電位是接面本身形成的位障，不等同外加順向偏壓，因此 A 錯。`,
    `<b>② 檢查 B</b><br>溫度升高會增加少數載子，逆向飽和電流通常 {{增加|—}}，因此 B 錯。`,
    `<b>③ 檢查 C</b><br>LED 發光顏色主要由半導體材料的 {{能隙|—}} 決定，不是由工作電壓大小決定。`,
    `<b>④ 檢查 D</b><br>順向偏壓下，電子與電洞 {{復合|—}} 時以光子形式釋放能量，敘述正確。`,
    `<b>⑤ 得出答案</b><br>唯一正確選項為 {{D|—}}。`,
    `<b>⑥ 能量關係驗算</b><br>光子能量滿足 \(E_g=hf=hc/\lambda\)；能隙決定頻率與 {{波長|—}}，再次排除 C。`
  ]},
  "114-42": {year:114, number:42, topic:"中心抽頭整流二極體平均電流", answer:"A", choices:["√2/π A","2√2/π A","√2 A","2√2 A"], image:"114-42.png", counts:[3,6,9], steps:[
    `<b>① 求每半次級有效值</b><br>\(V_{2,rms}=110(1/11)=\) {{10|V}}。`,
    `<b>② 求每半次級峰值</b><br>\(V_m=10\sqrt2\,\mathrm{V}\)。`,
    `<b>③ 求負載電流峰值</b><br>\(I_m=V_m/R_L=10\sqrt2/10=\) {{√2|A}}。`,
    `<b>④ 判斷單顆二極體導通區間</b><br>每顆二極體只導通半個週期，所以其全週期平均電流為 \(I_{D(avg)}=I_m/\pi\)。`,
    `<b>⑤ 計算答案</b><br>\(I_{D(avg)}=\sqrt2/\pi=\) {{√2/π|A}}，選 {{A|—}}。`,
    `<b>⑥ 交叉驗算</b><br>負載平均電流為 \(2I_m/\pi=2\sqrt2/\pi\,\mathrm{A}\)，兩顆二極體平均值相加為 {{2√2/π|A}}，一致。`
  ]},
  "115-27": {year:115, number:27, topic:"半波與全波整流比較", answer:"C", choices:["全波平均值 220√2/π V","半波平均值 220√2/π V","全波波形頻率 120 Hz","半波波形頻率 120 Hz"], image:"115-27.png", counts:[2,5,8], steps:[
    `<b>① 由角頻率求輸入頻率</b><br>\(\omega=377\,\mathrm{rad/s}\)，故 \(f=\omega/(2\pi)\approx\) {{60|Hz}}。`,
    `<b>② 確認輸入峰值</b><br>由 \(v(t)=110\sin(377t)\)，峰值為 {{110|V}}，不是 \(110\sqrt2\,\mathrm{V}\)。`,
    `<b>③ 半波平均值</b><br>\(V_{avg,HW}=V_m/\pi=\) {{110/π|V}}，故 B 錯。`,
    `<b>④ 全波平均值</b><br>\(V_{avg,FW}=2V_m/\pi=\) {{220/π|V}}，故 A 錯。`,
    `<b>⑤ 比較波形頻率</b><br>全波頻率 \(f_{FW}=2f=\) {{120|Hz}}；半波頻率仍為 {{60|Hz}}，因此選 C。`,
    `<b>⑥ 週期驗算</b><br>輸入週期約 \(1/60=16.67\,\mathrm{ms}\)，全波輸出相鄰脈波間隔為其一半，即 {{8.33|ms}}，對應 \(120\,\mathrm{Hz}\)。`
  ]},
  "115-44": {year:115, number:44, topic:"齊納穩壓限流電阻", answer:"B", choices:["450 Ω","500 Ω","650 Ω","700 Ω"], image:"115-44.png", counts:[3,7,11], steps:[
    `<b>① 求負載電流</b><br>\(I_L=P_L/V_O=60\,\mathrm{mW}/6\,\mathrm{V}=\) {{10|mA}}。`,
    `<b>② 求齊納最大電流</b><br>\(I_{Z(\max)}=P_{Z(\max)}/V_Z=60\,\mathrm{mW}/6\,\mathrm{V}=\) {{10|mA}}。`,
    `<b>③ 最小電阻的臨界條件</b><br>電阻最小時串聯電流最大；為不超過額定功率，取 \(I_Z=I_{Z(\max)}\)。`,
    `<b>④ 求最大串聯電流</b><br>\(I_{S(\max)}=I_L+I_{Z(\max)}=10+10=\) {{20|mA}}。`,
    `<b>⑤ 求限流電阻最小值</b><br>\(R_{S(\min)}=(V_S-V_Z)/I_{S(\max)}=(16-6)/20\,\mathrm{mA}=\) {{500|Ω}}，選 B。`,
    `<b>⑥ 代回驗算</b><br>\(I_S=(16-6)/500=\) {{20|mA}}，\(I_Z=20-10=\) {{10|mA}}，\(P_Z=6(10\,\mathrm{mA})=\) {{60|mW}}，恰等於額定值。`
  ]}
};

(function activateRemainingChapter4(){
  const id=new URLSearchParams(location.search).get("id");
  const q=chapter4Remaining[id];
  if(!q)return;
  const cropRoot=location.protocol==="file:"?"file:///C:/Users/Eli/.codex/visualizations/2026/08/13/019ffba4-80b5-7ed3-a9a4-ee902d86127c/chapter4_questions/":"assets/chapter4/";
  const unitAliases={V:["v","伏特"],mA:["ma","毫安培"],Hz:["hz","赫茲"],s:["s","秒"],ms:["ms","毫秒"],Ω:["ω","Ω","ohm","ohms","歐姆"],mW:["mw","毫瓦"],A:["a","安培"],"—":["—","-","無","無單位"]};
  const norm=v=>v.trim().replace(/,/g,"").replace(/\s/g,"").toLowerCase();
  const marker=/\{\{(.*?)\|(.*?)\}\}/g;
  function solution(){
    let token=0,limit=q.counts[level-2];
    return `<div class="steps">${q.steps.map(step=>`<div class="step">${step.replace(marker,(_,answer,unit,offset)=>{
      token++; if(token>limit)return `<strong>${answer}</strong>${unit==="—"?"":` \\(${unit}\\)`}`;
      const key=`c4-${id}-${token}`;
      const unitField=unit==="—"?`<span class="dimensionless">無單位</span>`:`<input class="unitInput" data-unit="${unit}" placeholder="${unit}" aria-label="第 ${token} 格單位">`;
      const field=`<span class="blankRef">${token}</span><span class="answerPair"><input class="blank" id="${key}" data-answer="${answer}" placeholder="數值或文字">${unitField}</span>`;
      const prefix=step.slice(0,offset),inInline=prefix.lastIndexOf("\\(")>prefix.lastIndexOf("\\)"),inDisplay=prefix.lastIndexOf("\\[")>prefix.lastIndexOf("\\]");
      return inInline?`\\) ${field} \\(`:inDisplay?`\\] ${field} \\[`:field;
    })}</div>`).join("")}</div>`;
  }
  content=function(){
    if(level===1)return `<div class="choices">${q.choices.map((choice,i)=>`<button class="choice" data-value="${"ABCD"[i]}"><span>${"ABCD"[i]}</span><b>${choice}</b></button>`).join("")}</div>`;
    return solution();
  };
  const baseRender=render;
  render=function(){
    baseRender();
    document.querySelector(".meta .tag:first-child").textContent=`${q.year} 年第 ${q.number} 題`;
    document.querySelector(".meta .tag:last-child").textContent=q.topic;
    const img=document.querySelector(".imageWrap img");img.src=cropRoot+q.image;img.alt=`${q.year} 年第 ${q.number} 題原始試題切圖`;
    document.getElementById("questionTabs").innerHTML=Object.keys(chapter4Remaining).map(key=>`<button style="margin:0 8px 12px 0;padding:9px 14px;border:1px solid #dce3e8;border-radius:9px;cursor:pointer;${key===id?'color:#fff;background:#1764d7;':''}" onclick="location.href='?id=${key}'">${key}</button>`).join("");
  };
  document.getElementById("check").onclick=()=>{
    if(level===1){const picked=document.querySelector(".choice.selected");if(!picked){show(false,"請先選擇一個答案。");return}document.querySelectorAll(".choice").forEach(b=>{b.classList.toggle("correct",b.dataset.value===q.answer);b.classList.toggle("wrong",b===picked&&b.dataset.value!==q.answer)});const ok=picked.dataset.value===q.answer;show(ok,`${ok?"答對了":"答案不正確"}；正確答案是 ${q.answer}。`);saveAttempt({question:id,level,total:1,right:ok?1:0,unitTotal:0,unitRight:0});return}
    const values=[...document.querySelectorAll(".blank")],units=[...document.querySelectorAll(".unitInput")];let right=0,unitRight=0;
    values.forEach(f=>{const ok=norm(f.value)===norm(f.dataset.answer);f.classList.toggle("good",ok);f.classList.toggle("bad",!ok);right+=ok?1:0});
    units.forEach(u=>{const expected=u.dataset.unit;const ok=(unitAliases[expected]||[expected]).map(norm).includes(norm(u.value));u.classList.toggle("good",ok);u.classList.toggle("bad",!ok);unitRight+=ok?1:0});
    const ok=right===values.length&&unitRight===units.length;show(ok,`數值／文字答對 ${right}/${values.length} 格；單位答對 ${unitRight}/${units.length} 格。${ok?"完整計算正確！":"紅色欄位請再檢查。"}`);saveAttempt({question:id,level,total:values.length,right,unitTotal:units.length,unitRight});
  };
  render();
})();

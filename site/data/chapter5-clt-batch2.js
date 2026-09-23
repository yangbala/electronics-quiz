const chapter5CLTBatch2={
"113-32":{blanks:[
{a:"P 型|P型",label:"①",why:"P 通道元件的源極與汲極必須由 P 型半導體形成，才能提供電洞導電路徑。"},
{a:"N 型|N型",label:"②",why:"N 通道元件的源極與汲極必須由 N 型半導體形成，主要載子為電子。"},
{a:"截止|cutoff",label:"③",why:"增強型 MOSFET 在零閘源偏壓時尚未形成反轉通道，因此不導通。"},
{a:"單極性|unipolar",label:"④",why:"FET 的導電以一種多數載子為主；BJT 則同時涉及電子與電洞。"},
{a:"A",label:"⑤",why:"選項 A 正確配對通道型別、摻雜區以及單極性／雙極性的物理特徵。"}],
model:String.raw`先以「通道主要載子」判斷摻雜型別：P 通道 MOSFET 的源極與汲極為 {{0}}，N 通道 MOSFET 的源極與汲極為 {{1}}。`,
derivation:String.raw`<b>步驟 1：辨認零偏壓狀態</b><br>增強型 MOSFET 在 \(V_{GS}=0\) 時為 {{2}}；空乏型則已有實體通道。<br><br><b>步驟 2：比較載子機制</b><br>FET 主要由一種多數載子導電，故屬 {{3}} 元件；BJT 由兩種載子參與，故屬雙極性元件。<br><br><b>步驟 3：逐項核對</b><br>只有 {{4}} 同時符合以上三項物理判準。`,
self:"為什麼『閘極幾乎沒有直流電流』不等於『通道沒有電流』？請由絕緣閘極與通道載子分別說明。",challenge:String.raw`若改問 P 通道空乏型 MOSFET 在 \(V_{GS}=0\) 時是否導通，請判斷並說明主要載子。<br><b>第一步提示：</b>先分辨「空乏型」是否在製程中已建立通道。`},
"113-35":{blanks:[
{a:"I_D=(V_{DD}-V_{DS})/(R_D+R_S)",label:"①",why:String.raw`汲極與源極電阻流過同一個直流 \(I_D\)，由電源到接地寫 KVL 可直接求電流。`},
{a:"I_D=I_{DSS}(1-V_{GS}/V_P)^2",label:"②",why:"空乏型 MOSFET 的轉移特性使用 Shockley 方程式。"},
{a:"V_{GS}=V_P(1-\\sqrt{I_D/I_{DSS}})",label:"③",why:"由 Shockley 式反解控制電壓，並選取題目工作區所對應的根。"},
{a:"V_G=V_S+V_{GS}",label:"④",why:String.raw`由定義 \(V_{GS}=V_G-V_S\) 移項即可得到閘極所需電位。`},
{a:"15kΩ|15kohm|15000ohm",label:"⑤",why:String.raw`分壓器必須提供 \(1.0\,\mathrm{V}\) 的閘極電位，反解得到 \(R_G=15\,\mathrm{k}\Omega\)。`}],
model:String.raw`忽略閘極電流，並假設 MOSFET 工作於飽和區。輸出迴路先用 {{0}} 求 \(I_D\)，再用 {{1}} 連結 \(I_D\) 與 \(V_{GS}\)。`,
derivation:String.raw`<b>步驟 1：由輸出迴路求偏壓電流</b>\[I_D=\frac{15-7.5}{(1.5+1.5)\,\mathrm{k}\Omega}=2.5\,\mathrm{mA}\]<b>步驟 2：由轉移特性求 \(V_{GS}\)</b><br>{{2}}。\[V_{GS}=(-3)\left(1-\sqrt{\frac{2.5}{10}}\right)=-1.5\,\mathrm{V}\]<b>步驟 3：求閘極所需電位</b>\[V_S=I_DR_S=(2.5\,\mathrm{mA})(1.0\,\mathrm{k}\Omega)=2.5\,\mathrm{V}\]{{3}}，所以\[V_G=2.5-1.5=1.0\,\mathrm{V}\]<b>步驟 4：反解分壓電阻</b>\[1.0=15\frac{R_G}{210\,\mathrm{k}\Omega+R_G}\]\[210\,\mathrm{k}\Omega+R_G=15R_G\]\[R_G=15\,\mathrm{k}\Omega\]因此 {{4}}，選 C。`,
self:String.raw`為什麼本題不能把 \(V_G\) 直接當作 \(V_{GS}\)？請指出源極電阻造成的電位差。`,challenge:String.raw`若 \(R_S\) 改為 \(2\,\mathrm{k}\Omega\)，其餘工作點不變，重新設計 \(R_G\)。<br><b>第一步提示：</b>先由 \(V_S=I_DR_S\) 更新源極電位。`},
"113-46":{blanks:[
{a:"V_{GS}>V_t",label:"①",why:"增強型 N 通道 MOSFET 必須先超過臨界電壓才會形成反轉通道。"},
{a:"V_{OV}=V_{GS}-V_t",label:"②",why:"過驅電壓衡量閘源電壓超過臨界值的程度。"},
{a:"V_{DS}≥V_{OV}|VDS>=VOV",label:"③",why:String.raw`N 通道增強型 MOSFET 進入飽和區的邊界條件為 \(V_{DS}\ge V_{GS}-V_t\)。`},
{a:"V_{GS}=3V,V_{DS}=1.5V",label:"④",why:String.raw`此組數值有 \(V_{OV}=0.5\,\mathrm{V}\)，且 \(1.5\ge0.5\)，符合飽和區。`},
{a:"C",label:"⑤",why:String.raw`A、B 的 \(V_{DS}\) 小於 \(V_{OV}\)，D 則未達臨界電壓，只有 C 合格。`}],
model:String.raw`對增強型 N 通道 MOSFET，先檢查導通條件 {{0}}，再定義 {{1}}。`,
derivation:String.raw`<b>步驟 1：寫出飽和區判準</b><br>導通後還必須滿足 {{2}}。<br><br><b>步驟 2：逐項檢查</b>\[\begin{aligned}\text{A: }&V_{OV}=5-2.5=2.5\,\mathrm{V},\quad1\lt 2.5\quad(\text{三極區})\\\text{B: }&V_{OV}=4-2.5=1.5\,\mathrm{V},\quad1.2\lt 1.5\quad(\text{三極區})\\\text{C: }&V_{OV}=3-2.5=0.5\,\mathrm{V},\quad1.5\ge0.5\quad(\text{飽和區})\\\text{D: }&V_{GS}=2\lt 2.5\,\mathrm{V}\quad(\text{截止})\end{aligned}\]<b>步驟 3：提煉答案</b><br>符合條件的是 {{3}}，所以選 {{4}}。`,
self:String.raw`為什麼 \(V_{DS}\) 很大仍不保證元件導通？請區分『形成通道』與『通道夾止』兩個條件。`,challenge:String.raw`若臨界電壓改為 \(V_t=2.0\,\mathrm{V}\)，四個選項中哪些會落在飽和區？<br><b>第一步提示：</b>逐項先算新的 \(V_{OV}=V_{GS}-V_t\)。`},
"113-47":{blanks:[
{a:"V_{GS}=V_G-V_S",label:"①",why:"MOSFET 的控制量是閘極相對源極的電壓，而不是閘極對地電壓。"},
{a:"I_D=(V_{DD}-V_D)/R_D",label:"②",why:"汲極電阻上的壓降除以電阻即可得到直流汲極電流。"},
{a:"V_{OV}=V_{GS}-V_t",label:"③",why:"平方律以過驅電壓表示最直接。"},
{a:"I_D=K V_{OV}^2",label:"④",why:String.raw`題目採用的飽和區模型將係數定義為 \(K\)，不另含 \(1/2\)。`},
{a:"20mA/V^2|20mA/V²",label:"⑤",why:String.raw`由 \(K=I_D/V_{OV}^2\) 代入 \(5\,\mathrm{mA}\) 與 \(0.5\,\mathrm{V}\) 得到。`}],
model:String.raw`源極接地，因此先用控制變數定義 {{0}}；汲極迴路則用 {{1}} 求工作電流。`,
derivation:String.raw`<b>步驟 1：求直流工作點</b>\[V_{GS}=2.5-0=2.5\,\mathrm{V}\]\[I_D=\frac{12-6}{1.2\,\mathrm{k}\Omega}=5\,\mathrm{mA}\]<b>步驟 2：求過驅電壓</b><br>{{2}}。\[V_{OV}=2.5-2.0=0.5\,\mathrm{V}\]<b>步驟 3：由平方律反解 \(K\)</b><br>{{3}}。\[K=\frac{I_D}{V_{OV}^2}=\frac{5}{(0.5)^2}=20\,\mathrm{mA/V^2}\]<b>步驟 4：檢查工作區</b>\[V_{DS}=6\,\mathrm{V}\ge V_{OV}=0.5\,\mathrm{V}\]故平方律假設成立，{{4}}，選 B。`,
self:String.raw`同一顆 MOSFET 的 \(K\) 是元件參數；為何改變偏壓後 \(I_D\) 會變而 \(K\) 不應跟著變？`,challenge:String.raw`若閘極電壓提高至 \(3.0\,\mathrm{V}\)，用已求得的 \(K\) 預測新的 \(I_D\)。<br><b>第一步提示：</b>先計算新的 \(V_{OV}\)。`},
"114-31":{blanks:[
{a:"導通|on",label:"①",why:String.raw`空乏型 MOSFET 在製程中已有通道，因此 \(V_{GS}=0\) 時仍能導通。`},
{a:"負|negative",label:"②",why:"P 通道增強型元件要形成電洞通道，閘極需相對源極為負。"},
{a:"截止|cutoff",label:"③",why:"增強型 MOSFET 在零閘源偏壓時沒有反轉通道。"},
{a:"P 型|P型",label:"④",why:"N 通道元件須在 P 型基板表面反轉形成 N 型通道。"},
{a:"D",label:"⑤",why:"選項 D 正確指出 N 通道 MOSFET 使用 P 型基板，再由正閘壓形成 N 型反轉通道。"}],
model:String.raw`依序檢查「是否預先形成通道」「閘極電壓極性」與「基板摻雜型別」。空乏型在 \(V_{GS}=0\) 時 {{0}}。`,
derivation:String.raw`<b>步驟 1：判斷通道與偏壓</b><br>P 通道增強型需要 {{1}} 的 \(V_{GS}\)；增強型元件在 \(V_{GS}=0\) 時為 {{2}}。因此 A、B、C 都不正確。<br><br><b>步驟 2：判斷元件結構</b><br>N 通道 MOSFET 的源／汲極為 N 型，而基板應為 {{3}}。<br><br><b>步驟 3：提煉答案</b><br>選項 {{4}} 正確描述 N 通道 MOSFET 的基板摻雜型別，因此答案為 D。`,
self:"為什麼 N 通道元件反而使用 P 型基板？請用『反轉層』說明閘極電場如何建立通道。",challenge:String.raw`若改成 P 通道 MOSFET，基板、源極與汲極各應為何種摻雜？<br><b>第一步提示：</b>先把 N 通道結構的所有摻雜型別對調。`}
};
activateChapter5CLTBatch(chapter5CLTBatch2);

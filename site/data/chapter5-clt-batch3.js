const chapter5CLTBatch3={
"114-32":{blanks:[
{a:"I_D=I_{DSS}(1-V_{GS}/V_P)^2",label:"①",why:"空乏型 MOSFET 在飽和區的直流轉移特性使用 Shockley 方程式。"},{a:"V_S=I_D R_S",label:"②",why:"源極電阻承受近似等於汲極電流的源極電流，故可求源極直流電位。"},{a:"V_G=V_S+V_{GS}",label:"③",why:"由定義式 \(V_{GS}=V_G-V_S\) 移項可得。"},{a:"V_G=V_{DD}R_{G2}/(R_{G1}+R_{G2})",label:"④",why:"MOS 閘極直流電流近似為零，閘極電阻可視為未負載分壓器。"},{a:"202.2kΩ|202.2kohm",label:"⑤",why:"令分壓器輸出 \(1.08\,\mathrm{V}\)，代入 \(R_{G2}=20\,\mathrm{k}\Omega\) 後反解。"}],
model:String.raw`假設空乏型 MOSFET 工作於飽和區且 \(I_G\approx0\)。以 {{0}} 求 \(V_{GS}\)，再用源極電阻與閘極分壓器建立偏壓。`,
derivation:String.raw`<b>步驟 1：由指定電流反求 \(V_{GS}\)</b>\[\sqrt{\frac{I_D}{I_{DSS}}}=\sqrt{\frac{1.44}{9}}=0.4\]\[1-\frac{V_{GS}}{-3}=0.4\]\[V_{GS}=-1.8\,\mathrm{V}\]<b>步驟 2：求源極與閘極電位</b><br>{{1}}。\[V_S=(1.44\,\mathrm{mA})(2\,\mathrm{k}\Omega)=2.88\,\mathrm{V}\]{{2}}。\[V_G=2.88-1.8=1.08\,\mathrm{V}\]<b>步驟 3：反解分壓電阻</b><br>{{3}}。\[1.08=12\frac{20}{R_{G1}+20}\]\[1.08R_{G1}+21.6=240\]\[R_{G1}=202.2\,\mathrm{k}\Omega\]<b>步驟 4：工作區驗證</b>\[V_D=12-(1.44)(2.7)=8.112\,\mathrm{V}\]\[V_{DS}=8.112-2.88=5.232\,\mathrm{V}>V_{GS}-V_P=1.2\,\mathrm{V}\]故結果 {{4}} 合理，選 A。`,
self:"本題的 \(V_{GS}\) 為負，但 \(V_G\) 仍為正，兩者為何不矛盾？請比較閘極與源極的絕對電位。",challenge:String.raw`若指定 \(I_D=2.25\,\mathrm{mA}\)，其餘元件不變，重新設計 \(R_{G1}\)。<br><b>第一步提示：</b>從 Shockley 方程式反解新的 \(V_{GS}\)。`},
"114-33":{blanks:[
{a:"g_{m0}=2I_{DSS}/|V_P|",label:"①",why:"\(g_{m0}\) 是 \(V_{GS}=0\) 時的最大轉移電導，可由 Shockley 特性的斜率得到。"},{a:"g_m=g_{m0}(1-V_{GS}/V_P)",label:"②",why:"空乏型 MOSFET 的小訊號轉移電導會隨偏壓線性縮放。"},{a:"0.25|1/4",label:"③",why:"代入 \(V_{GS}=-3\,\mathrm{V}\)、\(V_P=-4\,\mathrm{V}\)，縮放因子為 \(1-3/4=1/4\)。"},{a:"1.25mA/V|1.25 mA/V",label:"④",why:"最大轉移電導 \(5\,\mathrm{mA/V}\) 乘以 \(0.25\) 即得。"},{a:"g_m=2\\sqrt{I_{DSS}I_D}/|V_P|",label:"⑤",why:"先由 Shockley 式求 \(I_D\)，再用等價式可獨立核對 \(g_m\)。"}],
model:String.raw`採用空乏型 MOSFET 的 Shockley 小訊號模型。先求零偏壓最大值 {{0}}，再用偏壓關係 {{1}}。`,
derivation:String.raw`<b>步驟 1：求最大轉移電導</b>\[g_{m0}=\frac{2(10\,\mathrm{mA})}{4\,\mathrm{V}}=5\,\mathrm{mA/V}\]<b>步驟 2：計算偏壓縮放因子</b>\[1-\frac{V_{GS}}{V_P}=1-\frac{-3}{-4}=0.25\]此因子為 {{2}}。<br><br><b>步驟 3：求工作點轉移電導</b>\[g_m=(5)(0.25)=1.25\,\mathrm{mA/V}\]所以 {{3}}，選 B。<br><br><b>步驟 4：獨立驗算</b>\[I_D=10(0.25)^2=0.625\,\mathrm{mA}\]利用 {{4}}：\[g_m=\frac{2\sqrt{(10)(0.625)}}4=1.25\,\mathrm{mA/V}\]兩條路徑一致。`,
self:"當 \(V_{GS}\) 從 0 變得更負並接近 \(V_P\) 時，為何 \(g_m\) 會逐漸降為零？",challenge:String.raw`若 \(V_{GS}=-2\,\mathrm{V}\)，求新的 \(g_m\)。<br><b>第一步提示：</b>先計算 \(1-V_{GS}/V_P\)。`},
"114-34":{blanks:[
{a:"I_D=K V_{OV}^2",label:"①",why:"題目採用的增強型 MOSFET 飽和區平方律模型以 \(K\) 表示製程與尺寸參數。"},{a:"g_m=2K V_{OV}",label:"②",why:"對平方律的 \(I_D\) 對 \(V_{GS}\) 微分，即得到小訊號轉移電導。"},{a:"V_{OV}=\\sqrt{I_D/K}",label:"③",why:"由平方律反解過驅電壓，正根對應導通狀態。"},{a:"g_m=2\\sqrt{K I_D}",label:"④",why:"將 \(V_{OV}\) 代入 \(2KV_{OV}\)，可直接由 \(K\) 與 \(I_D\) 求 \(g_m\)。"},{a:"1.2mA/V|1.2 mA/V",label:"⑤",why:"代入 \(K=0.3\,\mathrm{mA/V^2}\) 與 \(I_D=1.2\,\mathrm{mA}\) 得到。"}],
model:String.raw`假設增強型 MOSFET 工作於飽和區，使用題目定義的平方律 {{0}}；小訊號斜率為 {{1}}。`,
derivation:String.raw`<b>步驟 1：消去過驅電壓</b><br>{{2}}。\[V_{OV}=\sqrt{\frac{1.2}{0.3}}=2\,\mathrm{V}\]<b>步驟 2：求轉移電導</b>\[g_m=2(0.3)(2)=1.2\,\mathrm{mA/V}\]亦可合併為 {{3}}：\[g_m=2\sqrt{(0.3)(1.2)}=1.2\,\mathrm{mA/V}\]<b>步驟 3：提煉答案</b><br>{{4}}，選 A。`,
self:"若 \(I_D\) 增加四倍，平方律模型下 \(g_m\) 會增加幾倍？請由 \(g_m\propto\sqrt{I_D}\) 解釋。",challenge:String.raw`若 \(K\) 不變而 \(I_D=2.7\,\mathrm{mA}\)，求 \(g_m\)。<br><b>第一步提示：</b>使用 \(g_m=2\sqrt{KI_D}\)。`},
"115-32":{blanks:[
{a:"沒有預先形成通道|無預設通道",label:"①",why:"增強型 MOSFET 必須靠閘極電場產生反轉層，製程中沒有零偏壓導電通道。"},{a:"V_{GS}>V_t",label:"②",why:"N 通道增強型元件需讓閘源電壓超過臨界電壓才能形成通道。"},{a:"導通|on",label:"③",why:"空乏型 MOSFET 已有實體通道，所以 \(V_{GS}=0\) 時仍有 \(I_{DSS}\)。"},{a:"減少通道電流|降低I_D",label:"④",why:"對 N 通道空乏型元件施加負 \(V_{GS}\) 會排斥電子、空乏通道並降低電流。"},{a:"B",label:"⑤",why:"選項 B 正確指出增強型需先形成通道，而空乏型在零偏壓即可導通。"}],
model:String.raw`以 \(V_{GS}=0\) 時是否已有導電路徑區分兩類元件：增強型 {{0}}，而空乏型已有通道。`,
derivation:String.raw`<b>步驟 1：增強型</b><br>N 通道增強型的導通條件為 {{1}}；未達臨界值時截止。<br><br><b>步驟 2：空乏型</b><br>空乏型在 \(V_{GS}=0\) 時仍 {{2}}。對 N 通道元件施加負 \(V_{GS}\) 會 {{3}}；施加正 \(V_{GS}\) 則增加通道載子。<br><br><b>步驟 3：提煉答案</b><br>最符合兩者差異的是 {{4}}。`,
self:"為什麼空乏型元件既能使用負 \(V_{GS}\) 降低電流，也能使用正 \(V_{GS}\) 增加電流？",challenge:String.raw`畫出增強型與空乏型 N 通道 MOSFET 的概略 \(I_D\)-\(V_{GS}\) 曲線，標出 \(V_t\)、\(I_{DSS}\) 與 \(V_P\)。<br><b>第一步提示：</b>先標示兩條曲線在 \(V_{GS}=0\) 時的電流是否為零。`},
"115-35":{blanks:[
{a:"I_D=K(V_{GS}-V_t)^2",label:"①",why:"增強型 MOSFET 在飽和區遵循平方律，控制量為超過臨界值的電壓。"},{a:"V_{OV}=V_{GS}-V_t",label:"②",why:"以過驅電壓可清楚連結直流與小訊號模型。"},{a:"g_m=2K V_{OV}",label:"③",why:"轉移電導是 \(I_D\) 對 \(V_{GS}\) 的斜率。"},{a:"g_m=2\\sqrt{K I_D}",label:"④",why:"消去 \(V_{OV}\) 後，可由偏壓電流直接計算轉移電導。"},{a:"1mA/V|1 mA/V",label:"⑤",why:"代入 \(K=0.25\,\mathrm{mA/V^2}\)、\(I_D=1\,\mathrm{mA}\) 可得。"}],
model:String.raw`使用增強型 MOSFET 飽和區模型 {{0}}，並定義 {{1}}。`,
derivation:String.raw`<b>步驟 1：建立小訊號斜率</b><br>{{2}}。<br><br><b>步驟 2：消去未知的 \(V_{OV}\)</b>\[V_{OV}=\sqrt{\frac{I_D}{K}}\]\[g_m=2K\sqrt{\frac{I_D}{K}}=2\sqrt{KI_D}\]因此可寫成 {{3}}。<br><br><b>步驟 3：代入數值</b>\[g_m=2\sqrt{(0.25)(1)}=1\,\mathrm{mA/V}\]所以 {{4}}，選 A。`,
self:"為什麼 \(g_m\) 的單位是安培／伏特，而且它可以解讀為受控電流源的比例常數？",challenge:String.raw`若維持同一顆 MOSFET，將 \(I_D\) 提高至 \(4\,\mathrm{mA}\)，求新的 \(g_m\)。<br><b>第一步提示：</b>先觀察 \(g_m\) 與 \(\sqrt{I_D}\) 的比例。`},
"115-36":{blanks:[
{a:"V_S=I_D R_S",label:"①",why:"源極電阻將指定偏壓電流轉換為源極直流電位。"},{a:"V_{OV}=\\sqrt{I_D/K}",label:"②",why:"由飽和區平方律反解過驅電壓。"},{a:"V_{GS}=V_t+V_{OV}",label:"③",why:"過驅電壓的定義為 \(V_{OV}=V_{GS}-V_t\)。"},{a:"V_G=V_S+V_{GS}",label:"④",why:"控制電壓定義顯示閘極電位需同時補償源極電位。"},{a:"155.32kΩ|155.32kohm|155.3kohm",label:"⑤",why:"分壓器須輸出 \(4.7\,\mathrm{V}\)，反解上方電阻得到約 \(155.32\,\mathrm{k}\Omega\)。"}],
model:String.raw`忽略閘極電流並假設飽和區。設計順序是：先由 {{0}} 求源極電位，再由平方律求控制電壓。`,
derivation:String.raw`<b>步驟 1：求源極電位</b>\[V_S=(1\,\mathrm{mA})(1.2\,\mathrm{k}\Omega)=1.2\,\mathrm{V}\]<b>步驟 2：求所需閘源電壓</b><br>{{1}}。\[V_{OV}=\sqrt{\frac{1}{0.25}}=2\,\mathrm{V}\]{{2}}。\[V_{GS}=1.5+2=3.5\,\mathrm{V}\]<b>步驟 3：求閘極電位</b><br>{{3}}。\[V_G=1.2+3.5=4.7\,\mathrm{V}\]<b>步驟 4：反解分壓電阻</b>\[4.7=12\frac{100\,\mathrm{k}\Omega}{R_{G1}+100\,\mathrm{k}\Omega}\]\[4.7R_{G1}+470=1200\]\[R_{G1}=155.32\,\mathrm{k}\Omega\]所以 {{4}}，選 C。<br><br><b>步驟 5：回代驗算</b>\[12\frac{100}{155.32+100}=4.700\,\mathrm{V}\]\[V_{GS}=4.700-1.200=3.500\,\mathrm{V}\]\[I_D=0.25(3.5-1.5)^2=1.00\,\mathrm{mA}\]與指定工作點一致。`,
self:"為什麼分壓器設定的是 \(V_G\) 而不是直接設定 \(V_{GS}\)？源極退化電阻在偏壓穩定上扮演什麼角色？",challenge:String.raw`若 \(R_S\) 改為 \(2.0\,\mathrm{k}\Omega\)，仍要求 \(I_D=1\,\mathrm{mA}\)，重新設計 \(R_{G1}\)。<br><b>第一步提示：</b>先更新 \(V_S=I_DR_S\)，再求新的 \(V_G\)。`}
};
activateChapter5CLTBatch(chapter5CLTBatch3);


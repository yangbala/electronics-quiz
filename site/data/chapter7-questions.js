const chapter7Questions={
"111-47":{year:111,number:47,topic:"MOSFET 共源極放大器示波器量測",answer:"D",choices:["15","1.5","−15","−29"],counts:[2,5,8],steps:[
String.raw`<b>① 判斷相位</b><br>CH1 與 CH2 的峰、谷方向相反，因此輸出與輸入相差 \(180^\circ\)，電壓增益為{{負值|—}}。`,
String.raw`<b>② 讀取輸入峰對峰格數</b><br>CH1 由最高點至最低點約為{{3|格}}。`,
String.raw`<b>③ 換算輸入峰對峰電壓</b><br>CH1 為 \(50\,\mathrm{mV/DIV}\)，所以 \(V_{i(pp)}=3\times50={{150|mV}}={{0.150|V}}\)。`,
String.raw`<b>④ 讀取輸出峰對峰電壓</b><br>CH2 約跨 \(4.4\) 格，且為 \(1\,\mathrm{V/DIV}\)，故 \(V_{o(pp)}\approx{{4.4|V}}\)。`,
String.raw`<b>⑤ 求電壓增益</b><br>\(A_v=\dfrac{v_o}{v_i}\approx-\dfrac{4.4}{0.150}={{-29.3|—}}\approx{{-29|—}}\)，故選 D。`,
String.raw`<b>⑥ 反算驗證</b><br>若 \(A_v=-29\)，則 \(V_{o(pp)}=|A_v|V_{i(pp)}=29(0.150)={{4.35|V}}\)，約為 CH2 的 \(4.4\) 格，與圖形一致。`]},
"112-35":{year:112,number:35,topic:"MOSFET 共源極放大器電壓增益",answer:"D",choices:["−8.6","−6.22","−5.12","−4.33"],counts:[2,4,7],steps:[
String.raw`<b>① 判斷交流組態</b><br>源極電阻被電容旁路，交流時源極近似接地，屬於{{共源極|—}}放大器。`,
String.raw`<b>② 寫出中頻增益式</b><br>忽略 \(r_d\) 時，\(A_v=-g_m(R_D\parallel R_L)\)。`,
String.raw`<b>③ 合併汲極交流負載</b><br>\(R_D\parallel R_L=2.2\parallel10=\dfrac{2.2\times10}{2.2+10}={{1.803|kΩ}}\)。`,
String.raw`<b>④ 統一量綱</b><br>\((\mathrm{mA/V})(\mathrm{k}\Omega)\) 的乘積為{{無單位|—}}。`,
String.raw`<b>⑤ 代入求增益</b><br>\(A_v=-(2.4)(1.803)={{-4.327|—}}\approx{{-4.33|—}}\)，故選 D。`,
String.raw`<b>⑥ 反算驗證</b><br>取 \(v_i=1\,\mathrm{V}\)，則 \(i_d=g_mv_i={{2.4|mA}}\)，\(v_o=-i_d(R_D\parallel R_L)=-(2.4)(1.803)={{-4.33|V}}\)，與增益結果相同。`]},
"113-33":{year:113,number:33,topic:"MOSFET 共閘極放大器電流增益",answer:"D",choices:["0.81","0.62","0.36","0.13"],counts:[2,5,8],steps:[
String.raw`<b>① 判斷組態</b><br>閘極交流接地、信號由源極輸入，故為{{共閘極|—}}放大器。`,
String.raw`<b>② 以源極電壓表示輸入電流</b><br>忽略 \(r_d\)，\(i_i=v_s(1/R_S+g_m)\)。`,
String.raw`<b>③ 計算輸入等效導納</b><br>\(1/R_S+g_m=1/1\,\mathrm{k}\Omega+4\,\mathrm{mS}={{5|mS}}\)。`,
String.raw`<b>④ 求流入汲極節點的訊號電流</b><br>\(i_d=g_mv_s={{4|mS}}v_s\)。`,
String.raw`<b>⑤ 由電流分配求負載電流</b><br>\(i_o=i_d\dfrac{R_D}{R_D+R_L}=4v_s\dfrac{2}{2+10}={{0.6667|mS}}v_s\)。`,
String.raw`<b>⑥ 求電流增益</b><br>\(A_i=\dfrac{i_o}{i_i}=\dfrac{0.6667}{5}={{0.1333|—}}\approx{{0.13|—}}\)，故選 D。`,
String.raw`<b>⑦ 數值驗證</b><br>令 \(v_s=1\,\mathrm{V}\)，則 \(i_i={{5|mA}}\)、\(i_o={{0.667|mA}}\)，兩者比值仍為 \(0.133\)。`]},
"115-33":{year:115,number:33,topic:"JFET 共源極放大器電壓增益",answer:"D",choices:["7.5","2.5","−2.5","−7.5"],counts:[2,4,6],steps:[
String.raw`<b>① 求閘源電壓</b><br>源極接地且閘極為 \(-V_{GG}\)，故 \(V_{GS}={{-2|V}}\)。`,
String.raw`<b>② 檢查工作範圍</b><br>\(V_P=-4\,\mathrm{V}\lt V_{GS}=-2\,\mathrm{V}\lt 0\)，元件位於可放大的夾止區。`,
String.raw`<b>③ 求零偏壓轉移電導</b><br>\(g_{m0}=\dfrac{2I_{DSS}}{|V_P|}=\dfrac{2(10)}{4}={{5|mS}}\)。`,
String.raw`<b>④ 求工作點轉移電導</b><br>\(g_m=g_{m0}\left(1-\dfrac{V_{GS}}{V_P}\right)=5\left(1-\dfrac{-2}{-4}\right)={{2.5|mS}}\)。`,
String.raw`<b>⑤ 求中頻電壓增益</b><br>\(A_v=-g_mR_D=-(2.5\,\mathrm{mS})(3\,\mathrm{k}\Omega)={{-7.5|—}}\)，故選 D。`,
String.raw`<b>⑥ 以汲極電流驗證</b><br>\(I_D=I_{DSS}(1-V_{GS}/V_P)^2=10(1-0.5)^2={{2.5|mA}}\)，且 \(g_m=2I_D/(V_{GS}-V_P)=5/2={{2.5|mS}}\)，與前式一致。`]}}
;(function(){Object.assign(chapter7Questions,{
"113-36":{year:113,number:36,topic:"JFET 共源極放大器電壓增益",answer:"A",choices:["−1.28","−1.86","−2.25","−3.25"],counts:[3,6,10],steps:[
String.raw`<b>① 由汲源電壓求工作點電流</b><br>\(V_{DS}=15-I_D(R_D+R_S)\)，故 \(7.5=15-I_D(2+1)\)，得到 \(I_D={{2.5|mA}}\)。`,
String.raw`<b>② 求工作點轉移電導</b><br>\(g_m=\dfrac{2}{|V_P|}\sqrt{I_{DSS}I_D}=\dfrac{2}{3}\sqrt{10\times2.5}={{3.333|mS}}\)。`,
String.raw`<b>③ 合併汲極交流負載</b><br>\(R_D\parallel R_L=2\parallel10={{1.667|kΩ}}\)。`,
String.raw`<b>④ 寫出未旁路源極電阻的增益式</b><br>\(A_v=-\dfrac{g_m(R_D\parallel R_L)}{1+g_mR_S}\)。`,
String.raw`<b>⑤ 計算分子</b><br>\(g_m(R_D\parallel R_L)=(3.333)(1.667)={{5.556|—}}\)。`,
String.raw`<b>⑥ 計算分母</b><br>\(1+g_mR_S=1+(3.333)(1)={{4.333|—}}\)。`,
String.raw`<b>⑦ 求電壓增益</b><br>\(A_v=-5.556/4.333={{-1.282|—}}\approx{{-1.28|—}}\)，故選 A。`,
String.raw`<b>⑧ 工作點驗算</b><br>\(V_D=15-(2.5)(2)={{10|V}}\)，\(V_S=(2.5)(1)={{2.5|V}}\)，所以 \(V_{DS}=10-2.5={{7.5|V}}\)，符合題設。`]},
"114-29":{year:114,number:29,topic:"BJT 射極隨耦器輸出阻抗",answer:"A",choices:["12.9 Ω","26 Ω","129 Ω","2.6 kΩ"],counts:[2,4,6],steps:[
String.raw`<b>① 求基極電流</b><br>\(I_B=\dfrac{V_{CC}-V_{BE}}{R_B+(\beta+1)R_E}=\dfrac{12-0.7}{305+100(2.6)}={{0.0200|mA}}\)。`,
String.raw`<b>② 求射極電流</b><br>\(I_E=(\beta+1)I_B=100(0.0200)={{2.00|mA}}\)。`,
String.raw`<b>③ 求射極交流電阻</b><br>\(r_e=\dfrac{V_T}{I_E}=\dfrac{26\,\mathrm{mV}}{2.00\,\mathrm{mA}}={{13.0|Ω}}\)。`,
String.raw`<b>④ 建立輸出端交流等效</b><br>將輸入訊號設為零後，輸出端看見 \(r_e\) 與 \(R_E\) 並聯。`,
String.raw`<b>⑤ 求輸出阻抗</b><br>\(Z_o=r_e\parallel R_E=13\parallel2600={{12.94|Ω}}\approx{{12.9|Ω}}\)，故選 A。`,
String.raw`<b>⑥ 大小關係驗算</b><br>因 \(R_E/r_e=2600/13={{200|—}}\)，並聯值應略小於 \(13\,\Omega\)，\(12.9\,\Omega\) 合理。`]},
"114-30":{year:114,number:30,topic:"BJT 射極隨耦器電壓增益",answer:"C",choices:["R_E/(r_e+r_π)","r_π/(r_e+R_E)","R_E/(r_e+R_E)","R_E/(r_π+R_E)"],counts:[2,3,4],steps:[
String.raw`<b>① 判斷放大器組態</b><br>輸入由基極進入、輸出由射極取出，因此為{{共集極|—}}放大器。`,
String.raw`<b>② 建立射極小信號迴路</b><br>輸入電壓分配在 \(r_e\) 與 \(R_E\) 上，而輸出是 \(R_E\) 兩端電壓。`,
String.raw`<b>③ 以分壓關係求增益</b><br>\(A_v=\dfrac{v_o}{v_i}=\dfrac{R_E}{r_e+R_E}\)，故選{{C|—}}。`,
String.raw`<b>④ 代入前題數值驗證</b><br>\(A_v=\dfrac{2600}{13+2600}={{0.995|—}}\)。`,
String.raw`<b>⑤ 檢查射極隨耦器特性</b><br>結果為正且略小於{{1|—}}，符合不反相、電壓跟隨的特性。`,
String.raw`<b>⑥ 反算驗證</b><br>若 \(v_i=1\,\mathrm{V}\)，則 \(v_o\approx0.995\,\mathrm{V}\)，且 \(v_i-v_o\approx5\,\mathrm{mV}\) 落在 \(r_e\) 上，分壓關係成立。`]},
"114-35":{year:114,number:35,topic:"MOSFET 放大器輸入阻抗",answer:"C",choices:["45.2 kΩ","38.6 kΩ","33.3 kΩ","24.5 kΩ"],counts:[2,5,8],steps:[
String.raw`<b>① 求過驅電壓</b><br>\(V_{OV}=\sqrt{I_D/K}=\sqrt{1.2/0.3}={{2.0|V}}\)。`,
String.raw`<b>② 求閘源電壓</b><br>\(V_{GS}=V_t+V_{OV}=2+2={{4.0|V}}\)。`,
String.raw`<b>③ 求源極電壓</b><br>\(V_S=I_DR_S=(1.2)(1)={{1.2|V}}\)。`,
String.raw`<b>④ 求閘極電壓</b><br>\(V_G=V_S+V_{GS}=1.2+4.0={{5.2|V}}\)。`,
String.raw`<b>⑤ 寫出分壓關係</b><br>\(5.2=15.6\dfrac{50}{R_{G1}+50}\)。`,
String.raw`<b>⑥ 求上方偏壓電阻</b><br>\(R_{G1}=50(15.6/5.2-1)={{100|kΩ}}\)。`,
String.raw`<b>⑦ 求交流輸入阻抗</b><br>MOSFET 閘極電流近似零，故 \(Z_i=R_{G1}\parallel50=100\parallel50={{33.33|kΩ}}\approx{{33.3|kΩ}}\)，選 C。`,
String.raw`<b>⑧ 分壓驗算</b><br>\(V_G=15.6\times50/(100+50)={{5.2|V}}\)，與工作點需求一致。`]},
"115-29":{year:115,number:29,topic:"BJT 集極回授偏壓與基極交流電阻",answer:"B",choices:["0.86 kΩ","1.04 kΩ","1.22 kΩ","1.35 kΩ"],counts:[2,5,8],steps:[
String.raw`<b>① 以基極電流表示各電流</b><br>\(I_C=\beta I_B=99I_B\)，\(I_E=(\beta+1)I_B={{100|—}}I_B\)。`,
String.raw`<b>② 寫出直流迴路方程式</b><br>\(V_{CC}-V_{BE}=I_CR_C+I_BR_F+I_ER_E\)。`,
String.raw`<b>③ 合併基極電流係數</b><br>\(\beta R_C+R_F+(\beta+1)R_E=99(3)+390+100(0.82)={{769|kΩ}}\)。`,
String.raw`<b>④ 求基極電流</b><br>\(I_B=\dfrac{20-0.7}{769\,\mathrm{k}\Omega}={{25.10|µA}}\)。`,
String.raw`<b>⑤ 求集極電流</b><br>\(I_C=99(25.10\,\mu\mathrm{A})={{2.485|mA}}\)。`,
String.raw`<b>⑥ 求基極交流電阻</b><br>\(r_\pi=\dfrac{\beta V_T}{I_C}=\dfrac{99(26\,\mathrm{mV})}{2.485\,\mathrm{mA}}={{1.036|kΩ}}\approx{{1.04|kΩ}}\)，故選 B。`,
String.raw`<b>⑦ 以另一公式驗算</b><br>\(g_m=I_C/V_T=2.485/26={{0.0956|S}}\)，所以 \(r_\pi=\beta/g_m=99/0.0956={{1.036|kΩ}}\)，一致。`]},
"115-30":{year:115,number:30,topic:"BJT 集極回授放大器小信號方程式",answer:"C",choices:["(1/RF−1/RC)vo=(1/RF+β/rπ)vi","(1/RF−β/rπ)vo=(1/RF+1/RC)vi","(1/RF+1/RC)vo=(1/RF−β/rπ)vi","(1/RF+β/rπ)vo=(1/RF−1/RC)vi"],counts:[2,4,7],steps:[
String.raw`<b>① 表示基極電流</b><br>由小信號模型可得 \(i_b=v_i/r_\pi\)，分母為{{rπ|—}}。`,
String.raw`<b>② 在輸出節點寫 KCL</b><br>取流出節點為正：\(\dfrac{v_o-v_i}{R_F}+\dfrac{v_o}{R_C}+\beta i_b=0\)，使用的定律為{{KCL|—}}。`,
String.raw`<b>③ 代入基極電流</b><br>\(\dfrac{v_o-v_i}{R_F}+\dfrac{v_o}{R_C}+\dfrac{\beta v_i}{r_\pi}=0\)，受控源項為{{βvi/rπ|—}}。`,
String.raw`<b>④ 收集輸出電壓項</b><br>輸出項為 \(\left(\dfrac1{R_F}+\dfrac1{R_C}\right)v_o\)，係數為{{1/RF+1/RC|—}}。`,
String.raw`<b>⑤ 移項並收集輸入電壓項</b><br>\(\left(\dfrac1{R_F}+\dfrac1{R_C}\right)v_o=\left(\dfrac1{R_F}-\dfrac\beta{r_\pi}\right)v_i\)，右側係數為{{1/RF−β/rπ|—}}，故選{{C|—}}。`,
String.raw`<b>⑥ 符號驗證</b><br>通常 \(\beta/r_\pi>1/R_F\)，右側係數為{{負值|—}}，因此 \(v_o/v_i<0\)，符合共射極反相特性。`]},
"115-34":{year:115,number:34,topic:"MOSFET 放大器輸入阻抗",answer:"D",choices:["360 kΩ","240 kΩ","120 kΩ","80 kΩ"],counts:[2,4,6],steps:[
String.raw`<b>① 建立中頻交流等效</b><br>耦合電容視為短路，直流電源 \(V_{DD}\) 為交流{{接地|—}}。`,
String.raw`<b>② 判斷閘極電流</b><br>MOSFET 閘極電流近似為{{0|A}}，因此輸入只看見偏壓電阻。`,
String.raw`<b>③ 寫出輸入阻抗</b><br>\(R_i=240\,\mathrm{k}\Omega\parallel120\,\mathrm{k}\Omega\)。`,
String.raw`<b>④ 計算並聯值</b><br>\(R_i=\dfrac{240\times120}{240+120}={{80|kΩ}}\)，故選 D。`,
String.raw`<b>⑤ 驗算</b><br>兩電阻比為 \(2:1\)，並聯值應為較小電阻的 \(2/3\)：\(120\times2/3={{80|kΩ}}\)，一致。`,
String.raw`<b>⑥ 量級檢查</b><br>並聯阻抗必須{{小於|—}}最小的{{120|kΩ}}，計算所得 \(80\,\mathrm{k}\Omega\) 符合。`]}
});})();
Object.assign(chapter7Questions,{
"112-47":{year:112,number:47,topic:"MOSFET 放大器示波器量測與電壓增益",answer:"D",choices:["15","1.5","−15","−29"],counts:[2,5,8],steps:[
String.raw`<b>① 判斷相位</b><br>CH1 與 CH2 的峰、谷方向相反，因此輸出相對輸入反相，電壓增益為{{負值|—}}。`,
String.raw`<b>② 讀取輸入峰對峰格數</b><br>CH1 波形由最高點到最低點約跨{{3|格}}。`,
String.raw`<b>③ 換算輸入峰對峰電壓</b><br>CH1 為 \(50\,\mathrm{mV/DIV}\)，故 \(V_{i(pp)}=3(50)={{150|mV}}={{0.150|V}}\)。`,
String.raw`<b>④ 讀取輸出峰對峰電壓</b><br>CH2 約跨 \(4.4\) 格，且為 \(1\,\mathrm{V/DIV}\)，所以 \(V_{o(pp)}\approx{{4.4|V}}\)。`,
String.raw`<b>⑤ 求電壓增益</b><br>\(A_v=\dfrac{v_o}{v_i}\approx-\dfrac{4.4}{0.150}={{-29.3|—}}\approx{{-29|—}}\)，故選 D。`,
String.raw`<b>⑥ 反算驗證</b><br>取 \(A_v=-29\)，則 \(V_{o(pp)}=29(0.150)={{4.35|V}}\)，約為 CH2 的 \(4.4\) 格，與示波器圖一致。`]},
"113-45":{year:113,number:45,topic:"BJT 共基極放大器偏壓與電壓增益",answer:"D",choices:["12.3 V、178","12.3 V、182","11.1 V、158","11.1 V、149"],counts:[3,6,10],steps:[
String.raw`<b>① 判斷直流射極電壓</b><br>基極接地且 \(V_{BE}=0.7\,\mathrm{V}\)，NPN 電晶體的 \(V_E=V_B-V_{BE}={{-0.7|V}}\)。`,
String.raw`<b>② 求射極偏壓電阻壓降</b><br>\(V_{8k}=I_E(8\,\mathrm{k}\Omega)=(1.3\,\mathrm{mA})(8\,\mathrm{k}\Omega)={{10.4|V}}\)。`,
String.raw`<b>③ 求負電源大小</b><br>\(V_{EE}=V_{8k}+|V_E|=10.4+0.7={{11.1|V}}\)。`,
String.raw`<b>④ 求集極電流</b><br>\(\alpha=\dfrac{\beta}{\beta+1}=\dfrac{199}{200}={{0.995|—}}\)，故 \(I_C=\alpha I_E=0.995(1.3)={{1.2935|mA}}\)。`,
String.raw`<b>⑤ 求轉移電導</b><br>\(g_m=\dfrac{I_C}{V_T}=\dfrac{1.2935\,\mathrm{mA}}{26\,\mathrm{mV}}={{49.75|mS}}\)。`,
String.raw`<b>⑥ 合併集極交流負載</b><br>\(R_C\parallel R_L=6\parallel6={{3.0|kΩ}}\)。`,
String.raw`<b>⑦ 求共基極電壓增益</b><br>\(A_v=+g_m(R_C\parallel R_L)=(49.75\,\mathrm{mS})(3\,\mathrm{k}\Omega)={{149.25|—}}\approx{{149|—}}\)，故選 D。`,
String.raw`<b>⑧ 工作點驗算</b><br>\(I_C(6\,\mathrm{k}\Omega)=(1.2935)(6)={{7.761|V}}\)，集極仍高於射極，且共基極增益為正，結果合理。`]},
"115-43":{year:115,number:43,topic:"BJT 放大器波形與組態判讀",answer:"C",choices:["(a) 共集極、(b) 共射極","(a) 共基極、(b) 共集極","(a) 共射極、(b) 共基極","(a) 共基極、(b) 共射極"],counts:[2,4,7],steps:[
String.raw`<b>① 判讀圖 (a) 相位</b><br>圖 (a) 的 \(v_o(t)\) 與 \(v_i(t)\) 相差 \(180^\circ\)，所以屬於{{反相|—}}放大。`,
String.raw`<b>② 對照 BJT 三種基本組態</b><br>三種基本放大器中，具有反相電壓增益的是{{共射極|—}}。`,
String.raw`<b>③ 判讀圖 (b) 相位</b><br>圖 (b) 的輸入與輸出峰值同時出現，因此為{{同相|—}}放大。`,
String.raw`<b>④ 比較圖 (b) 振幅</b><br>圖中輸出振幅大於輸入振幅，所以電壓增益的絕對值{{大於 1|—}}。`,
String.raw`<b>⑤ 排除共集極</b><br>共集極雖然同相，但其電壓增益通常略小於{{1|—}}，不符合圖 (b)。`,
String.raw`<b>⑥ 確認圖 (b) 組態</b><br>同相且可具有電壓增益的是{{共基極|—}}。`,
String.raw`<b>⑦ 得出答案</b><br>圖 (a) 為共射極、圖 (b) 為共基極，故選{{C|—}}。`,
String.raw`<b>⑧ 波形驗證</b><br>共射極應反相、共基極應同相，兩項均與題圖相符。`]},
"115-46":{year:115,number:46,topic:"MOSFET 共閘極放大器實驗波形",answer:"C",choices:["反相且以 0 V 為中心","同相且含正直流位準","同相且以 0 V 為中心","反相且含正直流位準"],counts:[2,4,6],steps:[
String.raw`<b>① 判斷輸入端</b><br>訊號由 MOSFET 的源極輸入，閘極經電容交流接地，因此此電路為{{共閘極|—}}放大器。`,
String.raw`<b>② 判斷相位關係</b><br>共閘極放大器的輸出與輸入為{{同相|—}}。`,
String.raw`<b>③ 判斷汲極直流工作點</b><br>題目已調整 \(R_{G1}\)，使汲極的直流電壓 \(V_D={{6|V}}\)。`,
String.raw`<b>④ 判斷 CH2 量測位置</b><br>CH2 量測的 \(v_o\) 位於輸出耦合電容的{{右側|—}}。`,
String.raw`<b>⑤ 判斷直流分量</b><br>輸出耦合電容會阻隔汲極的直流 \(6\,\mathrm{V}\)，所以 \(v_o\) 的平均值為{{0|V}}。`,
String.raw`<b>⑥ 選擇波形</b><br>CH2 應為同相、振幅放大且以 \(0\,\mathrm{V}\) 為中心的波形，故選{{C|—}}。`,
String.raw`<b>⑦ 反向檢查</b><br>若量在耦合電容左側才會看見 \(6\,\mathrm{V}\) 偏壓；題目量在右側，因此 B、D 均不成立。`]}
});
;
(function activateChapter7(){
const id=new URLSearchParams(location.search).get("id"),q=chapter7Questions[id];if(!q)return;
const cropRoot=location.protocol==="file:"?"file:///C:/Users/Eli/.codex/visualizations/2026/08/13/019ffba4-80b5-7ed3-a9a4-ee902d86127c/chapter7_questions/":"assets/chapter7/";
const norm=v=>v.trim().replace(/,/g,"").replace(/−/g,"-").replace(/\s/g,"").toLowerCase();
const unitAliases={V:["v","伏特"],mV:["mv","毫伏","毫伏特"],mA:["ma","毫安","毫安培"],"µA":["µa","μa","ua","微安","微安培"],A:["a","安培"],mS:["ms","毫西門子"],Ω:["ω","Ω","ohm","ohms","歐","歐姆"],"kΩ":["kω","kΩ","kohm","kohms","千歐","千歐姆"],格:["格","div","division"],"—":[""]};
function solution(){let token=0,limit=q.counts[level-2];return `<div class="steps">${q.steps.map(step=>`<div class="step">${step.replace(/\{\{(.*?)\|(.*?)\}\}/g,(_,answer,unit,offset)=>{token++;const prefix=step.slice(0,offset),inMath=prefix.lastIndexOf("\\(")>prefix.lastIndexOf("\\)");const fixed=`<strong>${answer}</strong>${unit==="—"?"":` <span class="answerUnit">${unit}</span>`}`;const field=`<span class="blankRef">${token}</span><span class="answerPair"><input class="blank" data-answer="${answer}" placeholder="數值／文字">${unit==="—"?`<span class="dimensionless">無單位</span>`:`<input class="unitInput" data-unit="${unit}" placeholder="${unit}">`}</span>`;const rendered=token>limit?fixed:field;return inMath?`\\) ${rendered} \\(`:rendered})}</div>`).join("")}</div>`}
content=function(){if(level===1)return `<div class="choices">${q.choices.map((x,i)=>`<button class="choice" data-value="${"ABCD"[i]}"><span>${"ABCD"[i]}</span><b>\\(${x}\\)</b></button>`).join("")}</div>`;return solution()};
const priorRender=render;render=function(){priorRender();document.querySelector(".meta .tag:first-child").textContent=`${q.year} 年第 ${q.number} 題`;document.querySelector(".meta .tag:last-child").textContent=q.topic;const img=document.querySelector(".imageWrap img");img.src=cropRoot+id+".png";img.alt=`${id} 原始試題切圖`;document.getElementById("questionTabs").innerHTML=Object.keys(chapter7Questions).map(key=>`<button style="margin:0 8px 12px 0;padding:9px 14px;border:1px solid #dce3e8;border-radius:9px;cursor:pointer;${key===id?'color:#fff;background:#1764d7;':''}" onclick="location.href='?id=${key}'">${key}</button>`).join("")};
document.getElementById("check").onclick=()=>{if(level===1){const p=document.querySelector(".choice.selected");if(!p){show(false,"請先選擇答案。");return}document.querySelectorAll(".choice").forEach(b=>{b.classList.toggle("correct",b.dataset.value===q.answer);b.classList.toggle("wrong",b===p&&b.dataset.value!==q.answer)});const ok=p.dataset.value===q.answer;show(ok,`${ok?"答對了":"這題答錯了"}。你的答案：${p.dataset.value}；正確答案：${q.answer}。`);saveAttempt({question:id,level,total:1,right:ok?1:0,unitTotal:0,unitRight:0});return}const vs=[...document.querySelectorAll(".blank")],us=[...document.querySelectorAll(".unitInput")];let right=0,unitRight=0;const mistakes=[];vs.forEach((f,i)=>{const ok=norm(f.value)===norm(f.dataset.answer);f.classList.toggle("good",ok);f.classList.toggle("bad",!ok);if(ok)right++;else mistakes.push(`第 ${i+1} 格應為 ${f.dataset.answer}`)});us.forEach((u,i)=>{const ok=(unitAliases[u.dataset.unit]||[u.dataset.unit]).map(norm).includes(norm(u.value));u.classList.toggle("good",ok);u.classList.toggle("bad",!ok);if(ok)unitRight++;else mistakes.push(`第 ${i+1} 個單位應為 ${u.dataset.unit}`)});const ok=right===vs.length&&unitRight===us.length;show(ok,`數值／文字答對 ${right}/${vs.length}；單位答對 ${unitRight}/${us.length}。${mistakes.length?" "+mistakes.join("；"):" 全部正確。"}`);saveAttempt({question:id,level,total:vs.length,right,unitTotal:us.length,unitRight})};render();
})();

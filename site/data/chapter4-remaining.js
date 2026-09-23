const chapter4Remaining = {
  "112-28": {year:112, number:28, topic:"齊納二極體穩壓範圍", answer:"A", choices:["32 V、46 V","34 V、46 V","32 V、50 V","34 V、58 V"], image:"112-28.png", counts:[3,7,11], steps:[
    String.raw`<b>① 求負載電流</b><br>穩壓時 \(V_O=V_Z=20\,\mathrm{V}\)，所以 \(I_L=V_O/R_L=20/2\,\mathrm{k}\Omega=\) {{10|mA}}。`,
    String.raw`<b>② 求齊納二極體最大電流</b><br>\(I_{Z(\max)}=P_{Z(\max)}/V_Z=320\,\mathrm{mW}/20\,\mathrm{V}=\) {{16|mA}}。`,
    String.raw`<b>③ 最小電源電壓的臨界條件</b><br>令 \(I_Z=I_{ZK}=2\,\mathrm{mA}\)，則 \(I_S=I_L+I_Z=10+2=\) {{12|mA}}。`,
    String.raw`<b>④ 求電源最小值</b><br>\(V_{S(\min)}=V_Z+I_SR_S=20+(12\,\mathrm{mA})(1\,\mathrm{k}\Omega)=\) {{32|V}}。`,
    String.raw`<b>⑤ 求電源最大值</b><br>\(I_S=I_L+I_{Z(\max)}=10+16=\) {{26|mA}}，故 \(V_{S(\max)}=20+(26\,\mathrm{mA})(1\,\mathrm{k}\Omega)=\) {{46|V}}，選 A。`,
    String.raw`<b>⑥ 代回驗算</b><br>當 \(V_S=32\,\mathrm{V}\) 時，\(I_Z=(32-20)/1-10=\) {{2|mA}}；當 \(V_S=46\,\mathrm{V}\) 時，\(I_Z=(46-20)/1-10=\) {{16|mA}}，均落在 \(2\sim16\,\mathrm{mA}\)。`
  ]},
  "112-45": {year:112, number:45, topic:"中心抽頭全波整流", answer:"D", choices:["平均值為 20/π V","有效值為 12 V","漣波頻率為 50 Hz","漣波週期為 0.01 秒"], image:"112-45.png", counts:[2,5,8], steps:[
    String.raw`<b>① 修正變壓器實際次級電壓</b><br>一次側額定 \(120\,\mathrm{V}\) 時次級為 \(0-12-24\,\mathrm{V}\)；實際輸入只有 \(100\,\mathrm{V}\)，每半繞組有效值為 \(12(100/120)=\) {{10|V}}。`,
    String.raw`<b>② 求輸出峰值</b><br>理想二極體下，\(V_m=10\sqrt2=\) {{14.14|V}}。`,
    String.raw`<b>③ 檢查平均值</b><br>\(V_{O(\mathrm{avg})}=2V_m/\pi=20\sqrt2/\pi\approx\) {{9.00|V}}，不是 \(20/\pi\,\mathrm{V}\)。`,
    String.raw`<b>④ 檢查有效值</b><br>全波整流波形有效值等於半繞組正弦有效值，即 \(V_{O(\mathrm{rms})}=\) {{10|V}}，不是 \(12\,\mathrm{V}\)。`,
    String.raw`<b>⑤ 求漣波頻率與週期</b><br>\(f_r=2f_s=2(50)=\) {{100|Hz}}，\(T_r=1/f_r=\) {{0.01|s}}，因此選 D。`,
    String.raw`<b>⑥ 交叉驗算</b><br>每個輸入週期有兩個輸出脈波，所以 \(50\,\mathrm{Hz}\times2=\) {{100|Hz}}，週期確為 {{0.01|s}}。`
  ]},
  "113-26": {year:113, number:26, topic:"橋式整流平均值與 PIV", answer:"A", choices:["24√2/π V、12√2 V","24√2/π V、12 V","24/π V、12√2 V","24√2 V、12√2/π V"], image:"113-26.png", counts:[2,5,8], steps:[
    String.raw`<b>① 求次級有效值</b><br>變壓器匝數比為 \(110:12\)，一次側為 \(110\,\mathrm{V_{rms}}\)，故次級為 {{12|V}}。`,
    String.raw`<b>② 求次級峰值</b><br>\(V_m=\sqrt2V_{rms}=12\sqrt2\approx\) {{16.97|V}}。`,
    String.raw`<b>③ 求全波整流平均值</b><br>\(V_{O(\mathrm{avg})}=2V_m/\pi=2(12\sqrt2)/\pi=\) {{24√2/π|V}}。`,
    String.raw`<b>④ 判斷橋式整流 PIV</b><br>橋式整流中，截止二極體承受的最大反向電壓等於次級峰值，因此 \(PIV=V_m=\) {{12√2|V}}。`,
    `<b>⑤ 對照選項</b><br>平均值為 {{24√2/π|V}}、PIV 為 {{12√2|V}}，所以選 A。`,
    String.raw`<b>⑥ 數值驗算</b><br>\(24\sqrt2/\pi\approx\) {{10.80|V}}，且 {{10.80|V}} 小於峰值 {{16.97|V}}，量值關係合理。`
  ]},
  "113-43": {year:113, number:43, topic:"全波整流電容濾波", answer:"D", choices:["漣波頻率與輸入相同","輸入峰值愈大，漣波愈小","負載電阻愈大，漣波愈大","電容量愈大，漣波愈小"], image:"113-43.png", counts:[2,4,7], steps:[
    String.raw`<b>① 建立近似式</b><br>全波整流加電容濾波的峰對峰漣波近似為 \(V_{r(pp)}\approx I_L/(f_rC)\)。`,
    String.raw`<b>② 判斷漣波頻率</b><br>全波整流 \(f_r=2f_s\)，所以選項 A 錯誤。`,
    String.raw`<b>③ 判斷負載電阻影響</b><br>\(I_L\approx V_{DC}/R_L\)，因此 \(R_L\) 增大會使 \(I_L\) {{減小|—}}，漣波也 {{減小|—}}，選項 C 錯誤。`,
    String.raw`<b>④ 判斷電容量影響</b><br>由 \(V_{r(pp)}\propto1/C\)，\(C\) 愈大，漣波 {{愈小|—}}。`,
    `<b>⑤ 得出答案</b><br>符合公式者為選項 {{D|—}}。`,
    String.raw`<b>⑥ 極限驗算</b><br>若 \(C\to\infty\)，放電斜率趨近零，則 \(V_{r(pp)}\to\) {{0|V}}；再次確認 D。`
  ]},
  "113-44": {year:113, number:44, topic:"齊納穩壓可調電阻範圍", answer:"D", choices:["300 Ω、600 Ω","250 Ω、600 Ω","250 Ω、500 Ω","240 Ω、500 Ω"], image:"113-44.png", counts:[3,7,11], steps:[
    String.raw`<b>① 求負載電流</b><br>\(I_L=V_O/R_L=10\,\mathrm{V}/1\,\mathrm{k}\Omega=\) {{10|mA}}。`,
    String.raw`<b>② 求最大齊納電流</b><br>\(I_{Z(\max)}=P_{Z(\max)}/V_Z=150\,\mathrm{mW}/10\,\mathrm{V}=\) {{15|mA}}。`,
    String.raw`<b>③ 求電阻最小值時的總電流</b><br>\(I_{S(\max)}=I_L+I_{Z(\max)}=10+15=\) {{25|mA}}。`,
    String.raw`<b>④ 求電阻最小值</b><br>\(R_{\min}=(V_S-V_Z)/I_{S(\max)}=(16-10)/25\,\mathrm{mA}=\) {{240|Ω}}。`,
    String.raw`<b>⑤ 求電阻最大值</b><br>臨界穩壓時 \(I_Z=I_{ZK}=2\,\mathrm{mA}\)，\(I_{S(\min)}=10+2=\) {{12|mA}}，故 \(R_{\max}=6/12\,\mathrm{mA}=\) {{500|Ω}}，選 D。`,
    String.raw`<b>⑥ 代回驗算</b><br>代入 \(R=240\,\Omega\)，得 \(I_Z=25-10=\) {{15|mA}}；代入 \(R=500\,\Omega\)，得 \(I_Z=12-10=\) {{2|mA}}，恰為兩個邊界。`
  ]},
  "114-27": {year:114, number:27, topic:"全波整流波形因數", answer:"C", choices:["1/√2","2√2/π","π/(2√2)","√2"], image:"114-27.png", counts:[2,4,7], steps:[
    String.raw`<b>① 寫出波形因數定義</b><br>\(K_f=V_{rms}/V_{avg}\)。`,
    String.raw`<b>② 全波整流有效值</b><br>\(V_{rms}=V_m/\sqrt2\)。`,
    String.raw`<b>③ 全波整流平均值</b><br>\(V_{avg}=2V_m/\pi\)。`,
    String.raw`<b>④ 代入定義</b><br>\(K_f=(V_m/\sqrt2)/(2V_m/\pi)=\) {{π/(2√2)|—}}。`,
    String.raw`<b>⑤ 數值檢查</b><br>\(K_f=\pi/(2\sqrt2)\approx\) {{1.111|—}}，所以選 {{C|—}}。`,
    String.raw`<b>⑥ 反向驗算</b><br>\(V_{rms}/K_f=(V_m/\sqrt2)/(\pi/2\sqrt2)=\) {{2Vm/π|V}}，回到正確平均值。`
  ]},
  "114-28": {year:114, number:28, topic:"二極體與 LED 基本觀念", answer:"D", choices:["空乏區電位差稱為順向偏壓","溫度升高時逆向飽和電流降低","LED 顏色主要由工作電壓決定","順向偏壓復合時釋放能量發光"], image:"114-28.png", counts:[2,4,7], steps:[
    `<b>① 檢查 A</b><br>空乏區內建電位是接面本身形成的位障，不等同外加順向偏壓，因此 A 錯。`,
    `<b>② 檢查 B</b><br>溫度升高會增加少數載子，逆向飽和電流通常 {{增加|—}}，因此 B 錯。`,
    `<b>③ 檢查 C</b><br>LED 發光顏色主要由半導體材料的 {{能隙|—}} 決定，不是由工作電壓大小決定。`,
    `<b>④ 檢查 D</b><br>順向偏壓下，電子與電洞 {{復合|—}} 時以光子形式釋放能量，敘述正確。`,
    `<b>⑤ 得出答案</b><br>唯一正確選項為 {{D|—}}。`,
    String.raw`<b>⑥ 能量關係驗算</b><br>光子能量滿足 \(E_g=hf=hc/\lambda\)；能隙決定頻率與 {{波長|—}}，再次排除 C。`
  ]},
  "114-42": {year:114, number:42, topic:"中心抽頭整流二極體平均電流", answer:"A", choices:["√2/π A","2√2/π A","√2 A","2√2 A"], image:"114-42.png", counts:[3,6,9], steps:[
    String.raw`<b>① 求每半次級有效值</b><br>\(V_{2,rms}=110(1/11)=\) {{10|V}}。`,
    String.raw`<b>② 求每半次級峰值</b><br>\(V_m=10\sqrt2\,\mathrm{V}\)。`,
    String.raw`<b>③ 求負載電流峰值</b><br>\(I_m=V_m/R_L=10\sqrt2/10=\) {{√2|A}}。`,
    String.raw`<b>④ 判斷單顆二極體導通區間</b><br>每顆二極體只導通半個週期，所以其全週期平均電流為 \(I_{D(avg)}=I_m/\pi\)。`,
    String.raw`<b>⑤ 計算答案</b><br>\(I_{D(avg)}=\sqrt2/\pi=\) {{√2/π|A}}，選 {{A|—}}。`,
    String.raw`<b>⑥ 交叉驗算</b><br>負載平均電流為 \(2I_m/\pi=2\sqrt2/\pi\,\mathrm{A}\)，兩顆二極體平均值相加為 {{2√2/π|A}}，一致。`
  ]},
  "115-27": {year:115, number:27, topic:"半波與全波整流比較", answer:"C", choices:["全波平均值 220√2/π V","半波平均值 220√2/π V","全波波形頻率 120 Hz","半波波形頻率 120 Hz"], image:"115-27.png", counts:[2,5,8], steps:[
    String.raw`<b>① 由角頻率求輸入頻率</b><br>\(\omega=377\,\mathrm{rad/s}\)，故 \(f=\omega/(2\pi)\approx\) {{60|Hz}}。`,
    String.raw`<b>② 確認輸入峰值</b><br>由 \(v(t)=110\sin(377t)\)，峰值為 {{110|V}}，不是 \(110\sqrt2\,\mathrm{V}\)。`,
    String.raw`<b>③ 半波平均值</b><br>\(V_{avg,HW}=V_m/\pi=\) {{110/π|V}}，故 B 錯。`,
    String.raw`<b>④ 全波平均值</b><br>\(V_{avg,FW}=2V_m/\pi=\) {{220/π|V}}，故 A 錯。`,
    String.raw`<b>⑤ 比較波形頻率</b><br>全波頻率 \(f_{FW}=2f=\) {{120|Hz}}；半波頻率仍為 {{60|Hz}}，因此選 C。`,
    String.raw`<b>⑥ 週期驗算</b><br>輸入週期約 \(1/60=16.67\,\mathrm{ms}\)，全波輸出相鄰脈波間隔為其一半，即 {{8.33|ms}}，對應 \(120\,\mathrm{Hz}\)。`
  ]},
  "115-44": {year:115, number:44, topic:"齊納穩壓限流電阻", answer:"B", choices:["450 Ω","500 Ω","650 Ω","700 Ω"], image:"115-44.png", counts:[3,7,11], steps:[
    String.raw`<b>① 求負載電流</b><br>\(I_L=P_L/V_O=60\,\mathrm{mW}/6\,\mathrm{V}=\) {{10|mA}}。`,
    String.raw`<b>② 求齊納最大電流</b><br>\(I_{Z(\max)}=P_{Z(\max)}/V_Z=60\,\mathrm{mW}/6\,\mathrm{V}=\) {{10|mA}}。`,
    String.raw`<b>③ 最小電阻的臨界條件</b><br>電阻最小時串聯電流最大；為不超過額定功率，取 \(I_Z=I_{Z(\max)}\)。`,
    String.raw`<b>④ 求最大串聯電流</b><br>\(I_{S(\max)}=I_L+I_{Z(\max)}=10+10=\) {{20|mA}}。`,
    String.raw`<b>⑤ 求限流電阻最小值</b><br>\(R_{S(\min)}=(V_S-V_Z)/I_{S(\max)}=(16-6)/20\,\mathrm{mA}=\) {{500|Ω}}，選 B。`,
    String.raw`<b>⑥ 代回驗算</b><br>\(I_S=(16-6)/500=\) {{20|mA}}，\(I_Z=20-10=\) {{10|mA}}，\(P_Z=6(10\,\mathrm{mA})=\) {{60|mW}}，恰等於額定值。`
  ]}
};

const chapter4CLT = {
  "112-28": {
    blanks:[
      {a:"V_O=V_Z|Vo=Vz|20V",label:"①",why:"齊納二極體進入穩壓區後，負載與齊納並聯，因此輸出電壓被箝在齊納電壓。"},
      {a:"I_S=I_L+I_Z|Is=Il+Iz",label:"②",why:"串聯電阻電流在輸出節點分成負載電流與齊納電流，這是該節點的 KCL。"},
      {a:"I_Z=I_{ZK}|Iz=Izk|2mA",label:"③",why:"最低輸入電壓的邊界是齊納電流剛好降到膝點電流，再低就不能保證穩壓。"},
      {a:"I_Z=I_{Z(max)}|Iz=Izmax|16mA",label:"④",why:"最高輸入電壓的邊界由齊納最大容許功率決定，因此使用最大齊納電流。"},
      {a:"32V<=V_S<=46V|32<=Vs<=46|32~46V",label:"⑤",why:"兩個電源邊界分別對應膝點電流與最大功率，範圍內才同時滿足穩壓與安全。"}
    ],
    model:String.raw`假設齊納二極體工作在崩潰穩壓區，且負載固定為 \(R_L=2\,\mathrm{k}\Omega\)。因負載與齊納並聯，所以 {{0}}；串聯電阻電流在輸出節點滿足 {{1}}。`,
    derivation:String.raw`<b>步驟 1：建立最低輸入電壓條件</b><br>最低仍能穩壓時必須有 {{2}}。
\[I_L=\frac{V_O}{R_L}=\frac{20}{2\,\mathrm{k}\Omega}=10\,\mathrm{mA}\]
\[I_S=I_L+I_{ZK}=10+2=12\,\mathrm{mA}\]
\[V_{S(\min)}=V_Z+I_SR_S=20+(12\,\mathrm{mA})(1\,\mathrm{k}\Omega)=32\,\mathrm{V}\]
<b>步驟 2：建立最高輸入電壓條件</b><br>先由額定功率完整計算
\[I_{Z(\max)}=\frac{P_{Z(\max)}}{V_Z}=\frac{320\,\mathrm{mW}}{20\,\mathrm{V}}=16\,\mathrm{mA}\]
最高輸入邊界必須取 {{3}}。
\[I_S=I_L+I_{Z(\max)}=10+16=26\,\mathrm{mA}\]
\[V_{S(\max)}=20+(26\,\mathrm{mA})(1\,\mathrm{k}\Omega)=46\,\mathrm{V}\]
<b>步驟 3：代回驗算</b><br>
\[V_S=32\,\mathrm{V}:\ I_Z=\frac{32-20}{1\,\mathrm{k}\Omega}-10\,\mathrm{mA}=2\,\mathrm{mA}\]
\[V_S=46\,\mathrm{V}:\ I_Z=\frac{46-20}{1\,\mathrm{k}\Omega}-10\,\mathrm{mA}=16\,\mathrm{mA}\]
<b>步驟 4：目標範圍</b><br>{{4}}，故選 A。`,
    self:"為什麼最低電源邊界使用膝點電流，而最高電源邊界使用功率所限制的最大電流？請從『維持崩潰』與『避免過熱』分別說明。",
    challenge:String.raw`若負載改為 \(R_L=4\,\mathrm{k}\Omega\)，其他條件不變，重新求可穩壓的 \(V_S\) 範圍。<br><b>第一步提示：</b>先重算 \(I_L=V_Z/R_L\)，再分別令 \(I_Z=I_{ZK}\) 與 \(I_Z=I_{Z(\max)}\)。`
  },
  "112-45": {
    blanks:[
      {a:"10V|10 V",label:"①",why:"變壓器線性比例必須以實際一次側 100 V 修正每半繞組的額定 12 V。"},
      {a:"V_m=sqrt(2)V_{rms}|Vm=√2Vrms",label:"②",why:String.raw`正弦波峰值等於有效值的 \(\sqrt2\) 倍，整流前先從半繞組有效值換算。`},
      {a:"V_{O(avg)}=2V_m/pi|Voavg=2Vm/pi",label:"③",why:String.raw`中心抽頭全波整流將兩個半週都翻到正向，因此平均值是 \(2V_m/\pi\)。`},
      {a:"f_r=2f_s|fr=2fs|100Hz",label:"④",why:"全波整流每一個輸入週期產生兩個輸出脈波，所以漣波頻率加倍。"},
      {a:"0.01s|10ms",label:"⑤",why:String.raw`週期是漣波頻率的倒數，\(1/100=0.01\,s\)。`}
    ],
    model:String.raw`採理想二極體與理想變壓器模型。一次側額定 \(120\,\mathrm{V}\) 時，每半次級為 \(12\,\mathrm{V_{rms}}\)；實際一次側只有 \(100\,\mathrm{V}\)，故每半繞組有效值為 {{0}}。`,
    derivation:String.raw`<b>步驟 1：由有效值取得峰值</b><br>正弦波關係為 {{1}}。
\[V_m=10\sqrt2=14.14\,\mathrm{V}\]
<b>步驟 2：完整檢查平均值與有效值</b><br>全波平均值公式為 {{2}}。
\[V_{O(\mathrm{avg})}=\frac{2(10\sqrt2)}{\pi}=\frac{20\sqrt2}{\pi}\approx9.00\,\mathrm{V}\]
全波整流只改變極性，平方後不受影響，因此
\[V_{O(\mathrm{rms})}=10\,\mathrm{V}\]
選項 A、B 均不符。<br><br>
<b>步驟 3：漣波頻率與週期</b><br>全波整流滿足 {{3}}。
\[f_r=2(50)=100\,\mathrm{Hz}\]
\[T_r=\frac1{f_r}={{4}}\]
<b>步驟 4：目標指標與驗算</b><br>每個輸入週期確有兩個正脈波，故 \(50\,\mathrm{Hz}\times2=100\,\mathrm{Hz}\)，漣波週期為 \(0.01\,\mathrm{s}\)，選 D。`,
    self:"為什麼全波整流會改變平均值與波形頻率，卻不改變理想輸出相對於半繞組正弦波的有效值？",
    challenge:String.raw`若電源頻率改為 \(60\,\mathrm{Hz}\)，一次側實際電壓仍為 \(100\,\mathrm{V}\)，求漣波頻率與週期。<br><b>第一步提示：</b>先寫出 \(f_r=2f_s\)。`
  },
  "113-26": {
    blanks:[
      {a:"12V|12 V",label:"①",why:"理想變壓器的電壓比等於匝數比，一次側 110 V 對應次級 12 V 有效值。"},
      {a:"V_m=sqrt(2)V_{rms}|Vm=√2Vrms",label:"②",why:"PIV 與整流平均值都應先以次級峰值表示。"},
      {a:"V_{O(avg)}=2V_m/pi|Voavg=2Vm/pi",label:"③",why:"橋式整流也是全波整流，因此平均值使用全波公式。"},
      {a:"PIV=V_m|PIV=Vm",label:"④",why:String.raw`橋式整流中截止二極體承受的最大反向電壓等於次級峰值；不同於中心抽頭的 \(2V_m\)。`},
      {a:"24sqrt(2)/pi V,12sqrt(2)V|24√2/πV,12√2V",label:"⑤",why:"將平均值與 PIV 按題目要求順序配對，即對應選項 A。"}
    ],
    model:String.raw`採理想變壓器與理想橋式整流器模型。由匝數比 \(N_1:N_2=110:12\)，當一次側為 \(110\,\mathrm{V_{rms}}\) 時，次級有效值為 {{0}}。`,
    derivation:String.raw`<b>步驟 1：峰值轉換</b><br>{{1}}。
\[V_m=12\sqrt2\approx16.97\,\mathrm{V}\]
<b>步驟 2：全波平均值</b><br>橋式整流兩個半週皆供應負載，因此使用 {{2}}。
\[V_{O(\mathrm{avg})}=\frac{2(12\sqrt2)}{\pi}=\frac{24\sqrt2}{\pi}\approx10.80\,\mathrm{V}\]
<b>步驟 3：截止二極體的反向電壓</b><br>橋式整流的關鍵關係為 {{3}}，所以
\[PIV=12\sqrt2\approx16.97\,\mathrm{V}\]
<b>步驟 4：目標指標與量值驗算</b><br>答案組合為 {{4}}，選 A。並且 \(10.80\,\mathrm{V}<16.97\,\mathrm{V}\)，平均值小於峰值，量值合理。`,
    self:"橋式整流與中心抽頭整流的 PIV 為何不同？請追蹤二極體截止時其兩端各自連到哪個節點。",
    challenge:String.raw`若考慮橋式導通路徑中每顆二極體壓降為 \(0.7\,\mathrm{V}\)，估算輸出峰值。<br><b>第一步提示：</b>先畫出正半週導通路徑，確認串聯導通的二極體數目。`
  },
  "113-43": {
    blanks:[
      {a:"V_{r(pp)}=I_L/(f_r C)|Vrpp=IL/(frC)",label:"①",why:"電容在兩個充電峰值間近似以負載電流線性放電，漣波約為放電電流乘時間除以電容。"},
      {a:"f_r=2f_s|fr=2fs",label:"②",why:"全波整流每週期產生兩次充電峰值，因此漣波頻率是輸入頻率的兩倍。"},
      {a:"I_L=V_{DC}/R_L|IL=VDC/RL",label:"③",why:"負載近似為電阻時，直流負載電流由歐姆定律決定。"},
      {a:"V_{r(pp)} proportional 1/C|Vrpp∝1/C",label:"④",why:"在負載電流與頻率固定時，電容量越大，相同電荷變化造成的電壓變化越小。"},
      {a:"D",label:"⑤",why:"只有『電容量愈大，漣波愈小』同時符合漣波近似式與電容放電物理。"}
    ],
    model:String.raw`假設整流後電容在相鄰峰值間以近似固定的負載電流放電，忽略二極體導通的短暫充電時間，則峰對峰漣波近似為 {{0}}。`,
    derivation:String.raw`<b>步驟 1：判斷頻率</b><br>全波整流具有 {{1}}，故漣波頻率不等於輸入頻率，A 錯。<br><br>
<b>步驟 2：判斷負載電阻</b><br>電阻負載滿足 {{2}}。當 \(R_L\) 增大時，\(I_L\) 減小，代入漣波式可知 \(V_{r(pp)}\) 也減小，因此 C 錯。<br><br>
<b>步驟 3：判斷電容量</b><br>固定 \(I_L\) 與 \(f_r\) 時，{{3}}，所以電容量愈大，漣波愈小。<br><br>
<b>步驟 4：答案與極限驗算</b><br>正確選項為 {{4}}。若 \(C\to\infty\)，則 \(V_{r(pp)}\to0\)，與答案一致。`,
    self:"為何增大負載電阻和增大濾波電容都會減小漣波，卻是經由公式中不同的物理量發生作用？",
    challenge:String.raw`若同一電路由半波整流改為全波整流，且 \(R_L\)、\(C\) 不變，漣波約變成原來的多少倍？<br><b>第一步提示：</b>先比較半波與全波的 \(f_r\)。`
  },
  "113-44": {
    blanks:[
      {a:"I_S=I_L+I_Z|Is=IL+IZ",label:"①",why:"串聯電阻電流在輸出節點分成負載與齊納兩支路。"},
      {a:"I_Z=I_{Z(max)}|Iz=Izmax|15mA",label:"②",why:"電阻最小會讓串聯電流最大，其安全邊界由齊納最大功率限制。"},
      {a:"R_{min}=(V_S-V_Z)/(I_L+I_{Z(max)})|Rmin=(Vs-Vz)/(IL+Izmax)",label:"③",why:"把最大容許總電流代入串聯電阻的歐姆定律即可得到最小電阻。"},
      {a:"I_Z=I_{ZK}|Iz=Izk|2mA",label:"④",why:"電阻最大會讓供應電流最小，邊界是齊納電流剛好等於膝點電流。"},
      {a:"240ohm<=R<=500ohm|240Ω<=R<=500Ω|240~500Ω",label:"⑤",why:"這個範圍同時避免齊納過功率，並確保最小電流仍能維持穩壓。"}
    ],
    model:String.raw`齊納穩壓時 \(V_O=V_Z=10\,\mathrm{V}\)，並假設負載固定。輸出節點的 KCL 為 {{0}}。
\[I_L=\frac{10\,\mathrm{V}}{1\,\mathrm{k}\Omega}=10\,\mathrm{mA}\]
\[I_{Z(\max)}=\frac{150\,\mathrm{mW}}{10\,\mathrm{V}}=15\,\mathrm{mA}\]`,
    derivation:String.raw`<b>步驟 1：最小可用電阻</b><br>電阻最小時取 {{1}}，因此
\[I_{S(\max)}=I_L+I_{Z(\max)}=10+15=25\,\mathrm{mA}\]
其核心邊界式為 {{2}}。
\[R_{\min}=\frac{16-10}{25\,\mathrm{mA}}=240\,\Omega\]
<b>步驟 2：最大可用電阻</b><br>臨界維持穩壓時取 {{3}}。
\[I_{S(\min)}=I_L+I_{ZK}=10+2=12\,\mathrm{mA}\]
\[R_{\max}=\frac{16-10}{12\,\mathrm{mA}}=500\,\Omega\]
<b>步驟 3：代回驗算</b><br>
\[R=240\,\Omega:\ I_Z=25-10=15\,\mathrm{mA}\]
\[R=500\,\Omega:\ I_Z=12-10=2\,\mathrm{mA}\]
<b>步驟 4：目標範圍</b><br>{{4}}，故選 D。`,
    self:"為什麼最小電阻對應最大齊納電流，而最大電阻反而對應最小齊納電流？請由串聯電阻電流說明。",
    challenge:String.raw`若負載電阻改為 \(2\,\mathrm{k}\Omega\)，其他條件不變，求新的可調電阻範圍。<br><b>第一步提示：</b>先重算負載電流，再保留相同的兩個齊納電流邊界。`
  },
  "114-27": {
    blanks:[
      {a:"K_f=V_{rms}/V_{avg}|Kf=Vrms/Vavg",label:"①",why:"波形因數定義為有效值除以整流平均值，用來描述同一波形的有效值與直流成分比例。"},
      {a:"V_{rms}=V_m/sqrt(2)|Vrms=Vm/√2",label:"②",why:"全波整流只改變正弦波的正負號，平方平均值與原正弦波相同。"},
      {a:"V_{avg}=2V_m/pi|Vavg=2Vm/π",label:"③",why:String.raw`全波整流把兩個半週都轉為正值，所以平均值為 \(2V_m/\pi\)。`},
      {a:"pi/(2sqrt(2))|π/(2√2)",label:"④",why:String.raw`將有效值與平均值代入定義後，峰值 \(V_m\) 應完全約掉。`},
      {a:"1.111",label:"⑤",why:"波形因數必須大於或等於 1；數值 1.111 符合有效值不小於平均值的基本關係。"}
    ],
    model:String.raw`全波整流輸出為 \(|V_m\sin\omega t|\)。波形因數的控制定義為 {{0}}，所有量都必須取同一輸出波形。`,
    derivation:String.raw`<b>步驟 1：寫出全波輸出的兩個統計量</b><br>有效值為 {{1}}，平均值為 {{2}}。<br><br>
<b>步驟 2：完整代數化簡</b>
\[K_f=\frac{V_m/\sqrt2}{2V_m/\pi}\]
\[K_f=\frac{V_m}{\sqrt2}\cdot\frac{\pi}{2V_m}\]
\[K_f={{3}}\]
<b>步驟 3：數值與物理檢查</b>
\[K_f=\frac{\pi}{2\sqrt2}\approx{{4}}\]
由於 \(V_{rms}\ge V_{avg}\)，所以 \(K_f\ge1\)，結果合理。<br><br>
<b>步驟 4：目標指標</b><br>波形因數為 \(\pi/(2\sqrt2)\)，故選 C。`,
    self:"為何波形因數最後與峰值無關？請說明縮放整個波形時，有效值與平均值如何同時改變。",
    challenge:String.raw`求半波整流正弦波的波形因數。<br><b>第一步提示：</b>先分別寫出半波的 \(V_{rms}=V_m/2\) 與 \(V_{avg}=V_m/\pi\)。`
  },
  "114-28": {
    blanks:[
      {a:"內建電位|built-in potential",label:"①",why:"空乏區的位障由接面擴散與漂移平衡形成，不是外部施加的順向偏壓。"},
      {a:"增加|increase",label:"②",why:"溫度上升使本質載子濃度顯著增加，因此少數載子形成的逆向飽和電流通常增加。"},
      {a:"能隙|E_g|bandgap",label:"③",why:"電子電洞復合釋放的光子能量主要由材料能帶間距決定。"},
      {a:"E_g=hf=hc/lambda|Eg=hf=hc/λ",label:"④",why:"光子能量連結材料能隙、頻率與波長，是 LED 顏色的物理來源。"},
      {a:"D",label:"⑤",why:"順向偏壓注入載子並發生輻射復合，是 LED 發光的正確敘述。"}
    ],
    model:String.raw`以 PN 接面能帶與載子復合模型分析。零偏壓空乏區兩端存在 {{0}}；它與外加偏壓的來源不同。`,
    derivation:String.raw`<b>步驟 1：檢查溫度敘述</b><br>溫度升高會使少數載子濃度上升，因此逆向飽和電流通常 {{1}}，選項 B 錯。<br><br>
<b>步驟 2：檢查 LED 顏色來源</b><br>LED 顏色主要由材料的 {{2}} 決定，而非由工作電壓直接決定。其完整能量關係為 {{3}}。<br><br>
<b>步驟 3：檢查發光機制</b><br>順向偏壓降低位障並注入載子；電子與電洞發生輻射復合時，以光子形式釋放能量。<br><br>
<b>步驟 4：目標判斷</b><br>唯一正確的選項為 {{4}}。`,
    self:"LED 的工作電壓與顏色常有相關性，但為什麼不能說『顏色由工作電壓決定』？請區分材料能隙的因果角色與端電壓的伴隨現象。",
    challenge:String.raw`若某 LED 放出波長 \(620\,\mathrm{nm}\) 的光，估算其能隙（以 eV 表示）。<br><b>第一步提示：</b>由 \(E_g=hc/\lambda\) 開始，或使用 \(E(\mathrm{eV})\approx1240/\lambda(\mathrm{nm})\)。`
  },
  "114-42": {
    blanks:[
      {a:"V_{2,rms}=V_1(N_2/N_1)|V2rms=V1N2/N1",label:"①",why:"理想變壓器的次級電壓由匝數比決定；題圖中的比例是每半次級對一次側。"},
      {a:"I_m=V_m/R_L|Im=Vm/RL",label:"②",why:"理想二極體導通時，每半次級峰值直接加在負載上，峰值電流由歐姆定律得到。"},
      {a:"I_{D(avg)}=I_m/pi|IDavg=Im/π",label:"③",why:"單顆二極體每次只導通半個週期，因此其全週期平均值是半波正弦平均值。"},
      {a:"sqrt(2)/pi A|√2/π A",label:"④",why:String.raw`代入 \(I_m=\sqrt2\,A\) 後得到單顆二極體平均電流。`},
      {a:"2I_{D(avg)}=I_{L(avg)}|2IDavg=ILavg",label:"⑤",why:"兩顆二極體交替供應負載，兩者各自的全週期平均電流相加應等於負載平均電流。"}
    ],
    model:String.raw`採理想中心抽頭變壓器與理想二極體。每半次級的有效值由 {{0}} 決定，且每顆二極體只在自己所對應的半週導通。`,
    derivation:String.raw`<b>步驟 1：求半次級電壓與負載峰值電流</b>
\[V_{2,rms}=110\left(\frac1{11}\right)=10\,\mathrm{V}\]
\[V_m=10\sqrt2\,\mathrm{V}\]
核心電流關係為 {{1}}，所以
\[I_m=\frac{10\sqrt2}{10}=\sqrt2\,\mathrm{A}\]
<b>步驟 2：單顆二極體的週期平均</b><br>由於只導通半週，應使用 {{2}}。
\[I_{D(avg)}=\frac{\sqrt2}{\pi}\,\mathrm{A}\]
<b>步驟 3：目標指標</b><br>{{3}}，故選 A。<br><br>
<b>步驟 4：交叉驗算</b><br>負載全波平均電流為 \(2I_m/\pi=2\sqrt2/\pi\,\mathrm{A}\)，並滿足 {{4}}。`,
    self:"為什麼負載電流是全波波形，但任一顆二極體的電流仍是半波波形？請依導通路徑說明。",
    challenge:String.raw`若負載電阻改為 \(20\,\Omega\)，求單顆二極體的平均電流。<br><b>第一步提示：</b>先以新的 \(R_L\) 重算峰值電流 \(I_m\)。`
  },
  "115-27": {
    blanks:[
      {a:"f=omega/(2pi)|f=ω/(2π)",label:"①",why:String.raw`角頻率與一般頻率的換算是 \(\omega=2\pi f\)。`},
      {a:"V_m=110V|Vm=110V",label:"②",why:String.raw`題目已直接以 \(110\sin(377t)\) 給瞬時波形，所以 110 是峰值，不需再乘 \(\sqrt2\)。`},
      {a:"V_{avg,HW}=V_m/pi|VavgHW=Vm/π",label:"③",why:String.raw`半波整流只有一個半週為正，其全週期平均值為 \(V_m/\pi\)。`},
      {a:"V_{avg,FW}=2V_m/pi|VavgFW=2Vm/π",label:"④",why:"全波整流的兩個半週都貢獻正面積，所以平均值加倍。"},
      {a:"f_{FW}=2f=120Hz|fFW=120Hz",label:"⑤",why:"全波整流每個輸入週期產生兩個脈波，所以輸出波形頻率加倍。"}
    ],
    model:String.raw`輸入為 \(v(t)=110\sin(377t)\,\mathrm{V}\)。先由 {{0}} 得 \(f\approx60\,\mathrm{Hz}\)，並直接辨認 {{1}}。`,
    derivation:String.raw`<b>步驟 1：比較整流平均值</b><br>半波平均值關係為 {{2}}：
\[V_{avg,HW}=\frac{110}{\pi}\,\mathrm{V}\]
全波平均值關係為 {{3}}：
\[V_{avg,FW}=\frac{220}{\pi}\,\mathrm{V}\]
因此含有 \(\sqrt2\) 的 A、B 均錯。<br><br>
<b>步驟 2：比較波形頻率</b><br>半波頻率仍為 \(60\,\mathrm{Hz}\)，而全波滿足 {{4}}，所以選 C。<br><br>
<b>步驟 3：週期驗算</b>
\[T_{in}=\frac1{60}=16.67\,\mathrm{ms}\]
\[T_{FW}=\frac{T_{in}}2=8.33\,\mathrm{ms}\]
其倒數確為 \(120\,\mathrm{Hz}\)。`,
    self:String.raw`看到 110 V 時，為什麼不能一律乘 \(\sqrt2\)？請比較『直接給瞬時式振幅』與『標示有效值』兩種題目敘述。`,
    challenge:String.raw`若輸入改為 \(v(t)=170\sin(314t)\,\mathrm{V}\)，分別求半波與全波的平均值及波形頻率。<br><b>第一步提示：</b>先由係數辨認 \(V_m\)，再由 \(314=2\pi f\) 求頻率。`
  },
  "115-44": {
    blanks:[
      {a:"V_O=V_Z|Vo=Vz|6V",label:"①",why:"穩壓時齊納與負載並聯，負載電壓等於齊納電壓。"},
      {a:"I_L=P_L/V_O|IL=PL/Vo",label:"②",why:String.raw`已知負載功率與電壓時，由 \(P=VI\) 求負載電流。`},
      {a:"I_Z=I_{Z(max)}|Iz=Izmax",label:"③",why:"要求最小限流電阻時，電流最大；安全邊界是齊納剛好達到最大容許功率。"},
      {a:"I_S=I_L+I_Z|Is=IL+IZ",label:"④",why:"輸出節點 KCL 決定串聯電阻必須同時供應負載與齊納。"},
      {a:"500ohm|500Ω|500 ohm",label:"⑤",why:"最小電阻對應最大容許總電流，代回後齊納功率恰等於 60 mW。"}
    ],
    model:String.raw`假設齊納二極體工作在穩壓區，所以 {{0}}。負載消耗 \(60\,\mathrm{mW}\)，其電流應由 {{1}} 求得。`,
    derivation:String.raw`<b>步驟 1：完整計算兩支路電流</b>
\[I_L=\frac{60\,\mathrm{mW}}{6\,\mathrm{V}}=10\,\mathrm{mA}\]
\[I_{Z(\max)}=\frac{P_{Z(\max)}}{V_Z}=\frac{60\,\mathrm{mW}}{6\,\mathrm{V}}=10\,\mathrm{mA}\]
<b>步驟 2：建立最小電阻的邊界</b><br>為求最小安全電阻，令 {{2}}；輸出節點的核心 KCL 為 {{3}}。
\[I_{S(\max)}=10+10=20\,\mathrm{mA}\]
<b>步驟 3：完整代入</b>
\[R_{S(\min)}=\frac{V_S-V_Z}{I_{S(\max)}}\]
\[R_{S(\min)}=\frac{16-6}{20\,\mathrm{mA}}=500\,\Omega\]
<b>步驟 4：指標與功率驗算</b><br>最小限流電阻為 {{4}}，故選 B。
\[I_S=\frac{16-6}{500}=20\,\mathrm{mA}\]
\[I_Z=20-10=10\,\mathrm{mA}\]
\[P_Z=6(10\,\mathrm{mA})=60\,\mathrm{mW}\]`,
    self:String.raw`若只用 \((V_S-V_Z)/I_{Z(max)}\) 計算，為什麼會得到錯誤電阻？請指出被漏掉的電流支路。`,
    challenge:String.raw`若負載功率降為 \(30\,\mathrm{mW}\)，其他條件不變，重新求最小安全限流電阻。<br><b>第一步提示：</b>先用 \(I_L=P_L/V_O\) 重算負載電流。`
  }
};

(function activateRemainingChapter4(){
  const id=new URLSearchParams(location.search).get("id");
  const q=chapter4Remaining[id];
  if(!q)return;
  const clt=chapter4CLT[id];
  const requested=Number(new URLSearchParams(location.search).get("level"));
  if([1,2,3,4].includes(requested))level=requested;
  const cropRoot=location.protocol==="file:"?"file:///C:/Users/Eli/.codex/visualizations/2026/08/13/019ffba4-80b5-7ed3-a9a4-ee902d86127c/chapter4_questions/":"assets/chapter4/";
  const unitAliases={V:["v","伏特"],mA:["ma","毫安培"],Hz:["hz","赫茲"],s:["s","秒"],ms:["ms","毫秒"],Ω:["ω","Ω","ohm","ohms","歐姆"],mW:["mw","毫瓦"],A:["a","安培"],"—":["—","-","無","無單位"]};
  const norm=v=>v.trim().replace(/,/g,"").replace(/\s/g,"").toLowerCase();
  const marker=/\{\{(.*?)\|(.*?)\}\}/g;
  const blankLimit=()=>({2:3,3:4,4:5}[level]||0);
  const mathContext=(html,offset)=>{
    const before=html.slice(0,offset);
    const inlineOpen=(before.match(/\\\(/g)||[]).length>(before.match(/\\\)/g)||[]).length;
    const displayOpen=(before.match(/\\\[/g)||[]).length>(before.match(/\\\]/g)||[]).length;
    return inlineOpen?"inline":displayOpen?"display":null;
  };
  const replaceCLT=html=>html.replace(/\{\{(\d+)\}\}/g,(_,i,offset)=>{
    const n=Number(i),item=clt.blanks[n];
    const markup=n>=blankLimit()?`<strong>\(${item.a.split("|")[0]}\)</strong>`:`<span class="cltBlank"><span class="blankRef">${item.label}</span>[ <input class="blank wide" data-answer="${item.a}" aria-label="填空 ${item.label}" autocomplete="off"> ]</span>`;
    const context=mathContext(html,offset);
    return context==="inline"?`\)${markup}\(`:context==="display"?`\]${markup}\[` : markup;
  });
  function scaffold(){
    return `<div class="scaffold">
      <section class="scaffoldBlock"><h3>一、電路分析起手式（物理建模）</h3><div>${replaceCLT(clt.model)}</div></section>
      <section class="scaffoldBlock"><h3>二、核心電路定律推導（鷹架填空＋代數卸載）</h3><div>${replaceCLT(clt.derivation)}</div></section>
      <section class="scaffoldBlock teacherKey" id="teacherKey" hidden></section>
      <section class="scaffoldBlock"><h3>四、自主遷移挑戰題（Faded Step to Independence）</h3><div>${clt.challenge}</div></section>
    </div>`;
  }
  function showTeacherKey(){
    const key=document.getElementById("teacherKey");if(!key||!clt)return;
    key.hidden=false;
    key.innerHTML=`<h3>三、填空解答與思維導引（Teacher's Key）</h3><ol class="keyList">${clt.blanks.slice(0,blankLimit()).map(item=>`<li><b>${item.label}【標準答案】：\\(${item.a.split("|")[0]}\\)</b><br><span>【思維線索（Why）】：${item.why}</span></li>`).join("")}</ol><div class="selfPrompt"><b>電路物理觀念解析（Self-Explanation Prompt）</b><br>${clt.self}</div>`;
    window.MathJax?.typesetPromise?.([key]);
  }
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
    return clt?scaffold():solution();
  };
  const baseRender=render;
  render=function(){
    baseRender();
    document.querySelector(".meta .tag:first-child").textContent=`${q.year} 年第 ${q.number} 題`;
    document.querySelector(".meta .tag:last-child").textContent=q.topic;
    const img=document.querySelector(".imageWrap img");img.src=cropRoot+q.image;img.alt=`${q.year} 年第 ${q.number} 題原始試題切圖`;
    const nav=document.getElementById("questionTabs");
    if(nav)nav.innerHTML=Object.keys(chapter4Remaining).map(key=>`<button class="chapterQuestion ${key===id?"active":""}" onclick="location.href='?id=${key}'">${key}</button>`).join("");
  };
  document.getElementById("check").onclick=()=>{
    if(level===1){const picked=document.querySelector(".choice.selected");if(!picked){show(false,"請先選擇一個答案。");return}document.querySelectorAll(".choice").forEach(b=>{b.classList.toggle("correct",b.dataset.value===q.answer);b.classList.toggle("wrong",b===picked&&b.dataset.value!==q.answer)});const ok=picked.dataset.value===q.answer;show(ok,`${ok?"答對了":"答案不正確"}；正確答案是 ${q.answer}。`);if(typeof saveAttempt==="function")saveAttempt({question:id,level,total:1,right:ok?1:0,unitTotal:0,unitRight:0});return}
    const values=[...document.querySelectorAll(".blank")],units=[...document.querySelectorAll(".unitInput")];let right=0,unitRight=0;
    if(clt){
      values.forEach(f=>{const ok=f.dataset.answer.split("|").map(norm).includes(norm(f.value));f.classList.toggle("good",ok);f.classList.toggle("bad",!ok);right+=ok?1:0});
      const ok=right===values.length;show(ok,`關鍵物理關係答對 ${right}/${values.length} 格。${ok?"鷹架推導完成！":"紅色欄位請配合 Teacher's Key 檢查觀念。"}`);showTeacherKey();if(typeof saveAttempt==="function")saveAttempt({question:id,level,total:values.length,right,unitTotal:0,unitRight:0});return;
    }
    values.forEach(f=>{const ok=norm(f.value)===norm(f.dataset.answer);f.classList.toggle("good",ok);f.classList.toggle("bad",!ok);right+=ok?1:0});
    units.forEach(u=>{const expected=u.dataset.unit;const ok=(unitAliases[expected]||[expected]).map(norm).includes(norm(u.value));u.classList.toggle("good",ok);u.classList.toggle("bad",!ok);unitRight+=ok?1:0});
    const ok=right===values.length&&unitRight===units.length;show(ok,`數值／文字答對 ${right}/${values.length} 格；單位答對 ${unitRight}/${units.length} 格。${ok?"完整計算正確！":"紅色欄位請再檢查。"}`);if(typeof saveAttempt==="function")saveAttempt({question:id,level,total:values.length,right,unitTotal:units.length,unitRight});
  };
  render();
})();

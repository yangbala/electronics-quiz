const chapter2Questions = {
  "111-36": {
    year:111, number:36, topic:"運算放大器加法電路", answer:"B",
    choices:["\\(20\\,\\mathrm{k}\\Omega\\)","\\(10\\,\\mathrm{k}\\Omega\\)","\\(5\\,\\mathrm{k}\\Omega\\)","\\(2.5\\,\\mathrm{k}\\Omega\\)"],
    blanks:[
      {a:"v_-=v_+|v-=v+", label:"①", why:"理想運算放大器在負回授且未飽和時具有虛短，但不是兩輸入端真的短路。"},
      {a:"3|1+10/5", label:"②", why:String.raw`反相端是標準非反相放大器回授網路，閉迴路增益為 \(1+R_f/R_g=3\)。`},
      {a:"(v_+-V_1)/10k+(v_+-V_2)/10k+v_+/R_S=0|(v+-V1)/10k+(v+-V2)/10k+v+/Rs=0", label:"③", why:"同相端不吸收電流，所以流經三個電阻的電流代數和為零。"},
      {a:"2+10k/R_S=3|2+10k/Rs=3", label:"④", why:String.raw`要讓 \(v_o=V_1+V_2\)，分母必須等於前級增益 3。`},
      {a:"10kΩ|10k|10 kΩ|10kOhm", label:"⑤", why:String.raw`由 \(10\,\mathrm{k}\Omega/R_S=1\) 得 \(R_S=10\,\mathrm{k}\Omega\)。`}
    ],
    model:String.raw`假設理想運算放大器、負回授成立且輸出未飽和，因此 \(i_+=i_-=0\)，並有 {{0}}。反相端的 \(5\,\mathrm{k}\Omega\) 與 \(10\,\mathrm{k}\Omega\) 形成非反相回授，故 \(v_o={{1}}v_+\)。`,
    derivation:String.raw`<b>步驟 1：建立同相端 KCL</b><br>{{2}}。<br><br><b>步驟 2：代數消去與化簡（完整保留）</b>\[\frac{2v_+-V_1-V_2}{10\,\mathrm{k}\Omega}+\frac{v_+}{R_S}=0\]\[v_+\left(2+\frac{10\,\mathrm{k}\Omega}{R_S}\right)=V_1+V_2\]\[v_o=3v_+=\frac{3(V_1+V_2)}{2+10\,\mathrm{k}\Omega/R_S}\]<b>步驟 3：工程條件</b><br>欲使 \(v_o=V_1+V_2\)，必須滿足 {{3}}。<br><br><b>步驟 4：目標指標</b>\[R_S={{4}}\]故選 B。代回可得 \(v_+=(V_1+V_2)/3\)，確實有 \(v_o=V_1+V_2\)。`,
    self:"為什麼同相端的三支路要寫 KCL，而反相端可以直接辨認成非反相放大器增益？請用『輸入電流為零』與『負回授』回答。",
    challenge:String.raw`若反相端接地電阻改為 \(10\,\mathrm{k}\Omega\)，回授仍為 \(10\,\mathrm{k}\Omega\)，求新的 \(R_S\) 使 \(v_o=V_1+V_2\)。<br><b>第一步提示：</b>先寫出新的閉迴路增益 \(1+R_f/R_g\)，再沿用同相端 KCL。`
  },
  "111-49": {
    year:111, number:49, topic:"兩級運算放大器電阻設計", answer:"A",
    choices:["\\(R_1=1\\,\\mathrm{k}\\Omega,\\ R_2=10\\,\\mathrm{k}\\Omega\\)","\\(R_1=1\\,\\mathrm{k}\\Omega,\\ R_2=5\\,\\mathrm{k}\\Omega\\)","\\(R_1=5\\,\\mathrm{k}\\Omega,\\ R_2=10\\,\\mathrm{k}\\Omega\\)","\\(R_1=5\\,\\mathrm{k}\\Omega,\\ R_2=5\\,\\mathrm{k}\\Omega\\)"],
    blanks:[
      {a:"v_{-1}=0|v-1=0|0V",label:"①",why:"第一級同相端接地，負回授使反相端成為虛地。"},
      {a:"V_x/V_i=-5k/R_1|Vx/Vi=-5k/R1",label:"②",why:"第一級是反相放大器，增益為負的回授電阻除以輸入電阻。"},
      {a:"1kΩ|1k|1 kΩ",label:"③",why:String.raw`由量測增益 \(-5/1=-5\) 與 \(-5\,\mathrm{k}\Omega/R_1\) 比較。`},
      {a:"V_o/V_x=1+10k/R_2|Vo/Vx=1+10k/R2",label:"④",why:"第二級訊號接同相端，因此是非反相放大器。"},
      {a:"10kΩ|10k|10 kΩ",label:"⑤",why:String.raw`第二級量測增益為 \((-10)/(-5)=2\)，故 \(10k/R_2=1\)。`}
    ],
    model:String.raw`兩級皆視為理想運算放大器並工作在線性負回授區。第一級同相端接地，所以 {{0}}；第二級則由 \(V_x\) 驅動同相端。`,
    derivation:String.raw`<b>步驟 1：建立第一級方程式</b><br>{{1}}。<br><br><b>步驟 2：完整數值代入</b>\[\frac{-5\,\mathrm{V}}{1\,\mathrm{V}}=-\frac{5\,\mathrm{k}\Omega}{R_1}\]\[R_1={{2}}\]<b>步驟 3：建立第二級方程式</b><br>{{3}}。<br><br><b>步驟 4：完整化簡與指標提煉</b>\[\frac{-10}{-5}=2=1+\frac{10\,\mathrm{k}\Omega}{R_2}\]\[\frac{10\,\mathrm{k}\Omega}{R_2}=1\]\[R_2={{4}}\]故選 A。兩級代回後分別得到 \(V_x=-5\,\mathrm{V}\) 與 \(V_o=-10\,\mathrm{V}\)。`,
    self:String.raw`兩級輸出都為負值，為什麼第二級仍是『非反相』？請以 \(V_o/V_x\) 的符號，而不是只看對地電壓正負回答。`,
    challenge:String.raw`若第一級回授改為 \(10\,\mathrm{k}\Omega\)，仍希望 \(V_i=1\,\mathrm{V}\) 時得到 \(V_x=-5\,\mathrm{V}\)，求 \(R_1\)。<br><b>第一步提示：</b>列出 \(V_x/V_i=-R_f/R_1\)。`
  },
  "112-40": {
    year:112, number:40, topic:"含直流電源的運算放大器", answer:"B",
    choices:["\\(4\\,\\mathrm{V}\\)","\\(6\\,\\mathrm{V}\\)","\\(8\\,\\mathrm{V}\\)","\\(10\\,\\mathrm{V}\\)"],
    blanks:[
      {a:"v_-=v_+=4V|v-=v+=4V|4V",label:"①",why:String.raw`同相端串聯電阻無電流、無壓降，所以 \(v_+=4\,V\)；負回授使 \(v_-=v_+\)。`},
      {a:"V_x=V_o-4V|Vx=Vo-4V",label:"②",why:String.raw`回授電池右正左負，因此 \(V_o-V_x=4\,V\)。`},
      {a:"(v_--V_x)/1k=2mA|(v--Vx)/1k=2mA",label:"③",why:"運放輸入不吸電流，2 mA 必須全部流入回授支路。"},
      {a:"8-V_o=2|8-Vo=2",label:"④",why:String.raw`把 \(v_-=4\,V\) 與 \(V_x=V_o-4\,V\) 代入 KCL。`},
      {a:"6V|6 V",label:"⑤",why:String.raw`完整方程式解得 \(V_o=6\,V\)，且在 \(\pm15\,V\) 電源範圍內。`}
    ],
    model:String.raw`理想運算放大器在線性負回授區，輸入電流為零。同相端的 \(1\,\mathrm{k}\Omega\) 無壓降，因此 {{0}}。令回授電阻與 4 V 電池之間節點為 \(V_x\)，依電池極性有 {{1}}。`,
    derivation:String.raw`<b>步驟 1：反相端 KCL</b><br>{{2}}。<br><br><b>步驟 2：代數消去與數值代入（完整保留）</b>\[\frac{4-[V_o-4]}{1\,\mathrm{k}\Omega}=2\,\mathrm{mA}\]\[\frac{8-V_o}{1\,\mathrm{k}\Omega}=2\,\mathrm{mA}\]\[{{3}}\]<b>步驟 3：工程檢查</b><br>所得輸出必須落在 \(-15\,\mathrm{V}\lt V_o\lt 15\,\mathrm{V}\)，線性假設才成立。<br><br><b>步驟 4：目標指標</b>\[V_o={{4}}\]故選 B。`,
    self:"若忽略回授支路中的 4 V 電池，答案會差多少？這說明 KVL 中電源極性為何不能只靠圖形位置猜測？",
    challenge:String.raw`若回授電池改為 2 V，其他元件不變，求 \(V_o\)。<br><b>第一步提示：</b>先依新極性寫出 \(V_o-V_x=2\,\mathrm{V}\)。`
  },
  "113-38": {
    year:113, number:38, topic:"梯形回授網路電壓增益", answer:"C",
    choices:["15","12","8","6"],
    blanks:[
      {a:"v_A=v_i|vA=vi",label:"①",why:String.raw`同相端接 \(v_i\)，負回授使反相端節點 A 與之等電位。`},
      {a:"v_A/R+(v_A-v_B)/R=0|vA/R+(vA-vB)/R=0",label:"②",why:"節點 A 無運放輸入電流，只能經兩個 R 分流。"},
      {a:"v_B=2v_A|vB=2vA",label:"③",why:"這是節點 A 的 KCL 化簡結果，不是額外近似。"},
      {a:"v_B/R+(v_B-v_A)/R+(v_B-v_o)/(2R)=0|vB/R+(vB-vA)/R+(vB-vo)/(2R)=0",label:"④",why:"節點 B 有三支路：接地 R、接 A 的 R、接輸出的 2R。"},
      {a:"8|A_v=8|Av=8",label:"⑤",why:String.raw`代入 \(v_B=2v_A\) 後得到 \(v_o=8v_A=8v_i\)。`}
    ],
    model:String.raw`令反相端為節點 A，中間接點為節點 B。理想運放負回授成立，所以 {{0}}，且運放輸入端不吸電流。`,
    derivation:String.raw`<b>步驟 1：節點 A 的 KCL</b><br>{{1}}。<br><br><b>步驟 2：完整代數化簡</b>\[v_A+v_A-v_B=0\]\[{{2}}\]<b>步驟 3：節點 B 的 KCL</b><br>{{3}}。<br><br><b>步驟 4：完整消去與增益提煉</b>\[2v_B-v_A+\frac{v_B-v_o}{2}=0\]\[4v_B-2v_A+v_B-v_o=0\]\[v_o=5v_B-2v_A\]\[v_o=5(2v_A)-2v_A=8v_A=8v_i\]\[A_v=\frac{v_o}{v_i}={{4}}\]故選 C。題給 \(R=100\,\mathrm{k}\Omega\) 不影響電阻比結果。`,
    self:String.raw`本題為何只由電阻比決定增益，而與 \(R=100\,k\Omega\) 的絕對值無關？`,
    challenge:String.raw`若節點 B 到輸出的電阻由 \(2R\) 改為 \(R\)，求新的 \(A_v\)。<br><b>第一步提示：</b>節點 A 的 KCL 不變，先保留 \(v_B=2v_A\)，只改寫節點 B 的第三支路。`
  },
  "113-39": {
    year:113, number:39, topic:"雙端加權運算放大器", answer:"A",
    choices:["\\(12\\,\\mathrm{V}\\)","\\(6\\,\\mathrm{V}\\)","\\(-8\\,\\mathrm{V}\\)","\\(-10\\,\\mathrm{V}\\)"],
    blanks:[
      {a:"2V/20k+1V/10k+0/20k=v_+(1/20k+1/10k+1/20k)|2/20k+1/10k=v+(1/20k+1/10k+1/20k)",label:"①",why:"同相端不吸電流，使用節點電導加權平均。"},
      {a:"1V|1 V",label:"②",why:"同相節點的加權平均為 1 V。"},
      {a:"v_-=v_+=1V|v-=v+=1V",label:"③",why:"負回授線性工作使兩輸入端等電位。"},
      {a:"(-3-v_-)/30k+(-2-v_-)/20k+(2-v_-)/10k+(v_o-v_-)/60k=0|(-3-v-)/30k+(-2-v-)/20k+(2-v-)/10k+(vo-v-)/60k=0",label:"④",why:"這是反相節點四支路 KCL，符號皆以流入節點為正。"},
      {a:"12V|12 V",label:"⑤",why:String.raw`完整代入得到 \(v_o=12\,V\)，未超過正電源 15 V。`}
    ],
    model:String.raw`假設理想運放在線性負回授區。先分析同相端；其 KCL 可寫成 {{0}}，所以 \(v_+={{1}}\)。由虛短得 {{2}}。`,
    derivation:String.raw`<b>步驟 1：反相端 KCL</b><br>{{3}}。<br><br><b>步驟 2：純數值運算完整保留</b>\[\frac{-3-1}{30\,\mathrm{k}\Omega}+\frac{-2-1}{20\,\mathrm{k}\Omega}+\frac{2-1}{10\,\mathrm{k}\Omega}+\frac{v_o-1}{60\,\mathrm{k}\Omega}=0\]\[-\frac{4}{30}-\frac{3}{20}+\frac{1}{10}+\frac{v_o-1}{60}=0\]\[-8-9+6+v_o-1=0\]\[v_o-12=0\]<b>步驟 3：工程檢查</b><br>因 \(-15\,\mathrm{V}\lt 12\,\mathrm{V}\lt 15\,\mathrm{V}\)，未飽和，虛短假設自洽。<br><br><b>步驟 4：目標指標</b>\[v_o={{4}}\]故選 A。`,
    self:"為什麼不能把同相端三個電阻直接忽略？請說明它們如何先決定虛短所固定的反相端參考電壓。",
    challenge:String.raw`若同相端的 \(+1\,\mathrm{V}\) 改為 \(0\,\mathrm{V}\)，其他條件不變，求新的輸出。<br><b>第一步提示：</b>先重新計算同相節點的電導加權平均。`
  },
  "114-36": {
    year:114, number:36, topic:"同相端加權求和放大器", answer:"C",
    choices:["\\(10\\,\\mathrm{mV}\\)","\\(20\\,\\mathrm{mV}\\)","\\(30\\,\\mathrm{mV}\\)","\\(55\\,\\mathrm{mV}\\)"],
    blanks:[
      {a:"Σ(V_i-v_+)/R_i=0|sum(Vi-v+)/Ri=0",label:"①",why:"理想運放同相端不吸電流，所有輸入支路電流代數和為零。"},
      {a:"4μA|4uA|4 µA",label:"②",why:"四支路各提供 1 µA，所以總注入電流為 4 µA。"},
      {a:"0.4mS|0.4 mS",label:"③",why:String.raw`總電導為 \(1/20k+1/20k+1/10k+1/5k=0.4\,mS\)。`},
      {a:"1+20k/10k=3|3",label:"④",why:"反相端回授形成非反相增益 3。"},
      {a:"30mV|30 mV",label:"⑤",why:String.raw`\(v_+=4\,µA/0.4\,mS=10\,mV\)，再乘 3 得 30 mV。`}
    ],
    model:String.raw`輸入訊號都接到理想運放同相端，故先用節點電導法；其一般式為 {{0}}。四個來源皆為正電壓。`,
    derivation:String.raw`<b>步驟 1：計算總注入電流</b>\[I_{\mathrm{in}}=\frac{20\,\mathrm{mV}}{20\,\mathrm{k}\Omega}+\frac{20\,\mathrm{mV}}{20\,\mathrm{k}\Omega}+\frac{10\,\mathrm{mV}}{10\,\mathrm{k}\Omega}+\frac{5\,\mathrm{mV}}{5\,\mathrm{k}\Omega}\]\[I_{\mathrm{in}}=1+1+1+1={{1}}\]<b>步驟 2：計算總電導（完整保留）</b>\[G_T=\frac1{20\,\mathrm{k}\Omega}+\frac1{20\,\mathrm{k}\Omega}+\frac1{10\,\mathrm{k}\Omega}+\frac1{5\,\mathrm{k}\Omega}={{2}}\]\[v_+=\frac{I_{\mathrm{in}}}{G_T}=\frac{4\,\mu\mathrm{A}}{0.4\,\mathrm{mS}}=10\,\mathrm{mV}\]<b>步驟 3：辨識閉迴路增益</b><br>反相端回授使 \(A_v={{3}}\)。<br><br><b>步驟 4：目標指標</b>\[v_o=3v_+=3(10\,\mathrm{mV})={{4}}\]故選 C。`,
    self:"四個輸入電壓不能直接相加；電阻為何會改變每個來源對同相節點的權重？",
    challenge:String.raw`若最下方 \(5\,\mathrm{k}\Omega\) 改為 \(10\,\mathrm{k}\Omega\)，求新的 \(v_+\) 與 \(v_o\)。<br><b>第一步提示：</b>同時重算該支路的電流與總電導。`
  },
  "115-41": {
    year:115, number:41, topic:"共模拒斥比 CMRR", answer:"C",
    choices:["\\(20\\,\\mathrm{dB}\\)","\\(40\\,\\mathrm{dB}\\)","\\(60\\,\\mathrm{dB}\\)","\\(80\\,\\mathrm{dB}\\)"],
    blanks:[
      {a:"|A_d/A_c||Ad/Ac|A_d/A_c",label:"①",why:"CMRR 的倍率定義是差模增益與共模增益的絕對值比。"},
      {a:"1000|10^3",label:"②",why:String.raw`\(2\times10^4/20=10^3\)。`},
      {a:"20log10(CMRR)|20 log10(CMRR)",label:"③",why:"電壓增益比轉成分貝使用 20 倍常用對數。"},
      {a:"log10(10^3)=3|3",label:"④",why:"這是純對數運算，保留可看出三個 decade。"},
      {a:"60dB|60 dB",label:"⑤",why:String.raw`\(20\times3=60\,dB\)。`}
    ],
    model:String.raw`差模增益為 \(A_d=2\times10^4\)，共模增益為 \(A_c=20\)。先用倍率定義 \(\mathrm{CMRR}={{0}}\)。`,
    derivation:String.raw`<b>步驟 1：計算倍率</b>\[\mathrm{CMRR}=\left|\frac{2\times10^4}{20}\right|={{1}}\]<b>步驟 2：轉換為分貝（完整保留）</b><br>分貝式為 {{2}}。\[\mathrm{CMRR}_{\mathrm{dB}}=20\log_{10}(1000)\]\[=20\log_{10}(10^3)\]\[=20({{3}})\]<b>步驟 3：工程解讀</b><br>CMRR 越大，表示運放越能抑制同時出現在兩輸入端的訊號。<br><br><b>步驟 4：目標指標</b>\[\mathrm{CMRR}_{\mathrm{dB}}={{4}}\]故選 C。`,
    self:"若把 20 誤寫成 10，結果會少一半。請解釋為何電壓（或電流）比使用 20 log，而功率比使用 10 log。",
    challenge:String.raw`若 \(A_d=5\times10^4\)、\(A_c=5\)，求 CMRR 倍率與分貝值。<br><b>第一步提示：</b>先求 \(|A_d/A_c|\)，再轉成 \(20\log_{10}(\cdot)\)。`
  },
  "115-47": {
    year:115, number:47, topic:"差動式運算放大器電阻比", answer:"A",
    choices:["4","3","2","1"],
    blanks:[
      {a:"v_+=3R_f/(R+R_f)|v+=3Rf/(R+Rf)",label:"①",why:String.raw`同相端由 3 V 經 R 與對地 \(R_f\) 分壓，運放輸入不取電流。`},
      {a:"v_-=v_+|v-=v+",label:"②",why:"負回授且未飽和時兩輸入端等電位。"},
      {a:"(1-v_-)/R+(v_o-v_-)/R_f=0|(1-v-)/R+(vo-v-)/Rf=0",label:"③",why:"反相端有 1 V 輸入支路與輸出回授支路。"},
      {a:"v_o=2R_f/R|vo=2Rf/R",label:"④",why:"把同相端分壓式代入後，代數項恰好化簡為輸入差 3−1 乘電阻比。"},
      {a:"4",label:"⑤",why:String.raw`由 \(8=2R_f/R\) 得 \(R_f/R=4\)。`}
    ],
    model:String.raw`理想運放工作在線性負回授區。同相端是無負載分壓器，因此 {{0}}，並有 {{1}}。`,
    derivation:String.raw`<b>步驟 1：反相端 KCL</b><br>{{2}}。<br><br><b>步驟 2：代數消去（完整保留）</b>\[R_f(1-v_-)+R(v_o-v_-)=0\]\[Rv_o=(R+R_f)v_- -R_f\]\[v_o=\left(1+\frac{R_f}{R}\right)v_- -\frac{R_f}{R}\]\[v_o=\left(1+\frac{R_f}{R}\right)\frac{3R_f}{R+R_f}-\frac{R_f}{R}\]\[v_o=\frac{3R_f}{R}-\frac{R_f}{R}={{3}}\]<b>步驟 3：工程檢查</b><br>若 \(R_f/R=4\)，則 \(v_+=3\times4/5=2.4\,\mathrm{V}\)，而 \(v_o=8\,\mathrm{V}\) 仍在 \(\pm15\,\mathrm{V}\) 內。<br><br><b>步驟 4：目標指標</b><div class="equationLine"><span>\(8=2\dfrac{R_f}{R}\Rightarrow\dfrac{R_f}{R}=\)</span>{{4}}</div>故選 A。`,
    self:String.raw`本電路為何會得到 \(v_o=(R_f/R)(3-1)\)，但前提是同相端也使用相同比例的 R 與 \(R_f\)？`,
    challenge:String.raw`若反相端輸入改為 2 V、同相端仍為 3 V，且 \(R_f/R=4\)，求輸出。<br><b>第一步提示：</b>先保留同相端分壓式，再以反相端 KCL 代入新的 2 V。`
  }
};

(function activateChapter2(){
  const id=new URLSearchParams(location.search).get("id");
  const q=chapter2Questions[id];
  if(!q)return;
  const requested=Number(new URLSearchParams(location.search).get("level"));
  if([1,2,3,4].includes(requested))level=requested;
  const limit=()=>({2:3,3:4,4:5}[level]||0);
  const normalize=s=>s.trim().replace(/\\s+/g,"").replace(/[ΩΩ]/g,"ohm").replace(/µ/g,"u").toLowerCase();
  const mathContext=(html,offset)=>{
    const before=html.slice(0,offset);
    const inlineOpen=(before.match(/\\\(/g)||[]).length>(before.match(/\\\)/g)||[]).length;
    const displayOpen=(before.match(/\\\[/g)||[]).length>(before.match(/\\\]/g)||[]).length;
    return inlineOpen?"inline":displayOpen?"display":null;
  };
  const replace=html=>html.replace(/\{\{(\d+)\}\}/g,(_,i,offset)=>{
    const n=Number(i), item=q.blanks[n];
    const context=mathContext(html,offset);
    const answer=item.a.split("|")[0];
    const before=html.slice(0,offset).trimEnd();
    const shown=context&&/=\s*$/.test(before)&&answer.includes("=")?answer.slice(answer.lastIndexOf("=")+1):answer;
    if(n>=limit())return context?`\\boxed{${shown}}`:`<strong>\\(${answer}\\)</strong>`;
    const markup=`<span class="cltBlank"><span class="blankRef">${item.label}</span>[ <input class="blank wide" data-answer="${item.a}" aria-label="填空 ${item.label}" autocomplete="off"> ]</span>`;
    if(context==="inline")return `\\)${markup}\\(`;
    if(context==="display")return `\\]${markup}\\[`;
    return markup;
  });
  const goals={
    1:["觀念辨識","從選項判斷答案，先辨認電路型態與關鍵定律。","訓練目標：看懂題意、辨認理想運放與回授型態。"],
    2:["少量關鍵填空","完整推導保留，只填 3 個物理建模或核心定律空格。","訓練目標：在低負荷下掌握起手式、第一行方程式與關鍵中間量。"],
    3:["中量鷹架填空","完整推導保留，增加為 4 個關鍵空格。","訓練目標：連結節點定律、工程條件與代數結果。"],
    4:["大量鷹架填空","完整推導保留，完成全部 5 個關鍵空格並自行確認答案。","訓練目標：獨立完成建模、列式、條件判斷、指標提煉與驗算。"]
  };
  function scaffold(){
    return `<div class="scaffold">
      <section class="scaffoldBlock"><h3>一、電路分析起手式（物理建模）</h3><div>${replace(q.model)}</div></section>
      <section class="scaffoldBlock"><h3>二、核心電路定律推導（鷹架填空＋代數卸載）</h3><div>${replace(q.derivation)}</div></section>
      <section class="scaffoldBlock teacherKey" id="teacherKey" hidden></section>
      <section class="scaffoldBlock"><h3>四、自主遷移挑戰題（Faded Step to Independence）</h3><div>${q.challenge}</div></section>
    </div>`;
  }
  function content2(){return level===1?`<div class="choices">${q.choices.map((x,i)=>`<button class="choice" data-value="${"ABCD"[i]}"><span>${"ABCD"[i]}</span><b>${x}</b></button>`).join("")}</div>`:scaffold()}
  function showKey(){
    const key=document.getElementById("teacherKey"); if(!key)return;
    key.hidden=false;
    key.innerHTML=`<h3>三、填空解答與思維導引（Teacher's Key）</h3><ol class="keyList">${q.blanks.slice(0,limit()).map(x=>`<li><b>${x.label}【標準答案】：\\(${x.a.split("|")[0]}\\)</b><br><span>【思維線索（Why）】：${x.why}</span></li>`).join("")}</ol><div class="selfPrompt"><b>電路物理觀念解析（Self-Explanation Prompt）</b><br>${q.self}</div>`;
    window.MathJax?.typesetPromise?.([key]);
  }
  function render2(){
    const [note,help,goal]=goals[level];
    $("levelName").textContent=`等級 ${level}`; $("levelNote").textContent=note;
    $("workTitle").textContent=`等級 ${level}・${note}`; $("workHelp").textContent=help; $("levelGoal").textContent=goal;
    $("tabs").innerHTML=Object.entries(goals).map(([n,g])=>`<button class="level ${level===Number(n)?"active":""}" data-level="${n}"><strong>等級 ${n}</strong><span>${g[0]}</span></button>`).join("");
    $("answerArea").innerHTML=content2(); $("result").innerHTML="";
    document.querySelectorAll(".level").forEach(b=>b.onclick=()=>{const p=new URLSearchParams(location.search);p.set("level",b.dataset.level);location.search=p.toString()});
    document.querySelectorAll(".choice").forEach(b=>b.onclick=()=>{document.querySelectorAll(".choice").forEach(x=>x.classList.remove("selected"));b.classList.add("selected")});
    document.querySelector(".meta .tag:first-child").textContent=`${q.year} 年第 ${q.number} 題`;
    document.querySelector(".meta .tag:last-child").textContent=q.topic;
    const img=document.querySelector(".imageWrap img"),root="file:///C:/Users/Eli/.codex/visualizations/2026/08/13/019ffba4-80b5-7ed3-a9a4-ee902d86127c/";
    img.src=location.protocol==="file:"?`${root}chapter2-${id}.png`:`assets/chapter2/chapter2-${id}.png`; img.alt=`${id} 原始試題切圖`;
    const nav=document.getElementById("questionTabs"); if(nav)nav.innerHTML=Object.keys(chapter2Questions).map(k=>`<button class="chapterQuestion ${k===id?"active":""}" onclick="location.href='?id=${k}'">${k}</button>`).join("");
    if(typeof renderStats==="function")renderStats();
    if(window.MathJax?.typesetPromise){window.MathJax.typesetClear?.([$("answerArea")]);window.MathJax.typesetPromise([$("answerArea")]);}
  }
  render=render2;
  $("check").onclick=()=>{
    if(level===1){
      const picked=document.querySelector(".choice.selected"); if(!picked){show(false,"請先選擇一個答案。");return;}
      document.querySelectorAll(".choice").forEach(b=>{b.classList.toggle("correct",b.dataset.value===q.answer);b.classList.toggle("wrong",b===picked&&b.dataset.value!==q.answer)});
      const ok=picked.dataset.value===q.answer; show(ok,`${ok?"答對了":"答案不正確"}；正確答案是 ${q.answer}。可進入等級 2 查看完整推導。`);
      if(typeof saveAttempt==="function")saveAttempt({question:id,level,total:1,right:ok?1:0,unitTotal:0,unitRight:0}); return;
    }
    const fields=[...document.querySelectorAll(".blank")]; let right=0;
    fields.forEach(f=>{const ok=f.dataset.answer.split("|").map(normalize).includes(normalize(f.value));f.classList.toggle("good",ok);f.classList.toggle("bad",!ok);right+=ok?1:0});
    const ok=right===fields.length; show(ok,`答對 ${right}/${fields.length} 格。${ok?"關鍵建模與列式皆正確。":"錯誤欄位已標紅；請對照 Teacher's Key 的物理線索。"}`); showKey();
    if(typeof saveAttempt==="function")saveAttempt({question:id,level,total:fields.length,right,unitTotal:0,unitRight:0});
  };
  $("reset").onclick=render2; render2();
})();

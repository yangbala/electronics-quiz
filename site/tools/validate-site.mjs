import fs from "node:fs";
import path from "node:path";

const root = path.resolve(import.meta.dirname, "..");
const index = fs.readFileSync(path.join(root, "quiz.html"), "utf8");
const extra = fs.readFileSync(path.join(root, "data", "other-questions.js"), "utf8");
const chapter4 = fs.readFileSync(path.join(root, "data", "chapter4-remaining.js"), "utf8");
const chapter5CLT1 = fs.readFileSync(path.join(root, "data", "chapter5-clt-batch1.js"), "utf8");
const chapter5CLT2 = fs.readFileSync(path.join(root, "data", "chapter5-clt-batch2.js"), "utf8");
const chapter5CLT3 = fs.readFileSync(path.join(root, "data", "chapter5-clt-batch3.js"), "utf8");
const chapter6 = fs.readFileSync(path.join(root, "data", "chapter6-questions.js"), "utf8");
const chapter7 = fs.readFileSync(path.join(root, "data", "chapter7-questions.js"), "utf8");
const chapter7Page = fs.readFileSync(path.join(root, "chapters", "chapter-7.html"), "utf8");
const chapter3 = fs.readFileSync(path.join(root, "data", "chapter3-questions.js"), "utf8");
const chapter3Page = fs.readFileSync(path.join(root, "chapters", "chapter-3.html"), "utf8");

const errors = [];
const assert = (condition, message) => { if (!condition) errors.push(message); };

// JavaScript syntax.
const inlineScripts = [...index.matchAll(/<script(?:\s[^>]*)?>([\s\S]*?)<\/script>/g)]
  .map(match => match[1]).filter(Boolean);
for (const [i, script] of inlineScripts.entries()) {
  try { new Function(script); } catch (error) { errors.push(`index.html inline script ${i + 1}: ${error.message}`); }
}
try { new Function(extra); } catch (error) { errors.push(`other-questions.js: ${error.message}`); }
try { new Function(chapter4); } catch (error) { errors.push(`chapter4-remaining.js: ${error.message}`); }
try { new Function(chapter5CLT1); } catch (error) { errors.push(`chapter5-clt-batch1.js: ${error.message}`); }
try { new Function(chapter5CLT2); } catch (error) { errors.push(`chapter5-clt-batch2.js: ${error.message}`); }
try { new Function(chapter5CLT3); } catch (error) { errors.push(`chapter5-clt-batch3.js: ${error.message}`); }
try { new Function(chapter6); } catch (error) { errors.push(`chapter6-questions.js: ${error.message}`); }
try { new Function(chapter7); } catch (error) { errors.push(`chapter7-questions.js: ${error.message}`); }
try { new Function(chapter3); } catch (error) { errors.push(`chapter3-questions.js: ${error.message}`); }

// Runtime LaTeX audit: JavaScript string escaping must preserve MathJax delimiters.
const chapter5Runtime=new Function("location",`${chapter5CLT1}\n${chapter5CLT2}\n${chapter5CLT3}\nreturn [chapter5CLTBatch1,chapter5CLTBatch2,chapter5CLTBatch3];`)({search:""});
for(const [batchName,records] of [
  ["Chapter 5 batch 1",chapter5Runtime[0]],
  ["Chapter 5 batch 2",chapter5Runtime[1]],
  ["Chapter 5 batch 3",chapter5Runtime[2]]
]){
  for(const [id,record] of Object.entries(records)){
    const texts=[record.model,record.derivation,record.self,record.challenge,...record.blanks.map(item=>item.why)].filter(Boolean);
    for(const [i,text] of texts.entries()){
      assert((text.match(/\\\(/g)||[]).length===(text.match(/\\\)/g)||[]).length,`${batchName} ${id} text ${i+1}: unbalanced inline LaTeX delimiters`);
      assert((text.match(/\\\[/g)||[]).length===(text.match(/\\\]/g)||[]).length,`${batchName} ${id} text ${i+1}: unbalanced display LaTeX delimiters`);
      assert(!/(^|[^\\])\([^)]*_[^)]*\)/.test(text),`${batchName} ${id} text ${i+1}: raw parenthesized subscript expression found`);
    }
  }
}
assert(chapter5CLT2.includes('why:String.raw`由定義 \\(V_{GS}=V_G-V_S\\)'),"113-35 V_G relation must use a raw LaTeX string");

// Required content and assets.
assert(index.includes("MathJax"), "MathJax configuration missing");
assert(index.includes("tex-svg.js"), "MathJax renderer missing");
assert(index.includes('src="data/other-questions.js?v=7"'), "data/other-questions.js is not loaded");
assert(index.includes('src="data/chapter4-remaining.js?v=7"'), "data/chapter4-remaining.js is not loaded");
assert(index.includes('src="data/chapter5-clt-batch1.js?v=7"'), "data/chapter5-clt-batch1.js is not loaded");
assert(index.includes('src="data/chapter5-clt-batch2.js?v=4"'), "data/chapter5-clt-batch2.js is not loaded");
assert(index.includes('src="data/chapter5-clt-batch3.js?v=2"'), "data/chapter5-clt-batch3.js is not loaded");
assert(index.includes('src="data/chapter5-questions.js?v=3"'), "data/chapter5-questions.js is not loaded");
assert(index.includes('src="data/chapter2-questions.js?v=7"'), "data/chapter2-questions.js is not loaded");
assert(fs.readFileSync(path.join(root,"data","chapter2-questions.js"),"utf8").includes('if(n>=limit())return context?`\\\\boxed{${shown}}`'),"Chapter 2 revealed answers must stay inside their current LaTeX formula");
assert(index.includes('.equationLine{display:flex'),"single-line equation-and-answer layout missing");
assert(index.includes('.equationRun{display:inline-flex'),"shared non-wrapping equation-answer layout missing");
assert(index.includes('function keepEquationAnswersTogether(root)'),"shared equation-answer grouping function missing");
assert(index.includes("MathJax.typesetPromise([root]).then(()=>keepEquationAnswersTogether(root))"),"equation-answer grouping must run after MathJax rendering");
for(const file of ["other-questions.js","chapter2-questions.js","chapter3-questions.js","chapter5-clt-batch1.js"]){
  const source=fs.readFileSync(path.join(root,"data",file),"utf8");
  assert(!/typesetPromise(?:\?\.)?\(\[[^\]]*answerArea/.test(source),`${file}: answer-area MathJax rendering must use typesetAnswerArea()`);
}
assert(fs.readFileSync(path.join(root,"data","chapter2-questions.js"),"utf8").includes('<div class="equationLine"><span>\\(8=2\\dfrac{R_f}{R}'),"115-47 target equation must use the single-line layout");
assert(index.includes('src="data/chapter6-questions.js?v=2"'), "data/chapter6-questions.js is not loaded");
assert(index.includes('src="data/chapter7-questions.js?v=3"'), "data/chapter7-questions.js is not loaded");
assert(index.includes('src="data/chapter3-questions.js?v=8"'), "data/chapter3-questions.js is not loaded");
assert(chapter3.includes('context==="display"?`\\\\]${markup}\\\\[`'),"Chapter 3 inputs inside display math must be moved outside LaTeX before rendering");
assert(extra.includes('return context==="inline"?`\\\\)${markup}\\\\(`'),"Legacy CLT renderer must preserve escaped inline LaTeX delimiters");
assert(chapter4.includes('return context==="inline"?`\\\\)${markup}\\\\(`'),"Chapter 4 CLT renderer must preserve escaped inline LaTeX delimiters");
assert(chapter5CLT1.includes('return c==="inline"?`\\\\)${markup}\\\\(`'),"Chapter 5 CLT renderer must preserve escaped inline LaTeX delimiters");
for(const [name,source] of [["Chapter 2",fs.readFileSync(path.join(root,"data","chapter2-questions.js"),"utf8")],["Chapter 5 batch 1",chapter5CLT1],["Chapter 5 batch 2",chapter5CLT2],["Chapter 7",chapter7]]){
  assert(!/\\\([^)]*<[A-Za-z\\]/.test(source),`${name}: literal < before a LaTeX symbol can be parsed as an HTML tag; use \\lt`);
}

const chapter3Answers={"112-27":"C","114-26":"B","115-1":"B"};
for(const [id,answer] of Object.entries(chapter3Answers)){
  assert(chapter3.includes(`"${id}": {`),`${id}: Chapter 3 data record missing`);
  assert(new RegExp(`"${id}": \\{[\\s\\S]*?answer: "${answer}"`).test(chapter3),`${id}: official answer ${answer} missing`);
  assert(chapter3Page.includes(`id=${id}`),`${id}: Chapter 3 link missing`);
  const crop=path.resolve("C:/Users/Eli/.codex/visualizations/2026/08/13/019ffba4-80b5-7ed3-a9a4-ee902d86127c",`chapter3-${id}.png`);
  assert(fs.existsSync(crop),`${id}: reviewed Chapter 3 crop missing`);
}
assert((chapter3.match(/title:"一、電路分析起手式/g)||[]).length===3,"Chapter 3 must contain three modeling blocks");
assert((chapter3.match(/Teacher's Key/g)||[]).length>=3,"Chapter 3 Teacher's Key blocks missing");
assert(chapter3.includes("{2:3,3:4,4:5}"),"Chapter 3 faded blank plan must be 3/4/5");
for (const q of [27, 28, 29, 30, 31]) {
  const image = path.resolve(
    "C:/Users/Eli/.codex/visualizations/2026/08/13/019ffba4-80b5-7ed3-a9a4-ee902d86127c",
    `q${q}.jpg`
  );
  assert(fs.existsSync(image), `question ${q} image missing`);
}
for (const marker of ["①", "②", "③", "④", "⑤", "⑥"]) {
  assert(index.includes(marker) || extra.includes(marker), `solution step ${marker} missing`);
}

const chapter4Ids = ["112-28","112-45","113-26","113-43","113-44","114-27","114-28","114-42","115-27","115-44"];
for (const id of chapter4Ids) {
  assert(chapter4.includes(`"${id}": {`), `${id}: data record missing`);
  const image = path.resolve("C:/Users/Eli/.codex/visualizations/2026/08/13/019ffba4-80b5-7ed3-a9a4-ee902d86127c/chapter4_questions", `${id}.png`);
  assert(fs.existsSync(image), `${id}: crop image missing`);
}
const chapter5CLT1Ids=["111-35","111-48","112-32","112-33","112-34"];
for(const id of chapter5CLT1Ids){assert(chapter5CLT1.includes(`"${id}":{`),`${id}: Chapter 5 CLT batch 1 record missing`)}
assert((chapter5CLT1.match(/label:"[①②③④⑤]"/g)||[]).length===25,"Chapter 5 CLT batch 1 must provide five blanks per question");
const chapter5CLT2Ids=["113-32","113-35","113-46","113-47","114-31"];
for(const id of chapter5CLT2Ids){assert(chapter5CLT2.includes(`"${id}":{`),`${id}: Chapter 5 CLT batch 2 record missing`)}
assert((chapter5CLT2.match(/label:"[①②③④⑤]"/g)||[]).length===25,"Chapter 5 CLT batch 2 must provide five blanks per question");
const chapter5CLT3Ids=["114-32","114-33","114-34","115-32","115-35","115-36"];
for(const id of chapter5CLT3Ids){assert(chapter5CLT3.includes(`"${id}":{`),`${id}: Chapter 5 CLT batch 3 record missing`)}
assert((chapter5CLT3.match(/label:"[①②③④⑤]"/g)||[]).length===30,"Chapter 5 CLT batch 3 must provide five blanks per question");
assert((chapter5CLT1.match(/Faded Step to Independence/g)||[]).length===1,"Chapter 5 CLT batch 1 shared migration renderer missing");
assert((chapter4.match(/<b>⑥/g) || []).length === 10, "remaining Chapter 4 questions must each contain six complete steps");
for (const [id, answer] of Object.entries({"112-28":"A","112-45":"D","113-26":"A","113-43":"D","113-44":"D","114-27":"C","114-28":"D","114-42":"A","115-27":"C","115-44":"B"})) {
  const escaped=id.replace("-","\\-");
  assert(new RegExp(`"${escaped}": \\{[\\s\\S]*?answer:"${answer}"`).test(chapter4), `${id}: verified answer ${answer} missing`);
}
const chapter6Answers={"111-44":"C","111-45":"B","112-29":"B","112-30":"D","112-38":"D","112-48":"D","113-27":"B","113-28":"D","113-29":"A","114-41":"D","114-43":"D","115-28":"A","115-45":"D"};
for(const [id,answer] of Object.entries(chapter6Answers)){
  assert(chapter6.includes(`"${id}":{`),`${id}: Chapter 6 data record missing`);
  assert(new RegExp(`"${id}":\\{[\\s\\S]*?answer:"${answer}"`).test(chapter6),`${id}: official answer ${answer} missing`);
  const image=path.resolve("C:/Users/Eli/.codex/visualizations/2026/08/13/019ffba4-80b5-7ed3-a9a4-ee902d86127c/chapter6_questions",`${id}.png`);
  assert(fs.existsSync(image),`${id}: crop image missing`);
}
assert((chapter6.match(/<b>⑥/g)||[]).length===13,"remaining Chapter 6 questions must each contain six complete steps");

const chapter7Answers={"111-47":"D","112-35":"D","112-47":"D","113-33":"D","113-36":"A","113-45":"D","114-29":"A","114-30":"C","114-35":"C","115-29":"B","115-30":"C","115-33":"D","115-34":"D","115-43":"C","115-46":"C"};
for(const [id,answer] of Object.entries(chapter7Answers)){
  assert(chapter7.includes(`"${id}":{`),`${id}: Chapter 7 data record missing`);
  assert(new RegExp(`"${id}":\\{[\\s\\S]*?answer:"${answer}"`).test(chapter7),`${id}: official answer ${answer} missing`);
  const image=path.resolve("C:/Users/Eli/.codex/visualizations/2026/08/13/019ffba4-80b5-7ed3-a9a4-ee902d86127c/chapter7_questions",`${id}.png`);
  assert(fs.existsSync(image),`${id}: crop image missing`);
  assert(chapter7Page.includes(`id=${id}`),`${id}: Chapter 7 link missing`);
}
for(const id of ["111-29","111-30"]) assert(chapter7Page.includes(`${id}`),`${id}: legacy Chapter 7 link missing`);
assert(/17 題[^。]*已完成/.test(chapter7Page),"Chapter 7 completion count must be 17");
const chapter7Counts=[...chapter7.matchAll(/counts:\[(\d+),(\d+),(\d+)\]/g)];
assert(chapter7Counts.length===15,`expected 15 Chapter 7 count plans, found ${chapter7Counts.length}`);
for(const match of chapter7Counts){const [,l2,l3,l4]=match.map(Number);assert(l2<l3&&l3<l4,`Chapter 7 blank counts must increase: ${l2},${l3},${l4}`)}
const chapter7Records=[...chapter7.matchAll(/^"(\d{3}-\d{2})":\{/gm)];
for(let i=0;i<chapter7Records.length;i++){
  const id=chapter7Records[i][1],start=chapter7Records[i].index,end=chapter7Records[i+1]?.index??chapter7.indexOf("(function activateChapter7");
  const record=chapter7.slice(start,end),counts=record.match(/counts:\[(\d+),(\d+),(\d+)\]/),markers=(record.match(/\{\{/g)||[]).length,steps=(record.match(/String\.raw`/g)||[]).length;
  assert(steps>=6,`${id}: must contain at least six complete steps`);
  if(counts)assert(Number(counts[3])<=markers,`${id}: Level 4 requests ${counts[3]} blanks but only ${markers} markers exist`);
}

const chapter7Steps=[...chapter7.matchAll(/String\.raw`([\s\S]*?)`/g)].map(match=>match[1]);
assert(chapter7Steps.length>=90,`expected at least 90 Chapter 7 solution steps, found ${chapter7Steps.length}`);
for(const [i,source] of chapter7Steps.entries()){
  let inMath=false,braces=0;
  for(let cursor=0;cursor<source.length;){
    if(source.startsWith(String.raw`\(`,cursor)){assert(!inMath,`Chapter 7 step ${i+1}: nested \\(`);inMath=true;braces=0;cursor+=2;continue}
    if(source.startsWith(String.raw`\)`,cursor)){assert(inMath,`Chapter 7 step ${i+1}: unmatched \\)`);assert(braces===0,`Chapter 7 step ${i+1}: braces open before \\)`);inMath=false;cursor+=2;continue}
    if(source.startsWith("{{",cursor)){assert(!inMath||braces===0,`Chapter 7 step ${i+1}: blank inside unfinished LaTeX command`);const end=source.indexOf("}}",cursor+2);assert(end>=0,`Chapter 7 step ${i+1}: unclosed blank marker`);cursor=end+2;continue}
    if(inMath&&source[cursor]==="{")braces++;
    if(inMath&&source[cursor]==="}"){braces--;assert(braces>=0,`Chapter 7 step ${i+1}: unmatched }`)}
    cursor++;
  }
  assert(!inMath,`Chapter 7 step ${i+1}: unclosed LaTeX delimiter`);
}

// Validate question 27 steps and every String.raw step after inserting an HTML input.
const q27Section = index.match(/if\(level===2\)return `([\s\S]*?)function render\(\)/)?.[1] ?? "";
const q27Templates = [...q27Section.matchAll(/<div class="step">([\s\S]*?)<\/div>/g)]
  .map(match => match[1].replace(/\$\{input\([\s\S]*?\)\}/g, "<input>"));
const questionData = extra.split("let selectedQuestion")[0];
const rawTemplates = [...questionData.matchAll(/String\.raw`([\s\S]*?)`/g)].map(match => match[1]);
assert(q27Templates.length === 18, `expected 18 question-27 solution steps, found ${q27Templates.length}`);
assert(rawTemplates.length >= 36, `expected at least 36 legacy and Chapter 4 CLT templates, found ${rawTemplates.length}`);
const legacyStart=extra.indexOf("const legacyChapter4CLT={");
const legacyEnd=extra.indexOf("const params=",legacyStart);
const legacyChapter4Section=legacyStart>=0&&legacyEnd>legacyStart?extra.slice(legacyStart,legacyEnd):"";
assert(legacyChapter4Section.includes("27:{")&&legacyChapter4Section.includes("43:{"),"111-27 and 111-43 CLT records missing");
assert((legacyChapter4Section.match(/label:"[①②③④⑤]"/g)||[]).length===10,"111-27 and 111-43 must each provide five CLT blanks");
assert((legacyChapter4Section.match(/Teacher's Key/g)||[]).length===0,"Teacher's Key should be rendered once by the shared renderer");
const allTemplates = [
  ...q27Templates.map(source => ({ source, alreadyRendered: true })),
  ...rawTemplates.map(source => ({ source, alreadyRendered: false }))
];
for (const [i, item] of allTemplates.entries()) {
  const source = item.source;
  const rendered = item.alreadyRendered ? source : source.replace(/\[\[(.*?)\]\]/g, (marker, answer, offset) => {
    let braces = 0;
    for (const char of source.slice(0, offset)) {
      if (char === "{") braces++;
      if (char === "}") braces--;
    }
    return braces === 0 ? String.raw`\) <input> \(` : answer;
  });
  let inMath = false;
  let mathBraces = 0;
  for (let cursor = 0; cursor < rendered.length;) {
    if (rendered.startsWith(String.raw`\(`, cursor)) { assert(!inMath, `step ${i + 1}: nested \\(`); inMath = true; mathBraces = 0; cursor += 2; continue; }
    if (rendered.startsWith(String.raw`\)`, cursor)) { assert(inMath, `step ${i + 1}: unmatched \\)`); if (!item.alreadyRendered) assert(mathBraces === 0, `step ${i + 1}: LaTeX braces remain open before \\)`); inMath = false; cursor += 2; continue; }
    if (inMath && rendered[cursor] === "{") mathBraces++;
    if (inMath && rendered[cursor] === "}") { mathBraces--; if (!item.alreadyRendered) assert(mathBraces >= 0, `step ${i + 1}: unmatched } inside LaTeX`); }
    if (rendered.startsWith("<input>", cursor)) assert(!inMath, `step ${i + 1}: input remains inside LaTeX`);
    cursor++;
  }
  assert(!inMath, `step ${i + 1}: unclosed LaTeX delimiter`);

  // Braces must balance inside the source template.
  let braces = 0;
  for (const char of source.replace(/\[\[.*?\]\]/g, "0")) {
    if (char === "{") braces++;
    if (char === "}") braces--;
    if (braces < 0) break;
  }
  assert(braces === 0, `step ${i + 1}: unbalanced LaTeX braces`);
}

// Official answers used by the prototype.
for (const [question, answer] of Object.entries({ 28: "D", 29: "A", 30: "C", 31: "C", 43: "B" })) {
  const pattern = new RegExp(`${question}: \\{[\\s\\S]*?answer: "${answer}"`);
  assert(pattern.test(extra), `question ${question}: official answer ${answer} not found`);
}

if (errors.length) {
  console.error(`Validation failed (${errors.length}):`);
  for (const error of errors) console.error(`- ${error}`);
  process.exit(1);
}

console.log("Validation passed");
console.log(`- ${allTemplates.length} LaTeX solution steps checked`);
console.log("- all inputs are outside LaTeX delimiters");
console.log("- JavaScript syntax, five images, six-step structure and official answers checked");
console.log("- all 10 remaining Chapter 4 records, crops, six-step solutions and verified answers checked");
console.log("- all 13 remaining Chapter 6 records, crops, six-step solutions and official answers checked");
console.log("- all 15 Chapter 7 records, crops, increasing blank plans, links and official answers checked");

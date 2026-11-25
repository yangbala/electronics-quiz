import assert from "node:assert/strict";
import fs from "node:fs";
import path from "node:path";

const site = path.resolve(import.meta.dirname, "..");
const read = relative => fs.readFileSync(path.join(site, relative), "utf8");
const bankScript = read("data/level-one-bank.js");
const match = /^const questionBank = (\{[\s\S]*\});\s*$/.exec(bankScript);
assert(match, "Invalid question bank format");
const { chapters, questions, sources } = JSON.parse(match[1]);
assert.equal(chapters[3], "二極體");
assert.match(chapters[4], /BJT/);
assert.equal(questions.length, 571);
assert.equal(new Set(questions.map(q => q.id)).size, questions.length);
assert.equal(questions.filter(q => q.answer === "bonus").length, 5);
assert.equal(questions.filter(q => q.lab).length, 81);

const seenAssets = new Set();
for (const question of questions) {
  assert(sources[question.source], question.id + " missing source");
  assert(Number.isInteger(question.number) && question.number >= 1 && question.number <= 50, question.id);
  assert(Number.isInteger(question.page) && question.page >= 2, question.id);
  assert(question.chapter === null || chapters[question.chapter], question.id);
  assert(question.answer === "bonus" ||
    (Array.isArray(question.answer) && question.answer.length && question.answer.every(value => /^[ABCD]$/.test(value))),
    question.id + " missing official answer");
  if (question.crop) {
    const crop = path.join(site, "assets", "question-crops", question.id + ".webp");
    assert(fs.statSync(crop).size > 0, question.id + " missing crop");
  }
  const { source, page } = question;
  for (const asset of [source + ".pdf", source + "-answers.pdf", source + "-p" + page + ".webp"]) {
    if (seenAssets.has(asset)) continue;
    assert(fs.statSync(path.join(site, "assets", "exam-sources", asset)).size > 0, asset);
    seenAssets.add(asset);
  }
}
for (const [id, source] of Object.entries(sources)) {
  if (source.year <= 110) {
    const numbers = questions.filter(q => q.source === id).map(q => q.number);
    assert.deepEqual(numbers, Array.from({ length: 50 }, (_, index) => index + 1), id);
  }
}
const pages = ["index.html", "quiz.html", "question.html", "exams-108-110.html",
  ...Object.keys(chapters).map(number => "chapters/chapter-" + number + ".html")];
for (const page of pages) {
  const markup = read(page);
  const scripts = [...markup.matchAll(/<script\s+src="([^"]+)"/g)].map(result => result[1].split("?")[0]);
  assert.deepEqual(scripts.map(script => path.basename(script)), ["level-one-bank.js", "level-one.js"], page);
  for (const script of scripts) assert(read(path.join(path.dirname(page), script)), page + ": " + script);
}
new Function(read("data/level-one.js"));
console.log(`Validated ${questions.length} questions, ${pages.length} entry pages and ${seenAssets.size} source assets.`);

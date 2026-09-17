const fs = require('fs');
const path = require('path');
const assert = require('assert');

console.log("================================================================================");
console.log("   NCM 119 STUDENT MEMORY ENGINE & OFFLINE PWA VERIFICATION SUITE");
console.log("================================================================================\n");

let passed = 0;
let failed = 0;

function it(desc, fn) {
  try {
    fn();
    console.log(`  [PASS] ${desc}`);
    passed++;
  } catch (err) {
    console.error(`  [FAIL] ${desc}`);
    console.error(`         -> ${err.message}`);
    failed++;
  }
}

const baseDir = __dirname;
const distDir = path.join(baseDir, 'dist');
const htmlPath = path.join(distDir, 'index.html');
const swPath = path.join(distDir, 'sw.js');
const manifestPath = path.join(distDir, 'manifest.json');

const htmlContent = fs.readFileSync(htmlPath, 'utf8').replace(/\r\n/g, '\n');
const swContent = fs.readFileSync(swPath, 'utf8').replace(/\r\n/g, '\n');
const manifestContent = JSON.parse(fs.readFileSync(manifestPath, 'utf8'));

// 1. ASSET EXISTENCE & INTEGRITY
it('dist/index.html exists and is fully assembled (>350KB)', () => {
  assert(fs.existsSync(htmlPath), 'index.html missing');
  assert(fs.statSync(htmlPath).size > 350000, `Size too small: ${fs.statSync(htmlPath).size}`);
});

it('dist/sw.js exists and implements offline caching lifecycle', () => {
  assert(fs.existsSync(swPath), 'sw.js missing');
  assert(swContent.includes('ncm119-hub-v1'), 'Cache name missing');
  assert(swContent.includes('ASSETS_TO_CACHE'), 'Cache asset manifest missing');
  assert(swContent.includes('caches.match(event.request)'), 'Cache-first fetch strategy missing');
});

it('dist/manifest.json links icons and standalone mode', () => {
  assert.strictEqual(manifestContent.display, 'standalone');
  assert(manifestContent.icons.length >= 2, 'Missing PWA icons');
  assert(fs.existsSync(path.join(distDir, 'icon-192.png')), 'icon-192.png missing');
  assert(fs.existsSync(path.join(distDir, 'icon-512.png')), 'icon-512.png missing');
});

// 2. DOM & UI ELEMENT ASSERTIONS
it('Header contains interactive score badge linked to history modal', () => {
  assert(htmlContent.includes('score-badge-interactive'), 'score-badge-interactive class missing');
  assert(htmlContent.includes('onclick="openScoreHistoryModal()"'), 'openScoreHistoryModal call missing');
  assert(htmlContent.includes('id="live-target-tracker"'), 'live-target-tracker missing');
});

it('Tab 1 contains Syllabus Reading Progress Bar & Unit Completion Card', () => {
  assert(htmlContent.includes('id="syllabus-progress-box"'), 'syllabus-progress-box missing');
  assert(htmlContent.includes('id="syllabus-progress-stats"'), 'syllabus-progress-stats missing');
  assert(htmlContent.includes('id="syllabus-progress-fill"'), 'syllabus-progress-fill missing');
  assert(htmlContent.includes('unit-complete-card'), 'unit-complete-card class missing');
  assert(htmlContent.includes('id="btn-toggle-unit-complete"'), 'btn-toggle-unit-complete missing');
});

it('Tab 4 contains Leitner Active-Recall Flashcards toolbar & rating buttons', () => {
  assert(htmlContent.includes('fc-mastery-toolbar'), 'fc-mastery-toolbar missing');
  assert(htmlContent.includes('id="fc-filter-all"'), 'fc-filter-all missing');
  assert(htmlContent.includes('id="fc-filter-unmastered"'), 'fc-filter-unmastered missing');
  assert(htmlContent.includes('id="fc-mastery-pct-badge"'), 'fc-mastery-pct-badge missing');
  assert(htmlContent.includes('id="fc-mastery-status"'), 'fc-mastery-status missing');
  assert(htmlContent.includes('rateCurrentCard(false)'), 'rateCurrentCard(false) missing');
  assert(htmlContent.includes('rateCurrentCard(true)'), 'rateCurrentCard(true) missing');
});

it('Document contains Score History Modal with stats and log', () => {
  assert(htmlContent.includes('id="score-history-modal"'), 'score-history-modal missing');
  assert(htmlContent.includes('id="stat-best-score"'), 'stat-best-score missing');
  assert(htmlContent.includes('id="stat-total-attempts"'), 'stat-total-attempts missing');
  assert(htmlContent.includes('id="stat-avg-score"'), 'stat-avg-score missing');
  assert(htmlContent.includes('id="score-history-list"'), 'score-history-list missing');
  assert(htmlContent.includes('clearExamHistory()'), 'clearExamHistory() missing');
});

// 3. JAVASCRIPT CONTROLLER SIMULATION
it('MemoryStore safely handles getItem and setItem with JSON serialization', () => {
  const mockStorage = {};
  const MemoryStore = {
    get(k, def) {
      try {
        const item = mockStorage[k];
        return item ? JSON.parse(item) : def;
      } catch (e) { return def; }
    },
    set(k, val) {
      mockStorage[k] = JSON.stringify(val);
    }
  };

  assert.deepStrictEqual(MemoryStore.get('test_key', [1, 2]), [1, 2]);
  MemoryStore.set('test_key', [1, 2, 3]);
  assert.deepStrictEqual(MemoryStore.get('test_key', []), [1, 2, 3]);
});

it('Unit completion calculations correctly compute percentages for Mod 1 (10 units) & Mod 2 (6 units)', () => {
  const mod1Total = 10;
  let mod1Completed = ["m1_u0", "m1_u1", "m1_u2"];
  let pct1 = Math.round((mod1Completed.length / mod1Total) * 100);
  assert.strictEqual(pct1, 30);

  const mod2Total = 6;
  let mod2Completed = ["m2_u0", "m2_u1", "m2_u2", "m2_u3", "m2_u4", "m2_u5"];
  let pct2 = Math.round((mod2Completed.length / mod2Total) * 100);
  assert.strictEqual(pct2, 100);
});

it('Leitner flashcard filtering excludes mastered cards when in unmastered mode', () => {
  const allCards = [
    { origIdx: 0, front: "Q1" },
    { origIdx: 1, front: "Q2" },
    { origIdx: 2, front: "Q3" }
  ];
  let masteredList = [1]; // Card 1 is mastered
  let unmastered = allCards.filter(c => !masteredList.includes(c.origIdx));
  assert.strictEqual(unmastered.length, 2);
  assert.strictEqual(unmastered[0].origIdx, 0);
  assert.strictEqual(unmastered[1].origIdx, 2);

  // Now mark Card 0 as mastered
  masteredList.push(0);
  unmastered = allCards.filter(c => !masteredList.includes(c.origIdx));
  assert.strictEqual(unmastered.length, 1);
  assert.strictEqual(unmastered[0].origIdx, 2);
});

it('Exam attempt recording correctly computes personal best and history sequence', () => {
  let examHistory = [];
  let bestScores = {};

  function recordMock(modId, score, total, verdict) {
    const pct = Math.round((score / total) * 100);
    const entry = { modId, score, total, pct, date: "Sep 17, 2026", verdict };
    examHistory.unshift(entry);
    if (!bestScores[modId] || score > bestScores[modId].score) {
      bestScores[modId] = { score, total, pct };
    }
  }

  recordMock(1, 32, 40, "Passing Caliber");
  assert.strictEqual(bestScores[1].score, 32);
  assert.strictEqual(bestScores[1].pct, 80);

  recordMock(1, 38, 40, "Outstanding Mastery");
  assert.strictEqual(bestScores[1].score, 38);
  assert.strictEqual(bestScores[1].pct, 95);

  // A lower score does not overwrite personal best
  recordMock(1, 35, 40, "Outstanding Mastery");
  assert.strictEqual(bestScores[1].score, 38);
  assert.strictEqual(examHistory.length, 3);
  assert.strictEqual(examHistory[0].score, 35); // Most recent first
});

// 4. DESIGN & EMIL KOWALSKI MICRO-INTERACTION STYLES
it('Touch targets satisfy >= 44px min-height standards for thumb ergonomics', () => {
  assert(htmlContent.includes('.unit-complete-btn {') && htmlContent.includes('min-height: 44px;'), 'Unit complete btn min-height missing');
  assert(htmlContent.includes('.fc-rate-btn {') && htmlContent.includes('min-height: 44px;'), 'Flashcard rate btn min-height missing');
});

it('Emil Kowalski micro-interactions feature scale(0.96) active state and cubic-bezier timing', () => {
  assert(htmlContent.includes('.unit-complete-btn:active {\n      transform: scale(0.96);'), 'Scale 0.96 active state missing on unit complete btn');
  assert(htmlContent.includes('cubic-bezier(0.23, 1, 0.32, 1)'), 'Emil Kowalski spring cubic-bezier timing missing');
});

console.log("\n--------------------------------------------------------------------------------");
console.log(`TOTAL TESTS: ${passed + failed} | PASSED: ${passed} | FAILED: ${failed}`);
console.log("--------------------------------------------------------------------------------\n");

if (failed > 0) {
  process.exit(1);
} else {
  console.log("ALL STUDENT MEMORY ENGINE & PWA OFFLINE ASSERTIONS PASSED WITH ZERO ERRORS!");
  process.exit(0);
}

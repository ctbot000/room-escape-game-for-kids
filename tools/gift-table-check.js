#!/usr/bin/env node
/*
  The GIFTS table in index.html duplicates the souvenir each room hands over,
  so the bag can be rebuilt from saved progress after a refresh. Duplicated
  data drifts: run this after touching any room's solve() call.

    node tools/gift-table-check.js
*/
const fs = require("fs");
const path = require("path");

const file = path.join(__dirname, "..", "index.html");
const src = fs.readFileSync(file, "utf8");

const table = src.match(/const GIFTS = \[([\s\S]*?)\n  \];/);
if (!table) fail("no GIFTS table found in index.html");
const gifts = [...table[1].matchAll(/"([^"]+)"/g)].map(m => m[1]);

const region = src.slice(src.indexOf("const ROOMS = ["));
const names = [...region.matchAll(/^\s*name:"([^"]+)"/gm)].map(m => [m.index, m[1]]);
const solves = [...region.matchAll(/solve\("([^"]+)"/g)].map(m => [m.index, m[1]]);

const problems = [];
if (gifts.length !== names.length)
  problems.push(`GIFTS holds ${gifts.length} entries for ${names.length} rooms`);

names.forEach(([at, name], i) => {
  const end = i + 1 < names.length ? names[i + 1][0] : region.length;
  const mine = solves.filter(([p]) => p > at && p < end).map(([, item]) => item);
  if (mine.length !== 1)
    problems.push(`room ${i + 1} (${name}): ${mine.length} solve() calls, expected 1`);
  else if (mine[0] !== gifts[i])
    problems.push(`room ${i + 1} (${name}): gives ${mine[0]}, GIFTS says ${gifts[i]}`);
});

const seen = new Map();
gifts.forEach((g, i) => {
  if (seen.has(g)) problems.push(`souvenir ${g} is in both room ${seen.get(g) + 1} and room ${i + 1}`);
  else seen.set(g, i);
});

if (problems.length) fail(problems.join("\n"));
console.log(`GIFTS matches all ${names.length} rooms, every souvenir unique.`);

function fail(msg) { console.error(msg); process.exit(1); }

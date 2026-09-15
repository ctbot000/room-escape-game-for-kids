# ⭐ Star Key Escape

A **room escape game** that starts out for small kids and ends up somewhere their
parents will need a pencil. Fifty rooms, fifty star keys, and no way to lose — a
wrong answer just wiggles and lets you try again.

**▶ Play: https://ctbot000.github.io/room-escape-game-for-kids/**

| Tier | Rooms | Roughly |
|------|-------|---------|
| Little Explorer | 1–10 | ages 5–8 |
| Big Adventure | 11–20 | ages 8–11 |
| Master Escaper | 21–30 | ages 10+ |
| Grandmaster | 31–40 | teens and grown-ups |
| Legend | 41–50 | the classics, at full size |

## Part 1 — Little Explorer

| # | Room | Puzzle | Skill |
|---|------|--------|-------|
| 1 | Toy Room | Tap the blocks in the poster's secret order | following a sequence |
| 2 | Snack Kitchen | Count the cookies, enter the number | counting |
| 3 | Sunny Garden | Mix two paint pots to make green | colour mixing |
| 4 | Rocket Ship | Order the planets biggest → smallest | size ordering |
| 5 | Under the Sea | Feed the fish 1 → 4 | number order |
| 6 | Dino Cave | Add up the eggs on the cave painting | addition |
| 7 | Candy Shop | Finish the pattern 🍬🍭🍬🍭🍬 … ? | patterns |
| 8 | Snow Cabin | Find the snowman who isn't like the others | odd one out |
| 9 | Pirate Ship | Repeat the lantern sequence | memory (3) |
| 10 | Wizard Tower | Light the candles 1 → 5 | counting |

## Part 2 — Big Adventure

| # | Room | Puzzle | Skill |
|---|------|--------|-------|
| 11 | Clock Tower | Set the hands to half past 3 | telling the time |
| 12 | Old Library | Unscramble six letter tiles to answer a riddle | spelling |
| 13 | Music Room | Play back a five-note tune | memory (5) |
| 14 | Robot Factory | Write the whole move list, *then* press RUN | sequencing |
| 15 | Mirror Hall | Complete the mirrored half of the tile wall | symmetry |
| 16 | Balance Lab | Two balanced scales — which fruit is heaviest? | deduction |
| 17 | Observatory | 1 · 2 · 4 · 8 · ? | number patterns |
| 18 | Vault Room | Three clue cards, each one feeding the next | multi-step arithmetic |
| 19 | Potion Lab | Pick the flask that is exactly ¾ full | fractions |
| 20 | Dragon's Keep | Every lamp you touch flips its neighbours too | logic |

## Part 3 — Master Escaper

| # | Room | Puzzle | Skill |
|---|------|--------|-------|
| 21 | Number Vault | 4×4 sudoku — every row, column and box holds 1–4 | constraint logic |
| 22 | Cipher Room | NBHJD → ? Every letter slipped one step forward | ciphers |
| 23 | River Crossing | Fox, chicken and corn, one seat in the boat | classic state puzzle |
| 24 | Temple of Rings | Tower of Hanoi, three rings, seven moves | recursion by hand |
| 25 | Detective Office | Three kids, three pets, two clues | elimination |
| 26 | Waterworks | Rotate the pipes so water reaches the drain | spatial reasoning |
| 27 | Weight Bridge | Make exactly 11 kg from 1, 2, 4 and 8 | binary sums |
| 28 | Guard Tower | Four guards, none sharing a row, column or diagonal | four queens |
| 29 | Magic Square | Nine numbers, every line adding to 15 | arithmetic search |
| 30 | The Final Gate | Slide the tiles into order, 1 to 8 | the 8-puzzle |

## Part 4 — Grandmaster

| # | Room | Puzzle | Skill |
|---|------|--------|-------|
| 31 | Code Breaker | Mastermind — three colours, ⚫ and ⚪ feedback | hypothesis testing |
| 32 | Minefield | Deduce where all three mines are; never a guess | constraint logic |
| 33 | Pixel Gate | 5×5 nonogram with row and column clues | line logic |
| 34 | Bridge at Night | Four travellers, one torch, 17 minutes | optimisation |
| 35 | Two Jugs | Measure exactly 4 L with a 5 L and a 3 L jug | state search |
| 36 | Two Guards | One always lies — ask the one question that works | self-reference |
| 37 | Crate Room | Sokoban: you can push, never pull | planning ahead |
| 38 | One Line | Cross all sixteen tiles, once each, green to red | Hamiltonian path |
| 39 | Fake Coin | Find the light coin among eight in two weighings | information theory |
| 40 | The Grand Lock | Three locks: a word, a number and a pattern | everything at once |

## Part 5 — Legend

| # | Room | Puzzle | Skill |
|---|------|--------|-------|
| 41 | Zebra Room | Five clues, three houses, colours and pets | logic grid |
| 42 | Cryptarithm Vault | TWO + TWO = FOUR, in digits | algebraic search |
| 43 | Traffic Jam | Rush Hour — slide the cars, free the red one | move planning |
| 44 | Knight's Tour | Visit all 25 squares in L-shaped hops | graph traversal |
| 45 | Nim Table | 15 matches, take 1–3, against a perfect guard | game theory |
| 46 | Colour Sort | Pour marbles until every tube is one colour | state search |
| 47 | Lights Out | A press flips a plus-shape; light all nine | linear algebra |
| 48 | Peg Solitaire | 15-hole triangle, leave exactly one peg | search with pruning |
| 49 | Cage Grid | KenKen — Latin square plus arithmetic cages | constraint solving |
| 50 | Skyline | Skyscrapers — build to the visibility clues | deduction |

Every room has the same shape, so a child learns it once: a **clue** to look at,
a **puzzle** to solve, and a **door** that opens when the puzzle is done. There
is one extra thing to poke at in each room, just for fun.

## How it is built

- Big tap targets, emoji and SVG art, no text a 6-year-old can't skip.
- Nothing is ever lost — wrong answers wiggle, and every puzzle can be reset.
- Progress is saved, so you can close the tab and **Continue** later.
- Works with mouse, touch, and keyboard (Tab + Enter); Esc closes a popup.
- One file, no build step, no dependencies, works offline.
- Every constructed puzzle is checked for solvability, not just eyeballed.

## Run it locally

Open `index.html` in any browser. That's it.

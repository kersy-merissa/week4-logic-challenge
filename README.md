# Week 4: JavaScript Logic Challenges (Workshop 2)

## Overview
This repository contains solutions for the JavaScript algorithmic challenges, structured with clear pseudocode, pure loops, and comprehensive edge-case testing.

## Solved Challenges & Points
- **Round 1 (Warm-up):** Challenges 1.1 to 1.4 completed.
- **Round 2 (Core):** Challenges 2.1 to 2.4 completed.
- **Round 3 (Stretch):** Challenges 3.1 & 3.2 completed.
- **Boss Round:** Challenge 18 (validatePassword) completed.

## Toughest Bug Encountered & How It Was Found
- **The Bug:** During Challenge 1.3 (`formatPhone`), raw inputs with varying prefixes like `+250` or `07` occasionally misaligned digit slicing lengths when verifying index bounds.
- **How It Was Found:** Using Friday's debugging skills, I set a breakpoint inside VS Code on the cleaning loop, watched the intermediate `cleaned` string in the Scope panel, and adjusted the conditional slicing offsets to handle edge cases cleanly.
---
layout: post
title: Hill Climbing Search for Predicate Discovery
date: 2025-10-23 10:00:00
description: An interactive visualization of the hill climbing algorithm used in grammar search invention for task planning
tags: algorithms optimization machine-learning
categories: tutorial
related_posts: false
---

Hill climbing is a fundamental optimization algorithm that iteratively improves a solution by making locally optimal choices. In this post, we'll explore how it's used to discover predicates for task planning systems.

## What is Hill Climbing?

Hill climbing is a **local search algorithm** that starts from an initial solution and repeatedly moves to a better neighboring solution until no improvement can be found. Think of it as climbing a hill in dense fog - you can only see your immediate surroundings, so you keep taking steps upward until you reach a peak.

### Key Characteristics:

- **Greedy approach**: Always chooses the best immediate option
- **Local search**: Only explores nearby solutions
- **No backtracking**: Cannot undo previous decisions
- **Fast convergence**: Typically finds solutions quickly

## Application: Predicate Discovery for Planning

In the **Predicators** system for neuro-symbolic learning, hill climbing is used to discover the optimal set of logical predicates that describe a planning domain. 

### The Problem:

Given a large grammar of 121 possible predicates, find the subset that:
- Best describes the planning domain
- Minimizes the heuristic score (planning difficulty)
- Enables efficient task completion

### The Solution:

Start with an empty set and iteratively add predicates that provide the most improvement, until no better predicates can be found.

## Interactive Demonstration

Below is a real example from the Predicators paper, showing how hill climbing discovered 5 optimal predicates in just 5 steps, reducing the heuristic from 535,231 to 293!

<div class="row mt-3">
    <div class="col-sm mt-3 mt-md-0">
        <iframe src="/assets/html/hill-climbing-visualization.html" width="100%" height="2000" frameborder="0" style="border: 1px solid #ddd; border-radius: 8px;"></iframe>
    </div>
</div>

## Key Observations

### Massive Early Improvement
The first predicate reduced the heuristic by **99.7%** (from 535,231 to 13,659)! This shows that even basic logical conditions can dramatically improve planning efficiency.

### Diminishing Returns
Later steps show smaller improvements:
- Step 1: -99.7%
- Step 2: -1.5%
- Step 3: -97.0%
- Step 4: -15.4%
- Step 5: -13.0%

This is typical of hill climbing - early steps make big improvements, later steps fine-tune.

### Fast Convergence
Only **5 iterations** were needed to find the optimal set from 121 candidates. The algorithm evaluated 726 predicates total but efficiently pruned the search space.

## Real-World Performance

The predicates discovered by this hill climbing search enabled the system to:
- ✅ Solve **50/50 test tasks** (100% success rate)
- ⏱️ Average planning time: **0.0023 seconds**
- 🎯 Found optimal solution in **5 steps**

This demonstrates that simple algorithms can be highly effective when applied to the right problem structure!

## Try It Yourself!

Use the interactive visualization above to:
1. **Step through** the algorithm iteration by iteration
2. **Auto-play** to watch the full search process
3. **See the predicates** being added at each step
4. **Track the heuristic** improvement on the chart

Use keyboard shortcuts:
- `→` Next step
- `←` Previous step  
- `Space` Play/Pause
- `R` Reset

## References

- [Predicate Invention for Bilevel Planning](https://arxiv.org/abs/2203.09634). Silver*, Chitnis*, Kumar, McClinton, Lozano-Perez, Kaelbling, Tenenbaum. AAAI 2023.


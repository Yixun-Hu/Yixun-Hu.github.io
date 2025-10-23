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
        <iframe src="/assets/html/hill-climbing-visualization.html" width="100%" height="1200" frameborder="0" style="border: 1px solid #ddd; border-radius: 8px;"></iframe>
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

## The Mathematics

The hill climbing algorithm can be formalized as:

$$
s_{t+1} = \arg\max_{s' \in N(s_t)} f(s')
$$

where:
- $$s_t$$ is the current state at time $$t$$
- $$N(s_t)$$ is the set of neighbor states
- $$f(s')$$ is the evaluation function (heuristic)
- We terminate when $$f(s_{t+1}) \leq f(s_t)$$ for all neighbors

In this application:
- **State**: A set of predicates
- **Neighbors**: States with one additional predicate
- **Evaluation**: Heuristic score from learned operators

## Advantages and Limitations

### ✅ Advantages:
1. **Simple to implement** - straightforward algorithm
2. **Fast execution** - finds solutions quickly
3. **Low memory** - only stores current state
4. **Works well** - effective for many problems

### ⚠️ Limitations:
1. **Local optima** - may get stuck at peaks that aren't global maxima
2. **No backtracking** - cannot undo bad early decisions
3. **Order dependent** - different starting points yield different results
4. **Plateau problem** - can get stuck on flat regions

## Extensions and Variations

To address limitations, several variants exist:

### Random-Restart Hill Climbing
Run hill climbing multiple times with different starting points and choose the best result.

### Simulated Annealing
Occasionally accept worse solutions to escape local optima, with probability decreasing over time.

### Tabu Search
Maintain a list of recently visited states to avoid cycling.

### Beam Search
Keep track of multiple candidate solutions simultaneously.

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

## Conclusion

Hill climbing is a powerful yet simple optimization technique that works remarkably well for many real-world problems. While it has limitations, understanding when and how to apply it is a crucial skill in AI and machine learning.

The predicate discovery example shows how hill climbing can efficiently search through large spaces to find compact, effective solutions - a key principle in neuro-symbolic AI systems.

## References

- [Predicators: Neuro-Symbolic Learning for Task Planning](https://arxiv.org/abs/2210.00649)
- Silver, T., Hariprasad, V., Shuttleworth, R. S., Kumar, N., Lozano-Pérez, T., & Kaelbling, L. P. (2022)


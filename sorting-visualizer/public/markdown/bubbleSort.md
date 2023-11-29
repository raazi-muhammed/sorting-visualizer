# Bubble Sort Algorithm

## Introduction

Bubble Sort is a simple sorting algorithm that repeatedly steps through the list, compares adjacent elements, and swaps them if they are in the wrong order. The pass through the list is repeated until the list is sorted.

## Overview of Bubble Sort

The algorithm gets its name because smaller elements "bubble" to the top of the list.

## Algorithm Steps

1. **Bubble Up:**

    - Compare adjacent elements.
    - Swap them if they are in the wrong order.

2. **Iterative Passes:**
    - Repeat the process for multiple passes until the entire list is sorted.

## Pseudocode

```plaintext
function bubbleSort(arr):
    n = length(arr)

    for i from 0 to n-1:
        for j from 0 to n-i-1:
            if arr[j] > arr[j+1]:
                swap(arr[j], arr[j+1])
```

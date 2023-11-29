# Merge Sort Algorithm

## Introduction

Merge Sort is an efficient, stable, and comparison-based sorting algorithm. It divides the array into two halves, recursively sorts each half, and then merges the sorted halves. The merge step is the key to its efficiency.

## Overview of Merge Sort

The algorithm follows the divide-and-conquer paradigm, breaking the problem into smaller sub-problems until they become simple enough to solve. The merge step combines the solutions to the sub-problems to produce the final sorted array.

## Algorithm Steps

1. **Divide:**

    - Divide the unsorted array into two halves.

2. **Conquer:**

    - Recursively sort each half.

3. **Merge:**
    - Merge the sorted halves to produce a single sorted array.

## Pseudocode

```plaintext
function mergeSort(arr):
    if length(arr) > 1:
        mid = length(arr) / 2
        leftHalf = arr[0:mid]
        rightHalf = arr[mid:]

        mergeSort(leftHalf)
        mergeSort(rightHalf)

        merge(arr, leftHalf, rightHalf)

function merge(arr, left, right):
    i = j = k = 0

    while i < length(left) and j < length(right):
        if left[i] <= right[j]:
            arr[k] = left[i]
            i = i + 1
        else:
            arr[k] = right[j]
            j = j + 1
        k = k + 1

    while i < length(left):
        arr[k] = left[i
```

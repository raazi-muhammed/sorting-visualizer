# Selection Sort Algorithm

## Introduction

Selection Sort is a simple sorting algorithm that works by repeatedly finding the minimum element from the unsorted part of the array and putting it at the beginning. The process is repeated for the remaining unsorted portion until the entire array is sorted.

## Overview of Selection Sort

The algorithm is named for its approach of selecting the minimum element in each pass.

## Algorithm Steps

1. **Selection of the Minimum Element:**

    - Start with the first element as the minimum.
    - Iterate through the unsorted part of the array to find the minimum element.
    - Swap the minimum element with the first element.

2. **Selection Sort Iteration:**

    - Repeat the above process for the remaining unsorted portion.
    - In each iteration, find the minimum element from the unsorted part and swap it with the first element of the remaining unsorted portion.

3. **Repeat Until Sorted:**
    - Continue the process until the entire array is sorted.

## Pseudocode

```plaintext
function selectionSort(arr):
    n = length(arr)

    for i from 0 to n-1:
        minIndex = i

        for j from i+1 to n-1:
            if arr[j] < arr[minIndex]:
                minIndex = j

        swap(arr[i], arr[minIndex])
```

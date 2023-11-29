# Insertion Sort Algorithm

## Introduction

Insertion Sort is a simple sorting algorithm that builds the final sorted array one item at a time. It is much less efficient on large lists than more advanced algorithms such as quicksort, heapsort, or merge sort. However, it has some advantages, such as being very intuitive and easy to implement.

## Overview of Insertion Sort

Insertion Sort works by dividing the array into a sorted and an unsorted region. It repeatedly takes the first element from the unsorted region and inserts it into its correct position in the sorted region. This process is repeated until the entire array is sorted.

## Algorithm Steps

### Initialization

-   Start with the first element as the sorted region (considered sorted).
-   The rest of the elements are in the unsorted region.

### Iterative Process

1. Take an element from the unsorted region.
2. Compare it with elements in the sorted region.
3. Insert the element into its correct position in the sorted region.

4. Repeat these steps until the entire array is sorted.

## Pseudocode

```plaintext
function insertionSort(arr):
    n = length(arr)

    for i from 1 to n-1:
        key = arr[i]
        j = i - 1

        # Move elements of arr[0..i-1] that are greater than key to one position ahead
        while j >= 0 and arr[j] > key:
            arr[j + 1] = arr[j]
            j = j - 1

        arr[j + 1] = key
```

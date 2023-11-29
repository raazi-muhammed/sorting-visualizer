# Quick Sort Algorithm

## Introduction

Quick Sort is a divide-and-conquer sorting algorithm that works by selecting a 'pivot' element from the array and partitioning the other elements into two sub-arrays according to whether they are less than or greater than the pivot. The sub-arrays are then sorted recursively.

## Overview of Quick Sort

The key to the efficiency of Quick Sort lies in the partitioning step, where elements smaller than the pivot are moved to one side, and elements greater than the pivot are moved to the other side.

## Algorithm Steps

1. **Choose a Pivot:**

    - Select a pivot element from the array.

2. **Partitioning:**

    - Rearrange the array elements such that elements less than the pivot are on the left, and elements greater than the pivot are on the right.

3. **Recursive Sorting:**
    - Apply the same process recursively to the sub-arrays.

## Pseudocode

```plaintext
function quickSort(arr, low, high):
    if low < high:
        # Find pivot such that elements smaller than pivot are on the left, and larger on the right
        pivot = partition(arr, low, high)

        # Recursively sort the sub-arrays
        quickSort(arr, low, pivot - 1)
        quickSort(arr, pivot + 1, high)

function partition(arr, low, high):
    pivot = arr[high]
    i = low - 1

    for j from low to high-1:
        if arr[j] <= pivot:
            i = i + 1
            swap(arr[i], arr[j])

    swap(arr[i + 1], arr[high])
    return i + 1
```

# Quick Sort Algorithm

Quick Sort is a divide-and-conquer algorithm that works by selecting a 'pivot' element from the array and partitioning the other elements into two sub-arrays according to whether they are less than or greater than the pivot. The sub-arrays are then recursively sorted.

## Algorithm Description

1. **Partitioning:** Choose a pivot element from the array and partition the array into two sub-arrays: elements less than the pivot and elements greater than the pivot.

2. **Recursion:** Recursively apply the quicksort algorithm to the sub-arrays.

## Pseudocode

```plaintext
function quickSort(array)
    if length of array <= 1
        return array

    pivot = choosePivot(array)
    left = elements in array less than pivot
    right = elements in array greater than pivot

    return concatenate(quickSort(left), pivot, quickSort(right))

function choosePivot(array)
    // Various strategies for choosing the pivot
    return someElementFrom(array)
```

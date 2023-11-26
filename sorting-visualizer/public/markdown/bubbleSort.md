# Bubble Sort Algorithm

Bubble Sort is a simple comparison-based sorting algorithm that repeatedly steps through the list, compares adjacent elements, and swaps them if they are in the wrong order. The pass through the list is repeated until the list is sorted.

## Algorithm Description

1. **Start:** Begin with the entire list considered as unsorted.

2. **Comparison and Swap:** Compare adjacent elements in the list and swap them if they are in the wrong order.

3. **Passes:** Repeat the process for multiple passes until the list is sorted.

4. **Optimization:** Track whether any swaps were made during a pass. If no swaps were made, the list is already sorted, and the algorithm can terminate early.

## Pseudocode

```plaintext
for i from 0 to length of array - 1
    for j from 0 to length of array - i - 1
        if array[j] > array[j + 1]
            swap array[j] with array[j + 1]
```

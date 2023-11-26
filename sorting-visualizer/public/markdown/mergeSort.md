# Merge Sort Algorithm

Merge Sort is a divide-and-conquer algorithm that divides the input array into two halves, recursively sorts each half, and then merges the sorted halves.

## Algorithm Description

1. **Divide:** Divide the unsorted list into n sub-lists, each containing one element.

2. **Conquer:** Recursively merge sub-lists to produce new sorted sub-lists until there is only one sub-list remaining.

3. **Merge:** Merge the sorted sub-lists to produce the final sorted list.

## Pseudocode

```plaintext
function mergeSort(array)
    if length of array <= 1
        return array

    mid = length of array / 2
    left = mergeSort(first half of array)
    right = mergeSort(second half of array)

    return merge(left, right)

function merge(left, right)
    result = []
    while left is not empty and right is not empty
        if first element of left < first element of right
            append first element of left to result
        else
            append first element of right to result

    // Append remaining elements of left and right
    append remaining elements of left to result
    append remaining elements of right to result

    return result
```

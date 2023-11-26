# Insertion Sort Algorithm

Insertion Sort is a simple sorting algorithm that builds the final sorted array one element at a time. It is much less efficient on large lists than more advanced algorithms such as quicksort, heapsort, or merge sort. However, it has several advantages:

- Simple implementation
- Efficient for small data sets or nearly sorted data
- Adaptive, meaning it becomes more efficient if the data is partially ordered

## Algorithm Description

The algorithm works by building a sorted portion of the array iteratively. At each iteration, an element is taken from the unsorted portion and inserted into its correct position in the sorted portion.

1. **Start:** The first element is considered as a sorted portion.

2. **Iterate:** For each element in the unsorted portion:

   - Compare the current element with elements in the sorted portion.
   - Move elements greater than the current element to the right.
   - Insert the current element into its correct position.

3. **Repeat:** Repeat the process until the entire array is sorted.

## Pseudocode

```plaintext
for i from 1 to length of array
    key = array[i]
    j = i - 1

    // Move elements of array[0..i-1] that are greater than key to one position ahead of their current position
    while j >= 0 and array[j] > key
        array[j + 1] = array[j]
        j = j - 1

    // Place the key in its correct position
    array[j + 1] = key
```

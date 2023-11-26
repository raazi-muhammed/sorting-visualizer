# Selection Sort Algorithm

Selection Sort is a simple comparison-based sorting algorithm that works by dividing the input array into a sorted and an unsorted region. The algorithm repeatedly selects the smallest (or largest, depending on the order) element from the unsorted region and swaps it with the first element of the unsorted region.

## Algorithm Description

1. **Start:** The entire array is considered as an unsorted region.

2. **Find the minimum:** Iterate through the unsorted region to find the minimum (or maximum) element.

3. **Swap:** Swap the minimum element with the first element of the unsorted region.

4. **Update:** Move the boundary between the sorted and unsorted regions.

5. **Repeat:** Repeat steps 2-4 until the entire array is sorted.

## Pseudocode

```plaintext
for i from 0 to length of array - 1
    minIndex = i

    // Find the index of the minimum element in the unsorted region
    for j from i+1 to length of array
        if array[j] < array[minIndex]
            minIndex = j

    // Swap the found minimum element with the first element of the unsorted region
    swap array[i] with array[minIndex]
```

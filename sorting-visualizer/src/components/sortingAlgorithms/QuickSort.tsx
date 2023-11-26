import { useSelector } from "react-redux";
import { useAppDispatch, useAppSelector } from "../../app/hooks";
import {
  changeArray,
  changeComparing,
  changeSwitching,
} from "../../app/features/numbersSlice";
import { BsSortDownAlt } from "react-icons/bs";

type QuickSort = {
  isSortingStopped: React.MutableRefObject<boolean>;
};

const QuickSort = ({ isSortingStopped }: QuickSort) => {
  const config = useSelector((state: any) => state.config);
  const numbers = useAppSelector((state) => state.numbers);
  const dispatch = useAppDispatch();

  const handleSortArray = async () => {
    isSortingStopped.current = false;
    let array = [...numbers?.originalArray];

    const swap = async (array: number[], i: number, j: number) => {
      dispatch(changeSwitching([i, j]));
      let temp = array[i];
      array[i] = array[j];
      array[j] = temp;
      await new Promise((resolve) => setTimeout(resolve, config.delay / 2));
    };

    const quickSortIndexHelper = async (
      array: number[],
      startIdx: number,
      endIdx: number
    ) => {
      if (startIdx >= endIdx) return;

      let pivotIdx = startIdx;
      let leftIdx = startIdx + 1;
      let rightIdx = endIdx;

      while (leftIdx <= rightIdx) {
        if (isSortingStopped.current) break;
        dispatch(changeComparing([leftIdx, rightIdx]));

        if (
          array[leftIdx] > array[pivotIdx] &&
          array[rightIdx] < array[pivotIdx]
        ) {
          swap(array, leftIdx, rightIdx);
          leftIdx++;
          rightIdx--;
        }

        if (array[leftIdx] <= array[pivotIdx]) leftIdx++;
        if (array[rightIdx] >= array[pivotIdx]) rightIdx--;
        await new Promise((resolve) => setTimeout(resolve, config.delay));
        dispatch(changeArray([...array]));
        dispatch(changeSwitching([]));
      }

      swap(array, rightIdx, pivotIdx);

      await quickSortIndexHelper(array, startIdx, rightIdx - 1);
      await quickSortIndexHelper(array, rightIdx + 1, endIdx);
    };

    await quickSortIndexHelper(array, 0, array.length - 1);

    dispatch(changeArray([...array]));
    dispatch(changeComparing([]));
    dispatch(changeSwitching([]));
  };

  return (
    <div>
      <button
        onClick={() => {
          handleSortArray();
        }}
        className="btn"
      >
        <BsSortDownAlt size="1.5em" />
        Quick Sort
      </button>
    </div>
  );
};

export default QuickSort;

import { useSelector } from "react-redux";
import { useAppDispatch, useAppSelector } from "../../app/hooks";
import {
  changeArray,
  changeComparing,
  changeSwitching,
} from "../../app/features/numbersSlice";
import { BsSortDownAlt } from "react-icons/bs";

type MergeSort = {
  isSortingStopped: React.MutableRefObject<boolean>;
};

const MergeSort = ({ isSortingStopped }: MergeSort) => {
  const config = useSelector((state: any) => state.config);
  const numbers = useAppSelector((state) => state.numbers);
  const dispatch = useAppDispatch();

  const handleSortArray = async () => {
    isSortingStopped.current = false;
    let array = [...numbers?.originalArray];

    const mergeInPlace = async (
      arr: number[],
      startIdx: number,
      midIdx: number,
      endIdx: number
    ) => {
      let startIdx2 = midIdx + 1;
      while (startIdx <= midIdx && startIdx2 <= endIdx) {
        if (isSortingStopped.current) break;
        dispatch(changeComparing([startIdx, startIdx2]));

        if (arr[startIdx] <= arr[startIdx2]) {
          startIdx++;
          dispatch(changeSwitching([startIdx, startIdx2]));
        } else {
          let value = arr[startIdx2];
          let index = startIdx2;

          while (index !== startIdx) arr[index--] = arr[index];

          arr[startIdx] = value;
          startIdx++;
          midIdx++;
          startIdx2++;
          await new Promise((resolve) => setTimeout(resolve, config.delay));
          dispatch(changeArray([...arr]));
          dispatch(changeComparing([]));
          dispatch(changeSwitching([]));
        }
      }
    };

    const mergeSortInPlace = async (
      arr: number[],
      leftIdx: number,
      rightIdx: number
    ): Promise<number[]> => {
      if (leftIdx < rightIdx) {
        let midIdx = leftIdx + Math.floor((rightIdx - leftIdx) / 2);

        await mergeSortInPlace(arr, leftIdx, midIdx);
        await mergeSortInPlace(arr, midIdx + 1, rightIdx);

        await mergeInPlace(arr, leftIdx, midIdx, rightIdx);
        return arr;
      }
      return [];
    };

    await mergeSortInPlace(array, 0, array.length - 1);

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
        Merge Sort
      </button>
    </div>
  );
};

export default MergeSort;

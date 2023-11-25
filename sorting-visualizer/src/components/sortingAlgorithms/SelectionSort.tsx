import { useSelector } from "react-redux";
import { useAppDispatch, useAppSelector } from "../../app/hooks";
import {
  changeArray,
  changeComparing,
  changeSwitching,
} from "../../app/features/numbersSlice";
import { BsSortDownAlt } from "react-icons/bs";

type SelectionSort = {
  isSortingStopped: React.MutableRefObject<boolean>;
};

const SelectionSort = ({ isSortingStopped }: SelectionSort) => {
  const config = useSelector((state: any) => state.config);
  const numbers = useAppSelector((state) => state.numbers);
  const dispatch = useAppDispatch();

  const handleSortArray = async () => {
    isSortingStopped.current = false;
    let arr = [...numbers?.originalArray];

    for (let i = 0; i < arr.length - 1; i++) {
      if (isSortingStopped.current) break;

      let j = i + 1;
      let smallest = arr[i];
      let smallestIdx = i;

      while (j < arr.length) {
        if (isSortingStopped.current) break;

        if (arr[j] < smallest) {
          dispatch(changeSwitching([j, i]));
          smallest = arr[j];
          smallestIdx = j;
        }
        dispatch(changeComparing([j]));
        await new Promise((resolve) => setTimeout(resolve, config.delay));
        j++;
      }

      arr[smallestIdx] = arr[i];
      arr[i] = smallest;

      dispatch(changeArray([...arr]));
      await new Promise((resolve) => setTimeout(resolve, config.delay));
    }

    dispatch(changeArray([...arr]));
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
        Selection Sort
      </button>
    </div>
  );
};

export default SelectionSort;

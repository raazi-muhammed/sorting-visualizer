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

const BubbleSort = ({ isSortingStopped }: SelectionSort) => {
  const config = useSelector((state: any) => state.config);
  const numbers = useAppSelector((state) => state.numbers);
  const dispatch = useAppDispatch();

  const handleBubbleSortArray = async () => {
    isSortingStopped.current = false;
    let arr = [...numbers?.originalArray];

    let isItemsSwapped;
    let count = arr.length - 1;

    do {
      if (isSortingStopped.current) break;
      isItemsSwapped = false;
      for (let i = 0; i < count; i++) {
        if (isSortingStopped.current) break;
        dispatch(changeSwitching([]));

        if (arr[i] > arr[i + 1]) {
          isItemsSwapped = true;
          dispatch(changeSwitching([i, i + 1]));

          await new Promise((resolve) => setTimeout(resolve, config.delay / 2));
          let temp = arr[i];
          arr[i] = arr[i + 1];
          arr[i + 1] = temp;
        }
        dispatch(changeComparing([i, i + 1]));
        dispatch(changeArray([...arr]));
        await new Promise((resolve) => setTimeout(resolve, config.delay));
      }
      count--;
    } while (isItemsSwapped);

    dispatch(changeArray([...arr]));
    dispatch(changeComparing([]));
    dispatch(changeSwitching([]));
  };

  return (
    <div>
      <button
        onClick={() => {
          handleBubbleSortArray();
        }}
        className="btn"
      >
        <BsSortDownAlt size="1.5em" />
        Bubble Sort
      </button>
    </div>
  );
};

export default BubbleSort;

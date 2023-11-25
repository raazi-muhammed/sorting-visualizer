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

const InsertionsSort = ({ isSortingStopped }: SelectionSort) => {
  const config = useSelector((state: any) => state.config);
  const numbers = useAppSelector((state) => state.numbers);
  const dispatch = useAppDispatch();

  const handleSortArray = async () => {
    isSortingStopped.current = false;
    let array = [...numbers?.originalArray];

    for (let i = 1; i < array.length; i++) {
      if (isSortingStopped.current) break;
      let numberToInsert = array[i];
      let j = i - 1;

      dispatch(changeSwitching([]));

      dispatch(changeComparing([i, j]));
      while (array[j] > numberToInsert && j >= 0) {
        if (isSortingStopped.current) break;

        array[j + 1] = array[j];
        dispatch(changeComparing([i, j]));
        await new Promise((resolve) => setTimeout(resolve, config.delay));
        j--;

        if (array[j - 1] < numberToInsert && array[j] > numberToInsert) {
          dispatch(changeSwitching([i, j]));
          await new Promise((resolve) => setTimeout(resolve, config.delay * 2));
        }
      }

      dispatch(changeArray([...array]));
      await new Promise((resolve) => setTimeout(resolve, config.delay));

      array[j + 1] = numberToInsert;
    }

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
        Insertion Sort
      </button>
    </div>
  );
};

export default InsertionsSort;

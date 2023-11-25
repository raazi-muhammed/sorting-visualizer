import { useSelector } from "react-redux";
import SortIcon from "../../assets/icons/SortIcon";
import { useAppDispatch, useAppSelector } from "../../app/hooks";
import {
  changeArray,
  changeComparing,
  changeSwitching,
} from "../../app/features/numbersSlice";

const InsertionsSort = () => {
  const config = useSelector((state: any) => state.config);
  const numbers = useAppSelector((state) => state.numbers);
  const dispatch = useAppDispatch();

  const handleSortArray = async () => {
    let array = [...numbers?.originalArray];

    for (let i = 1; i < array.length; i++) {
      let numberToInsert = array[i];
      let j = i - 1;

      dispatch(changeSwitching([]));

      dispatch(changeComparing([i, j]));
      while (array[j] > numberToInsert && j >= 0) {
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
        <SortIcon />
        Insertion Sort
      </button>
    </div>
  );
};

export default InsertionsSort;

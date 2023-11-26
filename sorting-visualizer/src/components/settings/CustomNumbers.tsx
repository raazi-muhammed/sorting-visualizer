import { useState } from "react";
import { changeArray } from "../../app/features/numbersSlice";
import { useAppDispatch } from "../../app/hooks";

const CustomNumbers = () => {
  const dispatch = useAppDispatch();
  const [numbers, setNumbers] = useState("");

  const changeNumbers = (e: React.SyntheticEvent) => {
    e.preventDefault();

    const newNumbers = numbers.replace(/[\n\s]/g, ",");

    const array: number[] = newNumbers
      .split(",")
      .map((num) => Number(num))
      .filter((num) => {
        if (!isNaN(num) || num !== 0) return num;
      });

    if (array.length < 1) return;
    dispatch(changeArray(array));
  };

  return (
    <section className="aside-panel--section">
      <form onSubmit={changeNumbers}>
        <textarea
          value={numbers}
          onChange={(e) => setNumbers(e.target.value)}
          name="numbers"
          rows={5}
          placeholder="Input your custom array here"
        ></textarea>
        <button className="btn btn-sm">Submit</button>
      </form>
    </section>
  );
};

export default CustomNumbers;

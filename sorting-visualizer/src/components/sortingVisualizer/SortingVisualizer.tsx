import { useEffect, useRef, useState } from "react";
import "./sortingVisualizer.scss";
import BubbleSort from "../sortingAlgorithms/BubbleSort";
import { useAppDispatch, useAppSelector } from "../../app/hooks";

import {
  changeArray,
  changeComparing,
  changeSwitching,
} from "../../app/features/numbersSlice";
import InsertionSort from "../sortingAlgorithms/InsertionSort";
import SelectionSort from "../sortingAlgorithms/SelectionSort";
import { RiStopLine } from "react-icons/ri";
import { GrPowerReset } from "react-icons/gr";
import { SlSettings } from "react-icons/sl";
import SettingsPanel from "../settings/SettingsPanel";
import QuickSort from "../sortingAlgorithms/QuickSort";
import MergeSort from "../sortingAlgorithms/MergeSort";

const SortingVisualizer = () => {
  const config = useAppSelector((state) => state.config);
  const numbers = useAppSelector((state) => state.numbers);
  const dispatch = useAppDispatch();
  const isSortingStopped = useRef(false);
  const [showSettings, setShowSettings] = useState(false);

  const randomizeArray = (): void => {
    const BASE_VALUE = 10;
    const MAX_VALUE = 1000;
    const ARRAY_LENGTH = config?.size;

    let randomArr: number[] = [];

    for (let i = 0; i < ARRAY_LENGTH; i++) {
      randomArr.push(Math.floor(Math.random() * MAX_VALUE) + BASE_VALUE);
    }

    dispatch(changeArray(randomArr));
    dispatch(changeComparing([]));
    dispatch(changeSwitching([]));
  };

  const handleStop = () => {
    isSortingStopped.current = true;
  };

  useEffect(() => {
    randomizeArray();
  }, [config.size]);

  return (
    <main
      style={{
        width: "100vw",
        height: "85vh",
        display: "flex",
        flexDirection: "column",
      }}
    >
      <section className="top-section">
        <section className="top-section--controls">
          <InsertionSort isSortingStopped={isSortingStopped} />
          <BubbleSort isSortingStopped={isSortingStopped} />
          <SelectionSort isSortingStopped={isSortingStopped} />
          <QuickSort isSortingStopped={isSortingStopped} />
          <MergeSort isSortingStopped={isSortingStopped} />
          <button onClick={randomizeArray} className="btn btn--icon">
            <GrPowerReset size="1.5em" />
          </button>
          <button onClick={handleStop} className="btn btn--icon">
            <RiStopLine size="1.8em" />
          </button>
        </section>
        <section className="top-section--aside">
          <button
            onClick={() => setShowSettings(!showSettings)}
            className="btn btn--accent"
          >
            <SlSettings />
          </button>
        </section>
      </section>
      <section className="graph">
        {numbers.originalArray.map((val, i) => (
          <div
            key={i}
            style={{ height: `${val / 10}%` }}
            className={`graph--bar ${
              numbers?.switching.includes(i)
                ? "bar--danger"
                : numbers?.comparing.includes(i)
                ? "bar--accent"
                : ""
            }`}
          >
            <p className="graph--text">{val}</p>
          </div>
        ))}
      </section>
      {showSettings ? (
        <SettingsPanel setShowSettings={setShowSettings} />
      ) : null}
    </main>
  );
};

export default SortingVisualizer;

import { useEffect, useRef, useState } from "react";
import "./_sortingVisualizer.scss";
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
  const [description, setDescription] = useState({
    heading: "",
    body: "Select an algorithm to show description",
  });
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

  enum SortType {
    INSERTION = "INSERTION",
    BUBBLE = "BUBBLE",
    SELECTION = "SELECTION",
    QUICK = "QUICK",
    MERGE = "MERGE",
  }

  const handleDescription = (sortType: SortType) => {
    switch (sortType) {
      case SortType.INSERTION:
        setDescription({
          heading: "Insertion Sort",
          body: "O(n^2), Ω(n), Θ(n^2)",
        });
        break;

      case SortType.BUBBLE:
        setDescription({
          heading: "Bubble Sort",
          body: "O(n^2), Ω(n), Θ(n^2)",
        });
        break;
      case SortType.SELECTION:
        setDescription({
          heading: "Selection Sort",
          body: "O(n^2), Ω(n^2), Θ(n^2)",
        });
        break;
      case SortType.QUICK:
        setDescription({
          heading: "Quick Sort",
          body: "O(n^2) (rare), Ω(n log n), Θ(n log n)",
        });
        break;
      case SortType.MERGE:
        setDescription({
          heading: "Merge Sort",
          body: "O(n log n), Ω(n log n), Θ(n log n)",
        });
        break;

      default:
        break;
    }
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
          <section onClick={() => handleDescription(SortType.INSERTION)}>
            <InsertionSort isSortingStopped={isSortingStopped} />
          </section>
          <section onClick={() => handleDescription(SortType.BUBBLE)}>
            <BubbleSort isSortingStopped={isSortingStopped} />
          </section>
          <section onClick={() => handleDescription(SortType.SELECTION)}>
            <SelectionSort isSortingStopped={isSortingStopped} />
          </section>
          <section onClick={() => handleDescription(SortType.QUICK)}>
            <QuickSort isSortingStopped={isSortingStopped} />
          </section>
          <section onClick={() => handleDescription(SortType.MERGE)}>
            <MergeSort isSortingStopped={isSortingStopped} />
          </section>
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
      <section>
        <p className="text text--heading">{description.heading}</p>
        <p className="text text--description">
          Time Complexity: {description.body}
        </p>
      </section>
      <section className="graph">
        {numbers.originalArray.map((val, i) => (
          <div
            key={i}
            style={{
              height: `${(val / Math.max(...numbers.originalArray)) * 100}%`,
            }}
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

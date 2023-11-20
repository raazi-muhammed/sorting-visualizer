import { useEffect, useState } from "react";
import "./sortingVisualizer.scss";
import ResetIcon from "../../assets/icons/ResetIcon";
import SortIcon from "../../assets/icons/SortIcon";

const SortingVisualizer = () => {
	const [arrayValues, setArrayValues] = useState<number[]>([]);
	const [comparing, setComparing] = useState<number[]>([]);
	const [delay, setDelay] = useState(20);
	const [arrayLength, setArrayLength] = useState(25);

	const randomizeArray = (): void => {
		const BASE_VALUE = 10;
		const MAX_VALUE = 1000;
		const ARRAY_LENGTH = arrayLength;

		let randomArr: number[] = [];

		for (let i = 0; i < ARRAY_LENGTH; i++) {
			randomArr.push(Math.floor(Math.random() * MAX_VALUE) + BASE_VALUE);
		}
		setArrayValues(randomArr);
		setComparing([]);
	};
	useEffect(() => {
		randomizeArray();
	}, [arrayLength]);

	const handleBubbleSortArray = () => {
		const bubbleSort = async (arr: number[]) => {
			let isItemsSwapped;
			let count = arr.length - 1;
			do {
				isItemsSwapped = false;
				for (let i = 0; i < count; i++) {
					if (arr[i] > arr[i + 1]) {
						isItemsSwapped = true;
						let temp = arr[i];
						arr[i] = arr[i + 1];
						arr[i + 1] = temp;
					}
					setComparing([i, i + 1]);
					setArrayValues(arr);
					await new Promise((resolve) => setTimeout(resolve, delay));
				}
				count--;
			} while (isItemsSwapped);

			setArrayValues(arr);
			setComparing([]);
			return arr;
		}; // O(n^2)

		bubbleSort(arrayValues);
	};

	return (
		<main>
			<section className="top-section">
				<button onClick={handleBubbleSortArray} className="btn">
					<SortIcon />
					Bubble Sort
				</button>
				<button onClick={randomizeArray} className="btn">
					<ResetIcon />
				</button>
			</section>
			<section className="graph">
				{arrayValues.map((val, i) => (
					<div
						key={i}
						style={{ height: `${val / 10}%` }}
						className={`graph--bar ${
							comparing.includes(i) ? "bar--accent" : ""
						}`}>
						<p className="graph--text">{val}</p>
					</div>
				))}
			</section>
			<aside style={{ position: "absolute", right: "2rem", top: "2rem" }}>
				<div className="slide-container">
					<p>{delay}</p>
					<input
						min={1}
						max={1000}
						value={delay}
						onChange={(e) => setDelay(Number(e.target.value))}
						type="range"
						className="slider"
					/>
					<p>{arrayLength}</p>
					<input
						min={5}
						max={100}
						value={arrayLength}
						onChange={(e) => setArrayLength(Number(e.target.value))}
						type="range"
						className="slider"
					/>
				</div>
			</aside>
		</main>
	);
};

export default SortingVisualizer;

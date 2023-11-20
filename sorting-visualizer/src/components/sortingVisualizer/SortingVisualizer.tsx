import React, { useEffect, useState } from "react";
import "./sortingVisualizer.scss";

const SortingVisualizer = () => {
	const [arrayValues, setArrayValues] = useState<number[]>([]);
	const [comparing, setComparing] = useState<number[]>([]);
	const randomizeArray = (): void => {
		const BASE_VALUE = 10;
		const MAX_VALUE = 1000;
		const ARRAY_LENGTH = 25;

		let randomArr: number[] = [];

		for (let i = 0; i < ARRAY_LENGTH; i++) {
			randomArr.push(Math.floor(Math.random() * MAX_VALUE) + BASE_VALUE);
		}
		setArrayValues(randomArr);
		setComparing([]);
	};
	useEffect(() => {
		randomizeArray();
	}, []);

	const handleSortArray = () => {
		const newArr = [...arrayValues].sort((a, b) => a - b);
		console.log(newArr);
		setArrayValues(newArr);
	};

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
					await new Promise((resolve) => setTimeout(resolve, 10));
				}
				count--;
			} while (isItemsSwapped);

			setArrayValues(arr);
			setComparing([]);
			return arr;
		}; // O(n^2)

		bubbleSort(arrayValues);

		/* for (let i = 0; i < arrayValues.length; i++) {
			setTimeout(() => {
				setComparing([i]);
			}, 100 * i);
		} */
	};

	return (
		<main>
			<section>
				<button onClick={handleSortArray} className="btn">
					Sort
				</button>
				<button onClick={handleBubbleSortArray} className="btn">
					Bubble Sort
				</button>
				<button onClick={randomizeArray} className="btn">
					Reset
				</button>
			</section>
			<section className="graph">
				{arrayValues.map((val, i) => (
					<div
						key={i}
						style={{ height: `${val / 10}%` }}
						className={`graph--bar ${comparing.includes(i) ? "bg-red" : ""}`}>
						<p>{val}</p>
					</div>
				))}
			</section>
		</main>
	);
};

export default SortingVisualizer;

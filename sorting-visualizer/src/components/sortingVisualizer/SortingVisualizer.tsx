import React, { useEffect, useState } from "react";
import "./sortingVisualizer.scss";

const SortingVisualizer = () => {
	const [arrayValues, setArrayValues] = useState<number[]>([]);
	const randomizeArray = (): void => {
		const BASE_VALUE = 10;
		const MAX_VALUE = 1000;
		const ARRAY_LENGTH = 25;

		let randomArr: number[] = [];

		for (let i = 0; i < ARRAY_LENGTH; i++) {
			randomArr.push(Math.floor(Math.random() * MAX_VALUE) + BASE_VALUE);
		}
		setArrayValues(randomArr);
	};
	useEffect(() => {
		randomizeArray();
	}, []);

	return (
		<main>
			<section className="graph">
				{arrayValues.map((val) => (
					<div style={{ height: `${val}px` }} className="graph--bar">
						<p>{val}</p>
					</div>
				))}
			</section>
		</main>
	);
};

export default SortingVisualizer;

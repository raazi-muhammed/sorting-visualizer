import { useEffect, useState } from "react";
import "./sortingVisualizer.scss";
import ResetIcon from "../../assets/icons/ResetIcon";
import BubbleSort from "../sortingAlgorithms/BubbleSort";

const SortingVisualizer = () => {
	const [arrayValues, setArrayValues] = useState<number[]>([]);
	const [comparing, setComparing] = useState<number[]>([]);
	const [switching, setSwitching] = useState<number[]>([]);
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
		setSwitching([]);
	};
	useEffect(() => {
		randomizeArray();
	}, [arrayLength]);

	return (
		<main>
			<section className="top-section">
				<BubbleSort
					setComparing={setComparing}
					arrayValues={arrayValues}
					delay={delay}
					setArrayValues={setArrayValues}
					setSwitching={setSwitching}
				/>
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
							switching.includes(i)
								? "bar--danger"
								: comparing.includes(i)
								? "bar--accent"
								: ""
						}`}>
						<p className="graph--text">{val}</p>
					</div>
				))}
			</section>
			<aside style={{ position: "absolute", right: "2rem", top: "2rem" }}>
				<section>
					<input
						min={1}
						max={1000}
						value={delay}
						onChange={(e) => setDelay(Number(e.target.value))}
						type="number"
					/>
					<br />
					<input
						min={1}
						max={1000}
						value={delay}
						onChange={(e) => setDelay(Number(e.target.value))}
						type="range"
						className="slider"
					/>
				</section>
				<section>
					<input
						min={5}
						max={100}
						value={arrayLength}
						onChange={(e) => setArrayLength(Number(e.target.value))}
						type="number"
					/>
					<br />
					<input
						min={5}
						max={100}
						value={arrayLength}
						onChange={(e) => setArrayLength(Number(e.target.value))}
						type="range"
						className="slider"
					/>
				</section>
			</aside>
		</main>
	);
};

export default SortingVisualizer;

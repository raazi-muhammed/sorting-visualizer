import { useEffect, useState } from "react";
import "./sortingVisualizer.scss";
import ResetIcon from "../../assets/icons/ResetIcon";
import BubbleSort from "../sortingAlgorithms/BubbleSort";
import { useAppDispatch, useAppSelector } from "../../app/hooks";
import { changeDelay, changeSize } from "../../app/features/configSlice";
import { changeArray } from "../../app/features/numbersSlice";

const SortingVisualizer = () => {
	const [comparing, setComparing] = useState<number[]>([]);
	const [switching, setSwitching] = useState<number[]>([]);

	const config = useAppSelector((state) => state.config);
	const numbers = useAppSelector((state) => state.numbers);
	const dispatch = useAppDispatch();

	const randomizeArray = (): void => {
		const BASE_VALUE = 10;
		const MAX_VALUE = 1000;
		const ARRAY_LENGTH = config?.size;

		let randomArr: number[] = [];

		for (let i = 0; i < ARRAY_LENGTH; i++) {
			randomArr.push(Math.floor(Math.random() * MAX_VALUE) + BASE_VALUE);
		}

		dispatch(changeArray(randomArr));
		setComparing([]);
		setSwitching([]);
	};

	useEffect(() => {
		randomizeArray();
	}, [config.size]);

	return (
		<main>
			<section className="top-section">
				<BubbleSort setComparing={setComparing} setSwitching={setSwitching} />
				<button onClick={randomizeArray} className="btn">
					<ResetIcon />
				</button>
			</section>
			<section className="graph">
				{numbers.originalArray.map((val, i) => (
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
					<label className="input--label" htmlFor="delay">
						Delay:
					</label>
					<input
						min={5}
						max={100}
						step={10}
						className="input--box"
						id="delay"
						value={config?.delay}
						onChange={(e) => dispatch(changeDelay(Number(e.target.value)))}
						type="number"
					/>
					<br />
					<input
						min={5}
						max={100}
						step={10}
						value={config?.delay}
						onChange={(e) => dispatch(changeDelay(Number(e.target.value)))}
						type="range"
						className="slider"
					/>
				</section>
				<section>
					<label className="input--label" htmlFor="size">
						Size:
					</label>
					<input
						id="size"
						className="input--box"
						min={5}
						step={10}
						max={100}
						value={config?.size}
						onChange={(e) => dispatch(changeSize(Number(e.target.value)))}
						type="number"
					/>
					<br />
					<input
						min={5}
						max={100}
						step={10}
						value={config?.size}
						onChange={(e) => dispatch(changeSize(Number(e.target.value)))}
						type="range"
						className="slider"
					/>
				</section>
			</aside>
		</main>
	);
};

export default SortingVisualizer;

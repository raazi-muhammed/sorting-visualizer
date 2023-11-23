import { useSelector } from "react-redux";
import SortIcon from "../../assets/icons/SortIcon";
import { useAppDispatch, useAppSelector } from "../../app/hooks";
import {
	changeArray,
	changeComparing,
	changeSwitching,
} from "../../app/features/numbersSlice";

const BubbleSort = () => {
	const config = useSelector((state: any) => state.config);
	const numbers = useAppSelector((state) => state.numbers);
	const dispatch = useAppDispatch();

	const handleBubbleSortArray = async () => {
		let arr = [...numbers?.originalArray];

		let isItemsSwapped;
		let count = arr.length - 1;

		do {
			isItemsSwapped = false;
			for (let i = 0; i < count; i++) {
				dispatch(changeSwitching([]));

				if (arr[i] > arr[i + 1]) {
					isItemsSwapped = true;
					dispatch(changeSwitching([i, i + 1]));

					await new Promise((resolve) => setTimeout(resolve, config.delay / 2));
					let temp = arr[i];
					arr[i] = arr[i + 1];
					arr[i + 1] = temp;
				}
				dispatch(changeComparing([i, i + 1]));
				dispatch(changeArray([...arr]));
				await new Promise((resolve) => setTimeout(resolve, config.delay));
			}
			count--;
		} while (isItemsSwapped);

		dispatch(changeArray([...arr]));
		dispatch(changeComparing([]));
		dispatch(changeSwitching([]));
	};

	return (
		<div>
			<button
				onClick={() => {
					handleBubbleSortArray();
				}}
				className="btn">
				<SortIcon />
				Bubble Sort
			</button>
		</div>
	);
};

export default BubbleSort;

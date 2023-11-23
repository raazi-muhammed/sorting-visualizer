import SortIcon from "../../assets/icons/SortIcon";

type BubbleSortProps = {
	setArrayValues: React.Dispatch<React.SetStateAction<number[]>>;
	arrayValues: React.Dispatch<React.SetStateAction<number[]>>;
	delay: Number;
	setComparing: React.Dispatch<React.SetStateAction<number[]>>;
	setSwitching: React.Dispatch<React.SetStateAction<number[]>>;
};

const BubbleSort = ({
	setArrayValues,
	arrayValues,
	delay,
	setComparing,
	setSwitching,
}: BubbleSortProps) => {
	const handleBubbleSortArray = () => {
		const bubbleSort = async (arr: number[]) => {
			let isItemsSwapped;
			let count = arr.length - 1;
			do {
				isItemsSwapped = false;
				for (let i = 0; i < count; i++) {
					setSwitching([]);
					if (arr[i] > arr[i + 1]) {
						isItemsSwapped = true;
						setSwitching([i, i + 1]);
						await new Promise((resolve) => setTimeout(resolve, delay / 2));
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
			setSwitching([]);
			return arr;
		}; // O(n^2)

		bubbleSort(arrayValues);
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

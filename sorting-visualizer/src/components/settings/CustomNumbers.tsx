import { useState } from "react";
import { changeArray } from "../../app/features/numbersSlice";
import { useAppDispatch } from "../../app/hooks";
import toast from "react-hot-toast";

const CustomNumbers = () => {
    const dispatch = useAppDispatch();
    const [numbers, setNumbers] = useState<string>("");

    const parseToNumberArray = (input: string): number[] => {
        const cleanedUpStr = input.replace(/[\n\s]/g, ",");
        const array: number[] = cleanedUpStr
            .split(",")
            .map((num) => Number(num))
            .filter((num) => {
                if (!isNaN(num) || num !== 0) return num;
            });

        return array;
    };

    const handleSubmit = (e: React.SyntheticEvent) => {
        e.preventDefault();

        const array = parseToNumberArray(numbers);
        if (array.length < 1) {
            toast.error("Invalid input");
            return;
        }

        dispatch(changeArray(array));
    };

    return (
        <section className="aside-panel--section">
            <form onSubmit={handleSubmit}>
                <label htmlFor="numbers">Custom array</label>
                <textarea
                    value={numbers}
                    onChange={(e) => setNumbers(e.target.value)}
                    name="numbers"
                    rows={5}
                    placeholder="Input your custom array here"
                ></textarea>
                <button type="submit" className="btn btn-sm">
                    Submit
                </button>
            </form>
        </section>
    );
};

export default CustomNumbers;

import { PayloadAction, createSlice } from "@reduxjs/toolkit";

type InitialState = {
	originalArray: number[];
	comparing: number[];
	switching: number[];
};
const initialState: InitialState = {
	originalArray: [1, 2, 3],
	comparing: [],
	switching: [],
};

export const numbersSlice = createSlice({
	name: "numbers",
	initialState,
	reducers: {
		changeArray: (state, action: PayloadAction<number[]>) => {
			state.originalArray = action.payload;
		},
		changeComparing: (state, action: PayloadAction<number[]>) => {
			state.comparing = action.payload;
		},
		changeSwitching: (state, action: PayloadAction<number[]>) => {
			state.switching = action.payload;
		},
	},
});

export const { changeArray, changeComparing, changeSwitching } =
	numbersSlice.actions;

export default numbersSlice.reducer;

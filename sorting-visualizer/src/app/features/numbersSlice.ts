import { PayloadAction, createSlice } from "@reduxjs/toolkit";

type InitialState = {
	originalArray: number[];
};
const initialState: InitialState = {
	originalArray: [1, 2, 3],
};

export const numbersSlice = createSlice({
	name: "numbers",
	initialState,
	reducers: {
		changeArray: (state, action: PayloadAction<number[]>) => {
			state.originalArray = action.payload;
		},
	},
});

export const { changeArray } = numbersSlice.actions;

export default numbersSlice.reducer;

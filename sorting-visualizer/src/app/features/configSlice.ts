import { PayloadAction, createSlice } from "@reduxjs/toolkit";

type InitialState = {
	delay: number;
	size: number;
};
const initialState: InitialState = {
	delay: 22,
	size: 23,
};

export const configSlice = createSlice({
	name: "config",
	initialState,
	reducers: {
		changeDelay: (state, action: PayloadAction<number>) => {
			state.delay = action.payload;
		},
		changeSize: (state, action: PayloadAction<number>) => {
			state.size = action.payload;
		},
	},
});

export const { changeDelay, changeSize } = configSlice.actions;

export default configSlice.reducer;

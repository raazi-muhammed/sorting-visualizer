import { configureStore } from "@reduxjs/toolkit";
import configReducer from "./features/configSlice";
import numbersReducer from "./features/numbersSlice";

export const store = configureStore({
	reducer: {
		config: configReducer,
		numbers: numbersReducer,
	},
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

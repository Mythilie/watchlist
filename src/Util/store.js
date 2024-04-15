import { configureStore } from "@reduxjs/toolkit";
import listSlice from "./listSlice";

const store = configureStore({
    reducer: {
        list: listSlice,
    },
});

export default store;
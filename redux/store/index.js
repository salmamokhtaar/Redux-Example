import { configureStore } from "@reduxjs/toolkit";
import conter from "../reducer/counter"
import counter from "../reducer/counter";

const store = configureStore({

    reducer : {
        counter : counter
    }
})

export default store
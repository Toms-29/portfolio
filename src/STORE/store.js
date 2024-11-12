import { configureStore } from "@reduxjs/toolkit";
import themeReducer from './themeSlice.js'

const store = configureStore ({
    reducer : {
        theme : themeReducer
    }
})

store.subscribe(() => {
    sessionStorage.setItem('theme', JSON.stringify(store.getState().theme))
})

export default store
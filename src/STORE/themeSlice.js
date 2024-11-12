import { createSlice } from "@reduxjs/toolkit";

const guardarEnSessionStorage = () => {
    const estadoGuardado = sessionStorage.getItem('theme')
    return estadoGuardado ? JSON.parse(estadoGuardado) : { theme: 'light' }
}

const themeSlice = createSlice({
    name: 'theme',
    initialState: guardarEnSessionStorage(),
    reducers: {
        toggleTheme: (state) => {
            state.theme = state.theme === 'light' ? 'dark' : 'light'
        },

        setTheme: (state, action) => {
            state.theme = action.payload;
        }
    }
})

export const { toggleTheme, setTheme } = themeSlice.actions
export default themeSlice.reducer
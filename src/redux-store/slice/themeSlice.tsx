import { createSlice } from '@reduxjs/toolkit'

export const themeSlice = createSlice({
  name: 'theme',
  initialState: {
    value: "light",
  },
  reducers: {
    setTheme: (state, action: {payload: "light" | "dark"}) => {
      if (action.payload === 'dark') {
        document.documentElement.classList.add('ease-linear', 'transition-all', 'duration-500','dark')
      } else {
        document.documentElement.classList.remove('ease-linear', 'transition-all', 'duration-500','dark')
      }
      state.value = action.payload
    },
  },
})

// Action creators are generated for each case reducer function
export const { setTheme } = themeSlice.actions

export default themeSlice.reducer
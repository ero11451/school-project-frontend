import { configureStore } from '@reduxjs/toolkit'
import  authSlice   from './slice/authSlice'
import themeSlice from './slice/themeSlice'

// eslint-disable-next-line react-refresh/only-export-components
export default configureStore({
  reducer: {
    theme: themeSlice,
    auth: authSlice
  },
})
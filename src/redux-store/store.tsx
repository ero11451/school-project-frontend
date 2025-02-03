import { configureStore } from '@reduxjs/toolkit'
import  authSlice   from './slice/authSlice'
import themeSlice from './slice/themeSlice'
import notificationSlice  from './slice/notificationSlice'

const store = configureStore({
  reducer: {
    theme: themeSlice,
    auth: authSlice,
    notification : notificationSlice
  },
})


export default  store;
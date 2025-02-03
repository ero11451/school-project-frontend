import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { showToast } from "../../component/ToastNotifications";


export interface Inotification  {
    type?: "successful" | 'error' | 'info', 
    message?:string,
    show?:boolean
   }


export interface INotificationState {
    loading: boolean ;
    error: string | null;
    notification: Inotification;
}

const initialState: INotificationState = {
    loading: false,
    error: null,
    notification: {
        type: "info",
        message: '',
        show: false
    },
};



export const notificationSlice = createSlice({
    name: 'notification',
    initialState,
    reducers: {
        setLoading(state, action: PayloadAction<boolean>) {
            state.loading = action.payload;
        },
        setError(state, action: PayloadAction<string | null>) {
            state.error = action.payload;
        },
        showNotification(state, action: PayloadAction<Inotification>){
            showToast({ 
                message: action.payload.message || "Something went wrong", 
                type: action.payload.type , 
                show: true
            });
            // state.notification =  action.payload;
        }
    },
});

export const { setLoading,setError, showNotification } = notificationSlice.actions;

export default notificationSlice.reducer;
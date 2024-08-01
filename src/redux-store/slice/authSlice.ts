import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { Iuser } from '../../interface/Iuser';

export interface Inotification  {
     type?: "successful" | 'error' | 'info', 
     message?:string,
     show?:boolean
    }

export interface AuthState {
    token: string | null;
    loading: boolean | null;
    error: string | null;
    notification: Inotification;
    user?: Iuser | null;
    
}

const initialState: AuthState = {
    token: null,
    loading: false,
    error: null,
    user: null,
    notification: {
        type: "info",
        message: '',
        show: false
    },
};

export const authSlice = createSlice({
    name: 'auth',
    initialState,
    reducers: {
        setToken(state, action: PayloadAction<string>) {
            localStorage.setItem('token', action.payload)
            state.token = localStorage.getItem('token');
        },
        clearToken(state) {
            state.token = null;
            localStorage.removeItem('token');
        },
        setLoading(state, action: PayloadAction<boolean>) {
            state.loading = action.payload;
        },
        setError(state, action: PayloadAction<string | null>) {
            state.error = action.payload;
        },
        showNotification(state, action: PayloadAction<Inotification>){
            state.notification =  action.payload;
        },
        setUserData(state, action: PayloadAction<Iuser>){
           state.user = action.payload;
        }
    },
});

export const { setToken, clearToken, setLoading, setError, showNotification, setUserData } = authSlice.actions;

export default authSlice.reducer;





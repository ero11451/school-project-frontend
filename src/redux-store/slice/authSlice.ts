import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { IUser } from '../../interface/IUser';

export interface AuthState {
    token: string | null;
    loading: boolean | null;
    error: string | null;
    user?: IUser | null;
    redirectToLogin : boolean;
}


console.log()

const initialState: AuthState = {
    token: localStorage.getItem("token") || null,
    loading: false,
    error: null,
    user: null,
    redirectToLogin: false
};

export const authSlice = createSlice({
    name: 'auth',
    initialState,
    reducers: {
        setToken(state, action: PayloadAction<string>) {
            localStorage.setItem('token', action.payload)
            state.token = localStorage.getItem('token');
        },
        setUser(state, action: PayloadAction<IUser>){
            const userAsString = JSON.stringify(action.payload)
            localStorage.setItem("user", userAsString)
            state.user =  JSON.parse(userAsString)
        },
        clearToken(state) {
            state.token = null;
            state.user = null
            localStorage.removeItem('token');
            localStorage.removeItem('user');
        },
        setLoading(state, action: PayloadAction<boolean>) {
            state.loading = action.payload;
        },
        setError(state, action: PayloadAction<string | null>) {
            state.error = action.payload;
        },
        setUserData(state, action: PayloadAction<IUser>){
           state.user = action.payload;
        },
        setRedirectToLogin(state, action: PayloadAction<boolean>){
            state.redirectToLogin = action.payload;
        }
    },
});

export const { setToken, clearToken, setLoading, setError,  setUserData, setUser , setRedirectToLogin } = authSlice.actions;

export default authSlice.reducer;





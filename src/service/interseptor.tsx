import axios from 'axios';
import store from '../redux-store/store';
import {  clearToken, setRedirectToLogin } from '../redux-store/slice/authSlice';
import { setLoading } from '../redux-store/slice/notificationSlice';
import { showToast } from '../component/ToastNotifications';
// import { RoutePath } from '../router/routerPath';


const envType:boolean = import.meta.env.MODE === 'production';


const api = axios.create({
    baseURL: envType ? "https://neeboh.azurewebsites.net/" :  "http://localhost:5160",
});

api.interceptors.request.use(
    (config) => {
        const token = store.getState().auth.token;
        if (token) {
            config.headers['Authorization'] = `Bearer ${token}`;
        }
        store.dispatch(setLoading(true));
        return config;
    },
    (error) => {
        store.dispatch(setLoading(false));
        return Promise.reject(error);
    }
);

api.interceptors.response.use(
    (response) => {
        store.dispatch(setLoading(false));
        return response;
    },
    (error) => {
        store.dispatch(setLoading(false))

        if (error.response.status == 401) {
            store.dispatch(clearToken());
            store.dispatch(setRedirectToLogin(true));
            // window.location.href = "/" + RoutePath.login; 
        }

        showToast({
            show: true,
            message: error.response.data.title || error.response.data.title  || error.message || "An error occurred",
            type: 'error'
        });
        return Promise.reject(error);
    }
);

export default api;

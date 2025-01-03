import axios from 'axios';
import store from '../redux-store/store';
import { setLoading, setError, clearToken } from '../redux-store/slice/authSlice';

const envType:boolean = import.meta.env.MODE === 'production';

const api = axios.create({
    baseURL: envType ? "https://neeboh.azurewebsites.net/" :  "http://localhost:5160/",
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
        store.dispatch(setLoading(false));
        if (error.response?.status === 401) {
            store.dispatch(clearToken());
        }
        store.dispatch(setError(error.response.data.title || error.message));
        return Promise.reject(error);
    }
);

export default api;

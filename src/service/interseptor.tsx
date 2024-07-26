import axios from 'axios';
import store from '../redux-store/store';
import { setLoading, setError, clearToken } from '../redux-store/slice/authSlice';

const api = axios.create({
    baseURL: "http://localhost:5160/api/",
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
        store.dispatch(setError(error.message));
        return Promise.reject(error);
    }
);

export default api;

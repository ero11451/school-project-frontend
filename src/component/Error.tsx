import { useDispatch, useSelector } from 'react-redux';
import { setError } from '../redux-store/slice/authSlice';

const ErrorMessage = () => {
    const error = useSelector((state:{auth:{error:string}}) => state.auth.error);
   const dispatch = useDispatch();
    if (!error) return  null;

    setTimeout(() => { dispatch(setError(null)) } , 5000)

    return (
        <div className="fixed bottom-0 left-0 right-0 p-4 bg-red-600 text-white text-center">
            {error}
        </div>
    );
};

export default ErrorMessage;

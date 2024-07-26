import { useSelector } from 'react-redux';

const LoadingIndicator = () => {
    const isLoading = useSelector((state:{auth:{isLoading:boolean}}) => state.auth.isLoading);

    if (!isLoading) return null;

    return (
        <div className="fixed top-0 left-0 right-0 p-4 bg-blue-600 text-white text-center">
            Loading...
        </div>
    );
};

export default LoadingIndicator;

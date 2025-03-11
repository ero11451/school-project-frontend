import  { useEffect, useCallback } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Inotification, showNotification } from '../redux-store/slice/notificationSlice';
import React from 'react';

const CustomNotification = React.memo(() => {
  const notification = useSelector(
    (store: { notification: { notification: Inotification } }) => store.notification.notification
  );
  const dispatch = useDispatch();

  const hideNotification = useCallback(() => {
    dispatch(showNotification({ message: '', show: false, type: 'info' }));
  }, [dispatch]);

  useEffect(() => {
    if (notification.show) {
      const timer = setTimeout(hideNotification, 10000);
      return () => clearTimeout(timer);
    }
  }, [notification.show, hideNotification]);

  if (!notification.show) return null;

  return (
    <div className="fix transition-all transition duration-700 buttom-0 end-0">
      <div
        className={`w-screen 
          ${notification.type === 'info' && 'bg-blue-800'}
          ${notification.type === 'successful' && 'bg-green-800'}
          ${notification.type === 'error' && 'bg-red-500'} 
          text-sm text-white shadow-lg z-50`}
        role="alert"
        aria-labelledby="hs-toast-solid-color-red-label"
      >
        <div id="hs-toast-solid-color-red-label" className="flex p-4">
          {notification.message}
          <div className="ms-auto">
            <button
              type="button"
              className="inline-flex shrink-0 justify-center items-center size-5 rounded-lg text-white hover:text-white opacity-50 hover:opacity-100 focus:outline-none focus:opacity-100"
              aria-label="Close"
              onClick={hideNotification}
            >
              <span className="sr-only">Close</span>
              <svg
                className="shrink-0 size-4"
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M18 6 6 18"></path>
                <path d="m6 6 12 12"></path>
              </svg>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
});

export default CustomNotification;

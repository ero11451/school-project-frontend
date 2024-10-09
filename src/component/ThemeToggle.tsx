import { useDispatch, useSelector } from 'react-redux';
import { setTheme } from '../redux-store/slice/themeSlice';
import { useState } from 'react';

const ThemeToggle = () => {
    const theme = useSelector((state: { theme: { value: "light" | "dark" } }) => state.theme.value);
    const dispatch = useDispatch();

    const toggleTheme = () => {
        dispatch(setTheme(theme === "dark" ? 'light' : 'dark'));
    };

    const [enabled, setEnabled] = useState(false);

    const toggleSwitch = () => {
        setEnabled(!enabled);
        toggleTheme();
    };
    return (
        <div>



            <div className="">
                <div
                    className={`relative w-24 h-12 flex items-center rounded-full p-1 cursor-pointer transition-colors duration-300 ease-in-out ${enabled ? "bg-gray-500" : "bg-gray-400"
                        }`}
                    onClick={toggleSwitch}
                >
                    <div
                        className={`w-10 h-10 bg-white rounded-full shadow-md transform transition-transform duration-300 ease-in-out ${enabled ? "translate-x-12" : "translate-x-0"
                            }`}
                    >

                        <button  className="flex items-center justify-center h-full w-full">

                            {enabled ? (
                                <svg className="flex-shrink-0 size-7 transition-all duration-500 ease-linear" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                    <circle cx="12" cy="12" r="4"></circle>
                                    <path d="M12 2v2"></path>
                                    <path d="M12 20v2"></path>
                                    <path d="m4.93 4.93 1.41 1.41"></path>
                                    <path d="m17.66 17.66 1.41 1.41"></path>
                                    <path d="M2 12h2"></path>
                                    <path d="M20 12h2"></path>
                                    <path d="m6.34 17.66-1.41 1.41"></path>
                                    <path d="m19.07 4.93-1.41 1.41"></path>
                                </svg>
                            ) : (
                                <svg className="flex-shrink-0 size-7 transition-all duration-500 ease-linear" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                    <path d="M12 3a6 6 0 0 0 9 9 9 9 0 1 1-9-9Z"></path>
                                </svg>
                            )}

                        </button>
                    </div>
                </div>
            </div>


            {/* <button
                type="button"
                onClick={toggleTheme}
                className="text-sm"
            >
                {theme === "dark" ? (
                    <svg className="flex-shrink-0 size-7 transition-all duration-500 ease-linear" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                        <circle cx="12" cy="12" r="4"></circle>
                        <path d="M12 2v2"></path>
                        <path d="M12 20v2"></path>
                        <path d="m4.93 4.93 1.41 1.41"></path>
                        <path d="m17.66 17.66 1.41 1.41"></path>
                        <path d="M2 12h2"></path>
                        <path d="M20 12h2"></path>
                        <path d="m6.34 17.66-1.41 1.41"></path>
                        <path d="m19.07 4.93-1.41 1.41"></path>
                    </svg>
                ) : (
                    <svg className="flex-shrink-0 size-7 transition-all duration-500 ease-linear" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                        <path d="M12 3a6 6 0 0 0 9 9 9 9 0 1 1-9-9Z"></path>
                    </svg>
                )}
            </button> */}
        </div>
    );
};

export default ThemeToggle;

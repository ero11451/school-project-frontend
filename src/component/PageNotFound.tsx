import { NavLink } from "react-router-dom";
import { RoutePath } from "../router/routerPath";

const PageNotFound = () => {
  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <div className="text-center">
        <h1 className="text-6xl font-bold text-blue-600">404</h1>
        <p className="text-2xl font-semibold text-gray-800 mt-4">
          Oops! Page Not Found.
        </p>
        <p className="text-gray-600 mt-2">
          The page you're looking for doesn't exist or has been moved.
        </p>

         <NavLink
                to={RoutePath.home}
          className="mt-6 inline-block px-6 py-2 text-white bg-blue-600 rounded-full hover:bg-blue-700 transition-colors"
        >
          Go Back Home
        </NavLink>
      </div>
    </div>
  );
};

export default PageNotFound;

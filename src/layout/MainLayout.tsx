import { useEffect } from "react";
import { useLocation, Outlet } from "react-router-dom";
import { Navbar } from "../component";
// import CustomNotification from "../component/CustomNotification";
import Footer from "../component/Footer";

export function MainLayout() {
    const location = useLocation();
  
    useEffect(() => {
      window.HSStaticMethods.autoInit();
    }, [location.pathname]);
  
    return (
      <>
        {/* <CustomNotification /> */}
        <Navbar />
        <Outlet />
        <Footer />
      </>
    );
  }
  
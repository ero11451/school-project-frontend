import { BrowserRouter, Outlet, Route, Routes, } from "react-router-dom";
import { ProfileNavList, RoutePath } from "./routerPath";
import {
  About,
  Contacts,
  DashboardLayout,
  HomePage,
  Posts,
  Login,
  Navbar,
  Profile,
  ProfileEdit,
  ProfilePosts,
  PostDetails,
} from "./modules";
import ClassRoom from "../pages/ClassRoom";
import LoadingIndicator from "../component/LoadingIndicator";
import ErrorMessage from "../component/Error";
import Register from "../pages/Auth/Register";
import ProtectedRoute from "./ProtectedRoute";
import CustomNotification from "../component/CustomNotification";
import CreatePosts from "../pages/Profile/CreatePosts";

function ErrorBoundary() {
  return <>There was a error with this page</>;
}

function MainLayout() {  
    
  return (
    <>   
      <CustomNotification />
      <Navbar />
      <Outlet />
    </>
  );
}

export default function MainRouter() {

  return (
    <BrowserRouter>
      <LoadingIndicator />
      <ErrorMessage />
   
      <Routes>
        
        <Route
          path={RoutePath.initialPage}
          element={<MainLayout />}
          errorElement={<ErrorBoundary />}
        >
          <Route path={RoutePath.contact} element={<Contacts />} />
          <Route path={RoutePath.home} element={<HomePage />} />
          <Route element = {<ProtectedRoute  />}>
               <Route path={RoutePath.PostsList} element={<Posts />} />  
               <Route path={`${RoutePath.postDetails}/:postId`} element={<PostDetails />} />
          </Route>
          <Route path={RoutePath.register} element={<Register />} />
          <Route path={RoutePath.login} element={<Login />} />
          <Route path={RoutePath.about} element={<About />} />
        </Route>

 
        
        <Route
          path={RoutePath.profile}
          element={<DashboardLayout sideNavList={ProfileNavList} />}
        >
          <Route path={RoutePath.profileDashboard} element={<Profile />} />
          <Route path={RoutePath.profilePosts} element={<ProfilePosts />} />
          <Route
            path={RoutePath.profileCreatePosts}
            element={<CreatePosts />}
          />
          <Route path={RoutePath.editProfile} element={<ProfileEdit />} />
          <Route path={RoutePath.videoDisplay} element={<ClassRoom />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

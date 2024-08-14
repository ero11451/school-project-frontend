import { BrowserRouter, Route, Routes, } from "react-router-dom";
import { ProfileNavList, RoutePath } from "./routerPath";
import {
  About,
  Contacts,
  DashboardLayout,
  HomePage,
  Posts,
  Login,
  Profile,
  ProfileEdit,
  ProfilePosts,
  PostDetails,
} from "./modules";
// import ClassRoom from "../pages/ClassRoom";
import LoadingIndicator from "../component/LoadingIndicator";
import ErrorMessage from "../component/Error";
import Register from "../pages/Auth/Register";
import CustomNotification from "../component/CustomNotification";
import CreatePosts from "../pages/Profile/CreatePosts";
import "preline/preline";
import { IStaticMethods } from "preline/preline";
import { MainLayout } from "../layout/MainLayout";
import { ErrorBoundary } from "../component/ErrorBoundary";
import ServicePage from "../pages/ServicePage";
import NotFound from "../component/NotFound";
import ProtectedRoute from "./ProtectedRoute";

declare global {
  interface Window {
    HSStaticMethods: IStaticMethods;
  }
}




export default function MainRouter() {
  return (
    <BrowserRouter>
      <LoadingIndicator />
      <CustomNotification />
      <ErrorMessage />

      <Routes>
        <Route
          path={RoutePath.initialPage}
          element={<MainLayout />}
          errorElement={<ErrorBoundary />}
        >
          <Route path={RoutePath.contact} element={<Contacts />} />
          <Route path={RoutePath.home} element={<HomePage />} />
          <Route path={RoutePath.initialPage} element={<HomePage />} />
          <Route path={RoutePath.PostsList} element={<Posts />} />
          <Route element={<ProtectedRoute />} >
            <Route path={`${RoutePath.postDetails}/:postId`} element={<PostDetails />} />
          </Route>
          <Route path={RoutePath.about} element={<About />} />
          <Route path={RoutePath.register} element={<Register />} />
          <Route path={RoutePath.login} element={<Login />} />
          <Route path={RoutePath.servicePage} element={<ServicePage />} />
        </Route>
        <Route path={RoutePath.register} element={<Register />} />
        <Route path={RoutePath.login} element={<Login />} />
        {/* ServicePage */}

        {/* <Route element={<ProtectedRoute />}>
        </Route> */}
        <Route element={<ProtectedRoute />} >
          <Route
            path={RoutePath.profile}
            element={<DashboardLayout sideNavList={ProfileNavList} />}
          >
            <Route path={''} element={<Profile />} />
            <Route path={RoutePath.profileDashboard} element={<Profile />} />
            <Route path={RoutePath.profilePosts} element={<ProfilePosts />} />
            <Route
              path={RoutePath.profileCreatePosts}
              element={<CreatePosts />}
            />
            <Route path={RoutePath.editProfile} element={<ProfileEdit />} />
          </Route>
        </Route>


        <Route path={'**'} element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  );
}

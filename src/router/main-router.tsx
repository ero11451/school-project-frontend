import { BrowserRouter, Route, Routes, } from "react-router-dom";
import { ProfileNavList, RoutePath } from "./routerPath";
import {
  About,
  DashboardLayout,
  HomePage,
  Login,
  Profile,
  ProfileEdit,
  ProfilePosts
} from "./modules";
// import ClassRoom from "../pages/ClassRoom";
import LoadingIndicator from "../component/LoadingIndicator";
import ErrorMessage from "../component/Error";
import Register from "../pages/Auth/Register";
import CustomNotification from "../component/CustomNotification";
import CreatePosts from "../pages/Admin/CreatePosts";
import "preline/preline";
import { IStaticMethods } from "preline/preline";
import { MainLayout } from "../layout/MainLayout";
import { ErrorBoundary } from "../component/ErrorBoundary";
import ServicePage from "../pages/ServicePage";
import ProtectedRoute from "./ProtectedRoute";
import DevToolsPage from "../pages/DevToolsPage";
import PageNotFound from "../component/PageNotFound";
import ContactUs from "../pages/ContactUs";
import ProfilePage from "../pages/ProfilePage";
import CourseDetails from "../pages/Courses/CourseDetails";
import { CourseList } from "../pages/Courses/CourseList";
import { CourseClassList } from "../pages/Courses/CourseClassList";

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
          <Route path={RoutePath.contact} element={<ContactUs />} />
          <Route path={RoutePath.home} element={<HomePage />} />
          <Route path={RoutePath.initialPage} element={<HomePage />} />
          <Route path={RoutePath.courseList} element={<CourseList />} />
          <Route path={RoutePath.courseList + "/:id"} element={<CourseDetails />} />
          <Route element={<ProtectedRoute />} >
            <Route path={`${RoutePath.postDetails}/:postId`} element={<CourseDetails />} />
          </Route>
          <Route path={RoutePath.courseList + '/:id'} element={<CourseClassList />} />
          <Route path={RoutePath.about} element={<About />} />
          <Route path={RoutePath.register} element={<Register />} />
          <Route path={RoutePath.login} element={<Login />} />
          <Route path={RoutePath.servicePage} element={<ServicePage />} />
          <Route path={RoutePath.devTools} element={<DevToolsPage />} />
          <Route path={RoutePath.profile} element={<ProfilePage />} />
        </Route>
        <Route path={RoutePath.register} element={<Register />} />
        <Route path={RoutePath.login} element={<Login />} />
        {/* ServicePage */}

        {/* <Route element={<ProtectedRoute />}>
        </Route> */}
        <Route element={<ProtectedRoute />} >
          <Route
            path={RoutePath.admin}
            element={<DashboardLayout sideNavList={ProfileNavList} />}
          >
            <Route path={RoutePath.profileDashboard} element={<Profile />} />
            <Route path={RoutePath.profilePosts} element={<ProfilePosts />} />
            <Route
              path={RoutePath.profileCreatePosts}
              element={<CreatePosts />}
            />
            <Route path={RoutePath.editProfile} element={<ProfileEdit />} />
          </Route>
        </Route>


        <Route path={'*'} element={<PageNotFound />} />
      </Routes>
    </BrowserRouter>
  );
}



import {
  createRoutesFromElements,
  createBrowserRouter,
  Outlet,
  RouterProvider,
  Route,
} from "react-router-dom";
import Navbar from "./components/Navbar/Navbar";
import Home from "./pages/Home/Home";
import Statistics from "./pages/Statistics/Statistics";
import AppliedJobs, {
  appliedJobsLoader,
} from "./pages/AppliedJobs/AppliedJobs";
import Blog from "./pages/Blog/Blog";
import "./App.scss";
import { categoryLoader } from "./components/Category/Category";
import JobDetails, { jobDetailsLoader } from "./pages/JobDetails/JobDetails";
import ErrorPage from "./pages/ErrorPage/ErrorPage";
import Footer from "./components/Footer/Footer";

const Layout = () => (
  <>
    <Navbar />
    <main>
      <Outlet />
    </main>
    <Footer />
  </>
);

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<Layout />} errorElement={<ErrorPage />}>
      <Route index element={<Home />} loader={categoryLoader} />
      <Route path="/statistics" element={<Statistics />} />
      <Route path="/:id" element={<JobDetails />} loader={jobDetailsLoader} />
      <Route
        path="/applied-jobs"
        element={<AppliedJobs />}
        loader={appliedJobsLoader}
      />
      <Route path="/blog" element={<Blog />} />
    </Route>
  )
);

const App = () => {
  return (
    <>
      <RouterProvider router={router} />
    </>
  );
};

export default App;

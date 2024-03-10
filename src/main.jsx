import ReactDOM from 'react-dom/client'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";

import App from './App.jsx';
import Packages from './pages/Packages';
import Accomodation from './pages/Accomodation';
import SurfCourses from './pages/SurfCourses';
import YogaCourses from './pages/YogaCourses';
import Activities from './pages/Activities';

import './index.css'

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
  },
  {
    path: "packages",
    element: <Packages />
  },
  {
    path: "accomodations",
    element: <Accomodation />
  },
  {
    path: "surfcourses",
    element: <SurfCourses />
  },
  {
    path: "yogacourses",
    element: <YogaCourses />
  }, 
  {
    path: "activites",
    element: <Activities />
  }
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <RouterProvider router={router} />
)

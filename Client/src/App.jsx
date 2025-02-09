import "./App.css";

// import Explore from './Components/HomeComponent/Explore'
import { Routes, Route } from "react-router-dom";

import LandingPage from "./Pages/LandingPage";
import NotFound from "./Pages/NotFound"
import Signup from "./Pages/Signup";
import Login from "./Pages/Login";
import CourseList from "./Pages/Course/CourseList";
import Contact from "./Pages/Contact";
import Denied from "./Pages/Denied";
import CourseDescription from "./Pages/Course/CourseDescription";
import CreateCourse from "./Pages/Course/CreateCourse";
import RequireAuth from "./Components/Auth/RequireAuth";
import Profile from "./Pages/User/Profile";
import EditProfile from "./Pages/User/EditProfile";



function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<LandingPage />}></Route>
        {/* <Route path="/courses" element={<CoursePage />}></Route> */}
        <Route path="/signup" element={<Signup />}></Route>
        <Route path="/login" element={<Login />}></Route>
        <Route path="/contact" element={<Contact />}></Route>
        <Route path="/denied" element={<Denied />}></Route>
        <Route path="/course/description" element={<CourseDescription />}></Route>
        
        <Route path="/courses" element={<CourseList />}></Route>


        <Route element={<RequireAuth allowedRoles={["ADMIN"]} />}>
          <Route path="/course/create" element={<CreateCourse />} />
          
        </Route>


        <Route element={<RequireAuth allowedRoles={["ADMIN", "USER"]} />}>
          <Route path='/user/profile' element={<Profile />} />
          <Route path='/user/editprofile' element={<EditProfile />} />
        </Route>

        <Route>
          <Route path="*" element={<NotFound />}></Route>
        </Route>
      </Routes>
    </>
  );
}

export default App;

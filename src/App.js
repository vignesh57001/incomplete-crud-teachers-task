import "./App.css";
import DashBoard from "./DashBoard";
import Login from "./Login";
import Users from "./Users";
import PortalLayout from "./PortalLayout";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./fontawesome-free/css/all.min.css";
import { useContext } from "react";
import { UserContext } from "./UserCreate";
import Teachers from "./Teachers";
import Students from "./Students";
import Create_Teachers from "./Create_Teachers";
import Create_Students from "./Create_Students";
import Single_Teacher_Details from "./Single_Teacher_Details";
import Single_Student_Details from "./Single_Student_Details";
import Update_Single_Teacher from "./Update_Single_Teacher";
import Update_Single_Student from "./Update_Single_Student";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Login />}></Route>
        <Route path="/portal" element={<PortalLayout />}>
          <Route path="DashBoard" element={<DashBoard />}></Route>
          <Route path="Users" element={<Users />}></Route>
          <Route path="Students" element={<Students />}></Route>
          <Route path="Teachers" element={<Teachers />}></Route>
          <Route path="Create_Teachers" element={<Create_Teachers />}></Route>
          <Route path="Create_Students" element={<Create_Students />}></Route>
          <Route
            path="Single_Teacher_Details/:id"
            element={<Single_Teacher_Details />}
          ></Route>
          <Route
            path="Single_Student_Details"
            element={<Single_Student_Details />}
          ></Route>
          <Route
            path="Update_Single_Teacher/:id"
            element={<Update_Single_Teacher />}
          ></Route>
          <Route
            path="Update_Single_Student"
            element={<Update_Single_Student />}
          ></Route>
        </Route>
      </Routes>
    </BrowserRouter>
  );
}
export default App;

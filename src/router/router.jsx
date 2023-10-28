import {
  Route,
  createBrowserRouter,
  createRoutesFromElements,
} from "react-router-dom";

//
import Layout from "../components/admin/Layout";

// pages
import Home from "../components/Home";
import Admin from "../components/admin/Admin";
import Staff from "../components/staff/Staff";
import Login from "../components/Login";
import Register from "../components/Register";
import Dashborad from "../components/admin/Dashboard";
import AStaff from "../components/admin/components/staff/Staff";
import Attandance from "../components/admin/components/attandance/Attandance";
import AddStaff from "../components/admin/components/AddStaff";
import UpdateStaff from "../components/admin/components/UpdateStaff";

export const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/">
      <Route index element={<Home />} />

      {/* ADMIN */}
      <Route path="admin" element={<Layout />}>
        <Route index element={<Admin />} />
        <Route path="login" element={<Login />} />
        <Route path="register" element={<Register />} />
        <Route path="dashboard" element={<Dashborad />} />
        <Route path="staffs" element={<AStaff />} />
        <Route path="attandance" element={<Attandance />} />
        <Route path="add-staff" element={<AddStaff />} />
        <Route path="update-staff/:id" element={<UpdateStaff />} />
      </Route>

      {/* STAFF */}
      <Route path="staff">
        <Route index element={<Staff />} />
      </Route>
    </Route>
  )
);

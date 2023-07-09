import { Routes, Route, Navigate } from "react-router-dom";
import HomePage from "../Pages/HomePage";
// import Header from "../Components/Header";
import NotFound from "../Pages/NotFound";
import LoginPage from "../Pages/LoginPage";
import { PrivateRoute } from "../Utils/privateRoute";
import AdminLayout from "../Components/AdminLayout";

const Root = () => {
  return (
    <>
      
      <Routes>
        <Route path="/home/uz" element={<HomePage />} />
        <Route path="/" element={<Navigate to="/home/uz" />} />
        <Route path="/login" element={<LoginPage />} />
        <Route element={<PrivateRoute/>}>
        <Route path='/admin' element={<AdminLayout />} />
        </Route>
        <Route path="*" element={<NotFound />} />
      </Routes>
    </>
  );
};

export default Root;

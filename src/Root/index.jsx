import { Routes, Route, Navigate } from "react-router-dom";
import HomePage from "../Pages/HomePage";


const Root = () => {
  return (
    <>
      
      <Routes>
        <Route path="/home/uz" element={<HomePage />} />
        <Route path="/" element={<Navigate to="/home" />} />
      </Routes>
    </>
  );
};

export default Root;

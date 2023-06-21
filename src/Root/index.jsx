import { Routes, Route, Navigate } from "react-router-dom";
import HomePage from "../Pages/HomePage";

const Root = () => {
  return (
    <>
      <Routes>
        <Route path="/home" element={<HomePage />} />
        <Route path="/" element={<Navigate to="/home" />} />
        <Route path="*" element={<h1>404 Not Found</h1>} />
      </Routes>
    </>
  );
};

export default Root;

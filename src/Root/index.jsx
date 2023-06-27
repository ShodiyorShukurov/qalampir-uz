import { Routes, Route, Navigate } from "react-router-dom";
import HomePage from "../Pages/HomePage";
import Header from "../Components/Header";
import NotFound from "../Pages/NotFound";

const Root = () => {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/home" element={<HomePage />} />
        <Route path="/" element={<Navigate to="/home" />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </>
  );
};

export default Root;

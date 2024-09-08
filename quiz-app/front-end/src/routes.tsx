import { Route, Routes } from "react-router";
import Home from "./pages/Home/Home";
import Quiz from "./pages/Quiz/Quiz";

export default function Router() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/quiz" element={<Quiz />} />
        {/* <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} /> */}
      </Routes>
    </>
  );
}

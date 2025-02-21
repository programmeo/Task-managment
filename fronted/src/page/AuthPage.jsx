import Login from "../components/Login";
import SignUp from "../components/SignUp";
import { Routes, Route } from "react-router-dom";

function AuthPage() {
  return (
    <div>
      <div>
        <Routes>
          <Route path="/signup" element={<SignUp />} />
          <Route path="/login" element={<Login />} />
        </Routes>
      </div>
    </div>
  );
}

export default AuthPage;

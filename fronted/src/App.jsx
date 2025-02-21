import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./page/Home";
import AuthPage from "./page/AuthPage";
import Navbar from "./components/Navbar";
import DashBoard from "./page/DashBoard";
import Protected from "./components/Protected";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Navbar />}>
            <Route index element={<Home />} />
            <Route path="/auth/*" element={<AuthPage />} />
          </Route>
          <Route
            path="/dashboard"
            element={
              <Protected>
                <DashBoard />
              </Protected>
            }
          />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;

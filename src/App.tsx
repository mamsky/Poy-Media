import { BrowserRouter, Route, Routes } from "react-router-dom";
import Login from "./pages/login";
import NotFound from "./pages/NotFound";
import Dashboard from "./pages/dashboard";
import Register from "./pages/register";
import ForgotPassword from "./pages/forgotpassword";
import ResetPassword from "./pages/resetpassword";
function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Dashboard />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/forgotpassword" element={<ForgotPassword />} />
        <Route path="/resetpassword" element={<ResetPassword />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;

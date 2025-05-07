// routers/router.jsx
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Login from '../components/login.jsx';
import Register from '../components/register.jsx';
import Dashboard from '../components/Dashboard.jsx';
import NotFound from '../components/NotFound.jsx';
import LandingPage from '../components/Landing.jsx'; 



function AppRouter() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  );
}

export default AppRouter;

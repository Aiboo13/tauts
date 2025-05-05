// routers/router.jsx
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import LandingPage from '../components/Landing.jsx';
import Login from '../components/login.jsx';
import Register from '../components/register.jsx';

function AppRouter() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
      </Routes>
    </BrowserRouter>
  );
}

export default AppRouter;

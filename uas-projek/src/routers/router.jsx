import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Login from '../components/login.jsx';
import Register from '../components/register.jsx';
function Router() {
  return(
    <BrowserRouter>
      <Router>
        <Routes>
        <Router path="/login" element={<Login />} />
        <Router path="/register" element={<Register />} />
        </Routes>
      </Router>
    </BrowserRouter>
  )
}

export default Router;
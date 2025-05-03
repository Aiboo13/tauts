
import { BrowserRouter, Routers, Router } from "react-router-dom";
import Login from '../components/login.jsx';
function App() {
  return(
    <BrowserRouter>
      <Routers>
        <Router path="/login" element={<Login />} />
      </Routers>
    </BrowserRouter>
  )
}

export default App;
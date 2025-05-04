import { useState } from 'react';
import LandingPage from './components/landing';
import Login from './components/login';
import Register from './components/register';
function App() {
  const [page, setPage] = useState('landing');

  return (
    <>
      {page === 'landing' && (<LandingPage
          goToLogin={() => setPage('login')}
          goToRegister={() => setPage('register')}
        />
      )}
      {page === 'login' && <Login />}
      {page === 'register' && <Register />}
    </>
  );
}

export default App;

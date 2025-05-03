import { useState } from 'react';
import LandingPage from './components/landing';
import Login from './components/login';

function App() {
  const [Page, setPage] = useState('landing'); // huruf kecil

  return (
    <>
      {Page === 'landing' && <LandingPage goToLogin={() => setPage('login')} />}
      {Page === 'login' && <Login />}
    </>
  );
}

export default App;

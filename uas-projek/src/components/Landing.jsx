import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import Logo from '../assets/logo (2).png';
import ReactLogo from '../assets/react.svg';
import { useNavigate } from 'react-router-dom';
import '../style/Landing.css' // Pastikan untuk menyesuaikan path ini sesuai dengan struktur folder Anda



function LandingPage() {
  const navigate = useNavigate();
  return (
    <>
    <div className='container-fluid'>
      <nav className="navbar bg-body-tertiary" >
        <div className="container">
          <a className="navbar-brand logo-wrap" href="#">
            <img src={Logo} alt="TautsLogo" /><h1>tauts</h1>
            </a>
            </div>
            <div className='button-register'>
            <button onClick={() => navigate('/register')} className="btn" style={{ border: 'none', boxShadow: 'none',color:'white'}}>regiter</button>
          </div>
          <div className='button-login' >
          <button onClick={() => navigate('/login')} className="btn" style={{ border: 'none', boxShadow: 'none'}}>login</button>
          </div>
        </nav>
        <div className="container-fluid text-center">
  <div  className="row mt-5">
    <div className="col-7">
      <div className='text'>
        <p>Akses semua tautan</p>
        <p className='under'> dengan satu ketukan</p>
        <button className='create-link' onClick={() => navigate('/login')}>buat tauts-mu</button>
        </div>
        </div>
        <div className="col">
          <div className='inmain'>
            <div>
              <div className='header'><img src={ReactLogo} alt="" width="10%" height="10%"/>
                <h3>User123#</h3><br />
                <small>mobille devolover | cloud engginer</small>
              </div><br />
              <br /><br /><br /><br />
              <div className='tree'>
                <p>Personal website</p>
                <p>Github</p>
                <p>Mobile course</p>
              </div>
            </div>
          </div>
          </div>
  </div>
          </div>
    </div>
    </>
  );
}

export default LandingPage;

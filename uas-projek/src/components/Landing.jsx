import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import './Landing.css';
import Logo from '../assets/LOGO.png';
import ReactLogo from '../assets/react.svg';



function LandingPage({goToLogin}) {
  return (
    <>
    <div className='container-fluid'>
        <nav className="navbar bg-body-tertiary" >
          <div className="container" >
            <a className="navbar-brand" href="#">
              <img
                src={Logo}
                alt=""
                width="40%"
                height="40%"
              />
            </a>
          </div>
          <div className='button-register'>
            <button  className="btn" style={{ border: 'none', boxShadow: 'none',color:'white'}}>regiter</button>
          </div>
          <div className='button-login' >
          <button onClick={goToLogin} className="btn" style={{ border: 'none', boxShadow: 'none'}}>login</button>
          </div>
        </nav>
        <div className="container text-center">
  <div  className="row mt-5">
    <div className="col-7">
      <div className='text'>
        <p>Akses semua tautan</p>
        <p className='under'> dengan satu ketukan</p>
        <button className='create-link' >buat tauts-mu</button>
        </div>
        </div>
        <div className="col">
          <div className='inmain'>
            <div>
              <div className='header'><img src={ReactLogo} alt="" width="10%" height="10%"/>
                <h3>User</h3><br />
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

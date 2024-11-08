import React from 'react';
import logo from '../assets/LOGO.png';
import background from '../assets/landpage.jpeg';
import './LandingPage.css';

const LandingPage = () => {
  return (
    <div className="d-flex flex-column align-items-center vh-100 p-3">
        <div className='background-image'>
            <img src={logo} alt="MyWDP Logo" className='logo'/>
        </div>
      <button className="btn btn-primary btn-lg rounded-pill mb-3" style={{ width: '90%', backgroundColor:'#BC3838', borderColor:'#BC3838' }}>
        Sign in
      </button>
      <p className="text-center">
        Belum punya akun? <a href="/register">Daftar disini</a>
      </p>
    </div>
  );
};

export default LandingPage;

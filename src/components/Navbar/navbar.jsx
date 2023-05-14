import React from 'react';
import './navbar.css';
import Logo from '../../assets/logo.png';

function Navbar() {
  const type = localStorage.getItem('type');
  const userName = localStorage.getItem('userName');

  const handleLogout = () => {
    localStorage.clear();
    window.location.href = '/login';
  };

  return (
    <nav className="navbar">
      <div className="navbar__left">
        <a href="/">
          <img src={Logo} alt="Logo" className="navbar__logo" />
        </a>
      </div>
      <div className="navbar__middle">
        <a href="/" className="navbar__link">Home</a>
        <a href="/about" className="navbar__link">About</a>
      </div>
      <div className="navbar__right">
        {type === 'doctor' ? (
          <React.Fragment>
            <span className="navbar__user-name">{userName}</span>
            <br />
            <a href='/dashboard' className="navbar__login-btn">Dashboard</a>
           

            <button className="navbar__login-btn" onClick={handleLogout}>{userName ? 'Logout' : 'Login'}</button>

          </React.Fragment>
        ) : (
          <React.Fragment>
            {userName && <span className="navbar__user-name">{userName}</span>}
            <button className="navbar__login-btn" onClick={handleLogout}>{userName ? 'Logout' : 'Login'}</button>
          </React.Fragment>
        )}
      </div>
    </nav>
  );
}

export default Navbar;

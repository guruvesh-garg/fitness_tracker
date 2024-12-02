import React from 'react';
import { Link } from 'react-router'; // Optional: If you're using react-router for navigation

const Navbar = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-warning">
      <div className="container-fluid">
        <Link className="navbar-brand" to="/">Sign Up</Link>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav">
            <li className="nav-item">
              <Link className="nav-link active" aria-current="page" to="/loginpage">LoginPage</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/bmicalc">BMI_Calc</Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
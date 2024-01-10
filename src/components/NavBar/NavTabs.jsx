import React from 'react';
import Button from 'react-bootstrap/Button';
import Collapse from 'react-bootstrap/Collapse';
import 'bootstrap/dist/css/bootstrap.min.css';

// Here we are using object destructuring assignment to pluck off our variables from the props object
// We assign them to their own variable names
function NavTabs({ currentPage, handlePageChange }) {
  return (
    <div className='logoBody'>


<nav className="navbar navbar-expand-lg bg-body-tertiary fixed-top">
  <div className="container-fluid">
    <a className="navbar-brand navLogo" href="#">Portfolio 2.0
    <img className="navLogoImage" src="./images/logoImage.jpg" alt="profileImage" />
    </a>
    <button className="navbar-toggler" type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasNavbar" aria-controls="offcanvasNavbar" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>


    <div className="offcanvas offcanvas-end" tabindex="-1" id="offcanvasNavbar" aria-labelledby="offcanvasNavbarLabel">
      <div className="offcanvas-header">
        <h5 className="offcanvas-title" id="offcanvasNavbarLabel">Offcanvas</h5>
        <button type="button" className="btn-close" data-bs-dismiss="offcanvas" aria-label="Close"></button>
      </div>
      <div className="offcanvas-body">
        <ul className="navbar-nav justify-content-end flex-grow-1 pe-3">
          <li className="nav-item">
            {/* <a class="nav-link active" aria-current="page" href="#">Home</a> */}
            <a
                  href="#home"
                  onClick={() => handlePageChange('Home')}
                  // This is a conditional (ternary) operator that checks to see if the current page is "Home"
                  // If it is, we set the current page to 'nav-link-active', otherwise we set it to 'nav-link'
                  className={currentPage === 'Home' ? 'nav-link active' : 'nav-link'}
                >
                  Home
                </a>
          </li>
          <li className="nav-item">
            {/* <a class="nav-link" href="#">Link</a> */}
            <a
                  href="#aboutMe"
                  onClick={() => handlePageChange('AboutMe')}
                  // Check to see if the currentPage is `About`, and if so we use the active link class from bootstrap. Otherwise, we set it to a normal nav-link
                  className={currentPage === 'AboutMe' ? 'nav-link active' : 'nav-link'}
                >
                  About Me
                </a>
          </li>
          <li className="nav-item">
            {/* <a class="nav-link" href="#">Link</a> */}
            <a
                  href="#Portfolio"
                  onClick={() => handlePageChange('Portfolio')}
                  // This is a conditional (ternary) operator that checks to see if the current page is "Portfolio"
                  // If it is, we set the current page to 'nav-link-active', otherwise we set it to 'nav-link'
                  className={currentPage === 'Portfolio' ? 'nav-link active' : 'nav-link'}
                >
                  Portfolio
                </a>
          </li>
          <li className="nav-item">
            {/* <a class="nav-link" href="#">Link</a> */}
            <a
                  href="#Certifications"
                  onClick={() => handlePageChange('Certifications')}
                  // Check to see if the currentPage is `Certifications`, and if so we use the active link class from bootstrap. Otherwise, we set it to a normal nav-link
                  className={currentPage === 'Certifications' ? 'nav-link active' : 'nav-link'}
                >
                  Resume & Certification
                </a>
          </li>
          <li className="nav-item">
            {/* <a class="nav-link" href="#">Link</a> */}
            <a
                  href="#contact"
                  onClick={() => handlePageChange('Contact')}
                  // Check to see if the currentPage is `Contact`, and if so we use the active link class from bootstrap. Otherwise, we set it to a normal nav-link
                  className={currentPage === 'Contact' ? 'nav-link active' : 'nav-link'}
                >
                  Contact
                </a>
          </li>
          <li className="nav-item">
            {/* <a class="nav-link" href="#">Link</a> */}
            <button type="button" className="btn btn-secondary" Secondary active
                  href="#contact"
                  onClick={() => handlePageChange(
                    window.open("https://docs.google.com/document/d/e/2PACX-1vTrusYCQekVdUKXkYAR9bZrYgpU7sWORjorwXTESVVmqLzDziCX9bwzMp5n-atdfA/pub")
                  )}

                // Check to see if the currentPage is `Contact`, and if so we use the active link class from bootstrap. Otherwise, we set it to a normal nav-link
                // className={currentPage === 'Contact' ? 'nav-link active' : 'nav-link'}
                >
                  Download Resume
                </button>
          </li>
        </ul>
      </div>
    </div>
  </div>
</nav>



    </div>
  );
}


// Import into Portfolio jsx
export default NavTabs;

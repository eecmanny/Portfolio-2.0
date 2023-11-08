// import profileLogo from './assets/logoImage.jpg';
// const profileLogo = require('./images/profileImage.jpeg');
// console.log(profileLogo);

// const headerStyle = {
//   navIcons: {
//     display: "flex",
//     width: "75%",
//     justifyContent: "flex-end",
//   },

//   // navLogo: {
//   //   display: "flex",
//   //   width: "25%",
//   //   justifyContent: "space-around",
//   // },

//   logo: {
//     display: "flex",
//     justifyContent: "space-around",
//   },


//   // navLogoImage: {
//   //   width: "100px",
//   //   height: "100px",
//   //   borderRadius: "50%",
//   //   border: "1px solid black",
//   // }
// }

// Here we are using object destructuring assignment to pluck off our variables from the props object
// We assign them to their own variable names
function NavTabs({ currentPage, handlePageChange }) {
  return (
    <header className="navLayout">
      <nav className="navStyle">
        <section className="navLogo">
          <ul className="navLogo nav-tabs">
            <li className="nav-item">
              <a className="navbar-logo" href="#home">
                <h1 className="navLogoText" dir="website-p">
                  Portfolio 2.0
                </h1>
                {/* will search for images and files in the public folder */}
                <img className="navLogoImage" src="./images/logoImage.jpg" alt="profileImage" />
                {/* href="#home"
          onClick={() => handlePageChange('Home')}
          className={currentPage === 'Home' ? 'nav-link active' : 'nav-link'} */}
              </a>
            </li>
          </ul>
        </section>
        <section className="navIcons">
          <ul className="navIconsButtons">
            <li className="nav-item">
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
              <a
                href="#contact"
                onClick={() => handlePageChange('Contact')}
                // Check to see if the currentPage is `Contact`, and if so we use the active link class from bootstrap. Otherwise, we set it to a normal nav-link
                className={currentPage === 'Contact' ? 'nav-link active' : 'nav-link'}
              >
                Contact
              </a>
            </li>
            <li className="nav-item nav-items-border">
              <button variant="primary" size="lg" active
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

        </section>

      </nav>
    </header>
  );
}


// Import into Portfolio jsx
export default NavTabs;

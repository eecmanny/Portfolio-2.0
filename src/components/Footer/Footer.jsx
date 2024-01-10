// Here we are using object destructuring assignment to pluck off our variables from the props object
// We assign them to their own variable names


function FooterTabs({ currentPage, handlePageChange }) {
  return (
    



    <footer >
    <ul className="footer footer-tabs">
      <li className="footerItem">
        <a
          href="#home"
          onClick={() => handlePageChange('Home')}
          className={currentPage === 'Home' ? 'footer-link active' : 'footer-link'}
        >
                          <img className="footerIcons" src="./images/logoImage.jpg" alt="profileImage" />
        </a>
      </li>
      <li className="footerItem">

        <a
          href="https://www.linkedin.com/in/emmanuel-cordero-a91519195"
          onClick={() => {
            window.open("https://www.linkedin.com/in/emmanuel-cordero-a91519195", "_blank")
          }} //external link
        >
                  <img className="footerIcons" src="./images/LinkedIn_logo_initials.png" alt="linkedIn" />
          {/* LinkedIn */}
        </a>
      </li>
      <li className="footerItem">
      <a
          href="https://github.com/eecmanny"
          onClick={() => {
            window.open("https://github.com/eecmanny")
          }} //external link
        >
          <img className="footerIcons" src="./images/github-mark.png" alt="github" />
          {/* Github */}
        </a>
      </li>
      <li className="footerItem">
      <a
          href="#https://www.linkedin.com/in/emmanuel-cordero-a91519195"
          onClick={() => {
            window.open("#https://www.linkedin.com/in/emmanuel-cordero-a91519195", "_blank")
          }} //external link
        >
                    <img className="footerIcons" src="./images/youtube.png" alt="youtube" />
          {/* Youtube */}
        </a>
      </li>
    </ul>
    <div>
      <button>
      <h1>Color Switcher</h1>
      </button>
      </div>
    </footer>

    // </footer>
    
  );
}

// Import into Portfolio jsx
export default FooterTabs;

// Here we are using object destructuring assignment to pluck off our variables from the props object
// We assign them to their own variable names
function FooterTabs({ currentPage, handlePageChange }) {
  return (
    <section>
    <ul className="footer footer-tabs">
      {/* <li className="footer-item">
        <a className="footerbar-logo" href="#https://bulma.io">
          <h1 dir="website-p">
            Website Portfolio
          </h1>            
          <img className="profileimage" src="./" alt="Profileimage"/>

        </a>
      </li> */}
      <li className="footer-item">
        <a
          href="#home"
          onClick={() => handlePageChange('Home')}
          // This is a conditional (ternary) operator that checks to see if the current page is "Home"
          // If it is, we set the current page to 'footer-link-active', otherwise we set it to 'footer-link'
          className={currentPage === 'Home' ? 'footer-link active' : 'footer-link'}
        >
          Home
        </a>
      </li>
      <li className="footer-item">
        <a
          href="https://www.linkedin.com/in/emmanuel-cordero-a91519195"
          onClick={() => {
            window.open("https://www.linkedin.com/in/emmanuel-cordero-a91519195", "_blank")
          }} //external link
          

          // onClick={() => handlePageChange('About')}
          // // Check to see if the currentPage is `About`, and if so we use the active link class from bootstrap. Otherwise, we set it to a normal footer-link
          // className={currentPage === 'About' ? 'footer-link active' : 'footer-link'}
        >
          LinkedIn
        </a>
      </li>
      {/* <li className="footer-item">
      <a
          href="https://www.linkedin.com/in/emmanuel-cordero-a91519195"
          onClick={() => {
            window.open("https://www.linkedin.com/in/emmanuel-cordero-a91519195", "_blank")
          }} //external link
          

          // onClick={() => handlePageChange('About')}
          // // Check to see if the currentPage is `About`, and if so we use the active link class from bootstrap. Otherwise, we set it to a normal footer-link
          // className={currentPage === 'About' ? 'footer-link active' : 'footer-link'}
        >
          Heroku
        </a>
      </li> */}
      <li className="footer-item">
      <a
          href="https://github.com/eecmanny"
          onClick={() => {
            window.open("https://github.com/eecmanny")
          }} //external link
          

          // onClick={() => handlePageChange('About')}
          // // Check to see if the currentPage is `About`, and if so we use the active link class from bootstrap. Otherwise, we set it to a normal footer-link
          // className={currentPage === 'About' ? 'footer-link active' : 'footer-link'}
        >
          Github
        </a>
      </li>
      <li className="footer-item">
      <a
          href="#https://www.linkedin.com/in/emmanuel-cordero-a91519195"
          onClick={() => {
            window.open("#https://www.linkedin.com/in/emmanuel-cordero-a91519195", "_blank")
          }} //external link
          

          // onClick={() => handlePageChange('About')}
          // // Check to see if the currentPage is `About`, and if so we use the active link class from bootstrap. Otherwise, we set it to a normal footer-link
          // className={currentPage === 'About' ? 'footer-link active' : 'footer-link'}
        >
          Youtube
        </a>
      </li>
    </ul>
    <div>
      <button>
      <h1>Color Switcher</h1>
      </button>
      </div>
    </section>

    // </footer>
    
  );
}

// Import into Portfolio jsx
export default FooterTabs;

// Here we are using object destructuring assignment to pluck off our variables from the props object
// We assign them to their own variable names
const footerStyle ={
  backgroundColor: "grey",
  color: "white",
  textAlign: "center",
  padding: "10px",
  position: "fixed",
  left: "0",
  bottom: "0",
  height: "100px",
  width: "100%",
}

function FooterTabs({ currentPage, handlePageChange }) {
  return (
    <footer style={footerStyle}>
    <ul className="footer footer-tabs">

      <li className="footer-item">
        <a
          href="#home"
          onClick={() => handlePageChange('Home')}
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
        >
          LinkedIn
        </a>
      </li>
      <li className="footer-item">
      <a
          href="https://github.com/eecmanny"
          onClick={() => {
            window.open("https://github.com/eecmanny")
          }} //external link
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
    </footer>

    // </footer>
    
  );
}

// Import into Portfolio jsx
export default FooterTabs;

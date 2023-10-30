// Import into Portfolio jsx
export default function AboutMe() {
  return (
    <main>

      <a className="navbar-logo" href="#home">
          {/* will search for images and files in the public folder */}
          <img className="logoImage" src="./images/profileImage.jpeg" alt="profileImage"/>
        </a>
      <h1>About Page</h1>     
       <p>
        summary of me
      </p>
    </main>
  );
}

// Import into Portfolio jsx
export default function AboutMe() {
  return (
    <section className="profile-section">

      <a className="profile-pic" href="#home">
          {/* will search for images and files in the public folder */}
          <img className="profileImage" src="./images/profileImage.jpeg" alt="profileImage"/>
        </a>
      <h1>About Page</h1>     
       <p>
        summary of me
      </p>
    </section>
  );
}

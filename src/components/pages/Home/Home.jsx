import React, { useEffect } from 'react';

export default function Home() {
  useEffect(() => {
    // Initialize Typed.js when the component mounts
    var typed = new Typed(".auto-type", {
      strings: ["Welcome to my online portfolio! I am Emmanuel Cordero, and I am thrilled to share my creative journey with you.", "As an Engineering Technician and a Real Estate Sales Associate, I have dedicated myself to honing my skills and exploring the vast world of Web Development.", "With a passion for mathematics, helping people, advertising, and making processes more efficient, I strive to create compelling and impactful web development experiences.", "Through this portfolio, I invite you to delve into my projects and witness the culmination of my dedication, creativity, and unwavering commitment to excellence!"],
      typeSpeed: 60,
      backSpeed: 25,
      loop: false,
    });

    // Clean up the Typed instance when the component unmounts
    return () => {
      typed.destroy();
    };
  }, []);

  return (

    <section className="homeSection webPageHome">

{/* <img className="page-background" src="\images\background\pexels-kevin-ku-577585.jpg" alt="laptop background image"></img> */}
      <h1>Home Page</h1>
      <div>
        <div className="page-background">

        </div>
        
      </div>
      <p>
        <h2><span className="auto-type"></span></h2>
        {/* 
        Welcome to my online portfolio! I am Emmanuel Cordero, and I am thrilled to share my creative journey with you.
        As an Engineering Technician and a Real Estate Sales Associate, I have dedicated myself to honing my skills and
        exploring the vast world of Web Development. With a passion for mathematics, helping people, advertising, and
        making processes more efficient, I strive to create compelling and impactful web development experiences.
        Through this portfolio, I invite you to delve into my projects and witness the culmination of my dedication,
        creativity, and unwavering commitment to excellence! */}
      </p>
    </section>
  );
}


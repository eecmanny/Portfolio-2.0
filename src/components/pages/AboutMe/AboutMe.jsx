// Import into Portfolio jsx
export default function AboutMe() {
  return (
    <section className="profile-section webPageAboutMe">
      
      <img className="webPageAboutMeTest" src="\images\background/pexels-pixabay-270366.jpg" alt="background" />
<div className="inner-profile-section">


      <a className="profile-pic" href="#home">

        {/* will search for images and files in the public folder */}
        <img className="profileImage" src="./images/profileImage.jpeg" alt="profileImage" />
      </a>
      <h1 className="bioText">About Page</h1>
      <p className="bioText">
      I am a dedicated and results-driven individual with a diverse background, passionate about pursuing a rewarding career in web development and software solutions. Committed to excellence, I bring a solid educational foundation and a unique blend of technical expertise and practical skills to the table.
      </p>
      <p className="bioText">
  I thrive in professional environments and am always eager to expand my skill set to contribute to innovative projects. My career journey has spanned various roles, providing me with a versatile skill set that aligns seamlessly with the dynamic nature of web development and software solutions.
</p>

<p className="bioText">
In previous roles, I excelled in administrative tasks, supported clients, and drove business growth as a Real Estate Sales Associate. While working in the engineering field, I am currently an Engineering Lab Technician, specializing in solenoid products, quality procedures, and high-pressure systems. My true passion lies in crafting digital solutions, and I am excited to channel my skills into web/software development.
</p>
<p className="bioText">
In my previous role as a Detector's Technician at Mirion Technologies, I undertook complex tasks such as radiation measurement, circuit troubleshooting, and handling various nuclear instrumentation modules. My educational journey includes a high school diploma with a focus on electronics technology, and I recently added Uconn’s Full Stack Coding certification to my list.
</p>
<p className="bioText">
Throughout my life, I have honed my skills in technical, administrative, and interpersonal areas, making me a versatile and adaptable professional ready to excel in the ever-evolving world of web development and software solutions. I am eager to leverage my diverse background to contribute effectively to cutting-edge projects and continue learning and growing in these exciting fields.

      </p>
      </div>
    </section>
  );
}

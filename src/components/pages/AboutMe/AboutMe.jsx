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
       "I am a highly motivated individual with a diverse background and a strong commitment to excellence. With a solid educational foundation, I bring a combination of technical expertise and practical skills to the table. Known for my reliability and ability to multitask effectively, I thrive in professional environments and am always eager to expand my skill set to enhance departmental efficiency and productivity.

My career journey has taken me through various roles, from real estate sales and administrative work to hands-on technical positions. I excel in real estate sales, where I handle administrative tasks, support clients, and drive business growth through advertising and prospecting. In the engineering field, I have worked as an Engineering Lab Technician, specializing in solenoid products, quality procedures, and high-pressure systems. My earlier experience as a Detector's Technician at Mirion Technologies involved complex tasks such as radiation measurement, circuit troubleshooting, and handling various nuclear instrumentation modules.

Education-wise, I hold a high school diploma with a focus on Electronics Technology and have embarked on a journey to become a licensed Real Estate Salesperson.

Throughout my life, I have honed my skills in a wide range of areas, including technical, administrative, and interpersonal, making me a versatile and adaptable professional ready to excel in new challenges and environments."
      </p>
    </section>
  );
}

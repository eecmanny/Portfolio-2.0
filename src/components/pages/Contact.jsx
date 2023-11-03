// Import into Portfolio jsx
export default function Contact() {
  return (
    <main>
      <h1>Contact Page</h1>
      <p className="contact-layout">
        <div>
          <section className="contact">
            <h3>Contacts</h3>
            <ul className="info-card">
              <li><a className="c-info" href="tel:860-975-7480">860-975-7480</a></li>
              <li><a className="c-info" href="mailto:eec123manny@gmail.com">eec123manny@gmail.com</a></li>
              <li><a className="c-info" href="#">Future Placeholder</a></li>
              <li><a className="p-info" href="https://www.linkedin.com/in/emmanuel-cordero-a91519195/">Linkdin</a></li>
              <li><a className="p-info" href="https://github.com/eecmanny">Github</a></li>
              <li><a li className="p-info" href="#">Future Placeholder</a></li>
            </ul>
          </section>
        </div>
        <div>
          <section className="contact-card">
            <h3>Contact Form</h3>
            <form className="card">
              <label for="name">Name:</label>
              <input type="text" id="name" name="name" placeholder="Your name.." required></input>
              <label for="email">Email:</label>
              <input type="email" id="email" name="email" placeholder="Your email.." required></input>
              <label for="subject">Message:</label>
              <textarea id="subject" name="subject" placeholder="Write something.." required></textarea>
              <input type="submit" value="Submit"></input>
            </form>
          </section>
        </div>
      </p>
    </main>
  );
}

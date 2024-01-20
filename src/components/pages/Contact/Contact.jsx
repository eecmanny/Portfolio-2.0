// // Import into Portfolio jsx
// export default function Contact() {
//   return (
//     <section className="contact-Page-layout">
//       <h1 className="contact-Page-title">Contact Page</h1>
//       <p className="contact-layout">
//         <div>
//           <section className="contactInfo">
//             <h3 className="contactCardTitle">Contacts</h3>
//             <ul className="info-card">
//               <li><a className="c-info" href="tel:860-975-7480">860-975-7480</a></li>
//               <li><a className="c-info" href="mailto:eec123manny@gmail.com">eec123manny@gmail.com</a></li>
//               <li><a className="c-info" href="#">Future Placeholder</a></li>
//               <li><a className="p-info" href="https://www.linkedin.com/in/emmanuel-cordero-a91519195/">Linkdin</a></li>
//               <li><a className="p-info" href="https://github.com/eecmanny">Github</a></li>
//               <li><a li className="p-info" href="#">Future Placeholder</a></li>
//             </ul>
//           </section>
//         </div>
//         <div>
//           <section className="contactCard">
//             <h3>Contact Form</h3>
//             <form className="formCard">
//               <label for="name">Name:</label>
//               <input type="text" id="name" name="name" placeholder="Your name.." required></input>
//               <label for="email">Email:</label>
//               <input type="email" id="email" name="email" placeholder="Your email.." required></input>
//               <label for="subject">Message:</label>
//               <textarea id="subject" name="subject" placeholder="Write something.." required></textarea>
//               <input type="submit" value="Submit"></input>
//             </form>
//           </section>
//         </div>
//       </p>
//     </section>
//   );
// }

//Contact component


import { useState, useRef } from 'react';
//contact stylesheet
import "./Contact.css"

//contact form
function Contact() {
    const [formState, setFormState] = useState({ name: '', email: '', message: '' });
    const [errors, setErrors] = useState({});
    const [formIsValid, setFormIsValid] = useState({
        name: true,
        email: true,
        message: true,
    });
    const formRef = useRef(null);

    //handle form input changes
    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormState((prevState) => ({
            ...prevState,
            [name]: value,
        }));
    }
    //validate form fields
    const handleBlur = (field) => {
        let isValid;
        const errors = {};
        switch (field) {
            case 'email':
                isValid = isValidEmail(formState[field]);
                setFormIsValid({ ...formIsValid, [field]: isValid });
                if (!formState.email.trim()) {
                    errors.email = 'Email is required';
                } else if (!isValid) {
                    errors.email = 'Invalid email address';
                }
                setErrors(errors);
                break;
            default:
                isValid = formState[field].trim() !== '';
                setFormIsValid({ ...formIsValid, [field]: isValid });

                break;
        }
    };
    //validate email
    const isValidEmail = (email) => {
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return emailRegex.test(email);
    };
    //submit form
    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(formState);
    };
    //destructure formState
    const { name, email, message } = formState;

    return (
        <section className="webPageContact" >
            <img className="cPage-background" src="/public/images/background/email-messages-network-circuit-board-link-connection-technology.jpg" alt="background" />


            <h1>Contact me</h1>

            <form className="contact-form" onSubmit={handleSubmit} ref={formRef}>
                <div className="form-group">
                    <input
                        type="text"
                        name="name"
                        placeholder='Name'
                        value={name}
                        onChange={handleChange}
                        onBlur={() => handleBlur("name")}
                    />
                    {formIsValid.name === false && <p className="error">name is required</p>}
                </div>
                <div className="form-group">
                    <input
                        type="email"
                        name="email"
                        placeholder='Email'
                        value={email}
                        onChange={handleChange}
                        onBlur={() => handleBlur("email")}
                    />
                    {errors.email && <p className="error">{errors.email}</p>}
                </div>
                <div className="form-group">
                    <textarea
                        name="message"
                        placeholder='Message'
                        value={message}
                        onChange={handleChange}
                        onBlur={() => handleBlur("message")}
                        rows="5"
                    />
                    {formIsValid.message === false && <p className="error">message is required</p>}
                </div>
                <button className="submit-button" type="submit">
                    Submit
                </button>
            </form>
        </section>
    );
}

export default Contact;

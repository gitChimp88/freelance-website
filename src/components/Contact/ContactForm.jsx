import './contactForm.css';
import { useState } from 'react';
import emailjs from 'emailjs-com';

export default function ContactForm() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');

  const [showSuccessMessage, setShowSuccessMessage] = useState(false);

  const triggerSuccessMessage = () => {
    setShowSuccessMessage(true);

    setTimeout(() => {
      setShowSuccessMessage(false);
    }, 3000);
  };

  const submitContactForm = () => {
    // use Email.js here
    if (name && email && message) {
      const mailData = { name, email, message };
      emailjs
        .send(
          'service_5ebfbqb', // service id
          'template_x60wkze', // template id
          mailData,
          'STNMEMPJb-S9exfMC' // public api
        )
        .then(
          (response) => {
            // setError(false);
            // clearError();
            event.preventDefault();
            triggerSuccessMessage();

            setName('');
            setEmail('');
            setMessage('');
          },
          (err) => {
            console.log(err.text);
          }
        );
    }
  };

  return (
    <div>
      {/* <form id="cs-form-240" name="Contact Form"> */}
      <label class="cs-label">
        Name
        <input
          className="cs-input"
          required
          type="text"
          id="name-240"
          name="name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          placeholder="Name"
        />
      </label>
      <label class="cs-label">
        Email
        <input
          className="cs-input"
          required
          type="text"
          id="email-240"
          name="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="Email"
        />
      </label>

      <label className="cs-label cs-label-message">
        Message
        <textarea
          className="cs-input cs-textarea"
          required
          name="Message"
          id="message-240"
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          placeholder="Write message..."
        ></textarea>
      </label>
      <button
        onClick={submitContactForm}
        className="cs-button-solid cs-submit"
        // type="submit"
      >
        Submit Message Now
      </button>
      {showSuccessMessage && (
        <div className="success-message">
          Your message has been recieved and we will get back to you as soon as
          possible
        </div>
      )}
      {/* </form> */}
    </div>
  );
}

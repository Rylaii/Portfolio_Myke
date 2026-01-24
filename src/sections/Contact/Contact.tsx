import { useRef } from "react";
import styles from "./ContactStyles.module.css";
import emailjs from "emailjs-com";
// import ContactInfo from "./ContactInfo";

function Contact() {
  const form = useRef<HTMLFormElement>(null);

  // Initialize EmailJS once (can also do this in App.js)
  emailjs.init("_vwPRGagZ8GGU1Eou");

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault(); // prevent page reload

    if (!form.current) return;

    emailjs.sendForm("service_dctcb6a", "template_pvwd4ql", form.current).then(
      (result) => {
        console.log("Email successfully sent!", result.text);
        alert("Message sent successfully!");
        form.current?.reset(); // reset form after submit
      },
      (error) => {
        console.error("Failed to send email:", error.text);
        alert("Failed to send message, try again.");
      },
    );
  };

  return (
    <section id="contact" className={styles.container}>
      <h1 className="sectionTitle">Contact</h1>
      <form ref={form} onSubmit={handleSubmit}>
        {/* <ContactInfo/> */}
          <h2>Get in touch with me</h2>
        <div className="formGroup">
          <label htmlFor="name" hidden>
            Name
          </label>
          <input
            type="text"
            name="name"
            id="name"
            placeholder="Name"
            required
          />
        </div>

        <div className="formGroup">
          <label htmlFor="email" hidden>
            Email
          </label>
          <input
            type="email"
            name="email"
            id="email"
            placeholder="Email"
            required
          />
        </div>

        <div className="formGroup">
          <label htmlFor="message" hidden>
            Message
          </label>
          <textarea
            name="message"
            id="message"
            placeholder="Message"
            required
          ></textarea>
        </div>

        <input className="hover btn" type="submit" value="SEND MESSAGE" />
      </form>
    </section>
  );
}

export default Contact;

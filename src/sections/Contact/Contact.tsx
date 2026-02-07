import { useEffect, useRef } from "react";
import styles from "./ContactStyles.module.css";
import emailjs from "emailjs-com";
import ContactInfo from "./ContactInfo";

export default function Contact() {
  const form = useRef<HTMLFormElement>(null);

  useEffect(() => {
    emailjs.init("_vwPRGagZ8GGU1Eou");
  }, []);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!form.current) return;

    emailjs.sendForm("service_dctcb6a", "template_pvwd4ql", form.current).then(
      () => {
        alert("Message sent successfully!");
        form.current?.reset();
      },
      () => {
        alert("Failed to send message, try again.");
      },
    );
  };

  return (
    <section id="contact" className={styles.container}>
      <div className={styles.header}>
        <h1 className="sectionTitle">Contact</h1>
        <p className="description">
          Want to collaborate or ask something? Send me a message.
        </p>
      </div>

      <div className={styles.layout}>
        <ContactInfo />

        <form ref={form} onSubmit={handleSubmit} className={styles.form}>
          <h2 className={styles.formTitle}>Get in touch with me</h2>

          <div className={styles.formGroup}>
            <label htmlFor="name" className={styles.srOnly}>
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

          <div className={styles.formGroup}>
            <label htmlFor="email" className={styles.srOnly}>
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

          <div className={styles.formGroup}>
            <label htmlFor="message" className={styles.srOnly}>
              Message
            </label>
            <textarea
              name="message"
              id="message"
              placeholder="Message"
              required
            />
          </div>

          <button type="submit" className={`${styles.submit} hover`}>
            SEND MESSAGE
          </button>
        </form>
      </div>
    </section>
  );
}

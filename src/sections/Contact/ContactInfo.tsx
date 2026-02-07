import React from "react";
import styles from "./ContactStyles.module.css";

interface ContactItem {
  label: string;
  value: string;
  href?: string;
  iconClass: string;
}

const contactItems: ContactItem[] = [
  {
    label: "Address",
    value: "777, Lunas Street, Malamig, Mandaluyong, Metro Manila",
    iconClass: "fa fa-map-marker",
  },
  {
    label: "Phone",
    value: "+63 915 902 4439",
    href: "tel:+639159024439",
    iconClass: "fa fa-phone",
  },
  {
    label: "Email",
    value: "mykexardantorresbognalon@mail.com",
    href: "mailto:mykexardantorresbognalon@mail.com",
    iconClass: "fa fa-paper-plane",
  },
];

const ContactInfo: React.FC = () => {
  return (
    <div className={styles.infoGrid}>
      {contactItems.map((item) => (
        <div key={item.label} className={styles.infoCard}>
          <div className={styles.icon}>
            <span className={item.iconClass} />
          </div>

          <div className={styles.text}>
            <p>
              <span>{item.label}:</span>{" "}
              {item.href ? <a href={item.href}>{item.value}</a> : item.value}
            </p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default ContactInfo;

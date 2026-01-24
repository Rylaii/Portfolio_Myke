import React from "react";
import styles from "./ContactStyles.module.css";

// Define the type for each contact item
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
    value: "+639-159-024-439",
    href: "tel://1234567920",
    iconClass: "fa fa-phone",
  },
  {
    label: "Email",
    value: "mykexardantorresbognalon@mail.com",
    href: "mailto:info@yoursite.com",
    iconClass: "fa fa-paper-plane",
  },
];

const ContactInfo: React.FC = () => {
  return (
    <div className={styles.row}>
      {contactItems.map((item, index) => (
        <div key={index} className={styles.col}>
          <div className={styles.dbox}>
            <div className={styles.icon}>
              <span className={item.iconClass}></span>
            </div>
            <div className={styles.text}>
              <p>
                <span>{item.label}:</span>{" "}
                {item.href ? (
                  <a href={item.href}>{item.value}</a>
                ) : (
                  item.value
                )}
              </p>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default ContactInfo;

import { useState } from "react";
import { Icon } from "dpc-components-library";
import styles from "@/styles/Accordion.module.css";

export default function Accordion({
  id,
  title,
  about,
  address,
  location,
  phone,
  email,
  service,
  serviceWeb,
  minister,
}) {
  const [isShowing, setIsShowing] = useState(false);

  const toggle = () => {
    setIsShowing(!isShowing);
  };

  const agencyContent = [
    `<div style="padding: 1rem;"><h3>About</h3>
      <p>${about}</p>
      <h2>Contact details</h2>
      <p>Address:</p>
      <a href='${location}'>${address}</a>
      <p>Telephone: ${phone}</p>
      <p>Email: <a href="mailto:${email}">${email}</a></p>
      <a href="${serviceWeb}">${service} </a>
      <h2>Minister</h2>
      <p>${minister}</p></div>`,
  ];

  return (
    <div key={id} className={styles.accordion__main}>
      <div className={styles.accordion__button} onClick={toggle} type="button">
        <p className={styles.accordion__title}>{title}</p>
        <p className={styles.accordion__showmore}>
          {isShowing === false ? "Show more" : "Show less"}
          <Icon icon="icon-chevron-down" size="20" />
        </p>
      </div>
      <div
        className={styles.accordion__content}
        style={{ display: isShowing ? "block" : "none", padding: "5px" }}
        dangerouslySetInnerHTML={{
          __html: agencyContent,
        }}
      />
    </div>
  );
}

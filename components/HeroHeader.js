import styles from "@/styles/Heroheader.module.css";
import { Breadcrumbs } from "dpc-components-library";

export default function HeroHeader({
  locate,
  locate2,
  locate3,
  link,
  link2,
  heading,
  content,
}) {
  return (
    <div className={styles.hero}>
      <div className={styles.hero__container}>
        <Breadcrumbs>
          <a href="/">Home</a>
          <a href={`${link}`}>{locate}</a>
          <a>{locate2}</a>
        </Breadcrumbs>
        <div className={styles.hero__header}>
          <h1>{heading}</h1>
        </div>
        <div className={styles.hero__bottom}>
          <p>{content}</p>
        </div>
      </div>
    </div>
  );
}

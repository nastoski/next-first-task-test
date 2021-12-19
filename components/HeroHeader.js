import styles from "@/styles/Heroheader.module.css";
import Link from "next/link";
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
          <Link href="/">
            <a>Home</a>
          </Link>
          <Link href={`${link}`}>
            <a>{locate}</a>
          </Link>
          <Link href="#0">
            <a>{locate2}</a>
          </Link>
          {/* <Link href="#0">
            <a>{locate3}</a>
          </Link> */}
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

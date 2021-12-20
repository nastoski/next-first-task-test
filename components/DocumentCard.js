import Link from "next/link";
import styles from "@/styles/DocumentCard.module.css";
import { FaFileAlt } from "react-icons/fa";

export default function DocumentCard({
  title,
  docxDescription,
  pdfDescription,
  docx,
  pdf,
}) {
  return (
    <div className={styles.document_container}>
      <div className={styles.document}>
        <div className={styles.document__icon}>
          <FaFileAlt color="gray" size={55} />
          <div className={styles.document__info}>
            <Link href="#0">
              <a>{title}</a>
            </Link>
            <div className={styles.document__downloads}>
              <Link href={docx}>
                <a>{docxDescription}</a>
              </Link>
              <Link href={pdf}>
                <a>{pdfDescription}</a>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

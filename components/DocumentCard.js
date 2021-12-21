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
            {/*<Link href="#">*/}
              <a>{title}</a>
            {/*</Link>*/}
            <div className={styles.document__downloads}>
                <a href={docx}>{docxDescription}</a>
                <a href={pdf}>{pdfDescription}</a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

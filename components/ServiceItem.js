import styles from "@/styles/ServiceItem.module.css";
import Link from "next/link";
import { useRouter } from "next/router";
import { Button, Icon } from "dpc-components-library";

export default function ServiceItem({
  key,
  slug,
  slug2,
  title,
  description,
  size,
  serviceinfo,
}) {
  const router = useRouter();

  return (
    <div key={key} className={styles.column}>
      <h2>
        <Link href={`/service/${slug}/${slug2}`}>
          <a>{title}</a>
        </Link>
        <Icon icon="icon-chevron-right" size={size} />
      </h2>
      <p>{description}</p>
      <div className={styles.serviceinfo}>
        {router.pathname === "/service/[category]"
          ? serviceinfo.slice(0, 3).map((serv) => (
              <h4 key={serv.title}>
                <a>{serv.title}</a>
              </h4>
            ))
          : ""}
      </div>
      {router.pathname === "/service/[category]" && serviceinfo.length > 3 ? (
        <Link href={`${slug}/${slug2}`}>
          <Button size="medium">
            View all {serviceinfo.length} {title} information
          </Button>
        </Link>
      ) : (
        ""
      )}
    </div>
  );
}

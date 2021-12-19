import HeroHeader from "@/components/HeroHeader";
import Layout from "@/components/Layout";
import Link from 'next/link'
import styles from "@/styles/404.module.css";

export default function NotFoundPage() {
  const HeroProps = {
    locate: "404 Page not found",
    heading: "404 Page not found",
    content:
      "We can't seem to find the page you're looking for. It may be because we have recently updated our website and some content has been moved or deleted.",
  };

  return (
    <Layout>
      <HeroHeader
        locate={HeroProps.locate}
        heading={HeroProps.heading}
        content={HeroProps.content}
      />
      <div className={styles.notfound__main}>
        <div className={styles.notfound__main__inner}>
          <div className={styles.notfound__main__content}>
            <p>You can try</p>
            <ol>
              <li>
                <Link href="/search-results.html?q=">
                  <a >
                    searching for a different keyword or phrase
                  </a>
                </Link>
              </li>
              <li>
                <Link href="/agency">
                  <a>browsing the list of agencies</a>
                </Link>
              </li>
              <li>
                <Link href="/service">
                  <a>browsing all information and services</a>
                </Link>
              </li>
            </ol>
            <p>
              Still unable to find what you need?
               Contact us using our feedback form.
            </p>
          </div>
        </div>
      </div>
    </Layout>
  );
}

import homeDB from "db/home";
import Layout from "@/components/Layout";
import Image from "next/image";
import styles from "@/styles/Home.module.css";
import Link from "next/link";
import {
  Button,
  Input,
  ScrollTop,
  Icon,
  Paragraph,
} from "dpc-components-library";

export default function HomePage({ homeList, homeLists, banner }) {
  return (
    <Layout>
      <div className={styles.hero__section}>
        <div className={styles.hero__container}>
          <div className={styles.searchbox__inner}>
            <h2 className={styles.searchbox__heading}>
              What can we do <span>for you today?</span>
            </h2>
            <div className={styles.searchbox__heading_tagline}>
              <Paragraph>
                Search for <strong>Western Australian</strong> government
                information and services.
              </Paragraph>
            </div>
            <form name="Search" className={styles.searchbox__container}>
              <Input
                label=""
                type="text"
                placeholder="I am searching for..."
                aria-label="Search"
                name="q"
              />
              <Button outlined type="submit" size="large">
                <Icon size="30" icon="icon-search" />
              </Button>
            </form>
          </div>
        </div>
      </div>

      {/* Main Section */}
      <div className={styles.main__section}>
        <div className={styles.main__section__top}>
          <div className={styles.main__section__box1}>
            <div className={styles.main__government__media}>
              <Image src={homeList.image} width={606} height={303} alt="" />
              <h1 className={styles.main__government__title}>
                <Link href={homeList.slug}>
                  <a>
                    {homeList.title}
                    <Icon icon="icon-chevron-right" size="18" />
                  </a>
                </Link>
              </h1>
              <p className={styles.main__government__description}>
                {homeList.description}
              </p>
            </div>
          </div>
          <div className={styles.main__section__box2}>
            {homeLists.map((list, index) => (
              <li key={index}>
                <Image src={list.image} width={146} height={84} alt="" />
                <h3 className={styles.main__government__title_sm}>
                  <Link href={list.slug}>
                    <a>
                      {list.title} <Icon icon="icon-chevron-right" size="18" />
                    </a>
                  </Link>
                </h3>
              </li>
            ))}
            <ScrollTop />
          </div>
        </div>

        {/* <div className={styles.main__section__bottom}>
          <h3 className={styles.main__government__titlebox}>
            <Link href={banner.slug}>
              <a>{banner.title} </a>
            </Link>
          </h3>
        </div> */}
      </div>
    </Layout>
  );
}

export async function getServerSideProps() {
  const data = homeDB;

  return {
    props: {
      homeList: data[0],
      homeLists: data.filter((list) => list.id != 1 && list.id != 6),
      // banner: data[5],
    },
  };
}

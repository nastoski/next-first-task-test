import HeroHeader from "@/components/HeroHeader";
import Image from "next/image";
import Layout from "@/components/Layout";
import styles from "@/styles/ServiceInfoPage.module.css";
import { Hyperlink, Paragraph, Icon, Button } from "dpc-components-library";

export default function ServiceInfoPage({ subcategories }) {
  const heroProps = {
    locate2: "Browse all information and services",
    locate3: "",
  };

  return (
    <Layout title={`${subcategories.title} | Western Australian Government`}>
      <HeroHeader
        heading={subcategories.title}
        content={subcategories.description}
        locate={heroProps.locate2}
        locate2={subcategories.title}
        link="/service"
      />
      <div className={styles.container}>
        <div className={styles.container__main}>
          {/* Services Info List */}
          {subcategories.serviceinfo.map((serv, index) => (
            <div key={index} className={styles.container__main_list}>
              <div className={styles.list__serviceintention}>
                {serv.serviceintention === "apply" ? (
                  <Image
                    src="/images/apply.png"
                    width={70}
                    height={78}
                    alt=""
                  />
                ) : (
                  <Image src="/images/info.png" width={70} height={78} alt="" />
                )}
              </div>
              <div className={styles.list__content}>
                <h2>
                  {serv.title}
                  <Icon icon="icon-chevron-right" size="20" />
                </h2>
                <Paragraph>{serv.description}</Paragraph>
                <Hyperlink>{serv.category}</Hyperlink>
              </div>
            </div>
          ))}

          {/*  */}
        </div>
        <div className={styles.container__sidebar}>
          <h4>
            Consult services offered by local governments or the Federal
            Government
          </h4>
          <Paragraph>
            If you have not found the information or service you are looking
            for, you may wish to consult local governments or the Federal
            Government.
          </Paragraph>
          <Button size="large">Consult the Federal Government website</Button>
          <Button size="large">Consult MyCouncil</Button>
        </div>
      </div>
    </Layout>
  );
}

export async function getStaticPaths() {
  const paths = [];

  const res = await fetch(`${process.env.API_URL}/api/services`);
  const services = await res.json();

  const categories = services.map((serv) => serv.slug);
  const subcategories = services.map((serv) =>
    serv.subcategories.map((sub) => sub.slug2)
  );

  categories.forEach((category, index) => {
    subcategories[index].map((subcategory) => {
      const data = {
        params: {
          category: category,
          subcategory: subcategory,
        },
      };
      paths.push(data);
    });
  });

  return {
    paths,
    fallback: false,
  };
}

export async function getStaticProps({ params }) {
  const res = await fetch(`${process.env.API_URL}/api/services`);
  const services = await res.json();

  const category = params?.category;
  const subcategory = params?.subcategory;

  const categoryObj = services.find((data) => data.slug === category);
  const item = categoryObj.subcategories.find(
    (data) => data.slug2 === subcategory
  );
  return {
    props: { subcategories: item },
    revalidate: 1,
  };
}

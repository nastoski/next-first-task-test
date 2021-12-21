import HeroHeader from "@/components/HeroHeader";
import servicesDB from "../../../db/services";
import Layout from "@/components/Layout";
import styles from "@/styles/ServiceDetail.module.css";
import { useRouter } from "next/router";
import ServiceItem from "@/components/ServiceItem";
import { Icon } from "dpc-components-library";

export default function ServiceDetail({ service }) {
  const heroProps = {
    locate2: "Browse all information and services",
  };

  const router = useRouter();

  const serviceInfo = service.subcategories.map((serv) => serv);

  const serviceInfoData = serviceInfo.map((data) => data.serviceinfo);

  const servData = [];

  serviceInfoData.forEach((data) => {
    data.forEach((serv) => {
      servData.push(serv);
    });
  });

  return (
    <Layout
      title={`${service.title} | Western Australian Government`}
      description={service.description}
    >
      <HeroHeader
        heading={service.title}
        content={service.description}
        locate={heroProps.locate2}
        locate2={service.title}
        link="/service"
      />
      <div className={styles.main}>
        <div className={styles.main_container}>
          <div className={styles.services_container}>
            <div className={styles.services_title}>
              <h2>Popular Services</h2>
            </div>
            <div className={styles.services_content}>
              {/*  */}
              {servData.slice(3, 14).map((serv, index) => (
                <div key={index} className={styles.content_card}>
                  <h2>
                    <a>{serv.title}</a>
                    <Icon icon="icon-chevron-right" size={15} />
                  </h2>
                </div>
              ))}
              {/*  */}
            </div>
          </div>
        </div>
      </div>
      <div className={styles.subcategories}>
        <div className={styles.sub_header}>
          <h1>{service.title} subcategories</h1>
        </div>
        <div className={styles.sub_main}>
          {service.subcategories.map((serv, index) => (
            <ServiceItem
              key={index}
              slug={router.query.category}
              slug2={serv.slug2}
              title={serv.title}
              description={serv.description}
              size={20}
              serviceinfo={serv.serviceinfo}
            />
          ))}
        </div>
      </div>
    </Layout>
  );
}

export async function getStaticPaths() {
  const services = servicesDB;

  const paths = services.map((serv) => ({
    params: { category: serv.slug },
  }));

  return {
    paths,
    fallback: false,
  };
}

export async function getStaticProps({ params }) {
  const services = servicesDB;

  const category = params?.category;
  const item = services.find((data) => data.slug === category);

  return { props: { service: item }, revalidate: 1 };
}

// import HeroHeader from "@/components/HeroHeader";
import Layout from "@/components/Layout";
import HeroHeader from "@/components/HeroHeader";
import styles from "@/styles/Services.module.css";
import ServiceItem from "@/components/ServiceItem";

const ServicePage = ({ services }) => {
  const HeroProps = {
    locate: "Browse all information and services",
    heading: "Browse all information and services",
    content:
      "Browse the following subject categories to find government information and services.",
  };
  return (
    <Layout
      title="Browse all information and services"
      description="Browse the following subject categories to find government information and services."
    >
      <HeroHeader
        locate={HeroProps.locate}
        heading={HeroProps.heading}
        content={HeroProps.content}
      />

      <div className={styles.main}>
        <div className={styles.card}>
          {/*  */}
          {services.map((data, index) => (
            <ServiceItem
              key={index}
              slug={data.slug}
              title={data.title}
              description={data.description}
              size={25}
              slug2=""
            />
          ))}
          {/*  */}
        </div>
      </div>
    </Layout>
  );
};
export default ServicePage;

export async function getStaticProps() {
  const res = await fetch(`${process.env.API_URL}/api/services`);
  const services = await res.json();

  return {
    props: { services },
    revalidate: 1,
  };
}

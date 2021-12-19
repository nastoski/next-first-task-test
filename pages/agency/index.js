import Layout from "@/components/Layout";
import HeroHeader from "@/components/HeroHeader";
import styles from "@/styles/Agency.module.css";
import AccordionComponent from "@/components/Accordion";

export default function AgencyPage({ data }) {
  const HeroProps = {
    locate: "Find an agency",
    heading: "Find and agency",
    content: "An A-Z listing of Western Australian Government agencies.",
  };

  return (
    <Layout>
      <HeroHeader
        locate={HeroProps.locate}
        heading={HeroProps.heading}
        content={HeroProps.content}
      />
      <div className={styles.main}>
        <div className={styles.main__top}>
          <div className={styles.main__top__content}>
            <form action="#" acceptCharset="UTF-8">
              <div className={styles.main__form__item}>
                <label htmlFor="main__selector">
                  Skip agencies beginning with letter
                </label>
                <div className={styles.main__select__container}>
                  <select id="main__selector">
                    <option value selected="selected">
                      - Select -
                    </option>
                    <option value="A">A</option>
                    <option value="B">B</option>
                    <option value="C">C</option>
                  </select>
                </div>
              </div>
            </form>
          </div>
        </div>
        <div className={styles.accordion__content}>
          {data.map((content) => (
            <AccordionComponent
              id={content.title}
              title={content.title}
              about={content.about}
              address={content.address}
              location={content.location}
              phone={content.phone}
              email={content.email}
              service={content.service}
              serviceWeb={content.serviceWeb}
              minister={content.minister}
            />
          ))}
        </div>
      </div>
    </Layout>
  );
}

export async function getStaticProps() {
  const res = await fetch("http://localhost:3000/api/agency");
  const agency = await res.json();

  return {
    props: { data: agency },
  };
}

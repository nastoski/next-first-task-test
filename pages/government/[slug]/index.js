import DocumentCard from "@/components/DocumentCard";
import Link from "next/link";
import HeroHeader from "@/components/HeroHeader";
import Layout from "@/components/Layout";
import styles from "@/styles/GovernmentDetails.module.css";
import { InfoCard, Paragraph, Heading, Button } from "dpc-components-library";

export default function GovernmentDetails({ gov }) {
  return (
    <Layout title={gov.title} description={gov.description}>
      <HeroHeader
        link="/government"
        locate="WA Government"
        heading="COVID-19 coronavirus"
        content="Information and advice on the COVID-19 coronavirus for the community and businesses in Western Australia."
      />
      <div className={styles.main}>
        <div className={styles.main__container}>
          <div className={styles.main__container_description}>
            <div dangerouslySetInnerHTML={{ __html: `${gov.info}` }}></div>
          </div>
          <div className={styles.main__container_cards}>
            {gov.subcategories.map((government) => (
              <InfoCard
                key={government.title}
                description={government.description}
                imageUrl={government.image}
                title={government.title}
              />
            ))}
          </div>
          <div className={styles.main__container_info}>
            {
              (gov.announcements = [] ? (
                <Paragraph type="default">
                  This information is subject to change frequently.
                </Paragraph>
              ) : (
                "Map announcements, DONT FORGETTTTTTTTTTT READ THIS!!!"
              ))
            }
          </div>
          <div className={styles.main__container_publications}>
            <Heading level={2}>Publications</Heading>
            <div className={styles.main__publications}>
              {gov.publications.map((pub, index) => (
                <DocumentCard
                  key={index}
                  title={pub.title}
                  docxDescription={pub.docx_description}
                  pdfDescription={pub.pdf_description}
                  docx={pub.docx}
                  pdf={pub.pdf}
                />
              ))}
              <div className={styles.main__publications_btn}>
                <Button>Browse more publications</Button>
              </div>
            </div>
          </div>
          <div className={styles.main__container_provided}>
            <div>
              <Heading level={2}>Provided By</Heading>
              <div className={styles.main__container_link}>
                <Link href="#0">
                  <a>{gov.provided}</a>
                </Link>
              </div>
            </div>
            {gov.contact ? (
              <div className={styles.main__container_contact}>
                <Heading level={2}>Contact</Heading>
                <div className={styles.main__contact_container}>
                  <div className={styles.main__contact_info}>
                    <h4>Telephone:</h4>
                    <p>13COVID ({gov.contact.covid})</p>
                    <p> Interstate Callers: ({gov.contact.interstate}) </p>
                    <p>International Callers: ({gov.contact.international})</p>
                  </div>
                </div>
              </div>
            ) : (
              <p></p>
            )}
          </div>
          <div className={styles.review}>
            <p>Page reviewed 19 November 2021</p>
          </div>
        </div>
      </div>
    </Layout>
  );
}

export async function getServerSideProps({ query: { slug } }) {
  const res = await fetch(`${process.env.API_URL}/api/government/${slug}`);
  const government = await res.json();

  return {
    props: { gov: government[0] },
  };
}

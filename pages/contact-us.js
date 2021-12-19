import HeroHeader from "@/components/HeroHeader";
import Layout from "@/components/Layout";
import styles from "@/styles/Government.module.css";
import { Paragraph } from "dpc-components-library";

export default function ContactPage() {
  return (
    <Layout>
      <HeroHeader
        locate="Contact us"
        heading="Contact us"
        content="Find contact details for Western Australian Government agencies."
      />
      <div className={styles.main}>
        <h1>Find contact details for government organisations</h1>
        <Paragraph>
          The information on this website is brought together from a range of
          government agencies. Wherever possible, we have included the contact
          details relating to the services and information on the content page.
        </Paragraph>
        <Paragraph>To find out more about our services, you can </Paragraph>
        <ul>
          <li>
            view the full list of Western Australian Government information and
            services
          </li>
          <li>
            contact the relevant agency. Find contact details for Western
            Australian Government departments and agencies.
          </li>
        </ul>
        <h1>Find Jobs WA contact details</h1>
        <ul>
          <li>
            For technical enquiries relating to the Jobs WA website email
            ramshelpdesk@bigredsky.com
          </li>
          <li>
            For enquiries relating to an application contact the relevant
            contact officer provided in the job advertisement. These include
            status of your application, late application or enquiries specific
            to a role.
          </li>
        </ul>
        <h1>Help us improve our site</h1>
        <Paragraph>
          The feedback you provide us will be used to improve the user
          experience of the website.
        </Paragraph>
        <Paragraph>
          We are interested to know which information you found most useful and
          why, and what other type of information you would like to see featured
          on this website.
        </Paragraph>
        <Paragraph>Please use the Enquiry / Feedback button to:</Paragraph>
        <ul>
          <li>submit general enquiries about the features of this site</li>
          <li>send comments and suggestions on how we can improve this site</li>
          <li>report any accessibility issues related to this site</li>
          <li>to make a complaint about this site.</li>
        </ul>
        <Paragraph>
          Issues raised are kept confidential and discussed only with the people
          who need to be involved. Any information submitted using this form
          will be used in line with the website's privacy statement.
        </Paragraph>
        <Paragraph>Don't use this form to:</Paragraph>
        <ul>
          <li>report any matter you consider to be urgent, or</li>
          <li>for any request for information or advice.</li>
        </ul>
        <h2>How to complain about a government product or service</h2>
        <Paragraph>
          The Ombudsman Western Australia investigates complaints about Western
          Australian public authorities: State Government departments, agencies
          and boards; government services such as hospitals, prisons, schools
          and technical colleges; public universities; and local governments.
          Further information about the complaints process is available on the
          Ombudsman Western Australia website. You can also call them directly
          for assistance on 61 8 9220 7555 or send an email to the Ombudsman
          Western Australia.
        </Paragraph>
        <span>Page reviewed 25 September 2020</span>
      </div>
    </Layout>
  );
}

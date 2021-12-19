import HeroHeader from "@/components/HeroHeader";
import Layout from "@/components/Layout";
import styles from "@/styles/Government.module.css";

export default function GovernmentPage() {
  return (
    <Layout
      title="About WA Government | Western Australian Government"
      description="Discover a range of information about the Government of Western Australia."
    >
      <HeroHeader
        locate="About WA Government"
        link="/government"
        heading="About WA Government"
        content="Discover a range of information about the Government of Western Australia."
      />

      <div className={styles.main}>
        <h1>How government works</h1>
        <h2>The Government</h2>
        <p>
          Government (or Executive Government as it is formally known) in
          Western Australia includes the Cabinet, the Executive Council and the
          Public Sector. You can search for a Minister by name or portfolio on
          this site or{" "}
          <a href="#">download the full list of Cabinet members.</a>
          <br />
        </p>
        <p>
          While Western Australia's constitutional laws provide for{" "}
          <a href="#">the Governor to act as Head of State</a>, most of the
          Governor's constitutional powers are exercised on advice from
          Government Ministers, principally the Premier.
        </p>
        <h2>Parliament</h2>
        <p>
          Parliament sitting dates, detailed transcripts of Parliamentary
          business (Hansard), members and committees, bills, statutes and facts
          about the Parliamentary process can be found on the{" "}
          <a href="#">Western Australian Parliament website.</a>
        </p>
        <h2>The public sector</h2>
        <p>
          The Western Australian public sector is a diverse group of
          approximately 130 employing agencies working to deliver services to
          the community. Opportunities to work with or join the public sector
          can be found by searching for:
        </p>
        <ul>
          <li>
            <a href="#">
              vacancies on the Western Australian Government Jobs Board
            </a>
          </li>
          <li>
            current <a href="#">Western Australian tenders and contracts</a>
          </li>
        </ul>
        <h1>Accessing whole of government information</h1>
        <p>
          Below are some quick links to popular whole of government information
          sources.
        </p>
        <h2>State finances</h2>
        <p>
          <a href="#">The State Budget</a> website includes both the current
          budget and previous years' budget information and{" "}
          <a href="#"> fact sheets on significant budget issues.</a>
        </p>
        <h2>Data</h2>
        <p>
          On the <a href="#">Western Australian Government data portal</a> you
          can easily find, review and use open data and information - for
          example, to develop web applications.
        </p>
        <h2>Media statements</h2>
        <p>
          You can find out the latest ministerial announcements by viewing{" "}
          <a href="#">current and archived media statements</a> by minister,
          portfolio or region.
        </p>
        <h2>Western Australian legislation</h2>
        <p>
          The State Law Publisher is the official publisher of Western
          Australian legislation and statutory information, such as acts,
          legislation and bills. To purchase hard copy official versions of
          legislation you can <a href="#">visit the State Law Publisher</a>{" "}
          website for payment options.
        </p>
        <p>
          Free online access to legislation is provided at
          <a href="#">www.legislation.wa.gov.au</a>.
        </p>
        <p>
          Details about <a href="#">Bills</a> (a draft law / proposed Act of
          Parliament) are found on the <a href="#">WA Parliament website</a>.
        </p>
        <h2>Freedom of information</h2>
        <p>
          Freedom of information gives the public a right to access government
          documents, subject to some limitations. Government agencies must help
          people to obtain access to documents at the lowest reasonable cost.
          The types of information you can request include paper records, plans
          and drawings, photographs, tape recordings, films, videotapes or
          information stored in a computerised form. Government agencies must
          help people to obtain access to documents at the lowest reasonable
          cost.
        </p>
        <p>
          The Office of the Information Commissioner can provide{" "}
          <a href="#">
            further help on submitting a freedom of information request
          </a>
          .
        </p>
        <h2>Grants and other assistance programs</h2>
        <p>
          The Department of Local Government, Sport and Cultural Industries
          provides ongoing funding and one-off grants to non-government
          organisations and community groups through Western Australia. You can
          visit the{" "}
          <a href="#">
            Department of Local Government, Sport and Cultural Industries
            website
          </a>{" "}
          for more information on funded service areas, guidelines and
          application forms.
        </p>
        <h2>Contact government</h2>
        <p>
          If you wish to get in touch with the Premier, ministers, parliamentary
          secretaries, members of parliament or your local member, you may find
          the following resources helpful:
        </p>
        <ul>
          <li>
            <a href="#">
              listing of the Premier of Western Australian and Cabinet Ministers
            </a>
          </li>
          <li>
            details of the current{" "}
            <a href="#">Ministers and Parliamentary Secretaries</a>
          </li>
          <li>
            <a href="#">listing of all current members of Parliament</a>
          </li>
        </ul>
        <h2>Local and Federal Government information</h2>
        <p>
          Some information and services may be provided by either local
          governments or the Federal Government. You can search for this
          information using the:
        </p>
        <ul>
          <li>
            <a href="#">Local Government Directory</a>
          </li>
          <li>
            <a href="#">Australian Federal Government website</a>
          </li>
        </ul>
        <span>Page reviewed 21 October 2021</span>
      </div>
    </Layout>
  );
}

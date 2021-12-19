import Head from "next/head";
import Link from "next/link";
import { Footer, Header } from "dpc-components-library";

export default function Layout({ title, description, children }) {
  return (
    <div>
      <Head>
        <title>{title}</title>
        <meta name="description" content={description} />
      </Head>
      <Header
        authMenu={{
          children: [],
          href: "",
          title: "Welcome <strong>Bojan</strong>",
        }}
        bottomNavLinks={[
          {
            href: "/service",
            id: "1-1",
            order: 1,
            title: "Services",
          },
          {
            href: "/agency",
            id: "1-2",
            order: 2,
            title: "Find an agency",
          },
          {
            href: "/government",
            id: "1-3",
            order: 3,
            title: "WA Government",
          },
        ]}
        cartItems={{
          shoppingItemsCount: 3,
          visible: true,
        }}
        isUserAuthenticated
        logoSrc="https://dev.citizen.service.digital.wa.gov.au/dashboard/icons/myWA-logo.svg"
        notifications={{
          notificationCount: 7,
          visible: true,
        }}
        search={{
          isVisible: true,
          onChange: function noRefCheck() {},
          onSubmit: function noRefCheck() {},
        }}
        topNavLinks={[
          {
            href: "/",
            id: "1-1",
            order: 1,
            title: "Accessibility",
          },
          {
            href: "/",
            id: "2-1",
            order: 2,
            title: "Contact us",
          },
        ]}
      />

      <div>{children}</div>
      <Footer
        copyright="© Government of Western Australia 2017 to 2021"
        description="The Government of Western Australia acknowledges the traditional custodians throughout Western Australia and their continuing connection to the land, waters and community. We pay our respects to all members of the Aboriginal communities and their cultures; and to Elders both past and present."
        header="Acknowledgement of Country"
        links={[
          <a key='1' href="#" rel="noopener noreferrer">
            Copyright
          </a>,
          <a key='2' href="#" rel="noopener noreferrer">
            Disclaimer
          </a>,
          <a key='3' href="#" rel="noopener noreferrer">
            Privacy
          </a>,
          <a key='4' href="#" rel="noopener noreferrer">
            About this website
          </a>,
        ]}
      />
    </div>
  );
}

Layout.defaultProps = {
  title: "Home | Western Australian Government",
  description:
    "Find and access WA Government online services and information quickly and easily.",
};

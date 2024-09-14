import Breadcrumb from "@/components/Common/Breadcrumb";
import Contact from "@/components/Contact";

import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact Page ",
  description: "This is Contact Page ",
  // other metadata
};

const ContactPage = () => {
  return (
    <>
      <Breadcrumb
        pageName="Contact Page"
        description="Get in touch with us today and let's transform your ideas into success stories. Your online excellence starts here with CodeNDevelop."
      />

      <Contact />
    </>
  );
};

export default ContactPage;

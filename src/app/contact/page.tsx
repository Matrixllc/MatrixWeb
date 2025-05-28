import Breadcrumb from "@/components/Common/Breadcrumb";
import Contact from "@/components/Contact";

import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact Page | Free Next.js Template for Startup and SaaS",
  description: "This is Contact Page for Startup Nextjs Template",
  // other metadata
};

const ContactPage = () => {
  return (
    <>
        <Breadcrumb
            pageName="Contact Us"
            description="We’re here to support you at every step of your journey. Whether you’re developing for Android, HarmonyOS, iOS, or Web, or integrating AI-driven technologies,
            our team is dedicated to providing the care and expertise you need. Reach out anytime
            – we’re always ready to help.     EMERGENCY TALK TO matrixtechcn@gmail.com  THANKS : )"
        />

        <Contact />
    </>
  );
};

export default ContactPage;

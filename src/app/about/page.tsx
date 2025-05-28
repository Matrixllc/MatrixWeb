import AboutSectionOne from "@/components/About/AboutSectionOne";
import AboutSectionTwo from "@/components/About/AboutSectionTwo";
import Breadcrumb from "@/components/Common/Breadcrumb";

import { Metadata } from "next";

export const metadata: Metadata = {
  title: "About Page | Free Next.js Template for Startup and SaaS",
  description: "This is About Page for Startup Nextjs Template",
  // other metadata
};

const AboutPage = () => {
  return (
    <>
        <Breadcrumb
            pageName="About Us"
            description="Our team is made up of bright new graduates from prestigious institutions like Rice University, UC Berkeley, UCLA, and NYC. Leading our projects are seasoned experts with experience from Amazon, Google, and Meta. Together, we combine fresh perspectives with industry-leading expertise to deliver innovative, AI-powered solutions across Android, HarmonyOS, iOS, and Web platforms."
        />

        <AboutSectionOne />
      <AboutSectionTwo />
    </>
  );
};

export default AboutPage;

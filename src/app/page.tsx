import AboutSectionTwo from "@/components/About/AboutSectionTwo";
import ScrollUp from "@/components/Common/ScrollUp";
import Contact from "@/components/Contact";
import Features from "@/components/Features";
import Hero from "@/components/Hero";
import Pricing from "@/components/Pricing";
import Process from "@/components/Process";
import Testimonials from "@/components/Testimonials";
import Video from "@/components/Video";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Tech Solutions for Apps, Web, and AI Workflows",
  description:
    "Cross-platform app development, modern web platforms, AI-assisted workflows, and integration support for growing teams.",
};

export default function Home() {
  return (
    <>
      <ScrollUp />
      <Hero />
      <Features />
      <Video />
      <AboutSectionTwo />
      <Process />
      <Testimonials />
      <Pricing />
      <Contact />
    </>
  );
}

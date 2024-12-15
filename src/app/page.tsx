import AboutSectionOne from "@/components/About/AboutSectionOne";
import AboutSectionTwo from "@/components/About/AboutSectionTwo";
import Blog from "@/components/Blog";
import Brands from "@/components/Brands";
import ScrollUp from "@/components/Common/ScrollUp";
import Contact from "@/components/Contact";
import Features from "@/components/Features";
import Hero from "@/components/Hero";
import Pricing from "@/components/Pricing";
import Testimonials from "@/components/Testimonials";
import Video from "@/components/Video";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "codendevelop",
  description: "Build your startup with our complete product solution. From design and development to deployment, we cover every step of your launch journey.",
  keywords: "startup solutions, MERN stack development, React development, Next.js development, AWS cloud services, Azure cloud services, web development services, product design, product deployment, modern technology, modern design, modern development, modern deployment, codendevelop, coden develop codendevelop youtube, codendevelop twitter, codendevelop linkedin, codendevelop github, codendevelop instagram, codendevelop facebook, cnd, cnd youtube, cnd twitter, cnd linkedin, cnd github, cnd instagram, cnd facebook, cnd, learn c++, learn python, learn javascript, learn react, learn next.js, learn aws, learn azure, learn web development, learn product design, learn product deployment, learn modern technology, learn modern design, learn modern development, learn modern deployment, learn codendevelop, learn cnd, need mern stack developer, need react developer, need next.js developer, need aws cloud services, need azure cloud services, need web development services, need product design, need product deployment, need modern technology, need modern design, need modern development, need modern deployment, need codendevelop, need cnd, codendevelop blog, cnd blog, codendevelop contact, cnd contact, codendevelop pricing, cnd pricing, codendevelop testimonials, cnd testimonials, codendevelop about, cnd about, codendevelop features, cnd features, codendevelop video, cnd video, codendevelop brands, cnd brands, codendevelop hero, cnd hero, codendevelop home, cnd home, cnd kota, cnd development services, codendevelop.in, codendevelop india, coding, development, programming, codendevelop services, cnd services, codendevelop solutions, cnd solutions, codendevelop products, cnd products, codendevelop projects, cnd projects, codendevelop portfolio, cnd portfolio, codendevelop team, cnd team, codendevelop careers, cnd careers, codendevelop jobs, cnd jobs, codendevelop hire, cnd hire, codendevelop work, cnd work, codendevelop clients, cnd clients, codendevelop partners, cnd partners, codendevelop testimonials, cnd testimonials, codendevelop faq, cnd faq, codendevelop privacy policy, cnd privacy policy, codendevelop terms of service, cnd terms of service, codendevelop sitemap, cnd sitemap, codendevelop blog, cnd blog, codendevelop contact, cnd contact, codendevelop pricing, cnd pricing, codendevelop testimonials, cnd testimonials, codendevelop about, cnd about, codendevelop features, cnd features, codendevelop video, cnd video, codendevelop brands, cnd brands, codendevelop hero, cnd hero, codendevelop home, cnd home, codendevelop kota, cnd kota, codendevelop development services, cnd development services, codendevelop services, cnd services, codendevelop solutions, cnd solutions, codendevelop products, cnd products, codendevelop projects, cnd projects, codendevelop portfolio, cnd portfolio, codendevelop team, cnd team, codendevelop careers, cnd careers, codendevelop jobs, cnd jobs, codendevelop hire, cnd hire, codendevelop work, cnd work, codendevelop clients, cnd clients, codendevelop partners, cnd partners, codendevelop testimonials, cnd testimonials, codendevelop faq, cnd faq, codendevelop privacy policy, cnd privacy policy, codendevelop terms of service, cnd terms of service, codendevelop sitemap, cnd sitemap, codendevelop blog, cnd blog, codendevelop contact, cnd contact, codendevelop pricing, cnd pricing, codendevelop testimonials, cnd testimonials, codendevelop about, cnd about, codendevelop features, cnd features, codendevelop video, cnd, video, codendevelop brands, cnd brands, codendevelop hero, cnd hero, codendevelop home, cnd home, codendevelop kota, cnd kota, codendevelop development services, cnd development services, codendevelop services, cnd services, codendevelop solutions, cnd solutions, codendevelop products, cnd products, codendevelop projects, cnd projects, codendevelop portfolio, cnd portfolio, codendevelop team, cnd team, codendevelop careers, cnd careers, codendevelop jobs, cnd jobs, codendevelop hire, cnd hire, codendevelop work, cnd work, codendevelop clients, cnd clients, codendevelop partners, cnd partners, codendevelop testimonials, cnd testimonials, codendevelop faq, cnd faq, codendevelop privacy policy, cnd privacy policy, codendevelop terms of service, cnd terms of service, codendevelop sitemap, cnd sitemap, codendevelop blog, cnd blog, codendevelop contact, cnd contact, codendevelop pricing, cnd pricing, codendevelop testimonials, cnd testimonials, codendevelop about, cnd about, codendevelop features, cnd features, codendevelop video, cnd video, codendevelop brands, cnd brands, codendevelop hero, cnd hero, codendevelop home, cnd home, codendevelop kota, cnd kota, codendevelop development services, cnd development services, codendevelop services, cnd services, codendevelop solutions, cnd solutions, codendevelop products, cnd products, codendevelop projects, cnd projects, codendevelop portfolio, cnd portfolio, codendevelop team, cnd team, codendevelop careers, cnd careers, codendevelop jobs, cnd jobs, codendevelop hire, cnd hire, codendevelop work, cnd work, codendevelop clients, cnd clients, codendevelop partners, cnd partners, codendevelop testimonials, cnd testimonials, codendevelop faq, cnd faq, codendevelop privacy policy, cnd privacy policy, codendevelop terms of service, cnd terms of service, codendevelop sitemap, cnd sitemap, codendevelop blog, cnd blog, codendevelop projects ",
};

export default function Home() {
  return (
    <>
      <ScrollUp />
      <Hero />
      <Features />
      <Video />
      <Brands />
      <AboutSectionOne />
      <AboutSectionTwo />
      <Testimonials />
      <Pricing />
      <Blog />
      <Contact />
    </>
  );
}

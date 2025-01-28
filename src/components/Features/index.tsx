import SectionTitle from "../Common/SectionTitle";
import SingleFeature from "./SingleFeature";
import featuresData from "./featuresData";
import Head from "next/head";

const Features = () => {
  <Head>
  <title>Codendevelop</title>
  <meta name="description" content="Codendevelop specializes in providing cutting-edge web development and startup solutions tailored to meet the needs of businesses of all sizes. Our services include web design, application development, and digital solutions that drive product launches and enhance business operations. With a strong focus on scalable, user-centric, and innovative solutions, we deliver customized software and IT services designed to help startups accelerate growth and achieve their goals.

From building responsive websites and cloud-based platforms to creating MVPs and delivering seamless integrations, Codendevelop ensures a high-quality experience for every client. Our expertise spans full-stack development, mobile apps, UI/UX design, e-commerce platforms, and agile project management. We empower businesses with the tools needed to thrive in competitive markets by providing digital transformation, DevOps support, and data-driven solutions.

Codendevelop is your partner in bringing ideas to life, from concept to launch, ensuring your product is built for success. Whether you’re looking for software innovation, enterprise-grade solutions, or expert consulting, Codendevelop delivers unmatched value, reliability, and innovation.
" />
  <meta name="keywords" content="codendevelop, codendevelop services, codendevelop, web development, startup solutions, product launch, codendevelop,codendevelop services, codendevelop, codendevelop, codendevelop,codendevelop, codendevelop services, web development, startup solutions, product launch, software development, app development, website design, website development, e-commerce solutions, UI/UX design, digital transformation, cloud services, SaaS solutions, startup consulting, MVP development, agile development, full-stack development, backend development, frontend development, mobile app development, web application development, business solutions, scalable solutions, enterprise software, CMS development, software consulting, technology solutions, digital marketing, SEO services, branding services, product design, software integration, IT solutions, software engineering, custom software, software support, cloud integration, startup growth, project management, IT consulting, responsive web design, cross-platform development, mobile-first design, digital strategy, application design, application deployment, innovation services, tech solutions, coding services, programming solutions, database management, API development, AI integration, machine learning solutions, startup roadmap, user-centric design, tech consultancy, agile solutions, tech innovation, startup ecosystems, DevOps services, product scaling, business automation, data analytics, software testing, quality assurance, system architecture, custom coding, app prototyping, cloud computing, digital innovation, technology upgrades, UI design, UX strategy, backend architecture, product engineering, app modernization, responsive design, cloud-based development, platform development, user engagement, data-driven solutions, custom frameworks, modern design, startup acceleration, go-to-market strategy, web-based applications, software innovation, business optimization, startup tech partner, and cloud-native development,codendevelop software services, codendevelop software engineering, codendevelop mern stack app, codendevelop kota rajasthan, codendevelop tutorials, codendevelop education, codendevelop india, codendevelop AI,codendevelop tech, codendevelop.in, codendevelop.com, codendevelop youtube, codendevelop instagram, codedevelop webstie, codendevelop ecommerce, codendevelop linkedin, codendevelop github, codendevelop projects, codendevelop clients, codendevelop technology, codendevelop web,codendevelop agency, codendevelop cse, kota rajasthan, software solutions in kota rajasthan, startup in kota rajasthan " />
  <meta name="author" content="Your Name" />
  <meta property="og:image" content="/og-image.png" />
</Head>
  return (
    <>
      <section id="features" className="py-16 md:py-20 lg:py-28">
        <div className="container">
          <SectionTitle
            title="Main Features"
            paragraph="CodeNdevelop is your one-stop shop for building a successful startup. We provide everything you need from idea validation to product launch and beyond."
            center
          />

          <div className="grid grid-cols-1 gap-x-8 gap-y-14 md:grid-cols-2 lg:grid-cols-3">
            {featuresData.map((feature) => (
              <SingleFeature key={feature.id} feature={feature} />
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default Features;

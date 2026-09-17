import Head from "next/head";
import Header from "../components/Header";
import Hero from "../components/Hero";
import About from "../components/About";
import Services from "../components/Services";
import Gallery from "../components/Gallery";
import BookingForm from "../components/BookingForm";
import Contact from "../components/Contact";
import Footer from "../components/Footer";
import { siteConfig } from "../lib/site-config";

export default function Home() {
  return (
    <>
      <Head>
        <title>{siteConfig.labName} — Diagnostics in Watrap</title>
      </Head>
      <Header />
      <Hero />
      <About />
      <Services />
      <Gallery />
      <BookingForm />
      <Contact />
      <Footer />
    </>
  );
}

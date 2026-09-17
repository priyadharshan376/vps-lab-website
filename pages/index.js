import Head from "next/head";
import Layout from "../components/Layout";
import Hero from "../components/Hero";
import WhyChooseUs from "../components/WhyChooseUs";
import ServicesTeaser from "../components/ServicesTeaser";
import CtaBanner from "../components/CtaBanner";
import { siteConfig } from "../lib/site-config";

export default function Home() {
  return (
    <Layout>
      <Head>
        <title>{siteConfig.labName} — Diagnostics in Watrap</title>
      </Head>
      <Hero />
      <WhyChooseUs />
      <ServicesTeaser />
      <CtaBanner />
    </Layout>
  );
}

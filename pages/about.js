import Head from "next/head";
import Layout from "../components/Layout";
import About from "../components/About";
import Gallery from "../components/Gallery";
import { siteConfig } from "../lib/site-config";

export default function AboutPage() {
  return (
    <Layout>
      <Head>
        <title>About — {siteConfig.labName}</title>
      </Head>
      <About />
      <Gallery />
    </Layout>
  );
}

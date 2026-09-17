import Head from "next/head";
import Layout from "../components/Layout";
import Services from "../components/Services";
import CtaBanner from "../components/CtaBanner";
import { siteConfig } from "../lib/site-config";

export default function ServicesPage() {
  return (
    <Layout>
      <Head>
        <title>Tests we offer — {siteConfig.labName}</title>
      </Head>
      <Services />
      <CtaBanner />
    </Layout>
  );
}

import Head from "next/head";
import Layout from "../components/Layout";
import BookingForm from "../components/BookingForm";
import Contact from "../components/Contact";
import { siteConfig } from "../lib/site-config";

export default function ContactPage() {
  return (
    <Layout>
      <Head>
        <title>Book a test / Contact — {siteConfig.labName}</title>
      </Head>
      <BookingForm />
      <Contact />
    </Layout>
  );
}

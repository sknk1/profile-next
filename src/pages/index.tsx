import Head from "next/head";
import { Inter } from "next/font/google";
import Header from "../../components/Header";
import Footer from "../../components/Footer";
import Home from "../../components/Home";
import About from "../../components/About";
import Contact from "../../components/Contact";
import Portofolios from "../../components/Portofolios";

const inter = Inter({ subsets: ["latin"] });

export default function IndexPage() {
  return (
    <>
      <Head>
        <title>Profile Website</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
        <link
          rel="stylesheet"
          href="https://maxst.icons8.com/vue-static/landings/line-awesome/line-awesome/1.3.0/css/line-awesome.min.css"
        ></link>
      </Head>

      <Header />

      <section id="all-content-section" className="mb-14 overflow-hidden">
        {/* Home Section */}
        <section id="home-section" className="relative px-3">
          <Home />
        </section>

        {/* About Section */}
        <section id="about-section" className="px-10 lg:px-20">
          <About />
        </section>

        {/* Contact Section */}
        <section id="contact-section">
          <Contact />
        </section>

        {/* Portofolion Section */}
        <section id="portofolios-section">
          <Portofolios />
        </section>
      </section>

      <Footer />
    </>
  );
}

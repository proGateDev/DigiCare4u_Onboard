import Hero from "@/components/home/Hero";
import Navbar from "@/components/home/Navbar";
import Header from "@/components/home/Header";
import Product from "@/components/home/Product";
import Features from "@/components/home/Features";
import About from "@/components/home/About";
import Partner from "@/components/home/Partner";
import Footer from "@/components/home/Footer";
import Image from "next/image";

export default function Home() {
  return (
    <>
      <Navbar />
      <Hero />
      <Header />
      <Product />
      <Features />
      <About />
      <Partner />
      <Footer />
    </>
  );
}

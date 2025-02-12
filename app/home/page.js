import Header from '@/components/home/Header';
import Product from '@/components/home/Product'
import About from '@/components/home/About'
// import Review from '../component/LandingPage/Review'
import Footer from '@/components/home/Footer'
import Features from '@/components/home/Features'
import Partner from '@/components/home/Partner'
import Hero from '@/components/home/Hero'
import Navbar from '@/components/home/Navbar';


export default function Home() {

  return (
    <>
      <div className="bg-white py-4">
        <Navbar />
        <Hero/>
        <Header />
        <Product />
        <Features/>
        <About />
        <Partner />
        <Footer />
      </div>
    </>
  );
}
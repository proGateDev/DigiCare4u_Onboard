import Header from '@/components/Header';
import Product from '@/components/Product'
import About from '@/components/About'
// import Review from '../component/LandingPage/Review'
import Footer from '@/components/Footer'
import Features from '@/components/Features'
import Partner from '@/components/Partner'
import Hero from '@/components/Hero'
import Navbar from '@/components/Navbar';


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
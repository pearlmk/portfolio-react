import React from "react";
import Aboutpage from "./pages/Aboutpage";
import Resumepage from "./pages/Resumepage";
import Projectpage from "./pages/Projectpage";
import Contactpage from "./pages/contactpage";
import Homepage from "./pages/Homepage";
import Footer from "./componnet/Footer/Footer";
import ScrollToTop from "./componnet/inc/ScrollToTop/ScrollToTop";
import AOS from 'aos';
import 'aos/dist/aos.css';
import { useEffect } from "react";
import Navbar from "./componnet/Navbar/Navbar";



function App() {
  useEffect(() => {
    AOS.init()
   },[])
  return (
    <>
    <Navbar />
    <Homepage />
    <Aboutpage />
    <Resumepage />
    <Projectpage />
    <Contactpage />
    <Footer />
     <div>
      <ScrollToTop />
    </div>
  </>
  );
}

export default App;

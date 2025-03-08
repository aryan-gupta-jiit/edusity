import { useState } from "react";
import Navbar from "./components/Navbar/Navbar";
import Hero from "./components/Hero/Hero";
import Title from "./components/Title/Title";
import Programs from "./components/Programs/Programs";
import About from "./components/About/About";
import Campus from "./components/Campus/Campus";
import Testimoials from "./components/Testimonials/Testimonials";
import Contact from "./components/Contact/Contact";
import Footer from "./components/Footer/Footer";
import VideoPlayer from "./components/VideoPlayer/VideoPlayer";

function App() {
  const [playState, setPlayState] = useState(false);
  return (
    <>
      <Navbar />
      <Hero />
      <main className="container">
        <Title subtitle="OUR PROGRAM" title="What We Offer" />
        <Programs />
        <About setPlayState={setPlayState} />
        <Title subtitle="GALLERY" title="Campus Photos" />
        <Campus />
        <Title subtitle="TESTIMONIALS" title="What Student Says" />
        <Testimoials />
        <Title subtitle="CONTACT US" title="Get in Touch" />
        <Contact />
        <VideoPlayer playState={playState} setPlayState={setPlayState} />
      </main>
      <footer className="container">
        <Footer />
      </footer>
    </>
  );
}

export default App;
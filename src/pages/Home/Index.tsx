import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Skills from "./components/Skills";
import Work from "./components/Work";
import Footer from "./components/Footer";

function Index() {
  return (
    <div className="flex flex-col gap-10">
      <div className="w-full h-screen flex flex-col">
        <Navbar />
        <Hero />
      </div>
      <About />
      <Skills />
      <Work />
      <Footer />
    </div>
  );
}

export default Index;

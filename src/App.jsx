import Header from './pages/header';
import Skills from './pages/skills';
import Projects from './pages/projects';
import Contact from './pages/contactPage';
import Footer from './pages/footer';
import { useEffect } from "react";
import ScrollReveal from "scrollreveal";


function App() {

  useEffect(() => {
     ScrollReveal().reveal(".from-left", {
      distance: "25px",
      origin: "left",
      duration: 1200,
    });

    ScrollReveal().reveal(".from-right", {
      distance: "25px",
      origin: "right",
      duration: 1200,
    });

    ScrollReveal().reveal(".from-top", {
      distance: "10px",
      origin: "top",
      duration: 1200,
    });
  }, [])


  return (
    <>
    <Header/>
    <Skills/>
    <Projects/>
    <Contact/>
    <Footer/>
    </>
  );
}

export default App

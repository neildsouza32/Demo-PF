import Navbar from "./components/Navbar"
import Header from "./components/Header"
import About from "./components/About"
import Projects from "./components/Projects"
// import Services from  "./components/Services"
import Skills from "./components/Skills"
import Contact from "./components/Contact"
import Footer from "./components/Footer"
function App() {
  return (
    <>
     <Navbar/>
     <Header/>
     <About/>
     {/* <Services/> */}
     <Skills/>
     <Projects/>
     <Contact/>
     <Footer/>
    </>
  );
}

export default App;

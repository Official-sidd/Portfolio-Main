import Navbar from "./components/Navbar/Navbar";
import './App.css'
import Intro from "./components/Intro/Intro";
import Services from "./components/MyServices/Services";
import Experience from "./components/Experience/Experience";
import Projects from "./components/MyProjects/Projects";
import Skills from "./components/Skills/Skills";
import Photography from "./components/Photography/Photography";
import Certificates from "./components/CertificatesS/Certificates";
import Contacts from "./components/Contact/Contacts";
import { BrowserRouter } from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
    <div className="App">
      <Navbar/>
      <Intro/>
      <Services/>
      <Experience/>
      <Skills/>
      <Certificates/>
      <Photography/>
      <Projects/>
      <Contacts/>
      {/* <Footer/> */}
    </div>
    </BrowserRouter>
  );
}

export default App;

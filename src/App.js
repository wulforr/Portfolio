import "./App.css";
import Navbar from "./components/Navbar";
import LandingPage from "./components/LandingPage";
import AboutMe from "./components/AboutMe";
import Projects from "./components/Projects";
import Contact from "./components/Contact";

function App() {
  return (
    <div className="App">
      <Navbar />
      <LandingPage />
      <AboutMe />
      <Projects />
      <Contact />
    </div>
  );
}

export default App;

import Header   from "./Header.jsx";
import Footer   from "./Footer.jsx";
import Hero     from "./Hero.jsx";
import Contact  from "./Contact.jsx";
import Skills   from "./Skills.jsx";
import Projects from "./Projects.jsx";

function App() {
  return (
    <>
      <title>Deveros Portfolio</title>
      <Header />
      <div id="hero"><Hero /></div>
      <div className="section-divider" />
      <div id="projects"><Projects /></div>
      <div className="section-divider" />
      <div id="skills"><Skills /></div>
      <div className="section-divider" />
      <div id="contact"><Contact /></div>
      <Footer />
    </>
  );
}

export default App;
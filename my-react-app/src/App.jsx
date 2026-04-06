import Header from "./Header.jsx"
import Footer from "./Footer.jsx"
import Hero from "./Hero.jsx"
import Contact from "./Contact.jsx"
import Skills from "./Skills.jsx"
import Projects from "./Projects.jsx"
function App() {
  return(
    <>
      

 

      <Header/>
      <div id ="hero"><Hero/></div>
      <div id = "projects"><Projects/></div>
      <div id = "skills"><Skills/></div>
      <div id = "contact"><Contact/></div>
      <Footer/>
    </>
  )
}

export default App

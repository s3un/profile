import Navbar from "./Components/navbar";
import Wall from "./Components/wall";
import About from './Components/about'
import Skill from './Components/skill'
import Contact from './Components/contact'
import Footer from './Components/footer'
import Platform from './Components/platform'
import Resume from "./Components/resume"
import Service from "./Components/services"
import Carousel from './Components/temp'

function App() {
  return (
    <div className="App">
      <Navbar />
      {/* <h1>hell no</h1> */}
      <Wall />
      <About />
      <Resume />
      <Skill />
      <Platform />
      <Carousel />
      <Service />
      <Contact />
      <Footer />
     
    </div>
  );
}

export default App;

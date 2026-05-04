import Navbars from "./components/Navbars"
import Hero from "./components/Hero"
import Service  from "./components/Service"
import Footer  from "./components/Footer"
import Contact  from "./components/Contact"
import Destinations from "./components/Destinations"


function App() {
  

  return (
    
   <div className="min-h-screen">
         <Navbars/>
         <Hero/>
         <Destinations/>
         <Service/>
         <Contact/>
         <Footer/>
   </div>
    
  )
}

export default App

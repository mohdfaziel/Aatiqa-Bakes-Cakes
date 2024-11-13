import About from "./Components/About/About"
import Footer from "./Components/Footer/Footer"
import Home from "./Components/Home/Home"
import NavBar from "./Components/NavBar/NavBar"

function App() {
 

  return (
    <div className="overflow-hidden">
      <NavBar/>
      <Home/>
      <About/>
      <Footer/>
    </div>
  )
}

export default App
import React from 'react'
import Navbar from './components/Navbar/Navbar'
import Hero from './components/Hero/Hero'
import About from './components/About/About'
import Activity from './components/Activity/Activity'
import Contact from './components/Contact/Contact'
import Footer from './components/Footer/Footer.JSX'



const App = () => {
  return (
    <div> 
      <Navbar/>
      <Hero/>
      <About/>
      <Activity/>
      <Contact/>
      <Footer/>
    </div>
  )
}

export default App 
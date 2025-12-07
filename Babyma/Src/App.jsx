import React from 'react'
import Navbar from './Projects/Babyma/Components/Navbar'
import Home from './Projects/Babyma/Components/Home'
import About from './Projects/Babyma/Components/About'
import Service from './Projects/Babyma/Components/Service'
import Blog from './Projects/Babyma/Components/Blog'
import Doctors from './Projects/Babyma/Components/Doctors'
import Footer from './Projects/Babyma/Components/Footer'

function App() {
  return (
    <div>
      <Navbar />
      <main>
        <div id='home'>
          <Home />
        </div>
        <div id='service'>
          <Service />
        </div>
        <div id='about'>
          <About />
        </div>
        < div id='blog'>
          <Blog />
        </div>
        <div>
          <Doctors />
        </div>
        <Footer />
      </main>
    </div>
  )
}

export default App
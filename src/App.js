import React from 'react'
import Navbar from './components/nav/Navbar'
import Home from './components/home/Home'
import Pix from './components/pix/Pix'
import Note from './components/Notifications/Note'
import Visitors from './components/visitors/Visitors'
import Ui from './components/ui_presentation/Ui'
import Footer from './components/footer/Footer'

const App = () => {
  return (
    <div>
      <Navbar/>
      <br/><br/><br/><br/><br/><br/><br/><br/><br/>
      <Home/>
      <br/><br/><br/><br/>
      <Pix/>
      <br/><br/><br/><br/>
      <Note/>
      <br/><br/><br/><br/>
      <Ui/>
      <br/><br/><br/><br/>
      <Visitors/>
      <br/><br/><br/><br/>
      <Footer/>
    </div>
  )
}

export default App
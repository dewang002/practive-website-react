import React from 'react'
import Page1 from './components/Page1'
import Nav from './components/Nav'
import CompanieSpnsore from './components/CompanieSpnsore'
import Services from './components/Services'
import WhyWeTheBest from './components/WhyWeTheBest'
import Clientes from './components/Clientes'
import YellowStrip from './components/YellowStrip'
import Blogs from './components/Blogs'

function App() {
  return (
    <div className='h-screen w-full'>
      <Nav/>
      <Page1/>
      <CompanieSpnsore/>
      <Services/>
      <WhyWeTheBest />
      <Clientes />
      <YellowStrip />
      <Blogs/>
    </div>
  )
}

export default App
import React from 'react'
import Page1 from './components/Page1'
import Nav from './components/Nav'
import CompanieSpnsore from './components/CompanieSpnsore'
import Services from './components/Services'
import WhyWeTheBest from './components/WhyWeTheBest'

function App() {
  return (
    <div className='h-screen w-full'>
      <Nav/>
      <Page1/>
      <CompanieSpnsore/>
      <Services/>
      <WhyWeTheBest />
    </div>
  )
}

export default App
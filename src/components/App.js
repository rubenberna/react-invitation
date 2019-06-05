import React from 'react';

import Navbar from './navbar'
import Details from './details'
import FormContainer from './form/FormContainer'
import Footer from './footer'
import './App.scss'

const App = () => {
  return (
    <>
      <Navbar/>
      <Details/>
      <FormContainer/>
      <Footer/>
    </>
  )
}

export default App
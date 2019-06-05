import React from 'react';

import Navbar from './navbar'
import Details from './details'
import Form from './form'
import Footer from './footer'
import './App.scss'

const App = () => {
  return (
    <>
      <Navbar/>
      <Details/>
      <Form/>
      <Footer/>
    </>
  )
}

export default App
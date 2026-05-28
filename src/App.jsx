import { useState } from 'react'
import ProductForm from './components/FormComponent/ProductForm'
import ProductView from './components/ProductsView/ProductView'
import {BrowserRouter,Route,Routes} from "react-router-dom"
import Design from './components/DesignComponent/Design'
import Header from './components/HeaderComponent/Header'
import Footer from './components/FooterComponent/Footer'


function App() {


  return (
    <>
    <BrowserRouter>
    <Header/>
      <Routes>
        <Route path="/" element={<ProductView/>}/>
        <Route path="/addProduct" element={<ProductForm/>}/>
        <Route path="/design" element={<Design/>}/>
      </Routes>
      <Footer></Footer>
    </BrowserRouter>
    </>
  )
}

export default App

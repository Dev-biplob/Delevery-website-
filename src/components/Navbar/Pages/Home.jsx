import React from 'react'
import {  } from "../Style/Home.css";
import Header from './Header';
import Service from './Service';
import Brand from './Brand';
import Map from './Map';
import Calculator from './Calculator';
import Faq from './Faq';
import Footer from './Footer';


const Home = () => {
  return (
    <>
   
      <div className="hero">
      <Header/>
      </div>
      <Service/>
      
      <Brand/>
       <Map/>
       <Calculator/>
       <Faq/>
       <Footer/>
      </>
  )
}

export default Home
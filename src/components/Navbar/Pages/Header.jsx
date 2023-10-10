import React from 'react'
import {  } from "../Style/Header.css";
import { BrowserRouter, Link, Route, Routes } from 'react-router-dom';
import Singup from './Singup';

const Header = () => {
  return (
    <div className='container header-wraper'>
      
    <div className="header-left-content">
        <h1>দেশজুড়ে সবচেয়ে বেশি রাইডার
             ৩৫০০+ ফ্রন্টলাইনার</h1>
       </div>
       <div className="hero-right">
       <h6>বিনামুল্যে সাইন-আপ করুন মাত্র দুই মিনিটে</h6>
   <form action="">
   <input name="phone" type="number" placeholder="ফোন নম্বর" value=""></input>


<a className='btn-1' href=""  >সাইন-আপ করুন</a>
{/* <button className='btn'>সাইন-আপ করুন</button> */}
<p>অথবা,</p>
<h5>মুভমেন্ট স্ট্যাটাস ট্র্যাক করুন</h5>
<input placeholder="পার্সেল আইডি দিন" class="ant-input ant-input-lg" type="text" value=""></input>
<a className='btn-1' href=""> ট্র্যাক</a>
   </form>
        
       </div>
        </div>
  )
}

export default Header
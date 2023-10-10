import React from 'react'
import {  } from "../Style/Map.css";
import map from "../../../assets/img/bangladash-map_2.png";

const Map = () => {
  return (
   <section className=' Map py-5'>
     <div className='container map-wraper'>
        <div className="left-map ">
            <img src= {map} alt="" />
        </div>
        <div className="right-content">
            <h1>
রেডএক্সের লজিস্টিকস সেবা সারাদেশে ৬৪ জেলা এবং ৪৯৩ উপজেলা জুড়ে বিস্তৃত</h1>
<h6>আপনার যেকোনো লজিস্টিকস প্রয়োজনের জন্য আমরা নিশ্চিত করি দেশজুড়ে সবচেয়ে দ্রুতগতির সেবা</h6>
<a className='btn' href="#">কভারেজ এলাকা দেখুন</a>
        </div>
     </div>
   </section>
  )
}

export default Map
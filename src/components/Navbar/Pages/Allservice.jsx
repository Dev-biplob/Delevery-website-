import React from 'react'
import "../Style/Allservice.css"
import parsel from "../../../assets/img/parcel-delivery.webp";

import hule from "../../../assets/img/line-haul.png";
import load from "../../../assets/img/load-unload.png";
import werehouse from "../../../assets/img/warehouse.png";
import truck from "../../../assets/img/truck-rent.png";
import logistic from "../../../assets/img/logistics-service.png";
import customer from "../../../assets/img/customised-solutions.png";
import bulk from "../../../assets/img/bulk-shipment.png";




const Allservice = () => {
  return (
<section className='all-s py-3'>
<h1 className='text-center py-5'>সার্ভিস সমূহ</h1>
 <div className="container all-service-wraper">
  <div className="all-service-list">
    <img src= {parsel} alt="" />
    <h2>  পার্সেল ডেলিভারি  </h2>
    <p>ব্যক্তিগত, ছোট ব্যবসা এবং কর্পোরেটদের জন্য ফার্স্ট-মাইল পিকআপ এবং লাস্ট মাইল ডেলিভারি সেবা</p>
  </div>
  <div className="all-service-list">
    <img src= {hule} alt="" />
    <h2>  বাল্ক শিপমেন্ট </h2>
    <p>ব্যক্তিগত, ছোট ব্যবসা এবং কর্পোরেটদের জন্য ফার্স্ট-মাইল পিকআপ এবং লাস্ট মাইল ডেলিভারি সেবা</p>
  </div>
  <div className="all-service-list">
    <img src= {load} alt="" />
    <h2>  পার্সেল ডেলিভারি  </h2>
    <p>ব্যক্তিগত, ছোট ব্যবসা এবং কর্পোরেটদের জন্য ফার্স্ট-মাইল পিকআপ এবং লাস্ট মাইল ডেলিভারি সেবা</p>
  </div>
  <div className="all-service-list">
    <img src= {werehouse} alt="" />
    <h2>  পার্সেল ডেলিভারি  </h2>
    <p>ব্যক্তিগত, ছোট ব্যবসা এবং কর্পোরেটদের জন্য ফার্স্ট-মাইল পিকআপ এবং লাস্ট মাইল ডেলিভারি সেবা</p>
  </div>
  <div className="all-service-list">
    <img src= {truck} alt="" />
    <h2>  পার্সেল ডেলিভারি  </h2>
    <p>ব্যক্তিগত, ছোট ব্যবসা এবং কর্পোরেটদের জন্য ফার্স্ট-মাইল পিকআপ এবং লাস্ট মাইল ডেলিভারি সেবা</p>
  </div>
  <div className="all-service-list">
    <img src= {logistic} alt="" />
    <h2>  পার্সেল ডেলিভারি  </h2>
    <p>ব্যক্তিগত, ছোট ব্যবসা এবং কর্পোরেটদের জন্য ফার্স্ট-মাইল পিকআপ এবং লাস্ট মাইল ডেলিভারি সেবা</p>
  </div>
  <div className="all-service-list">
    <img src= {customer} alt="" />
    <h2>  পার্সেল ডেলিভারি  </h2>
    <p>ব্যক্তিগত, ছোট ব্যবসা এবং কর্পোরেটদের জন্য ফার্স্ট-মাইল পিকআপ এবং লাস্ট মাইল ডেলিভারি সেবা</p>
  </div>
  <div className="all-service-list">
    <img src= {bulk} alt="" />
    <h2>  পার্সেল ডেলিভারি  </h2>
    <p>ব্যক্তিগত, ছোট ব্যবসা এবং কর্পোরেটদের জন্য ফার্স্ট-মাইল পিকআপ এবং লাস্ট মাইল ডেলিভারি সেবা</p>
  </div>

 </div>
</section>
  )
}

export default Allservice
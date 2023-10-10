import React from 'react'
import {  } from "../Style/Service.css";
import Allservice from './Allservice';
import Footer from './Footer';


const Service = () => {
  return (
  
 <section className='service '>
  
     <Allservice/>
  
      <div className='container service-wraper'>
         <div className="service-box py-5">
           <div className="icon">
           <i class="fa-solid fa-clock"></i>
           </div>
           <h3>সহজ পরিবহন প্রাপ্তি</h3>
           <p>যেকোন সাইজের ভেহিকেল দেশের যেকোন জায়গায় পৌঁছাবে মাত্র তিন ঘন্টায়</p>
         </div>
         <div className="service-box py-5">
           <div className="icon">
           <i class="fa-solid fa-truck-fast"></i>
           </div>
           <h3>ফুল ট্রাকলোড</h3>
           <p>আপনার ব্যবসার প্রয়োজন অনুযায়ী বেছে নিন ফুল ট্রাকলোড (এফটিএল) অথবা লেস দ্যান ট্রাকলোড (এলটিএল) ফ্রেইট সলিউশন।</p>
         </div>
         <div className="service-box py-5">
           <div className="icon">
           <i class="fa-solid fa-truck-medical"></i>
           </div>
           <h3>লোডিং এন্ড আনলোডিং সাপোর্ট</h3>
           <p>ইন্ডাস্ট্রি ভেদে প্রয়োজনীয় লোডিং এবং আনলোডিং সাপোর্ট</p>
         </div>
         <div className="service-box py-5">
           <div className="icon">
           <i class="fa-solid fa-magnifying-glass-plus"></i>
           </div>
           <h3>শিপমেন্ট ট্র্যাকিং</h3>
           <p>ট্র্যাকিং এর মাধ্যমে শিপমেন্টের সর্বশেষ রিয়েল টাইম অবস্থান সম্পর্কে জানতে পারবেন</p>
         </div>
         <div className="service-box py-5">
           <div className="icon">
           <i class="fa-solid fa-book"></i>
           </div>
           <h3>মান্থলি ইনভয়েসিং</h3>
           <p>ঝামেলাবিহীন পেমেন্ট পলিসি ও মাসিক ইনভয়েস সুবিধা</p>
         </div>
         <div className="service-box py-5">
           <div className="icon">
           <i class="fa-solid fa-shield-halved"></i>
           </div>
           <h3>সিকিউর হ্যান্ডলিং</h3>
           <p>সর্বোচ্চ নিরাপদে শিপমেন্টের নিশ্চয়তা ও ক্ষতিপূরণ সুবিধা</p>
         </div>

      </div>

 </section>
  )
}

export default Service
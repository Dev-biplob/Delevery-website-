import React from 'react'
import "../Style/Brand.css"
import Show   from "../../../assets/img/BataShow.webp";
const Brand = () => {
  return (
    
   <section className='py-5'>
     <div className='container brnad-wraper'>
      <div className="brand-left">
        <h1>গ্লোবাল ফুটওয়্যার ব্র্যান্ড ব্যবসায়িক প্রসারে আমাদের অবদান</h1>
        <p>প্রধান ডিস্ট্রিবিউশন হাব থেকে দেশব্যাপী ফ্র্যাঞ্চাইজি ও আউটলেটে পণ্য ডেলিভারি করে থাকে রেডএক্স।</p>
         <div className="brand-secundrt">

             <div className="brand-box brand-wraper py-2">
                <div className="box-b">
                <h4>৮০+</h4>
                <p>ফ্র্যাঞ্চাইজি ও আউটলেটে পণ্য পৌঁছায় রেডএক্স</p>
                </div>
                <div className="box-b">
                <h4>৮০+</h4>
                <p>ফ্র্যাঞ্চাইজি ও আউটলেটে পণ্য পৌঁছায় রেডএক্স</p>
                </div>
             </div>
         </div>

      </div>
  

      <div className="branf-right">
      <img src= {Show} alt="" />
</div>

     </div>
   </section>
  )
}

export default Brand
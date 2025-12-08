import React from 'react'
import Title from '../components/Title';
import {assets} from '../assets/assets';
import NewsLetterBox from '../components/NewsLetterBox';


const About = () => {
  return ( 
    <div>
      <div className="text-2xl text-center pt-8 border-t ">
            <Title text1={"About"} text2= {"Us"} />

      </div>

      <div className="my-10 flex flex-col md:flex-row gap-16">
         <img className="w-full md:max-w-[450px]" src={assets.about_img} alt="About us"/>
         <div className="flex flex-col justify-center gap-6 md:w-2/4 text-gray-600">
          <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Vero ad, aut dolore quisquam fuga aliquam reprehenderit qui tenetur placeat neque in inventore quis temporibus. Modi illum sapiente odio aspernatur nam!</p>
         <b className="text-gray-800">Our Mission</b>
         <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Asperiores placeat debitis distinctio qui sit nesciunt necessitatibus provident ab aspernatur velit illum dolorem, quibusdam impedit, inventore odit atque maiores totam quod.</p>
         </div>
      </div>

      <div className="text-xl py-4">
        <Title text1={"WHY"} text2= {"CHOOSE US"} /> 
      </div>

      <div className="flex flex-col md:flex-row text-sm mb-20">
         <div className="border px-10 md:px-16 py-8 sm:py-20 flex flex-col gap-5">
           <b>Quality Assurance: </b>
            <p className="text-gray-600">We prioritize quality in every product we offer, ensuring that our customers receive items that meet the highest standards of craftsmanship and durability.</p>
         </div>
         <div className="border px-10 md:px-16 py-8 sm:py-20 flex flex-col gap-5">
           <b>Convenience: </b>
            <p className="text-gray-600">Our user-friendly online platform makes it easy for customers to browse, select, and purchase products from the comfort of their own homes, saving time and effort.</p>
         </div>
         <div className="border px-10 md:px-16 py-8 sm:py-20 flex flex-col gap-5">
           <b>Customer Support: </b>
            <p className="text-gray-600">We are committed to providing exceptional customer service, with a dedicated support team ready to assist with inquiries, returns, and any issues that may arise.</p>
         </div>
      </div>

      <NewsLetterBox />
      
    </div>
  )
}

export default About

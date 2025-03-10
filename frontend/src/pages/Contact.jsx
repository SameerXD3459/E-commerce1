import React from 'react'
import contact_img from "../assets/contact_img.png";

const Contact = () => {
  return (
    <div>
      <section className="section__container bg-primary-light">
            <h2 className="section__header capitalize">Contact Page</h2>
            <p className="section__subheader">Forever was born out of a passion for innovation and a desire to revolution.</p>
        </section>

      <div className='my-10 flex flex-col justify-center md:flex-row gap-10 mb-28'>
        <img className='w-full md:max-w-[480px]' src={contact_img} alt="Contact Us" />
        <div className='flex flex-col justify-center items-start gap-6'>
            <p className='font-semibold text-xl text-gray-600'>Our Store</p>
            <p className='text-gray-500'>54709 Williams Station <br /> Suite 350, Washington, USA</p>
            <p className='text-gray-500'>Tel: (415) 555-0132 <br /> Email: admin1@gmail.com</p>
            <p className='font-semibold text-xl text-gray-600'>Careers at Forever</p>
            <p className='text-gray-500'>Learn more about our teams and job openings.</p>
            <button className='border border-black px-8 py-4 text-sm hover:bg-black hover:text-white transition-all duration-500'>Explore Jobs</button>
        </div>
      </div>
    </div>
  )
}

export default Contact

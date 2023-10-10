"use client"

import RootLayout from "@/app/layout"
import Wrapper from '@/components/wrapper/Wrapper';
import * as React from 'react';


export default function Contact(){
  const [fullname, setFullname] = React.useState('')
  const [email, setEmail] = React.useState('')
  const [phone, setPhone] = React.useState('')
  const [company, setCompany] = React.useState('')
  const [message, setMessage] = React.useState('')    
  const [post, setPost] = React.useState('')  
  const [role, setRole] = React.useState('')


  //   Form validation state
const [errors, setErrors] = React.useState({});

//   Setting button text on form submission
const [buttonText, setButtonText] = React.useState("Send");

// Setting success or failure messages states
const [showSuccessMessage, setShowSuccessMessage] = React.useState(false);
const [showFailureMessage, setShowFailureMessage] = React.useState(false);

// Validation check method

  

  const handleSubmit = async (e: { preventDefault: () => void; }) => {   
      e.preventDefault()


      const res = await fetch("/api/sendgrid", {
          body: JSON.stringify({
            email: email,
            fullname: fullname,
            message: message,
            post: post,
            phone: phone,
            company: company,
            role: role,
          }),
          headers: {
            "Content-Type": "application/json",
          },
          method: "POST",
        });
  
        const { error } = await res.json();
        if (error) {
          console.log(error);
          return;
        }
      console.log(fullname, email, message, phone, post, company, role);
    };
    return (
        <RootLayout>
            <Wrapper>
        <section className="text-gray-600 body-font relative bg-white">
  <div className="container px-5 py-24 mx-auto">
    <div className="flex flex-col text-center w-full mb-12">
      <h1 className="sm:text-3xl text-4xl font-bold tracking-wide title-font mb-4 text-darky-800">Faites-nous part de vos projets!</h1>
      <p className="lg:w-2/3 mx-auto leading-relaxed text-base">Nos experts vous guiderons vers une solition efficace et adapter a vos besoins.</p>
    </div>
    <form onSubmit={handleSubmit}>
    <div className="lg:w-2/3 md:w-full mx-auto px-2 py-6">
      <div className="flex flex-wrap -m-2">
        <div className="p-2 w-1/2">
          <div className="relative">
            <label htmlFor="name" className="leading-7 text-sm text-gray-600">Nom</label>
            <input type="text" id="name" name="name" className="w-full bg-darky-500 bg-opacity-50 rounded border border-darky-500 focus:border-primary-700 focus:bg-white focus:ring-2 focus:ring-primary-500 text-base outline-none text-darky-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
             value={fullname}
             onChange={(e) => setFullname(e.target.value)}
            />
          </div>
        </div>
        <div className="p-2 w-1/2">
          <div className="relative">
            <label htmlFor="email" className="leading-7 text-sm text-gray-600">Courriel</label>
            <input 
            type="email" 
            id="email" 
            name="email" 
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="w-full bg-darky-500 bg-opacity-50 rounded border border-darky-500 focus:border-primary-700 focus:bg-white focus:ring-2 focus:ring-primary-500 text-base outline-none text-darky-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
            />
        
          </div>
        </div>
        <div className="p-2 w-1/2">
          <div className="relative">
            <label htmlFor="company" className="leading-7 text-sm text-darky-5600">Entreprise</label>
            <input type="text" id="company" name="company" className="w-full bg-darky-500 bg-opacity-80 rounded border border-darky-500 focus:border-primary-700 focus:bg-white focus:ring-2 focus:ring-primary-500 text-base outline-none text-darky-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
             value={company}
             onChange={(e) => setCompany(e.target.value)}
            />
          </div>
        </div>
        <div className="p-2 w-1/2">
          <div className="relative">
            <label htmlFor="role" className="leading-7 text-sm text-gray-800">Role</label>
            <input type="text" id="role" name="role" className="w-full bg-darky-500 bg-opacity-80 rounded border border-darky-500 focus:border-primary-700 focus:bg-white focus:ring-2 focus:ring-primary-500 text-base outline-none text-darky-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
            value={role}
            onChange={(e) => setRole(e.target.value)}
            />
          </div>
        </div>
        <div className="p-2 w-1/2">
          <label htmlFor="phone" className="leading-7 text-sm text-darky-800">Phone</label>
          <input type="phone" id="phone" name="phone" className="w-full bg-darky-500 bg-opacity-80 rounded border border-darky-500 focus:border-primary-700 focus:bg-white focus:ring-2 focus:ring-primary-500 text-base outline-none text-darky-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
            value={phone}
            onChange={(e) => setPhone(e.target.value)}
            />
        </div>
         <div className="p-2 w-1/2">
          <label htmlFor="post" className="leading-7 text-sm text-darky-800">Poste</label>
          <input type="text" id="post" name="post" className="w-full bg-darky-500 bg-opacity-80 rounded border border-darky-500 focus:border-primary-700 focus:bg-white focus:ring-2 focus:ring-primary-500 text-base outline-none text-darky-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
            value={post}
            onChange={(e) => setPost(e.target.value)}
            />
        </div>
        <div className="p-2 w-full">
          <div className="relative">
            <label htmlFor="message" className="leading-7 text-sm text-darky-800">Message</label>
            <textarea id="message" name="message" className="w-full bg-darky-500 bg-opacity-80 rounded border border-darky-500 focus:border-primary-700 focus:bg-white focus:ring-2 focus:ring-primary-500 h-32 text-base outline-none text-darky-700 py-1 px-3 resize-none leading-6 transition-colors duration-200 ease-in-out"
             onChange={(e)=>setMessage(e.target.value)
            }
            value={message}
            ></textarea> 
          </div>
        </div>
        <div className="p-2 w-full">
          <button type="submit" className="flex mx-auto text-white bg-primary border-0 py-2 px-8 focus:outline-none hover:bg-primary-700 rounded-lg">Envoyer</button>
        </div>
        <div className="p-2 w-full pt-8 mt-8 border-t border-gray-200 text-center">
          <div className="flex-col items-center">
          <a href="MAILTO:info@shieldsignalisation.com" className="text-darky font-normal">info@shieldsignalisation.com</a>
          <a href="CALLTO:4385265465" className="ml-6 font-medium text-darky">1-438-526-5465</a>
          <p className="leading-normal my-5">53 Boul Lajeunesse O.
            <span>Saint-Jerome, QC J7Y1W4</span>
          </p>
          </div>
          <span className="inline-flex">
            <a className="text-darky-700">
              <svg fill="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" className="w-5 h-5" viewBox="0 0 24 24">
                <path d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z"></path>
              </svg>
            </a>
            <a className="ml-4 text-darky-700">
              <svg fill="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" className="w-5 h-5" viewBox="0 0 24 24">
                <path d="M23 3a10.9 10.9 0 01-3.14 1.53 4.48 4.48 0 00-7.86 3v1A10.66 10.66 0 013 4s-4 9 5 13a11.64 11.64 0 01-7 2c9 5 20 0 20-11.5a4.5 4.5 0 00-.08-.83A7.72 7.72 0 0023 3z"></path>
              </svg>
            </a>
            <a className="ml-4 text-darky-700">
              <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" className="w-5 h-5" viewBox="0 0 24 24">
                <rect width="20" height="20" x="2" y="2" rx="5" ry="5"></rect>
                <path d="M16 11.37A4 4 0 1112.63 8 4 4 0 0116 11.37zm1.5-4.87h.01"></path>
              </svg>
            </a>
            <a className="ml-4 text-darky-700">
              <svg fill="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" className="w-5 h-5" viewBox="0 0 24 24">
                <path d="M21 11.5a8.38 8.38 0 01-.9 3.8 8.5 8.5 0 01-7.6 4.7 8.38 8.38 0 01-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 01-.9-3.8 8.5 8.5 0 014.7-7.6 8.38 8.38 0 013.8-.9h.5a8.48 8.48 0 018 8v.5z"></path>
              </svg>
            </a>
          </span>
        </div>
      </div>
    </div>
  </form>
  </div>
</section>
</Wrapper>
</RootLayout>
    )
}
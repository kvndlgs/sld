"use client"

import RootLayout from '@/app/layout';
import Wrapper from '@/components/wrapper/Wrapper';
import * as React from 'react';


export default function Job(){
  const [fullname, setFullname] = React.useState('')
  const [email, setEmail] = React.useState('')
  const [phone, setPhone] = React.useState('')  
  const [file, setFile] = React.useState('')

  const handleSubmit = async (e: { preventDefault: () => void; }) => {
    e.preventDefault()
    const res = await fetch("/api/sendgrid", {
      body: JSON.stringify({
        email: email,
        fullname: fullname,
        phone: phone,
        file: file,
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
    console.log(fullname, email, phone, file);
  }

    return (
        <RootLayout subtitle="Carriere">
            <Wrapper>
            <section className="text-gray-600 body-font bg-white">
  <div className="container px-5 py-24 mx-auto flex flex-wrap items-center">
    <div className="lg:w-3/5 md:w-1/2 md:pr-16 lg:pr-0 pr-0">
      <h1 className="title-font font-medium text-3xl text-gray-900">Joins-toi a notre equipe!</h1>
      <p className="leading-relaxed mt-4">Vous rever d'une nouvelle carriere exitente, vous n'avez pas peur des nouveau defis, de voyager et avez une bonne esprit d'equipe </p>
    </div>
    <form className="lg:w-2/6 md:w-1/2 bg-darky-500 rounded-lg p-8 flex flex-col md:ml-auto w-full mt-10 md:mt-0 shadow-md" onSubmit={handleSubmit}>

      <div className="relative mb-4">
        <label htmlFor="full-name" className="leading-7 text-sm text-gray-600">Nom complet</label>
        <input type="text" id="full-name" name="full-name" className="w-full bg-white rounded border border-gray-300 focus:border-primary focus:ring-2 focus:ring-primary-500 text-base outline-none text-darky-800 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
         value={fullname}
         onChange={(e) => setFullname(e.target.value)}
        />
      </div>
      <div className="relative mb-4">
        <label htmlFor="email" className="leading-7 text-sm text-gray-600">Courriel</label>
        <input type="email" id="email" name="email" className="w-full bg-white rounded border border-gray-300 focus:border-primary focus:ring-2 focus:ring-primary-500 text-base outline-none text-darky-800 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
         value={email}
         onChange={(e) => setEmail(e.target.value)}
        />
      </div>
      <div className="relative mb-4">
        <label htmlFor="phone" className="leading-7 text-sm text-gray-600">Mobile</label>
        <input type="mobile" id="phone" name="phone" className="w-full bg-white rounded border border-gray-300 focus:border-primary focus:ring-2 focus:ring-primary-500 text-base outline-none text-darky-800 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
         value={phone}
         onChange={(e) => setPhone(e.target.value)}
        />
      </div>
      <div className="relative mb-4">
        <label htmlFor="cv" className="leading-7 text-sm text-darky-800">CV</label>
        <input type="file" id="cv" name="cv" className="w-full bg-white rounded border border-gray-300 focus:border-primary focus:ring-2 focus:ring-primary-500 text-base outline-none text-darky-800 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
         value={file}
         onChange={(e) => setFile(e.target.value)}
        />
      </div>
      <button type="submit" className="text-white bg-primary border-0 py-2 px-8 focus:outline-none hover:bg-primary-700 rounded-lg">Soumettre</button>
      

    </form>
  </div>
</section>
      </Wrapper>
        </RootLayout>
    )
}
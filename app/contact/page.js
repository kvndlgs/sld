"use client"

import RootLayout from '@/app/layout'
import Wrapper from '@/components/wrapper/Wrapper'
import * as Icon from 'react-icons/lu'
import * as React from 'react'
import {Button} from '@/components/forms/Forms'

export default function Contact(){
    const [fullname, setFullname] = React.useState();
    const [email, setEmail] = React.useState();
    const [phone, setPhone] = React.useState();
    const [role, setRole] = React.useState();     
    const [message, setMessage] = React.useState(); 
    const [company, setCompany] = React.useState();

    const [errors, setErrors] = React.useState();


    const [buttonText, setButtonText] = React.useState("Envoyer");

    const [showSuccessMessage, setShowSuccessMessage] = React.useState(false);
    const [showFailureMessage, setShowFailureMessage] = React.useState(false);


    const handleValidation = () => {
        let tempErrors = {};
        let isValid = true;

        if(fullname.length <= 0) {
            tempErrors["fullname"] = true;
            isValid = false;
        }
        if(email.length <= 0) {
            tempErrors["email"] = true;
            isValid = false;
        }
        if(phone.length <= 0) {
            tempErrors["phone"] = true;
            isValid = false;
        }
        if(company.length <= 0) {
            tempErrors["company"] = true;
            isValid = false;
        }
        if(role.length <= 0) {
            tempErrors["role"] = true;
            isValid = false;
        }
        if(message.length <= 0) {
            tempErrors["message"] = true;
            isValid = false;
        }

        setErrors({...tempErrors});
        console.log("errors", errors);
        return isValid;
    };


    const handleSubmit = async (e) => {
        e.preventDefault();




        const res = await fetch("/api/sendgrid", {
            body: JSON.stringify({
                email: email,
                fullname: fullname,      
                phone: phone,
                company: company,
                role: role,
                message: message,
            }),
            headers: {
                "Content-Type": "application/json",
            },
            method: "POST",
        });

        const error = await res.json();
        if(error) {
            console.log(error);
            setShowSuccessMessage(false);
            setShowFailureMessage(true);
            setButtonText("Envoyer");

            setFullname(" ");
            setEmail(" ");
            setPhone(" ");
            setCompany(" ");
            setRole(" ");
            setMessage(" ");
            return;
        }
        setShowSuccessMessage(true);
        setShowFailureMessage(false);
        setButtonText("Envoyer");
        setFullname(" ");
        setEmail(" ");
        setPhone(" ");
        setCompany(" ");
        setRole(" ");
        setMessage(" ");
     
        console.log(fullname, email, company, phone, role, message);
    };

    return (
      
        <RootLayout>
        <Wrapper>
          <div className="w-full py-10 md:py-10 px-6 md:px-20">
            <div className="flex flex-col md:flex-row items-center md:items-start justify-around md:py-8 py-4 mx-auto text-center px-6 md:px-20">
            <div className="w-full md:w-1/2 flex flex-col md:items-start md:mt-20 items-center justify-around pt-6 mx-auto">
                <h4 className="text-md text-darky-400 font-medium pb-4"> Nous joindre </h4>
                <h2 className="md:text-xl text-md text-darky-800 font-semibold pb-3">Faites-nous part de vos projets </h2>
                <span className="w-10 h-1 bg-primary-400"></span>
                <p className='text-base font-medium text-darky-600 mt-8 text-center md:text-left'>
                Notre équipe se fera un plaisir de vous aider a mettre en place une solution adapté a tout vos besoins en matière de signalisation routières.
                </p>
            </div>

            <div className="md:w-1/2 w-full py-4">
            <form onSubmit={handleSubmit} className="py-2 w-full px-4">
              <div className="flex flex-col items-start justify-between pt-2 pb-3">
                <label htmlFor="fullname" className="text-darky-400 font-medium text-base ml-2">Nom</label>
                <input 
                  value={fullname}
                  onChange={(e) => setFullname(e.target.value)} 
                  type="text" 
                  name="fullname" 
                  id="fullname"  
                  placeholder="John Doe"
                 className="w-full py-3 px-2 text-darky-600 placeholder-darky-600  font-medium bg-darky-100 rounded-md border-2 border-transparent focus:border-2 focus:border-primary-300 outline-none transition-all ease-in-out"
                />
              </div>
              <div className="w-full flex flex-row justify-between items-between">
              <div className="w-full flex flex-col items-start justify-around pt-2 pb-3 pr-2">
                <label htmlFor="email" className="text-darky-400 font-medium text-base ml-2">Courriel</label>
                <input value={email} onChange={(e) => setEmail(e.target.value)} type="email" name="email" id="email"  placeholder="johndoe@votreentreprise.ca" 
                 className="w-full py-3 px-2 text-darky-600 placeholder-darky-600  font-medium bg-darky-100 rounded-md border-2 border-transparent focus:border-2 focus:border-primary-300 outline-none transition-all ease-in-out"
                 />
              </div>
              <div className="w-full flex flex-col items-start justify-around pt-2 pb-3 pl-2">
                <label htmlFor="phone" className="text-darky-400 font-medium text-base ml-2">Téléphone</label>
                <input value={phone} onChange={(e) => setPhone(e.target.value)} type="phone" name="phone"  placeholder="+1-438-526-5465" id="phone" 
                 className="w-full py-3 px-2 text-darky-600 placeholder-darky-600  font-medium bg-darky-100 rounded-md border-2 border-transparent focus:border-2 focus:border-primary-300 outline-none transition-all ease-in-out" />
                 </div>
              </div>
              <div className="w-full flex flex-row justify-between items-start">
              <div className="w-full flex flex-col items-start justify-around pt-2 pb-3 pr-2">
                <label htmlFor="company" className="text-darky-400 font-medium text-base ml-2">Entreprise</label>
                <input value={company} onChange={(e) => setCompany(e.target.value)} type="text" name="company"  placeholder="Entrer le nom de l'entreprise" id="phone" 
                  className="w-full py-3 px-2 text-darky-600 placeholder-darky-600  font-medium bg-darky-100 rounded-md border-2 border-transparent focus:border-2 focus:border-primary-300 outline-none transition-all ease-in-out"
                                 />
              </div>
              <div className="w-full flex flex-col items-start justify-around  pt-2 pb-3 pl-2">
                <label htmlFor="role" className="text-darky-400 font-medium text-base ml-2">Role</label>
                <input value={role} onChange={(e) => setRole(e.target.value)} type="text" name="role" id="role" placeholder="Votre role dans l'entreprise" 
                                className="w-full py-3 px-2 text-darky-600 placeholder-darky-600  font-medium bg-darky-100 rounded-md border-2 border-transparent focus:border-2 focus:border-primary-300 outline-none transition-all ease-in-out"
                                />
              </div>
              </div>
              <div className="flex flex-col items-start justify-around pt-2 pb-3">
                <label htmlFor="message" className="text-darky-400 font-medium text-base ml-2">Message</label>
                <textarea value={message} onChange={(e) => setMessage(e.target.value)}  name="message" id="message" placeholder="Entrez les détails" 
                                 className="w-full pt-2 pb-12 px-2 text-darky-600 placeholder-darky-600  font-medium bg-darky-100 rounded-md border-2 border-transparent focus:border-2 focus:border-primary-300 outline-none transition-all ease-in-out"
                                 ></textarea>
              </div>
              <div className="flex flex-col items-start justify-around pt-2 pb-3">

                <button 
                type="submit" 
            className="self-end mt-3 py-3 px-8 text-primary-700 text-base font-semibold rounded-md shadow-md bg-primary-300 inline-flex items-center justify-around font-semibold hover:bg-primary-600 hover:text-primary-200"> 
             {buttonText} <span>{ !errors && (<Icon.LuArrowRight size="20" className="ml-2 font-semibold" /> )} { errors && ( <Icon.LuSmile size="24" className="ml-3 text-primary-800" /> ) } </span> </button>

              </div>
          
            </form>
            </div>
            </div>
          </div>
        </Wrapper>
    </RootLayout>

    )
}
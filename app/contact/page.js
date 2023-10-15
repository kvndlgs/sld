"use client"

import RootLayout from '@/app/layout'
import Wrapper from '@/components/wrapper/Wrapper'
import * as Icon from 'react-icons/lu'
import * as React from 'react'

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

    const isValidIcon = <Icon.LuLoader size="18" className="mr-2 text-primary-800" />;
    const buttonIcon = <Icon.LuArrowRight size="18" className="mr-2 text-primary-800" />;

    const handleSubmit = async (e) => {
        e.preventDefault();

        let isValidForm = handleValidation();
        if(isValidForm) {  
            setButtonText("C'est fait!");

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
     }
        console.log(fullname, email, company, phone, role, message);
    };


    const Content = 
      {
        "fr": {
          "title": "Faites-nous part de vos projets",
          "subtitle": "Nous joindre",
          "text": "Notre équipe se fera un plaisir de vous aider a mettre en place une solution adapté a tout vos besoins en matière de signalisation routières.",
          "labels": {
            "nom": "Nom", 
            "courriel": "Courriel",
            "telephone": "Téléphone",
            "entreprise": "Entreprise",
            "role": "Role",
            "message": "Message", 
          },
          "placeholders": {
            "nom": "John Doe",
            "courriel": "Entrez votre adresse courriel",
            "telephone": "+1-438-526-5465",
            "entreprise": "Entrez le nom de l'entreprise",
            "role": "Votre role dans l'entreprise",
            "message": "Entrez les détails",
          },
          "button": {
            "send": "Envoyer",
            "Sending": "Envoi en cours",
            "success": "C'est fait!",
            "error": "Envoyer",
          },
        },
          "en": {
            "title": "Let us know about your projects",
            "subtitle": "Contact us",
            "text": "Our team will be happy to help you put in place a solution adapted to all your needs in terms of traffic control.",
            "labels": {
              "name": "Name", 
              "email": "Email",
              "phone": "Phone",
              "company": "Company",
              "role": "Role",
              "message": "Message", 
            },
            "placeholders": {
              "name": "John Doe",
              "email": "Enter your email address",
              "phone": "+1-438-526-5465",
              "company": "Enter the name of the company",
              "role": "Your role in the company",
              "message": "Enter the details",
            },
          }    
        }
    
    return (

    
        <RootLayout>
        <Wrapper>
          <div className="w-full py-10 md:py-10 px-4 md:px-12">
            <div className="flex flex-col md:flex-row  items-center justify-around md:py-8 py-4 mx-auto text-center">
            <div className="w-full md:w-1/2 flex flex-col md:items-start items-center justify-around pt-6 pb-16 mx-auto">
                <h4 className="text-md text-darky-300 font-medium pb-4"> { Content.fr.subtitle } </h4>
                <h2 className="text-xl text-darky-700 font-semibold pb-6">{ Content.fr.title } </h2>
                <span className="w-12 h-1 bg-primary-400"></span>
                <p className='text-base font-medium mt-4 text-center md:text-left '>
                {Content.fr.text}
                </p>
            </div>
            <div className="md:w-1/2 w-full py-4">
            <form onSubmit={handleSubmit} className="py-2 w-full px-4">
              <div className="flex flex-col items-start justify-between pt-2 pb-3">
                <label htmlFor="fullname" className="text-darky-400 font-medium text-base ml-2">Nom</label>
                <input value={fullname} onChange={(e) => setFullname(e.target.value)} type="text" name="fullname" id="fullname"  placeholder="John Doe"
                className="w-full py-3 px-2 text-darky bg-darky-100 rounded-sm" 
                />
              </div>
              <div className="w-full flex flex-row justify-between items-between">
              <div className="w-full flex flex-col items-start justify-around pt-2 pb-3 pr-2">
                <label htmlFor="email" className="text-darky-400 font-medium text-base ml-2">Courriel</label>
                <input value={email} onChange={(e) => setEmail(e.target.value)} type="email" name="email" id="email"  placeholder="johndoe@votreentreprise.ca" 
                className="w-full py-3 px-2 text-darky bg-darky-100 rounded-sm" 
                />
              </div>
              <div className="w-full flex flex-col items-start justify-around pt-2 pb-3 pl-2">
                <label htmlFor="phone" className="text-darky-400 font-medium text-base ml-2">Téléphone</label>
                <input value={phone} onChange={(e) => setPhone(e.target.value)} type="phone" name="phone"  placeholder="+1-438-526-5465" id="phone" 
                className="w-full py-3 px-2 text-darky bg-darky-100 rounded-sm" />
              </div>
              </div>
              <div className="w-full flex flex-row justify-between items-start">
              <div className="w-full flex flex-col items-start justify-around pt-2 pb-3 pr-2">
                <label htmlFor="company" className="text-darky-400 font-medium text-base ml-2">Entreprise</label>
                <input value={company} onChange={(e) => setCompany(e.target.value)} type="text" name="company"  placeholder="Entrer le nom de l'entreprise" id="phone" 
                className="w-full py-3 px-2 text-darky bg-darky-100 rounded-sm"  />
              </div>
              <div className="w-full flex flex-col items-start justify-around  pt-2 pb-3 pl-2">
                <label htmlFor="role" className="text-darky-400 font-medium text-base ml-2">Role</label>
                <input value={role} onChange={(e) => setRole(e.target.value)} type="role" name="role" id="role" placeholder="Votre role dans l'entreprise" 
                className="w-full py-3 px-2 text-darky bg-darky-100 rounded-sm"  />
              </div>
              </div>
              <div className="flex flex-col items-start justify-around pt-2 pb-3">
                <label htmlFor="message" className="text-darky-400 font-medium text-base ml-2">Message</label>
                <textarea value={message} onChange={(e) => setMessage(e.target.value)}  name="message" id="message" placeholder="Entrez les détails" 
                className="w-full pt-3 pb-10 px-2 text-darky bg-darky-100 rounded-sm"></textarea>
              </div>
              <div className="flex flex-col items-start justify-around pt-2 pb-3">
                <button 
                type="submit" 
            className="self-center py-4 px-10 text-primary-800 font-semibold rounded-sm shadow-md bg-primary inline-flex items-center justify-around font-medium"> 
             {buttonText} <span>{ !errors && (<Icon.LuArrowRight size="24" className="ml-3 text-primary-800" /> )} { errors && ( <Icon.LuSmile size="24" className="ml-3 text-primary-800" /> ) } </span> </button>
              </div>
          
            </form>
            </div>
            </div>
          </div>
        </Wrapper>
    </RootLayout>

    )
}
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
    const [file, setFile] = React.useState();   
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

        let isValidForm = handleValidation();
        if(!isValidForm) {  
            setButtonText("Envois en cours...");

        const res = await fetch("/api/sendgrid", {
            body: JSON.stringify({
                email: email,
                fullname: fullname,      
                phone: phone,
                company: company,
                role: role,
                file: file,
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
            setFile(" ");
            setMessage(" ");
            return;
        }
        setShowSuccessMessage(true);
        setShowFailureMessage(false);
        setButtonText("Envoyé");
        setFullname(" ");
        setEmail(" ");
        setPhone(" ");
        setCompany(" ");
        setRole(" ");
        setFile(" ");
        setMessage(" ");
     }
        console.log(fullname, email, company, phone, role, file, message);
    };


    return (
        <RootLayout>
        <Wrapper>
          <div className="w-full pb-30 py-16 px-4 md:px-12">
            <div className="w-full flex flex-col items-center justify-around pt-6 pb-16 mx-auto">
                <h4 className="text-md text-darky-300 font-medium "> Nous joindre </h4>
                <h2 className="text-xl font-darky-800 font-semibold pb-4"> Faites-nous parts de vos projets </h2>
                <span className="w-20 h-1 bg-primary-400"></span>
            </div>
            <form onSubmit={handleSubmit} className="md:w-1/2 w-full md:px-8 md:pt-8 md:pb-10 rounded-xl shadow-md bg-darky mx-auto py-10 px-4 border-darky-400 border-2">
              <div className="flex flex-col items-start justify-around pt-3 pb-4">
                <label htmlFor="fullname" className="text-darky-100 font-medium">Nom</label>
                <input value={fullname} onChange={(e) => setFullname(e.target.value)} type="text" name="fullname" id="fullname"  placeHolder="John Doe" className="w-full py-3 px-4 text-darky bg-darky-100 rounded-md" />
              </div>
              <div className="pb-4">
                <label htmlFor="email" className="text-darky-100 font-medium">Courriel</label>
                <input value={email} onChange={(e) => setEmail(e.target.value)} type="email" name="email" id="email"  placeHolder="johndoe@votreentreprise.ca" className="w-full py-3 px-4 text-darky bg-darky-100 rounded-md" />
              </div>
              <div className="pb-4">
                <label htmlFor="phone" className="text-darky-100 font-medium">Téléphone</label>
                <input value={phone} onChange={(e) => setPhone(e.target.value)} type="phone" name="phone"  placeHolder="+1-438-526-5465" id="phone" className="w-full py-3 px-4 text-darky bg-darky-100 rounded-md" />
              </div>
              <div className="pb-4">
                <label htmlFor="company" className="text-darky-100 font-medium">Entreprise</label>
                <input value={company} onChange={(e) => setCompany(e.target.value)} type="text" name="company"  placeHolder="Entrer le nom de l'entreprise" id="phone" className="w-full py-3 px-4 text-darky bg-darky-100 rounded-md" />
              </div>
              <div className="pb-4">
                <label htmlFor="role" className="text-darky-100 font-medium">Role</label>
                <input value={role} onChange={(e) => setRole(e.target.value)} type="role" name="role" id="role" placeHolder="Votre role dans l'entreprise" className="w-full py-3 px-4 text-darky bg-darky-100 rounded-md" />
              </div>
              <div className="pb-4">
                <label htmlFor="file" className="text-darky-100 font-medium">Fichier</label>
                <input value={file} onChange={(e) => setFile(e.target.value)} type="file" name="file" id="file" placeHolder="Joignez vos fichiers ici" className="w-full py-3 px-4 text-darky bg-darky-100 rounded-md" />
              </div>
              <div className="pb-4">
                <label htmlFor="message" className="text-darky-100 font-medium">Message</label>
                <textarea value={message} onChange={(e) => setMessage(e.target.value)}  name="message" id="message" placeHolder="Entrez les détails" className="w-full pt-3 pb-8 px-4 text-darky bg-darky-100 rounded-md"></textarea>
              </div>
              <div className="pb-2">
                <button 
                type="submit" 
            className="self-center py-4 px-12 text-primary-50 rounded-md shadow-md bg-primary inline-flex items-center justify-around font-medium"> {buttonText} <Icon.LuArrowRightCircle className="ml-4" size="18px" /> </button>
              </div>
              <div className="absolute w-xl h-auto top-10 left-10 z-70">
                {showSuccessMessage && (
                    <div className="absolute w-20 bg-green-100 p-5 top-8 left-8">
                    <p className="text-green-500 font-semibold text-sm my-2">
                        Merci! Votre message a bien été envoyer 
                    </p>
                    </div>
                )}
                {showFailureMessage && (
                    <div className="absolute w-20 bg-red-100 p-5 top-8 left-8">
                    <p className="text-red-500 font-semibold text-sm my-2">
                        Awww, vous avez brisé l'internet! 
                    </p>
                    </div>
                )}
              </div>
            </form>
          </div>
        </Wrapper>
    </RootLayout>
    )
}
"use client"

import * as React from "react";
import Button from '../components/button/Button'
import * as Icon from 'react-icons/lu'

export default function JobPage() {
    const [state, setState] = React.useState({
        fullname: "",
        email: "",
        phone: "",
        file: "",
        errors: false,
        buttonText: "Envoyer",
        sending: false,
    });

    const { fullname, email, phone, file, buttonText, errors,  sending } = state;

    const [showSuccessMessage, setShowSuccessMessage] = React.useState(false);

   
    const handleSubmit = async (e: { preventDefault: () => void }) => {
        e.preventDefault();

        const res = await fetch("/api/contact", {
            body: JSON.stringify({
                state: state,
            }),
            headers: {
                "Content-Type": "application/json",
            },
            method: "POST",
        });
        console.log(state);
    };

    const onChange = (event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        event.persist();
        setState(prev => ({
            ...prev,
            [event.target.name]: event.target.value
        }));
    }


    return (
        <>
            <div className="w-full py-6 md:py-10 px-6 md:px-24">
                <div className="flex flex-col md:flex-row  items-center justify-around md:py-8 py-4 mx-auto text-center">
                    <div className="w-full md:w-1/2 flex flex-col md:items-start items-center justify-around pt-6 pb-2 md:pb-16 mx-auto">
                        <h3 className="text-md text-darky-400 font-medium pb-4"> Carrières </h3>
                        <h1 className="text-xl text-darky-700 font-semibold pb-6">Faites le grand saut. </h1>
                        <span className="w-12 h-1 bg-primary-400"></span>
                        <p className='text-base font-medium mt-4 text-center md:text-left '>
                         Vous ètes Fiable, ponctuel et professionel?  Joignez les rangs de Shield Signalisation et propulser votre carrière vers de nouveau sommets.
                        </p>
                    </div>

                    <div className="md:w-1/2 w-full py-4">
                        <form className="py-2 w-full px-8">
                            <div className='flex flex-col justify-around items-start'>
                                <label className='text-darky-400 font-medium text-md pb-2 pt-3 ml-2'> Nom </label>
                                <input
                                    required
                                    autoComplete='new-password'
                                    type='text'
                                    value={fullname}
                                    placeholder='Votre nom complet'
                                    onChange={onChange}
                                    className="w-full py-3 px-2 text-darky-600 placeholder-darky-600  font-medium bg-darky-200 rounded-md border-2 border-transparent focus:border-2 focus:border-primary-300 outline-none transition-all ease-in-out"
                                />
                            </div>
                            <div className='flex flex-col justify-around items-start'>

                                <label className='text-darky-400 font-medium text-md pb-2 pt-3 ml-2'>  Mobile </label>
                                <input
                                    required
                                    placeholder='Votre numero de mobile'
                                    autoComplete='new-password'
                                    type='phone'
                                    value={phone}
                                    onChange={onChange}
                                    className="w-full py-3 px-2 text-darky-600 placeholder-darky-600  font-medium bg-darky-200 rounded-md border-2 border-transparent focus:border-2 focus:border-primary-300 outline-none transition-all ease-in-out"
                                />
                            </div>
                            <div className='flex flex-col justify-around items-start'>

                                <label className='text-darky-400 font-medium text-md pb-2 pt-3 ml-2'>  Courriel</label>
                                <input
                                    required
                                    placeholder='Votre adresse courriel'
                                    autoComplete='new-password'
                                    type='email'
                                    value={email}
                                    onChange={onChange}
                                    className="w-full py-3 px-2 text-darky-600 placeholder-darky-600  font-medium bg-darky-200 rounded-md border-2 border-transparent focus:border-2 focus:border-primary-300 outline-none transition-all ease-in-out"
                                />
                            </div>
                            <div className='flex flex-col justify-around items-start'>

                                <label className='text-darky-400 font-medium text-md pb-2 pt-3 ml-2'> C.V. </label>
                                <input
                                    required
                                    className="w-full py-3 px-2 text-darky-600 placeholder-darky-600  font-medium bg-darky-200 rounded-md border-2 border-transparent focus:border-2 focus:border-primary-300 outline-none transition-all ease-in-out"
                                    type='file'
                                    value={file}
                                    onChange={onChange}

                                />
                            </div>
                            <div className="flex flex-col items-start justify-around pt-2 pb-3">
                                <Button size='md' label={sending ? 'Envois en cours' : buttonText} icon='true' type='submit'>
                                     <Icon.LuArrowLeft size='18' />
                                </Button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </>
    )
}
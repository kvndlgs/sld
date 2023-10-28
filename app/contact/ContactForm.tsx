"use client"
import * as React from 'react';
import * as Icon from 'react-icons/lu'
import Button from '../components/button/Button'

export default function ContactForm() {
    const [state, setState] = React.useState({
        email: "",
        fullname: "",
        phone: "",
        role: "",
        message: "",
        company: "",
        sending: false,
        buttonText: "Envoyer",
        error: false,
    });
    const { email, fullname, phone, role, message, company, sending, buttonText, error } = state;
    const onChange = (event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        event.persist();
        setState(prev => ({
            ...prev,
            [event.target.name]: event.target.value
        }));
    }


    const [errors, setErrors] = React.useState();


    const [showSuccessMessage, setShowSuccessMessage] = React.useState(false);
    const [showFailureMessage, setShowFailureMessage] = React.useState(false);



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

    return (
        <>
            <div className="w-full py-10 md:py-10 px-6 md:px-12 ">
                <div className="flex flex-col md:flex-row items-center md:items-start justify-around md:py-8 py-4 mx-auto text-center px-6 md:px-20">
                    <div className="w-full md:w-1/2 flex flex-col md:items-start md:mt-20 items-center justify-around pt-6 mx-auto md:px-8 ">
                        <h4 className="text-base md:text-md text-darky-400 font-medium pb-4"> Nous joindre </h4>
                        <h2 className="md:text-lg text-md text-darky-800 font-semibold pb-3">Faites-nous part de vos projets </h2>
                        <span className="w-8 h-1.5 bg-primary-400"></span>
                        <p className='text-base font-medium text-darky-600 mt-8 text-center md:text-left'>
                            Notre équipe se fera un plaisir de vous aider a mettre en place une solution adapté a tout vos besoins en matière de signalisation routières.
                        </p>
                    </div>

                    <div className="md:w-1/2 w-full py-4">
                        <form onSubmit={handleSubmit} className="py-2 w-full px-4 md:px-8">
                            <div className="flex flex-col items-start justify-between pt-2 pb-3">
                                <label htmlFor="fullname" className="text-darky-400 font-medium text-base ml-2">Nom</label>
                                <input
                                    value={fullname}
                                    onChange={onChange}
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
                                    <input value={email} onChange={onChange} type="email" name="email" id="email" placeholder="Entrez votre courriel"
                                        className="w-full py-3 px-2 text-darky-600 placeholder-darky-600  font-medium bg-darky-100 rounded-md border-2 border-transparent focus:border-2 focus:border-primary-300 outline-none transition-all ease-in-out"
                                    />
                                </div>
                                <div className="w-full flex flex-col items-start justify-around pt-2 pb-3 pl-2">
                                    <label htmlFor="phone" className="text-darky-400 font-medium text-base ml-2">Téléphone</label>
                                    <input value={phone} onChange={onChange} type="number" name="phone" placeholder="+1-438-526-5465" id="phone"
                                        className="w-full py-3 px-2 text-darky-600 placeholder-darky-600  font-medium bg-darky-100 rounded-md border-2 border-transparent focus:border-2 focus:border-primary-300 outline-none transition-all ease-in-out" />
                                </div>
                            </div>
                            <div className="w-full flex flex-row justify-between items-start">
                                <div className="w-full flex flex-col items-start justify-around pt-2 pb-3 pr-2">
                                    <label htmlFor="company" className="text-darky-400 font-medium text-base ml-2">Entreprise</label>
                                    <input value={company} onChange={onChange} type="text" name="company" placeholder="Entrer le nom de l'entreprise" id="company"
                                        className="w-full py-3 px-2 text-darky-600 placeholder-darky-600  font-medium bg-darky-100 rounded-md border-2 border-transparent focus:border-2 focus:border-primary-300 outline-none transition-all ease-in-out"
                                    />
                                </div>
                                <div className="w-full flex flex-col items-start justify-around  pt-2 pb-3 pl-2">
                                    <label htmlFor="role" className="text-darky-400 font-medium text-base ml-2">Role</label>
                                    <input value={role} onChange={onChange} type="text" name="role" id="role" placeholder="Votre role dans l'entreprise"
                                        className="w-full py-3 px-2 text-darky-600 placeholder-darky-600  font-medium bg-darky-100 rounded-md border-2 border-transparent focus:border-2 focus:border-primary-300 outline-none transition-all ease-in-out"
                                    />
                                </div>
                            </div>
                            <div className="flex flex-col items-start justify-around pt-2 pb-3">
                                <label htmlFor="message" className="text-darky-400 font-medium text-base ml-2">Message</label>
                                <textarea value={message} onChange={onChange} name="message" id="message" placeholder="Entrez les détails"
                                    className="w-full pt-2 pb-12 px-2 text-darky-600 placeholder-darky-600  font-medium bg-darky-100 rounded-md border-2 border-transparent focus:border-2 focus:border-primary-300 outline-none transition-all ease-in-out"
                                ></textarea>
                            </div>
                            <div className="flex flex-col items-start justify-around pt-2 pb-3">
                                <Button type='text' size='md' icon='true'  label={sending ? 'Envois en cours' : 'Envoyer'} type='submit' >
                                    <Icon.LuArrowRight size='18' />
                                </Button>

                            </div>

                        </form>
                    </div>
                </div>
            </div>
        </>

    )
}

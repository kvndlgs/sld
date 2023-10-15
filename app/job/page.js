'use client'
import RootLayout from '@/app/layout'
import Wrapper from '@/components/wrapper/Wrapper'
import * as React from 'react'
import * as Icon from 'react-icons/lu'

export default function Job(){
    const [fullname, setFullname] = React.useState();
    const [email, setEmail] = React.useState();
    const [phone, setPhone] = React.useState();
    const [file, setFile] = React.useState();

    const FileInput = () => {
        return (
        <input
          required
          className="w-full py-3 px-2 text-darky-600 placeholder-darky-600  font-medium bg-darky-100 rounded-md border-2 border-transparent focus:border-2 focus:border-primary-300 outline-none transition-all ease-in-out"
          type='file'
          value={file}
          onChange={(e) => setFullname(e.target.value)}

        />
        )
    }

    return (
        <RootLayout>
        <Wrapper>
          <div className="w-full py-10 md:py-10 px-4 md:px-12">
            <div className="flex flex-col md:flex-row  items-center justify-around md:py-8 py-4 mx-auto text-center">
            <div className="w-full md:w-1/2 flex flex-col md:items-start items-center justify-around pt-6 pb-16 mx-auto">
                <h4 className="text-md text-darky-300 font-medium pb-4"> Carrières </h4>
                <h2 className="text-xl text-darky-700 font-semibold pb-6"> Faites le grand saut dès aujourd'hui </h2>
                <span className="w-12 h-1 bg-primary-400"></span>
                <p className='text-base font-medium mt-4 text-center md:text-left '>
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
                      onChange={(e) => setFullname(e.target.value)}
                      className="w-full py-3 px-2 text-darky-600 placeholder-darky-600  font-medium bg-darky-100 rounded-md border-2 border-transparent focus:border-2 focus:border-primary-300 outline-none transition-all ease-in-out"
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
                      onChange={(e) => setPhone(e.target.value)}
                      className="w-full py-3 px-2 text-darky-600 placeholder-darky-600  font-medium bg-darky-100 rounded-md border-2 border-transparent focus:border-2 focus:border-primary-300 outline-none transition-all ease-in-out"
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
                      onChange={(e) => setFullname(e.target.value)}
                      className="w-full py-3 px-2 text-darky-600 placeholder-darky-600  font-medium bg-darky-100 rounded-md border-2 border-transparent focus:border-2 focus:border-primary-300 outline-none transition-all ease-in-out"
                    />
                    </div>
                    <div className='flex flex-col justify-around items-start'>

                        <label className='text-darky-400 font-medium text-md pb-2 pt-3 ml-2'> C.V. </label>
                        <FileInput 
                        />
                    </div>
                    <div className="flex flex-col items-start justify-around pt-2 pb-3">
                        <button 
                        type="submit" 
                        className="self-end mt-3 py-3 px-8 text-primary-700 text-base font-semibold rounded-md shadow-md bg-primary-300 inline-flex items-center justify-around font-semibold hover:bg-primary-600 hover:text-primary-200"> 
                        Envoyer <Icon.LuArrowRight size="20" className="ml-2 font-semibold" /> 
                     </button>

</div>
            </form>
            </div>
            </div>
          </div>
        </Wrapper>
    </RootLayout>
    )
}
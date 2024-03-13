import React from 'react'
import { PhoneIcon, MapPinIcon, EnvelopeIcon } from "@heroicons/react/24/solid";
import { useForm, SubmitHandler } from "react-hook-form"

type Inputs = {
name:string;
email: string;
subject:string;
message:string;
}

type Props = {}

function Contactme({}: Props) {
  const {
    register,
    handleSubmit,
   
  } = useForm<Inputs>()
  const onSubmit: SubmitHandler<Inputs> = (formData) => {
    window.location.href = `mailto:vasanth9442tvr@gmail.com?subject=${formData.subject}&body=${formData.message}`;
  };
  return (
    <div className='h-screen flex relative flex-col text-center md:text-left md:flex-rowmax-w-7xl px-10 justify-evenly mx-auto items-center'>
      <h3 className='absolute top-24 uppercase tracking-[20px] text-gray-500 text-2xl'>
        Contact 
        </h3>
        <div className='flex flex-col space-y-10'>
          <h4 className=' text-center font-semibold text-4xl'>Let's make something {" "}<span className='decoration-[#c13f3f]/40 underline'>amazing</span> together</h4>
          <div className="flex items-center space-x-5 justify-center">
            <PhoneIcon className='text-[#c13f3f] h-7 w-7 animate-pulse'/>
            <p className='text-2xl'>+91 9442241987</p>
          </div>
          <div className="flex items-center space-x-5 justify-center">
            <EnvelopeIcon className='text-[#c13f3f] h-7 w-7 animate-pulse'/>
            <p className='text-2xl'>vasanth9442tvr@gmail.com</p>
          </div>
          <div className="flex items-center space-x-5 justify-center">
            <MapPinIcon className='text-[#c13f3f] h-7 w-7 animate-pulse'/>
            <p className='text-2xl'>Tiruvarur,Tamil Nadu India</p>
          </div>
        </div>
        <form onSubmit={handleSubmit(onSubmit)} className='flex flex-col space-y-2 w-fit mx-auto'>
          <div className='flex space-x-2'>
            <input {...register('name')} placeholder='Name' className='contactInput' type="text" />
            <input {...register('email')} placeholder='Email' className='contactInput' type="text" />
          </div>
          <input {...register('subject')} placeholder='Subject' className='contactInput' type="text" />
          <textarea {...register('message')} placeholder='Message' className='contactInput'/>
          <button type='submit' className="bg-[#c13f3f] py-5 px-10 rounded-md text-slate-100 font-bold text-lg">Submit</button>
        </form>
        </div>
  )
}

export default Contactme
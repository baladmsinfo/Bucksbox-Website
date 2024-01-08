'use client'


import { channel } from 'diagnostics_channel'
import React, { useState } from 'react'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useRouter } from 'next/navigation';

type Props = {}

type FormFields = {
        message: string,
        type: string,
        email: string,
        firstname: string,
        lastname: string,
        mobilenumber: string,
        subject: string,

}

type FormState = {
    data: FormFields
}


const ContactForm = (props: Props) => {

    const router = useRouter()
 
    const success =()=> toast("Enquiry Submited Successfully!", {type:'success'});
    const failed =()=> toast("Inavlid Data!", {type: 'error'});

    const url = "https://cms.bucksbox.in/api/enquiries"

    

    const [formData, setFormData] = useState<FormFields>({
        message: '',
        type: '',
        email: '',
        firstname: '',
        lastname: '',
        mobilenumber: '',
        subject: '',
    })

    const onSubmit = async()=>{
        try {
            const response = await fetch(url, {
                method: 'POST',
                body: JSON.stringify({
                    data: {
                        ...formData,
                        channel: 'company',
                        status: true
                    }  ,
    
                }),
                mode:"cors",
                headers: {
                    'Content-Type': 'application/json',
                }
            })
            success()
            router.push('/')
            console.log(response);
            
            console.log(formData);
            console.log(typeof success);
            
        } catch (error) {
            failed()
            console.log(error);
            
        }
       
        
    }
    const handleChange = (e:React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>)=>{
        setFormData((prev)=>({...prev, [e.target.name]: e.target.value.toLowerCase()}))
    }
    

    return (
        <section className="text-gray-600 body-font relative">
            
            <div className="xl:container px-5 py-24 mx-auto flex lg:flex-row flex-col">
                <div className=" lg:w-1/2 w-full bg-gray-300 rounded-lg overflow-hidden sm:mr-10 lg:p-10 p-5 flex items-end justify-start relative">
                <iframe width="100%"
                        height="100%"
                        className="absolute inset-0"
                        frameBorder={0}
                        title="map"
                        marginHeight={0}
                        marginWidth={0}
                        scrolling="no"
                        src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d15711.546645415294!2d78.7889184!3d10.1083625!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3b0067dad2808cc7%3A0xe4b64aa13ea248be!2sBUCKSBOX!5e0!3m2!1sen!2sin!4v1704687044330!5m2!1sen!2sin"
                        style={{ filter: " contrast(1.2) opacity(0.4)" }} ></iframe>
                    <div className="bg-white relative flex flex-wrap py-6 rounded shadow-md">
                        <div className="lg:w-1/2 px-6">
                            <h2 className="title-font font-semibold text-gray-900 tracking-widest text-xs">
                                ADDRESS
                            </h2>
                            <p className="mt-1">
                            No 8, Church Street, Kottaiyur, Tamil Nadu 630106
                            </p>
                        </div>
                        <div className="lg:w-1/2 px-6 mt-4 lg:mt-0">
                            <h2 className="title-font font-semibold text-gray-900 tracking-widest text-xs">
                                EMAIL
                            </h2>
                            <a className="text-purple-500 leading-relaxed">support@bucksbox.in</a>
                            <h2 className="title-font font-semibold text-gray-900 tracking-widest text-xs mt-4">
                                PHONE
                            </h2>
                            <p className="leading-relaxed">+91 6382 765 870</p>
                        </div>
                    </div>
                </div>
                <form className=" lg:w-1/2 w-full bg-white grid gap-4 grid-cols-2 lg:p-10 p-5">
                    <h2 className="text-gray-900 col-span-2 md:text-5xl text-4xl  mb-1 font-extrabold title-font">
                        Contact Us
                    </h2>
                    <p className="leading-relaxed mb-5 text-gray-600 col-span-2">
                        Got questions? Contact us for quick and personalized assistance. Your queries resolved, hassle-free!
                    </p>
                    <div className="relative mb-4 max-md:col-span-2">
                        <label htmlFor="name" className="leading-7 text-sm text-gray-600">
                            First Name <span className='text-purple-500'>*</span>
                        </label>
                        <input
                            required
                            onChange={handleChange}
                            type="text"
                            id="first_name"
                            name="firstname"
                            className="w-full bg-white rounded border border-gray-300 focus:border-purple-500 focus:ring-2 focus:ring-purple-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                        />
                    </div>
                    <div className="relative mb-4 max-md:col-span-2">
                        <label htmlFor="name" className="leading-7 text-sm text-gray-600">
                            Last Name <span className='text-purple-500'>*</span>
                        </label>
                        <input
                            required
                            onChange={handleChange}

                            type="text"
                            id="last_name"
                            name="lastname"
                            className="w-full bg-white rounded border border-gray-300 focus:border-purple-500 focus:ring-2 focus:ring-purple-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                        />
                    </div>
                    <div className="relative mb-4 max-md:col-span-2">
                        <label htmlFor="email" className="leading-7 text-sm text-gray-600">
                            Email <span className='text-purple-500'>*</span>
                        </label>
                        <input
                            required
                            onChange={handleChange}

                            type="email"
                            id="email"
                            name="email"
                            className="w-full bg-white rounded border border-gray-300 focus:border-purple-500 focus:ring-2 focus:ring-purple-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                        />
                    </div>
                    <div className="relative mb-4 max-md:col-span-2">
                        <label htmlFor="number" className="leading-7 text-sm text-gray-600">
                            Mobile Number <span className='text-purple-500'>*</span>
                        </label>
                        <input
                            required
                            onChange={handleChange}

                            type="number"
                            id="number"
                            name="mobilenumber"
                            className="w-full bg-white rounded border border-gray-300 focus:border-purple-500 focus:ring-2 focus:ring-purple-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                        />
                    </div>
                    <div className="relative mb-4 col-span-2">
                        <label htmlFor="email" className="leading-7 text-sm text-gray-600">
                            Subject <span className='text-purple-500'>*</span>
                        </label>
                        <input
                            required
                            onChange={handleChange}

                            type="text"
                            id="subject"
                            name="subject"
                            className="w-full bg-white rounded border border-gray-300 focus:border-purple-500 focus:ring-2 focus:ring-purple-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                        />
                    </div>
                    <div className='col-span-2 '>
                        <label htmlFor="email" className="leading-7 text-sm text-gray-600">
                            Query For <span className='text-purple-500'>*</span>
                        </label>
                        <select onChange={handleChange} required name='type' className="py-3 border-2 border-gray-200 rounded-md  px-4 pe-9 block w-full b text-sm focus:border-blue-500 focus:ring-blue-500 disabled:opacity-50 disabled:pointer-events-none ">
                            <option defaultValue={'digital commerce'}>Ecommerce</option>
                            <option value={'paymentgateway'}>Payment Gateway</option>
                            <option value={'soundbox'}>Soundbox</option>
                            <option value={'pos'}>POS</option>
                            <option value={'others'}>Others</option>
                        </select>
                    </div>

                    <div className="relative mb-4 col-span-2 ">
                        <label htmlFor="message" className="leading-7 text-sm text-gray-600">
                            Message <span className='text-purple-500'>*</span>
                        </label>
                        <textarea
                            required
                            onChange={handleChange}
                            id="message"
                            name="message"
                            className="w-full bg-white rounded border border-gray-300 focus:border-purple-500 focus:ring-2 focus:ring-purple-200 h-32 text-base outline-none text-gray-700 py-1 px-3 resize-none leading-6 transition-colors duration-200 ease-in-out"
                            defaultValue={""}
                        />
                    </div>
                    <button onClick={(e)=>{
                        e.preventDefault()
                        onSubmit()
                    }} className="text-white max-md:col-span-2 bg-purple-500 border-0 py-2 px-6 focus:outline-none hover:bg-purple-600 rounded text-lg">
                        Submit
                    </button>
                   
                </form>
            </div>
        </section>

    )
}

export default ContactForm
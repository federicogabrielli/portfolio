import React, { useState } from 'react'
import emailjs from '@emailjs/browser'
import StarsCanvas from '../components/Models/Stars';
import Alert from '../components/Alert';
import { motion } from 'motion/react';
import RocketCanvas from '../components/RocketCanvas';

const Contact = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        message: '',
    })
    const [isLoading, setisLoading] = useState(false);
    const [showAlert, setshowAlert] = useState(false);
    const [alertType, setAlertType] = useState('success');
    const [alertMessage, setAlertMessage] = useState ('empty');
    const handleChange = (e) => {
        setFormData({...formData, [e.target.name]: e.target.value});
    };
    const handleSumbit = async (e) => {
        e.preventDefault();
        setisLoading(true);

        try {
            console.log('Form Submitted:', formData);
            await emailjs.send('service_45keyk8', 'template_sfp3fwm', {
            from_name: formData.name,
            to_name: 'Federico Gabrielli',
            from_email: formData.email,
            to_email: 'federicogabrielli98@gmail.com',
            message: formData.message,
    }, 'ZixYRt0qXZDTr2OhW');
            setisLoading(false);
            setFormData({name:'', email:'', message:''});
            setAlertType('success');
            setAlertMessage('Your Message has been sent!')
            setshowAlert(true);
            setTimeout(()=>{
                setshowAlert(false);
            }, 3000)
        } catch (error) {
            setisLoading(false);
            setAlertType('danger');
            setAlertMessage('Something went wrong!')
            setshowAlert(true);
            setTimeout(()=>{
                setshowAlert(false);
            }, 3000)
        }
        
    };

  return (
    <section id='contact' className='relative flex items-center c-space mt-20 md:mt-30 pb-8'>
        {showAlert && <Alert type={alertType} text={alertMessage} />}
        <div className='absolute inset-y-0 left-1/2 -translate-x-1/2 w-screen'>
            <StarsCanvas />
        </div>
        <div className='absolute inset-0 z-0 w-screen'>
            <RocketCanvas />
        </div>
        <motion.div className='flex flex-col items-center justify-center max-w-md p-5 mx-auto border border-white/10 rounded-2xl bg-black-100 z-10'
                       initial={{opacity: 0, x: -50}}
                       whileInView={{opacity: 1, x: 0}}
                       transition={{duration: 1}}
                       viewport={{ once: true }}>
            <div className='flex flex-col items-center w-full mb-6'> 
                <p className='text-[#839cb5] sm:text-[18px] text-14-[px] uppercase tracking-wider'>Get in Touch</p>
                <h2 className='text-white font-black md:text-[60px] sm:-[50px] xs:text-[40px] text-[30px]'>Contact</h2>
                <p className='font-normal text-neutral-400'>Whether you're developing advanced mechanical systems, exploring innovative materials, or working on complex engineering challenges, I'm always open to discussing new ideas and collaborations.</p>
            </div>
        <form className='w-full' onSubmit={handleSumbit}>
            <div className='mb-5'>
                <label htmlFor='name' className='feild-label'>Name</label>
                <input id='name' 
                       name='name'
                       type='text'
                       className='field-input field-input-focus'
                       autoComplete='name'
                       value={formData.name}
                       onChange={handleChange}
                       required/>
                       </div>
            <div className='mb-5'>
                <label htmlFor='email' className='feild-label'>Email</label>
                <input id='email' 
                       name='email'
                       type='email'
                       className='field-input field-input-focus'
                       autoComplete='email'
                       value={formData.email}
                       onChange={handleChange}
                       required/>
                       </div>
            <div className='mb-5'>
                <label htmlFor='message' className='feild-label'>Message</label>
                <textarea id='message' 
                       name='message'
                       type='text'
                       rows='5'
                       className='field-input field-input-focus'
                       autoComplete='message'
                       value={formData.message}
                       onChange={handleChange}
                       required/>
                       </div>

            
            <button type='submit' className='w-full px-1 py-3 text-lg text-center rounded-md cursor-pointer bg-radial from-lavender to-royal hover-animation'>
                {!isLoading?"Send": "Sending..."}
                </button>
        </form>
        </motion.div>
    </section>
  )
}

export default Contact
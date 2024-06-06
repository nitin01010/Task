import React, { useState } from 'react'
import Logo from '../../Images/EZ Works Blue@2x.png'
import { toast } from 'react-toastify';
import axios from 'axios';

const CardRight = () => {
    const [input, setinput] = useState({
        email: ''
    });

    const [errors, setErrors] = useState({
        email: ''
    });

    const validateEmail = (email) => {
        const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return re.test(String(email).toLowerCase());
    };

    const Handler = (e) => {
        let { value, name } = e.target;
        setinput(values => ({ ...values, [name]: value }));
        setErrors(values => ({ ...values, [name]: '' }));
    }

    const HandlerSubmit = () => {
        let valid = true;
        let newErrors = { email: '' };

        if (input.email === '') {
            newErrors.email = 'Email is required';
            valid = false;
        } else if (!validateEmail(input.email)) {
            newErrors.email = 'Email format is incorrect';
            valid = false;
        }

        if (valid) {
            console.log(input);
            toast.success(`Welcome ${input.email}`);
            setinput({ email: '' });
        } else {
            setErrors(newErrors);
        }
    }

    return (
        <div className=' min-w-[41%] w-[100%] md:w-[41%] p-3'>
            <img src={ Logo } className=' object-cover w-72' />
            <br />
            <h2 className=' text-lg md:text-2xl font-medium mt-3'>Suite Of Business Support Services</h2>
            <br />
            <p className=' mb-3 mt-2'>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt...Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
            </p>
            <br />
            <span className=' flex gap-4 flex-wrap'>
                <input
                    type="email"
                    name="email"
                    value={ input.email }
                    onChange={ (e) => Handler(e) }
                    className='border-gray-400 border p-3 w-[98%] md:w-[300px] outline-none rounded'
                    required
                    minLength={ 6 }
                    placeholder='Email Address'
                />
                <button
                    className='p-2 py-3 rounded w-[98%] md:w-auto text-white bg-[#EA7B2C] hover:bg-[#f99a57]'
                    onClick={ () => HandlerSubmit() }
                >
                    Contact Me
                </button>
            </span>
            { errors.email && <p className='text-red-500 mt-2'>{ errors.email }</p> }
        </div>
    )
}

export default CardRight;

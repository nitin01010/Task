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

    const HandlerSendApi = async () => {
        const { email } = input;
        const response = await axios.post("http://34.225.132.160:8002/api", { email });
        const result = response.data;
        return result;
    }

    const HandlerSubmit = async () => {
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
            const newResult = await HandlerSendApi();
            console.log(newResult);
            const { message, } = newResult;
            toast.success(message);
            setinput({ email: '' });
        } else {
            setErrors(newErrors);
        }
    }

    return (
        <div className='w-[100%] text-center md:text-start transition-all ease-in-out delay-150  lg:w-[50%]'>
            <img src={ Logo } className=' object-cover w-60 m-auto md:m-0   lg:w-80   mt-9 ' />
            <h2 className=' text-[#112949] text-base  md:text-3xl  mt-7 font-semibold  md:font-normal '>Suite Of Business Support Services</h2>
            <p className=' mt-12 text-[#112949]'>
                Lorem ipsum dolor sit amet, consectetur adipiscing  elit, sed do eiusmod tempor incididunt...Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
            </p>
            <span className=' flex gap-4 mt-8 mb-4 flex-wrap'>
                <input
                    type="email"
                    name="email"
                    value={ input.email }
                    onChange={ (e) => Handler(e) }
                    className=' p-3 border rounded outline-none bg-slate-50 w-[100%] lg:w-[414px]'
                    required
                    minLength={ 6 }
                    placeholder='Email Address'
                />
                <button
                    className=' p-3 w-[100%]  lg:w-[120px] text-white bg-[#EA7B2C] rounded-md '
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

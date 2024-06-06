import React from 'react'
import Logo from "../../../Images/Research@4x.png";

const Card = () => {
    return (
        <div className=' bg-[#112949]  w-[300px] max-w-[311px] min-h-[200px] rounded-sm text-white p-3 '>
            <div className=' flex justify-start gap-3 items-center '>
                <img src={ Logo } alt='logo' />
                <h3 className=' text-[#3CC3F2] font-medium'>Presentation Design</h3>
            </div>
            <p className=' font-light mt-2'>
                Lorem ipsum dolor sit amet consectetur adipisicing
                Lorem ipsum dolor sit amet consectetur adipisicing
            </p>
        </div>
    )
}

export default Card
import React from 'react'
import Logo from "../../../Images/Research@4x.png";

const Card = ({ title }) => {
    return (
        <div className=' text-white cursor-pointer bg-[rgb(17,41,73)] p-4 rounded-lg w-[311px] min-w-[311px]   min-h-[254px] ' >
            <div className='flex gap-4 items-center '>
                <img src={ Logo } />
                <p>{ title }</p>
            </div>
            <div className='mt-5'>
                <p>
                    Lorem ipsum dolor sit amet, lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet
                </p>
            </div>
        </div>
    )
}

export default Card
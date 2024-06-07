import React from 'react'
import Card from './Card/Card'

const CardLeft = () => {
    return (
        <div className='flex flex-wrap gap-10 justify-center p-1 w-[100%] lg:grid-cols-2  lg:w-[90%]   2xl:grid 2xl:grid-cols-3'>
            <Card title="Presentation Design" />
            <Card title="Audio - Visual Production" />
            <Card title="Translation Services" />
            <Card title="Graphic Design" />
            <Card title="Research & Analytics" />
            <Card title="Data Processing" />
        </div>
    )
}

export default CardLeft
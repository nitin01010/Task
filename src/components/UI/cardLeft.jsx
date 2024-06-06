import React from 'react'
import Card from './Card/Card'

const CardLeft = () => {
    return (
        <div className="flex flex-wrap justify-start   md:grid grid-cols-1 md:grid-cols-1  lg:grid-cols-2 xl:grid-cols-2 2xl:grid-cols-3 p-2 gap-4">
            <Card />
            <Card />
            <Card />
            <Card />
            <Card />
            <Card />
            {/* We can Map this ALso but i dont have data   */ }
        </div>
    )
}

export default CardLeft
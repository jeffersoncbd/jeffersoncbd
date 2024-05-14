"use client"

import React, { useContext } from 'react'
import { CarouselContext } from './Panel'

interface Properties {
    itemKey: string
    children: React.ReactNode
}

const CarouselItem: React.FC<Properties> = (properties) => {
    const id = useContext(CarouselContext)

    if (id !== properties.itemKey && id !== '') {
        return ''
    }

    return (
        <div
            id={properties.itemKey}
            className={`carousel-item border p-8 border-emerald-800 border-solid rounded-lg ${id === '' && 'hidden'}`}
        >
            {properties.children}
        </div>
    )
}

export default CarouselItem

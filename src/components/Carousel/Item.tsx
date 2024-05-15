"use client"

import useWindowSize from '@/hooks/windowSize'
import React, { useContext, useMemo } from 'react'
import { CarouselContext } from './Panel'

interface Properties {
    itemKey: string
    children: React.ReactNode
}

const CarouselItem: React.FC<Properties> = (properties) => {
    const windowSize = useWindowSize()

    const { ids, index, itemsLength } = useContext(CarouselContext)

    const thisIsLast = useMemo(() => {
        return index[1] === 0 && index[0] === itemsLength - 1 && properties.itemKey === ids[1]
    }, [ids, index, itemsLength, properties.itemKey])

    if (!ids.includes(properties.itemKey) && index.length > 0) {
        return ''
    }

    return (
        <div
            id={properties.itemKey}
            key={properties.itemKey}
            className={`carousel-item border p-8 border-emerald-800 border-solid rounded-lg ${windowSize[0] <= 700 ? 'w-full' : 'w-1/2'} ${index.length === 0 && 'hidden'} ${thisIsLast && 'order-last'}`}
        >
            {properties.children}
        </div>
    )
}

export default CarouselItem

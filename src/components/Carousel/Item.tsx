"use client"

import React, { useContext, useEffect, useMemo, useState } from 'react'
import { CarouselContext } from './Panel'

interface Properties {
    itemKey: string
    children: React.ReactNode
}

const CarouselItem: React.FC<Properties> = (properties) => {
    const { show } = useContext(CarouselContext)

    const [mounted, setMounted] = useState(false)
    const [mounting, setMounting] = useState(false)
    const [dismounting, setDismounting] = useState(false)

    useEffect(() => {
        if (!mounted && show === properties.itemKey) {
            setMounting(true)
            setTimeout(() => {
                setMounted(true)
                setMounting(false)
            }, 500)
        } else if (mounted && show !== properties.itemKey) {
            setDismounting(true)
            setTimeout(() => {
                setMounted(false)
                setDismounting(false)
            }, 500)
        }
    }, [mounted, properties.itemKey, show])

    const position = useMemo(() => {
        if (mounting) {
            return 'left-full'
        } else if (dismounting || !mounted) {
            return '-left-full'
        } else {
            return 'left-0'
        }
    }, [dismounting, mounted, mounting])

    return (
        <div
            id={properties.itemKey}
            key={properties.itemKey}
            className={`carousel-item ${position} ${dismounting && 'opacity-0'} ${!mounted && 'opacity-0'} relative w-full transition-all duration-500`}
        >
            {!mounted ? '' : (
                <div className={`absolute left-0 right-0 p-8 border border-emerald-800 border-solid rounded-lg`}>
                    {properties.children}
                </div>
            )}
        </div>
    )
}

export default CarouselItem

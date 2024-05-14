"use client"

import React, { createContext, useEffect, useState } from "react"

interface Properties {
    id: string
    children: React.ReactNode
}

export const CarouselContext = createContext('')

const CarouselPanel: React.FC<Properties> = ({ id, children }) => {
    const [showItem, setShowItem] = useState('')

    useEffect(() => {
        let titles: string[] = []
        document.querySelectorAll(`#${id} > div.carousel-item`).forEach((item) => {
            titles.push(item.id)
        })

        let timeoutId: NodeJS.Timeout | null = null
        function updateItem(index: number) {
            setShowItem(titles[index])
            let newIndex = index
            if (index === titles.length - 1) {
                newIndex = 0
            } else {
                newIndex++
            }
            timeoutId = setTimeout(() => updateItem(newIndex), 5000)
        }

        timeoutId = setTimeout(() => updateItem(0), 100)
        return () => {
            if (timeoutId !== null) {
                clearInterval(timeoutId)
            }
        }

    }, [children, id])

    return (
        <CarouselContext.Provider value={showItem}>
            <div id={id}>
                {children}
            </div>
        </CarouselContext.Provider>
    )
}

export default CarouselPanel

"use client"

import useWindowSize from "@/hooks/windowSize"
import React, { createContext, useEffect, useState } from "react"

interface Properties {
    id: string
    children: React.ReactNode
}

export const CarouselContext = createContext({
    ids: [''],
    index: [0, 0],
    itemsLength: 0
})

const CarouselPanel: React.FC<Properties> = ({ id, children }) => {
    const windowSize = useWindowSize()

    const [ids, setIds] = useState<string[]>([])
    const [index, setIndex] = useState<number[]>([])
    const [itemsLength, setItemsLength] = useState(0)

    useEffect(() => {
        let titles: string[] = []
        document.querySelectorAll(`#${id} > div.carousel-item`).forEach((item) => {
            titles.push(item.id)
        })

        setItemsLength(titles.length)

        let timeoutId: NodeJS.Timeout | null = null
        function updateItem(index: [number, number]) {
            setIndex([...index])
            setIds([titles[index[0]], titles[index[1]]])
            let newIndex = index
            if (titles.length > 2) {
                if (index[0] === titles.length - 1) {
                    newIndex[0] = 0
                } else {
                    newIndex[0]++
                }
                if (index[1] === titles.length - 1) {
                    newIndex[1] = 0
                } else {
                    newIndex[1]++
                }
            }
            timeoutId = setTimeout(() => updateItem(newIndex), 5000)
        }

        if (titles.length === 1 || windowSize[0] <= 700) {
            timeoutId = setTimeout(() => updateItem([0, 0]), 100)
        } else if (titles.length >= 2) {
            timeoutId = setTimeout(() => updateItem([0, 1]), 100)
        }
        return () => {
            if (timeoutId !== null) {
                clearInterval(timeoutId)
            }
        }

    }, [children, id, windowSize])

    return (
        <CarouselContext.Provider value={{ ids, index, itemsLength }}>
            <div id={id} className="flex gap-4 w-full">
                {children}
            </div>
        </CarouselContext.Provider>
    )
}

export default CarouselPanel

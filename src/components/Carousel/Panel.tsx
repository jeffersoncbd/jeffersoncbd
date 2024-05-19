"use client"

import useWindowSize from "@/hooks/windowSize"
import React, { createContext, useEffect, useState } from "react"

interface Properties {
    id: string
    children: React.ReactNode
}

export const CarouselContext = createContext({
    ids: [''],
    show: '',
    itemsLength: 0
})

const CarouselPanel: React.FC<Properties> = ({ id, children }) => {
    const windowSize = useWindowSize()

    const [ids, setIds] = useState<string[]>([])
    const [show, setShow] = useState('')
    const [itemsLength, setItemsLength] = useState(0)

    useEffect(() => {
        let ids: string[] = []
        document.querySelectorAll(`#${id} > div.carousel-item`).forEach((item) => {
            ids.push(item.id)
        })

        setIds(ids)
        setItemsLength(ids.length)

        let timeoutId: NodeJS.Timeout | null = null
        function updateItem(id: string) {
            setShow(id)
            let newId = id
            if (ids.length > 2) {
                const index = ids.findIndex((item) => item === id)
                if (index === ids.length - 1) {
                    newId = ids[0]
                } else {
                    newId = ids[index + 1]
                }
            }
            timeoutId = setTimeout(() => updateItem(newId), 8000)
        }

        timeoutId = setTimeout(() => updateItem(ids[0]), 200)

        return () => {
            if (timeoutId !== null) {
                clearInterval(timeoutId)
            }
        }

    }, [children, id, windowSize])

    return (
        <CarouselContext.Provider value={{ ids, show, itemsLength }}>
            <div id={id} className="w-full">
                {children}
            </div>
        </CarouselContext.Provider>
    )
}

export default CarouselPanel

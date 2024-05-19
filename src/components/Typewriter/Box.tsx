"use client"

import { useContext, useEffect, useState } from "react"
import { TypewriterCursor } from "./Cursor"

interface Properties {
    children: React.ReactNode
    order: number
    parallel?: boolean
}

const TypewriterBox: React.FC<Properties> = ({ order, children, parallel }) => {
    const { typingIndex, registerIndex, nextIndex } = useContext(TypewriterCursor.Context)

    const [show, setShow] = useState(false)

    useEffect(() => {
        registerIndex(order)
    }, [order, registerIndex])

    useEffect(() => {
        if (order === typingIndex && !show) {
            setShow(true)
        }
    }, [order, show, typingIndex])

    useEffect(() => {
        if (order === typingIndex && show && parallel !== true) {
            setTimeout(() => nextIndex(), 2000)
        }
    }, [nextIndex, order, show, typingIndex, parallel])

    if (!show) {
        return null
    }

    return <>{children}</>
}

export default TypewriterBox

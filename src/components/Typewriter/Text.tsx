"use client"

import { useTypewriter } from '@/hooks/typewriter';
import React, { DetailedHTMLProps, HTMLAttributes, useContext, useEffect } from 'react';
import { TypewriterCursor } from './Cursor';

interface Properties extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement> {
    children: string
    speed: number
    order: number
}

const TypewriterText: React.FC<Properties> = ({ speed, order, ...properties }) => {
    const { typingIndex, registerIndex, nextIndex } = useContext(TypewriterCursor.Context)
    const { text, start } = useTypewriter(properties.children, speed);

    useEffect(() => {
        registerIndex(order)
    }, [order, registerIndex])

    useEffect(() => {
        if (order === typingIndex && text.length === 0) {
            start()
        }
    }, [order, start, text.length, typingIndex])

    useEffect(() => {
        if (text === properties.children && order === typingIndex) {
            nextIndex()
        }
    }, [nextIndex, order, properties.children, text, typingIndex])

    return (
        <div {...properties}>
            {text}{typingIndex === order && <TypewriterCursor.Symbol />}
        </div>
    )
}

export default TypewriterText

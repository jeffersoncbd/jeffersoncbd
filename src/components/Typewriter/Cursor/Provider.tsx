"use client"

import React, { createContext, useCallback, useState } from 'react';

interface ContextProperties {
    typingIndex: number
    registerIndex: (index: number) => void
    nextIndex: () => void
}

export const TypewriterCursorContext = createContext<ContextProperties>({
    typingIndex: 0,
    registerIndex: () => undefined,
    nextIndex: () => undefined
})

interface Properties {
    children: React.ReactNode
}

const TypewriterCursorProvider: React.FC<Properties> = (properties) => {
    const [index, setIndex] = useState(0)
    const [lastIndex, setLastIndex] = useState(0)

    const registerIndex = useCallback((index: number) => {
        if (lastIndex < index) {
            setLastIndex(index)
        }
    }, [lastIndex])

    const nextIndex = useCallback(() => {
        if (index < lastIndex) {
            setIndex((current) => current + 1)
        }
    }, [index, lastIndex])

    return (
        <TypewriterCursorContext.Provider value={{ typingIndex: index, registerIndex, nextIndex }}>
            {properties.children}
        </TypewriterCursorContext.Provider>
    );
}

export default TypewriterCursorProvider

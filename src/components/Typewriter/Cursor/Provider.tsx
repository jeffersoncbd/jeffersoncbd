import React, { createContext } from 'react';

interface Properties {
    children: React.ReactNode
}

const TypewriterCursorContext = createContext(undefined)

const TypewriterCursorProvider: React.FC<Properties> = (properties) => {
    return (
        <TypewriterCursorContext.Provider value={undefined}>
            {properties.children}
        </TypewriterCursorContext.Provider>
    );
}

export default TypewriterCursorProvider

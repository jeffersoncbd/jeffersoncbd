"use client"

import { useTypewriter } from '@/hooks/typewriter';
import React, { DetailedHTMLProps, HTMLAttributes, useMemo } from 'react';
import { TypewriterCursor } from './Cursor';

interface Properties extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement> {
    children: string
    speed: number
    delay?: number
    isLastCursor?: boolean
}

const Typewriter: React.FC<Properties> = ({ speed, delay, isLastCursor, ...properties }) => {
    const [text, awaiting] = useTypewriter(properties.children, speed, delay);

    const complete = useMemo(() => text.length === properties.children.length, [text, properties.children])

    return (
        <div {...properties}>
            {text}{!awaiting && !complete && <TypewriterCursor.Symbol />}{complete && isLastCursor === true && <TypewriterCursor.Symbol />}
        </div>
    )
}

export default Typewriter

"use client"

import React from 'react';

interface Properties {
    size: string
    color: string
    animate: string
    background: string
}

const Planet: React.FC<Properties> = ({ size, color, animate, background }) => {
    return (
        <div
            className={
                `absolute rounded-full ${size} ${color} ${animate} ${background} shadow-[inset_0px_0px_10px_0px_#000] cursor-pointer`
            }
        />
    );
}

export default Planet

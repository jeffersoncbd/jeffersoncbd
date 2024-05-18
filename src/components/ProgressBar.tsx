/* eslint-disable react-hooks/exhaustive-deps */
"use client";

import React, { useEffect, useState } from 'react';

interface Properties {
    value: number
}

const ProgressBar: React.FC<Properties> = ({ value }) => {
    const [progress, setProgress] = useState(0)

    useEffect(() => {
        const id = setInterval(() => {
            if (progress < value) {
                setProgress((current) => current + 1)
            }
        }, 10)
        return () => clearInterval(id)
    }, [progress, value])

    return (
        <div className="progress-bar flex gap-1 w-full">
            {Array(10).fill("").map(
                (_, i) => {
                    let color = ''
                    if ((i + 1) * 10 > progress) {
                        color = 'bg-gray-800'
                    } else if (i >= 8) {
                        color = 'bg-blue-600'
                    } else if (i >= 2) {
                        color = 'bg-green-600'
                    } else {
                        color = 'bg-yellow-600'
                    }
                    return (
                        <div key={i} className={`grow ${color} h-4`} />
                    )
                })}
        </div>
    )
}

export default ProgressBar

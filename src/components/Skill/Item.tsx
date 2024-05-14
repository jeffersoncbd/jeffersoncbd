"use server"

import Image from 'next/image'
import React from 'react'
import ProgressBar from '../ProgressBar'

interface Properties {
    title: string
    iconUrl: string
    progress: number
}

const SkillItem: React.FC<Properties> = ({ title, iconUrl, progress }) => {
    return (
        <div>
            <div className="flex items-center mb-2">
                <div className="grow">
                    <Image src={iconUrl} alt="axum-icon" width={40} height={40} />
                </div>
                <h2 className="title text-xl grow font-bold">{title}</h2>
                <div className="grow" />
            </div>
            <ProgressBar value={progress} />
        </div>
    )
}

export default SkillItem

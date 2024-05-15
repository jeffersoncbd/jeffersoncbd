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
        <div className='flex gap-2'>
            <Image src={iconUrl} alt="axum-icon" width={50} height={50} />
            <div className="grow flex gap-2 flex-col mb-2">
                <h2 className="title text-xl font-bold">{title}</h2>
                <ProgressBar value={progress} />
            </div>
        </div>
    )
}

export default SkillItem

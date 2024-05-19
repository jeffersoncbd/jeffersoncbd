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
        <div className='flex-1 flex gap-2'>
            <Image src={iconUrl} alt="axum-icon" width={0} height={0} className='w-14 h-auto' />
            <div className="flex-1 flex gap-2 flex-col mb-2">
                <h2 className="title text-xl font-bold">{title}</h2>
                <ProgressBar value={progress} />
            </div>
        </div>
    )
}

export default SkillItem

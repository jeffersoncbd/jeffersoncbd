import React from 'react'

interface Properties {
    children: React.ReactNode
}

const SkillStack: React.FC<Properties> = (properties) => (
    <div className="flex flex-col sm:flex-row gap-8">
        {properties.children}
    </div>
)


export default SkillStack

import Typewriter from '@/components/Typewriter';
import React from 'react';

interface Properties { }

const Header: React.FC<Properties> = (properties) => {
    return (
        <div className="h-16">
            <Typewriter className="font-bold text-3xl" speed={100}>
                Jefferson Carlos
            </Typewriter>
            <Typewriter className="inline text-gray-400" speed={40} delay={2200}>
                Desenvolvedor de software
            </Typewriter>
            {' '}
            <Typewriter className="inline text-yellow-400" speed={40} delay={3500} isLastCursor>
                fullstack
            </Typewriter>
        </div>
    );
}

export default Header

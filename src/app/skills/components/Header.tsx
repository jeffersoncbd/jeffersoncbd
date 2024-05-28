import { Typewriter } from '@/components/Typewriter';
import React from 'react';

const Header: React.FC = () => {
    return (
        <div className="h-16">
            <Typewriter.Text order={0} className="font-bold text-3xl" speed={50}>
                Jefferson Carlos
            </Typewriter.Text>
            <Typewriter.Text order={1} className="inline text-gray-400" speed={20}>
                Desenvolvedor de software
            </Typewriter.Text>
            {' '}
            <Typewriter.Text order={2} className="inline text-yellow-400" speed={20}>
                fullstack
            </Typewriter.Text>
        </div>
    );
}

export default Header

import React from 'react';

interface Properties { }

const CarouselTimer: React.FC<Properties> = (properties) => {
    return (
        <div className='p-1'>
            <div className='h-1 bg-emerald-600 rounded'></div>
        </div>
    );
}

export default CarouselTimer

import React from 'react';

interface Properties {
    children?: React.ReactNode
}

const Sun: React.FC<Properties> = ({ children }) => {
    return (
        <div className={`size-1/4 bg-yellow-50 rounded-full shadow-[0px_0px_80px_20px_rgb(254,252,232)]`}>
            <div className={`relative size-full bg-yellow-50 rounded-full shadow-[0px_0px_30px_10px_rgb(254,252,232)] flex justify-center items-center`}>
                {children}
            </div>
        </div>
    );
}

export default Sun

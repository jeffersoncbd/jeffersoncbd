import React from 'react';
import Planet from './celestialBodies/Planet';
import Sun from './celestialBodies/Sun';

interface Properties {
    size: string
}

const System: React.FC<Properties> = ({ size }) => {
    return (
        <div className={`${size} flex justify-center items-center`}>
            <div className="border border-dashed border-gray-700 size-11/12 flex justify-center items-center rounded-full">
                <div className="border border-dashed border-gray-700 size-9/12 flex justify-center items-center rounded-full">
                    <div className="border border-dashed border-gray-700 size-10/12 flex justify-center items-center rounded-full">
                        <div className="border border-dashed border-gray-700 size-9/12 flex justify-center items-center rounded-full">
                            <Sun>
                                <Planet
                                    size="size-1/6"
                                    color="bg-red-700"
                                    animate="animate-circular-first"
                                    background="bg-[linear-gradient(180deg,#00000000_45%,#00000060_55%)]"
                                />
                                <Planet
                                    size="size-1/5"
                                    color="bg-orange-800"
                                    animate="animate-circular-second"
                                    background="bg-[linear-gradient(90deg,#00000000_45%,#00000060_55%)]"
                                />
                                <Planet
                                    size="size-1/3"
                                    color="bg-yellow-800"
                                    animate="animate-circular-third"
                                    background="bg-[linear-gradient(0deg,#00000000_45%,#00000060_55%)]"
                                />
                                <Planet
                                    size="size-1/6"
                                    color="bg-blue-300"
                                    animate="animate-circular-fourth"
                                    background="bg-[linear-gradient(270deg,#00000000_45%,#00000060_55%)]"
                                />
                            </Sun>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default System

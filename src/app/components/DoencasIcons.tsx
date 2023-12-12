import React from 'react';

interface DoencasIconsProps {
    name: string;
    doencaIcon?: React.ReactNode;
}

const DoencasIcons: React.FC<DoencasIconsProps> = ({ name, doencaIcon }) => {
    return (
        <div className="bg-white w-[150px] h-[150px] mr-6 rounded-xl p-4 flex flex-col items-center justify-center shadow-xl">
            {doencaIcon && (
                <div className="custom-icon" style={{ width: '100px', height: '100px' }}>
                    {doencaIcon}
                </div>
            )}
            <p className="text-center font-semibold">{name}</p>
        </div>
    );
};

export default DoencasIcons;

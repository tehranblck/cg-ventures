import Image from "next/image";
import React from "react";

interface CardProps {
    icon: string;
    title: string;
    description: string;
}

const Card: React.FC<CardProps> = ({ icon, title, description }) => {
    return (
        <div className="bg-[#121212] rounded-lg shadow-lg p-6 flex flex-col items-start text-center transition-transform hover:scale-105">
            <Image width={500} height={500} src={icon} alt={title} className="w-32 h-32 mb-4" />
            <h3 className="text-xl font-thin text-left italic mb-4 text-white">{title}</h3>
            <p className="text-gray-400 text-left mt-2">{description}</p>
        </div>
    );
};

export default Card;

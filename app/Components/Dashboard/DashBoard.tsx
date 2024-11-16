'use client';
import Image from "next/image";
import React from "react";

const DashboardImageWithText: React.FC = () => {
    return (
        <section className="relative w-full h-[100vh] bg-gradient-to-b from-black via-gray-900 to-black">
            {/* Görsel */}
            <Image width={1000} height={1000} quality={86}
                src="/static.png" // Görsel yolunu buraya yazın
                alt="Dashboard Overview"
                className="absolute inset-0 w-full h-full object-contain"
            />

            {/* Metin Kutusu */}
            <div className="absolute bottom-32 sm:bottom-4  left-1/2 transform -translate-x-1/6 lg:-translate-x-1/4  text-white p-4 rounded-md max-w-2xl text-center">
                <p className="text-lg sm:text-xl md:text-2xl lg:text-3xl italic">
                    The values <strong className="font-semibold">we provide</strong> are our greatest assurance.
                </p>
            </div>
        </section>
    );
};

export default DashboardImageWithText;

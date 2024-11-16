'use client';
import Image from "next/image";
import React from "react";
import Container from "../Container/Container";

const DashboardImageWithText: React.FC = () => {
    return (
        <Container className="relative w-full overflow-hidden h-[80vh] bg-gradient-to-b from-black via-gray-900 to-black">
            {/* Görsel */}
            <Image width={1000} height={1000} quality={86}
                src="/static.png" // Görsel yolunu buraya yazın
                alt="Dashboard Overview"
                className="w-full h-fit sm:h-full object-contain"
            />

            {/* Metin Kutusu */}
            <div className=" absolute  text-white  bottom-64 md:bottom-4 sm:bottom-16 lg:bottom-2 xl:bottom-6 right-[10%] sm:right-[10%] md:right-[15%] lg:right-[18%]  xl:right-[20%]">
                <p className="text-lg sm:text-xl md:text-2xl lg:text-3xl text-center italic">
                    The values <strong className="font-semibold">we provide</strong> are <br /> our greatest assurance.
                </p>
            </div>
        </Container>
    );
};

export default DashboardImageWithText;

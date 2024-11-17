'use client';
import Image from "next/image";
import React from "react";

const Gallery: React.FC = () => {
    const images = [
        "/gallery1.png",
        "/gallery2.png",
        "/gallery3.png",
        "/gallery4.png",
        "/gallery5.png",
        "/gallery6.png",
        "/gallery7.png",
        "/gallery8.png",

    ];

    return (
        <section className=" py-12 px-6">
            <div className=" mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
                {images.map((image, index) => (
                    <div key={index} className="overflow-hidden rounded-lg">
                        <Image width={1000} height={1000}
                            src={image}
                            alt={`Gallery Image ${index + 1}`}
                            className="w-full max-h-44 object-cover hover:scale-105 transition-transform duration-300"
                        />
                    </div>
                ))}
            </div>
        </section>
    );
};

export default Gallery;

'use client';
import React from 'react';

const Hero: React.FC = () => {
    return (
        <section className="relative h-screen w-full overflow-hidden">
            <video
                autoPlay
                loop
                muted
                playsInline
                className="absolute inset-0 w-full h-full object-cover"
            >
                <source src="/bg-video.mp4" type="video/mp4" />
                Your browser does not support the video tag.
            </video>

            {/* Overlay */}
            <div className="absolute inset-0 bg-black bg-opacity-50"></div>

            {/* Content */}
            <div className="relative z-10 flex flex-col items-center justify-center h-full text-center text-white px-4">
                {/* Heading */}
                <h1 className="text-3xl sm:text-5xl lg:text-8xl font-bold leading-tight">
                    We Make <span className="text-gray-200 font-thin italic">Digital</span>
                    <br />
                    Ideas & PPC <span className="text-gray-200 font-thin italic">Marketing</span>
                </h1>

                {/* Button */}
                <button
                    className="mt-10 px-6 py-3 bg-white text-black font-medium rounded-full hover:bg-gray-200 transition"
                >
                    About Us
                </button>
            </div>
        </section>
    );
};

export default Hero;

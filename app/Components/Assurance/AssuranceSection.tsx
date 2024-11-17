'use client';
import React from "react";
import { stats } from "../stats";

const AssuranceSection: React.FC = () => {
    return (
        <section className="bg-black text-white py-12 px-6">
            <div className="max-w-7xl mx-auto flex flex-col lg:flex-row items-center justify-between gap-8">
                {/* Sol Taraf: Büyük Metin */}
                <div className="lg:w-1/2 text-center lg:text-left">
                    <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-light leading-snug">
                        The <strong className="font-semibold">values we provide</strong> are
                        <br />
                        our <em>greatest assurance.</em>
                    </h2>
                </div>

                {/* Sağ Taraf: Dinamik Kartlar */}
                <div className="lg:w-1/2 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 text-center">
                    {stats.map((stat) => (
                        <div key={stat.id}>
                            <p className="text-sm text-gray-400">{stat.title}</p>
                            <h3 className="text-2xl font-bold">{stat.value}</h3>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default AssuranceSection;

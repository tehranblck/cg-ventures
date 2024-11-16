'use client';
import React from "react";
import { services } from "../CardContent";
import Card from "../Card/Card";
import Container from "../Container/Container";

const Services: React.FC = () => {
    return (
        <Container className=" bg-gradient-to-b from-black via-gray-900 to-black py-16 !px-4">
            <div className="">
                <h2 className="text-center text-white text-3xl font-semibold mb-8">
                    Our <span className="italic font-thin">Services</span>
                </h2>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {services.map((service) => (
                        <Card
                            key={service.id}
                            icon={service.icon}
                            title={service.title}
                            description={service.description}
                        />
                    ))}
                </div>
            </div>
        </Container>
    );
};

export default Services;

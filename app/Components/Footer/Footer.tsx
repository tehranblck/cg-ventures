'use client';
import React from "react";
import { navLinks } from "../navLinks";
import Link from "next/link";
import Image from "next/image";

const Footer: React.FC = () => {
    return (
        <footer className="bg-black text-center text-white py-12 px-6">
            <div className="max-w-7xl mx-auto flex flex-col mb-24 items-start space-y-12">
                {/* Logo ve Let's Talk */}
                <div className="flex items-center space-x-4">
                    {/* Logo */}
                    <div>
                        <Image src={'/star2.png'} alt="star2" width={200} height={200} />
                    </div>
                    {/* Text */}
                    <h1 className="text-8xl font-bold">
                        Let's <span className="italic font-light">Talk</span>
                    </h1>
                </div>

                {/* Navigation Links */}

            </div>
            <div className="flex w-full justify-center mb-8 space-x-8 text-sm sm:text-base">
                {
                    navLinks.map(link => (
                        <Link key={link.name} href={link.href}>{link.name}</Link>
                    ))
                }

            </div>

            {/* Copyright */}
            <p className="text-xs text-gray-500">
                All Rights Are Reserved ©2024
            </p>
        </footer>
    );
};

export default Footer;

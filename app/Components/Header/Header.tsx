'use client'
import React, { useState } from "react";
import Image from "next/image";
import { navLinks } from "../navLinks";
import Link from "next/link";

const Header: React.FC = () => {
    const [isOpen, setIsOpen] = useState(false);

    const toggleMenu = () => {
        setIsOpen(!isOpen);
    };

    return (
        <header className="bg-black text-white fixed w-full z-50 shadow-lg">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex justify-between items-center h-16">
                {/* Logo */}
                <div className="flex items-center">
                    <Image src="/logo.png" alt="Logo" width={40} height={40} />
                </div>

                {/* Desktop Navigation */}
                <nav className="hidden md:flex space-x-8">
                    {navLinks.map((link) => (
                        <Link
                            key={link.name}
                            href={link.href}
                            className="hover:text-gray-400 transition-colors"
                        >
                            {link.name}
                        </Link>
                    ))}
                </nav>

                {/* "Let's Talk" Button */}
                <div className="hidden md:flex">
                    <Link
                        href="/contact"
                        className="bg-white text-black px-4 py-2 rounded-full hover:bg-gray-200 transition"
                    >
                        Let's Talk
                    </Link>
                </div>

                {/* Hamburger Menu */}
                <div className="md:hidden flex items-center">
                    <button
                        onClick={toggleMenu}
                        className="focus:outline-none text-white"
                    >
                        <span className="block w-6 h-[2px] bg-white mb-1"></span>
                        <span className="block w-6 h-[2px] bg-white mb-1"></span>
                        <span className="block w-6 h-[2px] bg-white"></span>
                    </button>
                </div>
            </div>

            {/* Mobile Navigation */}
            <div
                className={`${isOpen ? "max-h-screen opacity-100" : "max-h-0 opacity-0"
                    } overflow-hidden transition-all duration-300 bg-black md:hidden`}
            >
                <nav className="flex flex-col items-center space-y-4 py-4">
                    {navLinks.map((link) => (
                        <Link
                            key={link.name}
                            href={link.href}
                            className="text-white hover:text-gray-400 transition-colors"
                        >
                            {link.name}
                        </Link>
                    ))}
                    {/* Mobile "Let's Talk" Button */}
                    <Link
                        href="/contact"
                        className="bg-white text-black px-4 py-2 rounded-full hover:bg-gray-200 transition"
                    >
                        Let's Talk
                    </Link>
                </nav>
            </div>
        </header>
    );
};

export default Header;

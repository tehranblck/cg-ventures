import React, { useState } from "react";
import { navLinks } from "../navLinks";

const Header: React.FC = () => {
    const [isOpen, setIsOpen] = useState(false);

    const toggleMenu = () => {
        setIsOpen(!isOpen);
    };

    return (
        <header className="bg-black text-white fixed w-full z-50">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex justify-between items-center h-16">
                {/* Logo */}
                <div className="text-2xl font-bold">CG</div>

                {/* Desktop Navigation */}
                <nav className="hidden md:flex space-x-8">
                    {navLinks.map((link) => (
                        <a
                            key={link.name}
                            href={link.href}
                            className="hover:text-gray-400 transition-colors"
                        >
                            {link.name}
                        </a>
                    ))}
                </nav>

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
                        <a
                            key={link.name}
                            href={link.href}
                            className="text-white hover:text-gray-400 transition-colors"
                        >
                            {link.name}
                        </a>
                    ))}
                </nav>
            </div>
        </header>
    );
};

export default Header;

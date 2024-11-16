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
        <header className="header">
            <div className="header-container">
                {/* Logo */}
                <div className="header-logo">
                    <Image src="/logo-placeholder.png" alt="Logo" width={40} height={40} />
                </div>

                {/* Desktop Navigation */}
                <nav className="header-nav">
                    {navLinks.map((link) => (
                        <a
                            key={link.name}
                            href={link.href}
                            className="header-link"
                        >
                            {link.name}
                        </a>
                    ))}
                </nav>

                {/* "Let's Talk" Button */}
                <div className="header-button">
                    <Link
                        href="/contact"
                        className="button"
                    >
                        Let's Talk
                    </Link>
                </div>

                {/* Hamburger Menu */}
                <div className="header-hamburger">
                    <button
                        onClick={toggleMenu}
                        className="hamburger-button"
                    >
                        <span className="hamburger-line"></span>
                        <span className="hamburger-line"></span>
                        <span className="hamburger-line"></span>
                    </button>
                </div>
            </div>

            {/* Mobile Navigation */}
            <div
                className={`mobile-nav ${isOpen ? "open" : ""}`}
            >
                <nav className="mobile-nav-links">
                    {navLinks.map((link) => (
                        <a
                            key={link.name}
                            href={link.href}
                            className="mobile-link"
                        >
                            {link.name}
                        </a>
                    ))}
                    {/* Mobile "Let's Talk" Button */}
                    <a
                        href="/contact"
                        className="button mobile-button"
                    >
                        Let's Talk
                    </a>
                </nav>
            </div>
        </header>
    );
};

export default Header;

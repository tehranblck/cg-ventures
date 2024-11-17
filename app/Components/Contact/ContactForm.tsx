'use client';
import Image from "next/image";
import React from "react";

const ContactForm: React.FC = () => {
    return (
        <div className="bg-black sm:flex-1 text-white p-6">
            <div className="space-y-4  mb-4">
                <div className="flex bg-[#080808]  p-4 rounded-xl items-center space-x-3">
                    <span className="text-2xl">📧</span>
                    <span>support@yourcompany.com</span>
                </div>
                <div className="flex bg-[#080808] p-4 rounded-xl  items-center space-x-3">
                    <span className="text-2xl">📍</span>
                    <span>Address: 123 Main Street, City, Country</span>
                </div>
            </div>
            <form className="space-y-4">
                <input
                    type="text"
                    placeholder="Name *"
                    className="w-full outline-none p-3 bg-[#080808] text-white rounded-md"
                />
                <input
                    type="email"
                    placeholder="Your Mail*"
                    className="w-full p-3 outline-none bg-[#080808] text-white rounded-md"
                />
                <input
                    type="text"
                    placeholder="Company Name (Optional)"
                    className="w-full outline-none p-3 bg-[#080808] text-white rounded-md"
                />
                <textarea
                    placeholder="Subject*"
                    className="w-full outline-none p-3 bg-[#080808] text-white rounded-md h-32 resize-none"
                ></textarea>
                <button
                    type="submit"
                    className=" flex text-white border-[1px] border-white px-6 py-3 rounded-md hover:bg-gray-900 rounded-2xl transition"
                >
                    Send Message <Image src={'/star.png'} className="max-w-6" width={60} height={60} alt="star" />
                </button>
            </form>
        </div>
    );
};

export default ContactForm;

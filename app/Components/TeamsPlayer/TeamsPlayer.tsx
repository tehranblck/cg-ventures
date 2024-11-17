'use client';
import React from "react";

const TeamPlayerSection: React.FC = () => {
    return (
        <section className="bg-black text-white text-left w-full my-16 py-12 px-6">
            <div className="  text-left space-y-6">
                {/* Başlık */}
                <h2 className="text-2xl sm:text-3xl md:text-4xl font-light italic leading-relaxed">
                    If <span className="font-semibold">you are a real team player</span>, we would like to see <span className="italic">you</span> among us.
                </h2>

                {/* Açıklama */}
                <p className="text-sm sm:text-base md:text-lg text-gray-300">
                    "Join a team where your impact matters! 🌟 If you're ready to bring your best and grow together, we can't wait to see you thrive with us. 💪 #TeamPlayer #JoinUs #MakeADifference"
                </p>

                {/* Başvuru Bilgisi */}
                <p className="text-sm sm:text-base md:text-lg text-gray-400">
                    To apply, you need to email your information to us at <span className="font-semibold">"joinus.cgventures.az".</span>
                </p>
            </div>
        </section>
    );
};

export default TeamPlayerSection;

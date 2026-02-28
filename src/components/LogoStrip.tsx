import React from "react";
import { siteContent } from "@/content/siteContent";

export default function LogoStrip() {
    return (
        <section className="py-12 px-6 border-y border-gray-100 dark:border-white/5 bg-gray-50/50 dark:bg-[#0a0a0a]/50 transition-colors duration-500">
            <div className="max-w-6xl mx-auto flex flex-wrap justify-center sm:justify-start gap-8 sm:gap-16 opacity-60">
                {siteContent.logos.map((logo, idx) => (
                    <span
                        key={idx}
                        className="text-sm sm:text-base font-bold tracking-widest uppercase text-gray-600 dark:text-gray-400 transition-colors duration-500"
                    >
                        {logo}
                    </span>
                ))}
            </div>
        </section>
    );
}

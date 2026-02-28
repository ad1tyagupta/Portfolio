import React from "react";
import Image from "next/image";
import { siteContent } from "@/content/siteContent";

export default function LogoStrip() {
    return (
        <section className="py-12 px-6 border-y border-gray-100 dark:border-white/5 bg-gray-50/50 dark:bg-[#0a0a0a]/50 transition-colors duration-500">
            <div className="max-w-6xl mx-auto flex flex-wrap items-center justify-center sm:justify-start gap-8 sm:gap-16 opacity-60">
                {siteContent.logos.map((logo, idx) => (
                    <div
                        key={idx}
                        className="relative h-10 w-40 sm:h-11 sm:w-52 grayscale dark:invert opacity-70 hover:opacity-100 hover:grayscale-0 dark:hover:invert-0 transition-all duration-300"
                        title={logo.name}
                    >
                        <Image
                            src={logo.imageSrc}
                            alt={logo.name}
                            fill
                            className="object-contain"
                        />
                    </div>
                ))}
            </div>
        </section>
    );
}

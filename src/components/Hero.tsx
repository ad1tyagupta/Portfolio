"use client"

import React, { useState } from "react";
import { siteContent } from "@/content/siteContent";
import { ShaderAnimation } from "@/components/ui/shader-animation";
import { useTheme } from "./ThemeProvider";

export default function Hero() {
    const { headline, subline, primaryCta, secondaryCta, microcopy } = siteContent.hero;
    const { theme } = useTheme();
    const [isPlaying, setIsPlaying] = useState(true);

    // Initial load: play for 15 seconds then pause
    React.useEffect(() => {
        let timer: NodeJS.Timeout;
        if (isPlaying) {
            timer = setTimeout(() => setIsPlaying(false), 15000);
        }
        return () => clearTimeout(timer);
    }, [isPlaying]);

    const handleHeroClick = () => {
        if (!isPlaying) {
            setIsPlaying(true);
        }
    };

    return (
        <section
            className="relative pt-40 pb-20 px-6 min-h-[90vh] flex flex-col justify-center overflow-hidden cursor-pointer"
            onClick={handleHeroClick}
        >
            {/* 3D Background */}
            <div className={`absolute inset-0 w-full h-full z-0 overflow-hidden transition-all duration-1000 ${isPlaying ? 'opacity-100 scale-100' : 'opacity-40 grayscale scale-[1.02]'}`}>
                <ShaderAnimation isPlaying={isPlaying} />

                {/* Gradient Overlay so text remains readable depending on theme */}
                {theme === 'dark' ? (
                    <div className="absolute inset-0 bg-gradient-to-t from-[#0a0a0a] via-[#0a0a0a]/80 to-transparent pointer-events-none" />
                ) : (
                    <div className="absolute inset-0 bg-gradient-to-t from-white via-white/80 to-transparent pointer-events-none" />
                )}
            </div>

            <div className="relative z-10 max-w-6xl mx-auto w-full">
                <div className="max-w-3xl">
                    <h1 className="text-4xl sm:text-5xl lg:text-5xl xl:text-6xl font-bold tracking-tight text-gray-900 dark:text-white leading-[1.15] mb-6 drop-shadow-sm dark:drop-shadow-lg transition-colors duration-500">
                        {headline}
                    </h1>
                    <p className="text-lg sm:text-xl text-gray-700 dark:text-gray-300 leading-relaxed mb-10 max-w-2xl font-medium transition-colors duration-500">
                        {subline}
                    </p>
                    <div className="flex flex-wrap items-center gap-4 mb-6">
                        <a
                            href={primaryCta.anchor}
                            className="px-6 py-3 bg-[#0f66bd] dark:bg-white text-white dark:text-black font-medium rounded-lg hover:bg-[#0c5299] dark:hover:bg-gray-100 transition-colors shadow-lg"
                        >
                            {primaryCta.label}
                        </a>
                        <a
                            href={secondaryCta.anchor}
                            className="px-6 py-3 bg-white/80 dark:bg-white/10 text-gray-900 dark:text-white border border-gray-200 dark:border-white/20 font-medium rounded-lg hover:bg-gray-50 dark:hover:bg-white/20 backdrop-blur-md transition-colors shadow-sm dark:shadow-lg"
                        >
                            {secondaryCta.label}
                        </a>
                    </div>
                    <p className="text-sm text-gray-500 dark:text-gray-400 font-medium transition-colors duration-500">
                        {microcopy}
                    </p>
                </div>

                <div className="hidden sm:flex mt-20 opacity-50 dark:opacity-60 items-center justify-center gap-2 animate-bounce cursor-default select-none absolute bottom-10 left-1/2 -translate-x-1/2">
                    <span className="text-xs uppercase tracking-widest font-semibold text-gray-600 dark:text-white">Scroll</span>
                    <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" className="text-gray-600 dark:text-white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                        <path d="M12 5v14M19 12l-7 7-7-7" />
                    </svg>
                </div>
            </div>
        </section>
    );
}

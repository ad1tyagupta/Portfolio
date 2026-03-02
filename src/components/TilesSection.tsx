import React from "react";
import Image from "next/image";
import { siteContent } from "@/content/siteContent";
import { GlowingEffect } from "@/components/ui/glowing-effect";

export default function TilesSection() {
    const { tiles } = siteContent;

    return (
        <section className="py-24 px-6 max-w-6xl mx-auto">
            <h2 className="text-sm tracking-widest uppercase text-gray-500 dark:text-gray-400 font-bold mb-12 transition-colors duration-500">
                What I Build
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {tiles.map((tile, idx) => (
                    <div key={idx} className="relative rounded-[1.25rem] border-[0.75px] border-gray-200 dark:border-white/10 p-2 md:rounded-[1.5rem] md:p-3 group block aspect-[16/10] transition-all hover:-translate-y-1">
                        <GlowingEffect
                            spread={40}
                            glow={true}
                            disabled={false}
                            proximity={64}
                            inactiveZone={0.01}
                            borderWidth={3}
                        />
                        <a
                            href={tile.hrefAnchor}
                            className="relative flex h-full w-full overflow-hidden rounded-xl border border-gray-200 dark:border-white/10 bg-gray-100 dark:bg-[#111111] transition-all hover:shadow-xl dark:hover:shadow-[0_8px_30px_rgb(0,0,0,0.5)]"
                        >
                            <div className="absolute inset-0 bg-gray-200 dark:bg-[#1a1a1a] transition-colors duration-500" />

                            <Image
                                src={tile.imageSrc}
                                alt={tile.title}
                                fill
                                className="object-cover transition-transform duration-700 group-hover:scale-105"
                                sizes="(max-width: 768px) 100vw, 50vw"
                            />

                            {/* Overlay */}
                            <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/30 to-transparent opacity-70 dark:opacity-80 group-hover:opacity-90 transition-opacity" />

                            <div className="absolute bottom-0 left-0 right-0 p-6 md:p-8 flex flex-col justify-end">
                                <h3 className="text-2xl font-bold text-white mb-2">
                                    {tile.title}
                                </h3>
                                <p className="text-gray-300 dark:text-gray-200 text-sm md:text-base font-medium max-w-sm">
                                    {tile.caption}
                                </p>
                            </div>
                        </a>
                    </div>
                ))}
            </div>
        </section>
    );
}

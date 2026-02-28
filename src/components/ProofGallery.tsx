"use client";

import React, { useState } from "react";
import Image from "next/image";
import { siteContent } from "@/content/siteContent";
import LightboxModal from "./LightboxModal";

export default function ProofGallery() {
    const [modalState, setModalState] = useState<{
        isOpen: boolean;
        sectionId: string | null;
        itemIndex: number;
    }>({
        isOpen: false,
        sectionId: null,
        itemIndex: 0,
    });

    const activeSection = siteContent.proofSections.find(
        (s) => s.id === modalState.sectionId
    );
    const activeItems = activeSection?.items || [];
    const activeItem = activeItems[modalState.itemIndex] || null;

    const handleOpen = (sectionId: string, itemIndex: number) => {
        setModalState({ isOpen: true, sectionId, itemIndex });
    };

    const handleClose = () => {
        setModalState((prev) => ({ ...prev, isOpen: false }));
    };

    const handleNext = () => {
        setModalState((prev) => ({
            ...prev,
            itemIndex: Math.min(prev.itemIndex + 1, activeItems.length - 1),
        }));
    };

    const handlePrev = () => {
        setModalState((prev) => ({
            ...prev,
            itemIndex: Math.max(prev.itemIndex - 1, 0),
        }));
    };

    return (
        <>
            <section id="proof" className="py-24 px-6 max-w-6xl mx-auto scroll-m-20">
                <p className="text-sm text-gray-500 dark:text-gray-400 italic mb-16 transition-colors duration-500">
                    {siteContent.proofGalleryIntro}
                </p>

                <div className="space-y-32">
                    {siteContent.proofSections.map((section) => (
                        <div key={section.id} id={section.id} className="scroll-m-24">
                            <div className="mb-10">
                                <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-3 transition-colors duration-500">
                                    {section.title}
                                </h2>
                                <p className="text-xl text-gray-600 dark:text-gray-400 max-w-3xl transition-colors duration-500">
                                    {section.intro}
                                </p>
                            </div>

                            {/* Grid */}
                            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                                {section.items.map((item, idx) => (
                                    <button
                                        key={idx}
                                        onClick={() => handleOpen(section.id, idx)}
                                        className="group flex flex-col items-start w-full text-left"
                                    >
                                        <div className="relative w-full aspect-video bg-gray-100 dark:bg-[#111111] rounded-xl overflow-hidden mb-4 border border-gray-200 dark:border-white/10 transition-colors duration-500">
                                            <Image
                                                src={item.imageSrc}
                                                alt={item.caption}
                                                fill
                                                className="object-cover transition-transform duration-500 group-hover:scale-105"
                                                sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                                            />
                                            {/* Hover Overlay indicating clickability */}
                                            <div className="absolute inset-0 bg-black/5 dark:bg-white/5 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                                                <div className="bg-white/90 dark:bg-black/80 backdrop-blur-sm px-4 py-2 rounded-full shadow-sm border border-gray-200 dark:border-white/10 text-sm font-medium text-gray-800 dark:text-white scale-95 group-hover:scale-100 transition-all">
                                                    View proof
                                                </div>
                                            </div>
                                        </div>
                                        <span className="font-semibold text-gray-900 dark:text-gray-200 group-hover:text-[#0f66bd] dark:group-hover:text-[#137fec] transition-colors">
                                            {item.caption}
                                        </span>
                                    </button>
                                ))}
                            </div>
                        </div>
                    ))}
                </div>
            </section>

            <LightboxModal
                isOpen={modalState.isOpen}
                item={activeItem}
                onClose={handleClose}
                onNext={handleNext}
                onPrev={handlePrev}
                hasNext={modalState.itemIndex < activeItems.length - 1}
                hasPrev={modalState.itemIndex > 0}
            />
        </>
    );
}

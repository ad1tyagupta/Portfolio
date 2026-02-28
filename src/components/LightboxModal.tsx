"use client";

import React, { useEffect, useRef, useCallback } from "react";
import Image from "next/image";
import { ProofItem } from "@/content/siteContent";

interface LightboxModalProps {
    isOpen: boolean;
    item: ProofItem | null;
    onClose: () => void;
    onNext: () => void;
    onPrev: () => void;
    hasNext: boolean;
    hasPrev: boolean;
}

export default function LightboxModal({
    isOpen,
    item,
    onClose,
    onNext,
    onPrev,
    hasNext,
    hasPrev,
}: LightboxModalProps) {
    const modalRef = useRef<HTMLDivElement>(null);

    const handleKeyDown = useCallback(
        (e: KeyboardEvent) => {
            if (!isOpen) return;
            if (e.key === "Escape") onClose();
            if (e.key === "ArrowRight" && hasNext) onNext();
            if (e.key === "ArrowLeft" && hasPrev) onPrev();
        },
        [isOpen, onClose, onNext, onPrev, hasNext, hasPrev]
    );

    useEffect(() => {
        document.addEventListener("keydown", handleKeyDown);
        if (isOpen) {
            document.body.style.overflow = "hidden";
            modalRef.current?.focus();
        } else {
            document.body.style.overflow = "unset";
        }
        return () => {
            document.removeEventListener("keydown", handleKeyDown);
            document.body.style.overflow = "unset";
        };
    }, [isOpen, handleKeyDown]);

    if (!isOpen || !item) return null;

    return (
        <div
            className="fixed inset-0 z-[100] flex items-center justify-center bg-black/90 backdrop-blur-sm p-4 sm:p-8"
            onClick={onClose}
            role="dialog"
            aria-modal="true"
            aria-labelledby="modal-title"
        >
            <div
                ref={modalRef}
                tabIndex={-1}
                className="relative w-full max-w-6xl max-h-[90vh] flex flex-col md:flex-row bg-white rounded-2xl overflow-hidden shadow-2xl focus:outline-none"
                onClick={(e) => e.stopPropagation()}
            >
                <button
                    onClick={onClose}
                    className="absolute top-4 right-4 z-10 w-10 h-10 flex items-center justify-center rounded-full bg-gray-100 hover:bg-gray-200 text-gray-700 transition"
                    aria-label="Close modal"
                >
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                        <path d="M18 6L6 18M6 6l12 12" />
                    </svg>
                </button>

                {/* Image Area */}
                <div className="relative w-full md:w-2/3 bg-gray-100 flex items-center justify-center min-h-[40vh] md:min-h-full p-4 group">
                    <div className="relative w-full h-full min-h-[300px]">
                        <Image
                            src={item.imageSrc}
                            alt={item.caption}
                            fill
                            className="object-contain"
                            sizes="(max-width: 768px) 100vw, 66vw"
                        />
                    </div>

                    {/* Nav Controls */}
                    {hasPrev && (
                        <button
                            onClick={onPrev}
                            className="absolute left-4 top-1/2 -translate-y-1/2 w-10 h-10 flex items-center justify-center rounded-full bg-white/80 hover:bg-white shadow-sm text-gray-900 transition md:opacity-0 md:group-hover:opacity-100"
                            aria-label="Previous image"
                        >
                            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                                <path d="M15 18l-6-6 6-6" />
                            </svg>
                        </button>
                    )}
                    {hasNext && (
                        <button
                            onClick={onNext}
                            className="absolute right-4 top-1/2 -translate-y-1/2 w-10 h-10 flex items-center justify-center rounded-full bg-white/80 hover:bg-white shadow-sm text-gray-900 transition md:opacity-0 md:group-hover:opacity-100"
                            aria-label="Next image"
                        >
                            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                                <path d="M9 18l6-6-6-6" />
                            </svg>
                        </button>
                    )}
                </div>

                {/* Info Area */}
                <div className="w-full md:w-1/3 p-6 sm:p-8 flex flex-col border-t md:border-t-0 md:border-l border-gray-100 overflow-y-auto">
                    <h3 id="modal-title" className="text-2xl font-bold text-gray-900 mb-6">
                        {item.caption}
                    </h3>
                    <ul className="space-y-4 mb-8">
                        {item.bullets.map((bullet, i) => {
                            const colonIndex = bullet.indexOf(":");
                            const label = colonIndex !== -1 ? bullet.slice(0, colonIndex + 1) : "";
                            const value = colonIndex !== -1 ? bullet.slice(colonIndex + 1) : bullet;
                            return (
                                <li key={i} className="text-gray-700 leading-relaxed text-sm">
                                    {label && <strong className="font-semibold text-gray-900">{label}</strong>}
                                    {value}
                                </li>
                            );
                        })}
                    </ul>
                    {item.externalLink && (
                        <div className="mt-auto pt-4">
                            <a
                                href={item.externalLink}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="inline-block px-5 py-2.5 bg-gray-900 text-white text-sm font-medium rounded-lg hover:bg-gray-800 transition"
                            >
                                View Live Link
                            </a>
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
}

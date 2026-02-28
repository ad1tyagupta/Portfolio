import React from "react";
import { siteContent } from "@/content/siteContent";

export default function Contact() {
    const { title, oneLiner, email, linkedIn, helperLine } = siteContent.contact;

    return (
        <section id="contact" className="py-24 px-6 max-w-4xl mx-auto text-center scroll-m-20">
            <h2 className="text-4xl font-bold text-gray-900 dark:text-white mb-6 transition-colors duration-500">{title}</h2>
            <p className="text-xl text-gray-600 dark:text-gray-400 mb-12 transition-colors duration-500">{oneLiner}</p>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-8">
                <a
                    href={email}
                    className="w-full sm:w-auto px-8 py-4 bg-[#0f66bd] dark:bg-[#137fec] text-white font-medium rounded-xl hover:bg-[#0c5299] dark:hover:bg-[#116ac8] transition-colors shadow-sm flex items-center justify-center gap-2"
                >
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                        <rect width="20" height="16" x="2" y="4" rx="2" />
                        <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
                    </svg>
                    Email Me
                </a>
                <a
                    href={linkedIn}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full sm:w-auto px-8 py-4 bg-white dark:bg-[#111111] text-gray-900 dark:text-white border border-gray-200 dark:border-white/10 font-medium rounded-xl hover:bg-gray-50 dark:hover:bg-[#1a1a1a] transition-colors shadow-sm flex items-center justify-center gap-2"
                >
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                        <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
                        <rect width="4" height="12" x="2" y="9" />
                        <circle cx="4" cy="4" r="2" />
                    </svg>
                    LinkedIn
                </a>
            </div>

            <p className="text-sm text-gray-500 dark:text-gray-500 font-medium italic transition-colors duration-500">
                {helperLine}
            </p>
        </section>
    );
}

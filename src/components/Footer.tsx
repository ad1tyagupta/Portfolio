import React from "react";
import { siteContent } from "@/content/siteContent";

export default function Footer() {
    const currentYear = new Date().getFullYear();
    const { personalityLine, backToTopLabel } = siteContent.footer;

    return (
        <footer className="py-8 px-6 border-t border-gray-100 dark:border-white/5 mt-12 text-center text-sm text-gray-400 dark:text-gray-600 transition-colors duration-500">
            <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between gap-4">
                <p>© {currentYear} Aditya Gupta</p>
                <p className="text-gray-500 dark:text-gray-500 italic">
                    {personalityLine}
                </p>
                <a
                    href="#"
                    className="hover:text-gray-900 dark:hover:text-gray-300 transition-colors flex items-center gap-1"
                >
                    {backToTopLabel}
                    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                        <path d="m18 15-6-6-6 6" />
                    </svg>
                </a>
            </div>
        </footer>
    );
}

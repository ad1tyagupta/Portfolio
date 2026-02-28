import React from "react";
import { siteContent } from "@/content/siteContent";

export default function Toolbox() {
    const { core, familiar } = siteContent.toolbox;

    return (
        <section id="toolbox" className="py-24 px-6 bg-gray-50 dark:bg-[#050505] transition-colors duration-500 scroll-m-20 border-y border-gray-100 dark:border-white/5">
            <div className="max-w-6xl mx-auto flex flex-col md:flex-row gap-12 md:gap-24">
                <div className="md:w-1/3">
                    <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-6 transition-colors duration-500">Toolbox</h2>
                    <p className="text-gray-600 dark:text-gray-400 text-lg transition-colors duration-500">
                        How I ship, from strategy layers to execution syntax.
                    </p>
                </div>

                <div className="md:w-2/3 space-y-12">
                    {/* Core */}
                    <div>
                        <h3 className="text-sm font-bold tracking-widest uppercase text-gray-400 dark:text-gray-500 mb-6 transition-colors duration-500">
                            Core
                        </h3>
                        <div className="flex flex-wrap gap-3">
                            {core.map((tool, idx) => (
                                <span
                                    key={idx}
                                    className="px-4 py-2 bg-white dark:bg-[#111111] border border-gray-200 dark:border-white/10 text-gray-800 dark:text-gray-200 rounded-full font-medium shadow-sm hover:border-gray-300 dark:hover:border-white/30 transition-colors"
                                >
                                    {tool}
                                </span>
                            ))}
                        </div>
                    </div>

                    {/* Familiar */}
                    <div>
                        <h3 className="text-sm font-bold tracking-widest uppercase text-gray-400 dark:text-gray-500 mb-6 transition-colors duration-500">
                            Familiar
                        </h3>
                        <div className="flex flex-wrap gap-3 opacity-90">
                            {familiar.map((tool, idx) => (
                                <span
                                    key={idx}
                                    className="px-4 py-2 bg-gray-200/60 dark:bg-white/5 border border-gray-200/60 dark:border-white/5 text-gray-700 dark:text-gray-400 rounded-full font-medium transition-colors duration-500"
                                >
                                    {tool}
                                </span>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

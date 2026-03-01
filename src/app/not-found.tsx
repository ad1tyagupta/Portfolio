import { Button } from "@/components/ui/button";
import {
    Empty,
    EmptyContent,
    EmptyDescription,
    EmptyHeader,
    EmptyTitle,
} from "@/components/ui/empty";

export default function NotFound() {
    return (
        <div className="relative flex min-h-screen w-full items-center justify-center overflow-hidden bg-white dark:bg-[#0a0a0a] transition-colors duration-500">
            <Empty className="border-none shadow-none text-gray-900 dark:text-white">
                <EmptyHeader>
                    <EmptyTitle className="mask-b-from-20% mask-b-to-80% font-extrabold text-9xl text-gray-900 dark:text-white drop-shadow-sm">
                        404
                    </EmptyTitle>
                    <EmptyDescription className="-mt-8 text-nowrap text-gray-500 dark:text-gray-400">
                        The page you're looking for might have been <br />
                        moved or doesn't exist.
                    </EmptyDescription>
                </EmptyHeader>
                <EmptyContent>
                    <div className="flex justify-center mt-4">
                        <Button asChild className="bg-gray-900 dark:bg-white text-white dark:text-black hover:bg-gray-800 dark:hover:bg-gray-200 transition-colors">
                            <a href="/">
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    width="24"
                                    height="24"
                                    viewBox="0 0 24 24"
                                    fill="none"
                                    stroke="currentColor"
                                    strokeWidth="2"
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    className="size-4 mr-2"
                                    data-icon="inline-start"
                                >
                                    <path d="m3 9 9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z" />
                                    <polyline points="9 22 9 12 15 12 15 22" />
                                </svg>
                                Go Home
                            </a>
                        </Button>
                    </div>
                </EmptyContent>
            </Empty>
        </div>
    );
}

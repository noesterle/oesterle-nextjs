import Link from 'next/link';


export default function Nav() {
    return (
        <div>
            <div className="flex gap-4 items-center flex-col sm:flex-row">
                <Link
                    className="rounded-full border border-solid border-black/[.08] dark:border-white/[.145] transition-colors flex items-center justify-center bg-foreground hover:bg-[#bdbbb0] hover:border-transparent text-sm sm:text-base h-10 sm:h-12 px-4 sm:px-5 sm:min-w-44"
                    href="https://www.linkedin.com/in/nathan-oesterle/"
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    LinkedIn
                </Link>
                <Link
                    className="rounded-full border border-solid border-transparent transition-colors flex items-center justify-center bg-foreground text-background gap-2 hover:bg-[#bdbbb0] text-sm sm:text-base h-10 sm:h-12 px-4 sm:px-5"
                    href="/" //Placeholder until Resume page exists.
                    target=""
                    rel="noopener noreferrer"
                >
                    Resume
                </Link>
                <Link
                    className="rounded-full border border-solid border-black/[.08] dark:border-white/[.145] transition-colors flex items-center justify-center bg-foreground hover:bg-[#bdbbb0] hover:border-transparent text-sm sm:text-base h-10 sm:h-12 px-4 sm:px-5 sm:min-w-44"
                    href="https://github.com/noesterle/"
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    GitHub
                </Link>
            </div>
        </div>
    )
}
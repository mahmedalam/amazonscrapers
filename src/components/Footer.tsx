import GithubSvg from "@/assets/GithubSvg";
import LogoSvg from "@/assets/LogoSvg";
import { footerLinks } from "@/constants";
import Link from "next/link";


export default function Footer() {
    return (
        <footer className="para sm:para-sm flex flex-col items-center gap-3 sm:gap-4 py-4 sm:py-6 border-t-2 bg-secondary text-primary capitalize">

            <div className="w-full flex items-center justify-between px-6 sm:px-11">
                <div className="flex-center gap-3">
                    <LogoSvg className="sm:size-[60px]" />
                    <span className="h1 sm:h1-sm italic">amazon scrapers</span>
                </div>

                <Link href={"https://github.com/mahmedalam"} target="_blank"><GithubSvg className="sm:size-8" /></Link>
            </div>

            <div className="w-full h-[2px] bg-white/10" />

            <div className="w-full flex flex-col lg:flex-row items-center lg:justify-between gap-3 sm:gap-4 lg:px-11">
                <div className="flex flex-col sm:flex-row sm:gap-1 items-center">
                    <span>© copyright amazon scrapers 2024.</span>
                    <span>all rights reserved.</span>
                </div>

                <ul className="w-full lg:w-fit grid sm:flex grid-cols-2 justify-items-center sm:justify-center gap-3 sm:gap-4 underline">
                    {footerLinks.map((link) => (
                        <li key={link.label}>
                            <Link
                                className="transition-opacity hover:opacity-90"
                                href={link.href}
                            >
                                {link.label}
                            </Link>
                        </li>
                    ))}
                </ul>
            </div>

        </footer>
    )
}
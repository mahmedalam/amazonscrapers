import GithubSvg from "@/assets/GithubSvg";
import { footerLinks } from "@/constants";
import Link from "next/link";

export default function Footer() {
    return (
        <footer className="para flex flex-col items-center gap-3 py-4 border-t-2 bg-secondary text-primary capitalize">

            <Link href={"https://github.com/mahmedalam"} target="_blank"><GithubSvg /></Link>

            <div className="w-full h-[2px] bg-white/10" />

            <div className="flex flex-col items-center">
                <p>© copyright amazon scraper 2024.</p>
                <p>all rights reserved.</p>
            </div>

            <div className="w-full grid grid-cols-2 justify-items-center gap-3 underline">
                {footerLinks.map((link) => (
                    <Link
                        className="w-fit hover:opacity-90"
                        key={link.href}
                        href={link.href}
                    >
                        {link.label}
                    </Link>
                ))}
            </div>

        </footer>
    )
}
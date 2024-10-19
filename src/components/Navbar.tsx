"use client"

import LogoSvg from "@/assets/LogoSvg";
import MenuSvg from "@/assets/MenuSvg";
import { navigation } from "@/constants";
import Link from "next/link";
import { usePathname } from "next/navigation";


export default function Navbar() {
    const pathname = usePathname();


    return (
        <nav className="overflow-hidden h-[60px] sm:h-[70px] sticky top-0 z-50 flex-center px-6 md:px-7 lg:px-8 bg-secondary text-primary border-b-2 shadow-b-light">
            <div className="sm:hidden w-full flex items-center justify-between">
                <LogoSvg />
                <span className="h1 italic uppercase pr-2">amazon scrapers</span>
                <MenuSvg />
            </div>

            <div className="hidden w-full sm:flex items-center justify-between">
                <div className="flex-center gap-4">
                    <LogoSvg className="size-[60px]" />
                    <span className="h1-sm italic uppercase">amazon scrapers</span>
                </div>

                <ul className="flex gap-4 md:gap-6 para-sm xl:absolute xl:w-full xl:justify-center">
                    {navigation.map((link) => (
                        <li key={link.label}>
                            <Link
                                className={`${link.href !== pathname && "opacity-75"} flex-center gap-2 transition-opacity hover:opacity-100`}
                                href={link.href}
                            >
                                {link.img}
                                <span className="hidden md:inline font-bold">{link.label}</span>
                            </Link>
                        </li>
                    ))}
                </ul>
            </div>
        </nav>
    )
}

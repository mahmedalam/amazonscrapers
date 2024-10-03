import LogoSvg from "@/assets/LogoSvg";
import MenuSvg from "@/assets/MenuSvg";


export default function Navbar() {
    return (
        <nav className="h-[60px] sticky top-0 z-50 flex items-center justify-between px-6 bg-secondary text-primary border-b-2 shadow-b-light">
            <LogoSvg />
            <span className="h1 italic uppercase pr-2">amazon scraper</span>
            <MenuSvg />
        </nav>
    )
}

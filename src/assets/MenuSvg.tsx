import { SvgProps } from '@/props/svgProps'


export default function MenuSvg({ className, ...events }: SvgProps) {
    return (
        <svg className={className} {...events} width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path fillRule="evenodd" clipRule="evenodd" d="M3 5C3 4.44772 3.44772 4 4 4H16C16.5523 4 17 4.44772 17 5C17 5.55229 16.5523 6 16 6H4C3.44772 6 3 5.55228 3 5Z" fill="#00FF1D" />
            <path fillRule="evenodd" clipRule="evenodd" d="M3 12C3 11.4477 3.44772 11 4 11H20C20.5523 11 21 11.4477 21 12C21 12.5523 20.5523 13 20 13H4C3.44772 13 3 12.5523 3 12Z" fill="#00FF1D" />
            <path fillRule="evenodd" clipRule="evenodd" d="M3 19C3 18.4477 3.44772 18 4 18H12C12.5523 18 13 18.4477 13 19C13 19.5523 12.5523 20 12 20H4C3.44772 20 3 19.5523 3 19Z" fill="#00FF1D" />
        </svg>
    )
}
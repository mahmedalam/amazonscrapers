import { SvgProps } from '@/props/svgProps'


export default function SearchSvg({ className, ...events }: SvgProps) {
    return (
        <svg className={`${className} cursor-pointer`} {...events} width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M18.2476 10.1238C18.2476 11.9165 17.6657 13.5725 16.6853 14.9161L21.6299 19.8646C22.1181 20.3528 22.1181 21.1456 21.6299 21.6338C21.1417 22.1221 20.3489 22.1221 19.8607 21.6338L14.9161 16.6853C13.5725 17.6696 11.9165 18.2476 10.1238 18.2476C5.63619 18.2476 2 14.6114 2 10.1238C2 5.63619 5.63619 2 10.1238 2C14.6114 2 18.2476 5.63619 18.2476 10.1238ZM10.1238 15.748C10.8624 15.748 11.5937 15.6025 12.2761 15.3199C12.9584 15.0372 13.5784 14.623 14.1007 14.1007C14.623 13.5784 15.0372 12.9584 15.3199 12.2761C15.6025 11.5937 15.748 10.8624 15.748 10.1238C15.748 9.38523 15.6025 8.65389 15.3199 7.97153C15.0372 7.28917 14.623 6.66917 14.1007 6.14692C13.5784 5.62466 12.9584 5.21039 12.2761 4.92775C11.5937 4.64511 10.8624 4.49963 10.1238 4.49963C9.38523 4.49963 8.65389 4.64511 7.97153 4.92775C7.28917 5.21039 6.66917 5.62466 6.14692 6.14692C5.62466 6.66917 5.21039 7.28917 4.92775 7.97153C4.64511 8.65389 4.49963 9.38523 4.49963 10.1238C4.49963 10.8624 4.64511 11.5937 4.92775 12.2761C5.21039 12.9584 5.62466 13.5784 6.14692 14.1007C6.66917 14.623 7.28917 15.0372 7.97153 15.3199C8.65389 15.6025 9.38523 15.748 10.1238 15.748Z" fill="#00FF1D" />
        </svg>
    )
}
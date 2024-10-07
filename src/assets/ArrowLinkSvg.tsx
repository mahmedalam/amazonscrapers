import { SvgProps } from '@/props/svgProps'


export default function ArrowLinkSvg({ className, ...events }: SvgProps) {
    return (
        <svg className={className} {...events} width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path fill-rule="evenodd" clip-rule="evenodd" d="M14.7071 9.29289C15.0976 9.68342 15.0976 10.3166 14.7071 10.7071L6.70711 18.7071C6.31658 19.0976 5.68342 19.0976 5.29289 18.7071C4.90237 18.3166 4.90237 17.6834 5.29289 17.2929L13.2929 9.29289C13.6834 8.90237 14.3166 8.90237 14.7071 9.29289Z" fill="#00FF1D" />
            <path fill-rule="evenodd" clip-rule="evenodd" d="M18.7071 5.2929C18.9297 5.51547 19.0345 5.82984 18.9899 6.14143L17.9899 13.1414C17.9364 13.5164 17.6756 13.8289 17.3162 13.9487C16.9569 14.0685 16.5607 13.9749 16.2929 13.7071L10.2929 7.70712C10.0251 7.43928 9.93153 7.04312 10.0513 6.68378C10.1711 6.32445 10.4836 6.06363 10.8586 6.01006L17.8586 5.01006C18.1702 4.96555 18.4845 5.07034 18.7071 5.2929Z" fill="#00FF1D" />
        </svg>
    )
}
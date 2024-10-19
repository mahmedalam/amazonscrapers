import { SvgProps } from '@/props/svgProps'


export default function HomeSvg({ className, ...events }: SvgProps) {
    return (
        <svg className={className} {...events} width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path fill-rule="evenodd" clip-rule="evenodd" d="M13.73 3.183C15.0613 2.13347 16.9387 2.13345 18.27 3.183L27.6033 10.5407C28.4853 11.236 29 12.2971 29 13.4203V26.6668C29 28.6919 27.3584 30.3335 25.3333 30.3335H21.3333C20.0447 30.3335 19 29.2888 19 28.0001V22.6668C19 21.7464 18.2539 21.0001 17.3333 21.0001H14.6699C13.7497 21.0001 13.0036 21.7459 13.0032 22.666L13.0006 28.0013C13 29.2896 11.9555 30.3335 10.6673 30.3335H6.66667C4.64163 30.3335 3 28.6919 3 26.6668V13.4203C3 12.2971 3.51469 11.236 4.39667 10.5407L13.73 3.183Z" fill="#00FF1D" />
        </svg>
    )
}
import { SvgProps } from '@/props/svgProps'


export default function EmailSvg({ className, ...events }: SvgProps) {
    return (
        <svg className={className} {...events} width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path fill-rule="evenodd" clip-rule="evenodd" d="M1.66669 8.22224C1.66669 6.07446 3.41685 4.33334 5.57578 4.33334H26.4243C28.5832 4.33334 30.3334 6.07446 30.3334 8.22224V23.7777C30.3334 25.9256 28.5832 27.6667 26.4243 27.6667H5.57578C3.41685 27.6667 1.66669 25.9256 1.66669 23.7777V8.22224ZM5.57578 25.074C4.85613 25.074 4.27274 24.4936 4.27274 23.7777V11.6159L14.2519 16.5796C15.3523 17.1271 16.6478 17.1271 17.7482 16.5796L27.7274 11.6159V23.7777C27.7274 24.4936 27.1439 25.074 26.4243 25.074H5.57578Z" fill="#00FF1D" />
        </svg>
    )
}
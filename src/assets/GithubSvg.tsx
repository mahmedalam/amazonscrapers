import { SvgProps } from '@/props/svgProps'


export default function GithubSvg({ className, ...events }: SvgProps) {
    return (
        <svg className={`${className} cursor-pointer`} {...events} width="24" height="25" viewBox="0 0 24 25" fill="none" xmlns="http://www.w3.org/2000/svg">
            <g clip-path="url(#clip0_11_117)">
                <path d="M12 0.758057C18.63 0.758057 24 6.12806 24 12.758C23.9993 15.2723 23.2102 17.7232 21.7438 19.7655C20.2773 21.8078 18.2072 23.3388 15.825 24.143C15.225 24.263 15 23.888 15 23.573C15 23.168 15.015 21.878 15.015 20.273C15.015 19.148 14.64 18.428 14.205 18.053C16.875 17.753 19.68 16.733 19.68 12.128C19.68 10.808 19.215 9.74304 18.45 8.90304C18.57 8.60304 18.99 7.37306 18.33 5.72306C18.33 5.72306 17.325 5.39306 15.03 6.95306C14.07 6.68306 13.05 6.54806 12.03 6.54806C11.01 6.54806 9.99 6.68306 9.03 6.95306C6.735 5.40806 5.73 5.72306 5.73 5.72306C5.07 7.37306 5.49 8.60304 5.61 8.90304C4.845 9.74304 4.38 10.823 4.38 12.128C4.38 16.718 7.17 17.753 9.84 18.053C9.495 18.353 9.18 18.878 9.075 19.658C8.385 19.973 6.66 20.483 5.58 18.668C5.355 18.308 4.68 17.423 3.735 17.438C2.73 17.453 3.33 18.008 3.75 18.233C4.26 18.518 4.845 19.583 4.98 19.928C5.22 20.603 6 21.893 9.015 21.338C9.015 22.343 9.03 23.288 9.03 23.573C9.03 23.888 8.805 24.248 8.205 24.143C5.81496 23.3475 3.7361 21.8196 2.26333 19.776C0.790568 17.7325 -0.00132072 15.277 1.65348e-06 12.758C1.65348e-06 6.12806 5.37 0.758057 12 0.758057Z" fill="#00FF1D" />
            </g>
            <defs>
                <clipPath id="clip0_11_117">
                    <rect width="24" height="24" fill="white" transform="translate(0 0.445557)" />
                </clipPath>
            </defs>
        </svg>
    )
}
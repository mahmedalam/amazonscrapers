import { CardTypes } from "@/types/cardTypes";
import Image from "next/image";


export default function Card({ image, title, asin }: CardTypes) {
    return (
        <div className="w-full flex flex-col items-center gap-2 py-2 border-b-2 border-black/50">
            <Image
                src={image}
                alt={`${title} Image`}
                width={256}
                height={256}
                quality={75}
                priority
            />

            <p className="para capitalize">{title}</p>
            <p className="para font-bold">{asin}</p>
        </div>
    )
}

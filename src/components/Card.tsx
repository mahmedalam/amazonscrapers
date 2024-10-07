import CardTypes from "@/types/cardTypes";


export default function Card({ image, title, asin }: CardTypes) {
    return (
        <div className="para w-full h-full flex flex-col items-center justify-center gap-2 py-2 border-b-2 border-black/50">
            <img
                className="max-w-64 max-h-64"
                src={image}
                alt={`${title} Image`}
            />

            <p className="capitalize">{title}</p>
            <p className="font-bold">{asin}</p>
        </div>
    )
}

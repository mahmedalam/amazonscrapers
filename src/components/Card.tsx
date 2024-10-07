import CardTypes from "@/types/cardTypes";
import { Button } from "./ui/button";
import ArrowLinkSvg from "@/assets/ArrowLinkSvg";
import Link from "next/link";


export default function Card({ image, title, price, asin }: CardTypes) {
    return (
        <div className="relative para w-full h-full flex flex-col items-center justify-center gap-2 py-2 border-b-2 border-black/50">
            <Link
                className="size-7 absolute top-0 right-0"
                href={`https://amazon.com/dp/${asin}`}
                target="_blank"
            >
                <Button className="size-7 p-0 rounded-full">
                    <ArrowLinkSvg />
                </Button>
            </Link>

            <img
                className="max-w-64 max-h-64"
                src={image}
                alt={`${title} Image`}
            />

            <p className="capitalize">{title}</p>

            <div className="w-full flex justify-between">
                <p className="font-bold">{price}</p>
                <p className="font-bold">{asin}</p>
            </div>
        </div>
    )
}

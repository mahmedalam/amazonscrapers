import CardTypes from "@/types/cardTypes";
import { Button } from "./ui/button";
import ArrowLinkSvg from "@/assets/ArrowLinkSvg";
import Link from "next/link";


export default function Card({ image, title, price, asin }: CardTypes) {
    return (
        <div className="relative para sm:para-sm w-full h-full flex-center flex-col gap-2 py-2 border-b-2 border-black/50">
            <Link
                className="size-7 sm:size-10 absolute top-0 right-0"
                href={`https://amazon.com/dp/${asin}`}
                target="_blank"
            >
                <Button className="size-full p-[2px] sm:p-0 rounded-full">
                    <ArrowLinkSvg className="size-8" />
                </Button>
            </Link>

            <div className="w-64 h-64 sm:w-[360px] sm:h-[360px] flex-center">
                <img
                    className="max-w-64 max-h-64 sm:max-w-[360px] sm:max-h-[360px]"
                    src={image}
                    alt={`${title} Image`}
                />
            </div>

            <p className="max-w-[600px] capitalize">{title}</p>

            <div className="w-full flex justify-between">
                <p className="font-bold">{price}</p>
                <p className="font-bold">{asin}</p>
            </div>
        </div>
    )
}

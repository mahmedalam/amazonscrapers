"use client"

import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import { z } from "zod"

import { Button } from "@/components/ui/button"
import {
	Form,
	FormControl,
	FormField,
	FormItem,
} from "@/components/ui/form"
import { Input } from "@/components/ui/input"

import {
	Carousel,
	CarouselContent,
	CarouselItem,
	CarouselNext,
	CarouselPrevious,
} from "@/components/ui/carousel"

import Image from "next/image";
import { searchBarSchema } from "@/schemas/searchBarSchema";
import SearchSvg from "@/assets/SearchSvg"
import Card from "@/components/Card"
import CsvFileSvg from "@/assets/CsvFileSvg"
import { motion } from "framer-motion";
import { useState, useEffect } from "react";
import { subHeadings } from "@/constants"
import SearchDataTypes from "@/types/searchDataTypes"
import LoadingSvg from "@/assets/LoadingSvg"
import products from "@/demo/products"


export default function Home() {
	const [currentIndex, setCurrentIndex] = useState(0);
	const [isDemo, setIsDemo] = useState(true)
	const [searchData, setSearchData] = useState<SearchDataTypes>(products)
	const [loading, setLoading] = useState(false)

	useEffect(() => {
		const interval = setInterval(() => {
			setCurrentIndex((prevIndex) => (prevIndex + 1) % subHeadings.length);
		}, 3000) // Change subheading every 3 seconds

		return () => clearInterval(interval); // Clean up interval on unmount
	}, [])

	const variants = {
		hidden: { opacity: 0, y: 20 }, // Start hidden with movement
		visible: { opacity: 1, y: 0 },  // Animate to visible and centered
		exit: { opacity: 0, y: -20 },   // Exit with opposite movement
	}

	const form = useForm<z.infer<typeof searchBarSchema>>({
		resolver: zodResolver(searchBarSchema),
		defaultValues: {
			text: "",
		},
	})

	const onSubmit = async (data: z.infer<typeof searchBarSchema>) => {
		setLoading(true)
		await searchProducts(data.text)
		setLoading(false)
		setIsDemo(false)
	}

	const searchProducts = async (k: string) => {
		const response = await fetch(`/api/py/search?k=${k}`)
		const data = await response.json()
		setSearchData(data)
	}

	const downloadCsv = () => {
		if (searchData?.csv) { // Check if searchData.csv is defined
			const csv = new Blob([searchData.csv], { type: "text/csv" });
			const url = URL.createObjectURL(csv);
			const link = document.createElement("a");
			link.href = url;
			link.download = "products.csv";
			link.click();
			URL.revokeObjectURL(url);
		} else {
			console.error("CSV data is undefined");
		}
	}


	return (
		<main>

			{/* HEADER */}
			<div className="relative bg-[#45CCCF]">
				<div className="w-full h-full absolute top-0 flex flex-col items-center justify-center md:gap-[10px] bg-black/60">
					<h1 className="text-primary text-[32px] sm:text-[44px] md:text-5xl lg:text-[52px] font-bold italic uppercase">amazon scrapers</h1>

					<div className="para sm:text-lg md:text-xl lg:text-[22px] w-full h-9 flex flex-col items-center text-white text-center capitalize">
						<motion.h2
							className="px-6"
							key={currentIndex} // Change key to trigger re-animation
							initial="hidden"
							animate="visible"
							exit="exit"
							variants={variants}
							transition={{ duration: 0.5 }}
							style={{ position: "absolute" }} // Prevent stacking of elements
						>
							{subHeadings[currentIndex]}
						</motion.h2>
					</div>
				</div>

				<Image
					className="mx-auto"
					src="/header.webp"
					alt="Header Image"
					width={1000}
					height={1000}
					quality={90}
					priority
				/>
			</div>

			{/* CONTAINER */}
			<div className="flex flex-col gap-6 py-6 px-4 sm:p-8">
				{/* SEARCH BAR */}
				<Form {...form}>
					<form
						className="max-w-5xl mx-auto w-full h-9 sm:h-[46px] flex border-2 border-secondary rounded sm:rounded-md shadow-b-light"
						onSubmit={form.handleSubmit(onSubmit)}
					>
						<FormField
							control={form.control}
							name="text"
							render={({ field }) => (
								<FormItem className="w-full">
									<FormControl>
										<Input
											className="sm:px-[22px] w-full h-full border-0 rounded-none capitalize"
											placeholder="Search"
											{...field}
										/>
									</FormControl>
								</FormItem>
							)}
						/>
						<Button className="min-w-[52px] sm:min-w-[66px] !p-0 rounded-none" type="submit" disabled={loading}>
							<SearchSvg className="sm:size-8" />
						</Button>
					</form>
				</Form>

				{/* LOADING */}
				{loading && (
					<div className="flex flex-col items-center gap-3">
						<h1 className="h1 sm:h1-sm italic">loading</h1>
						<LoadingSvg className="animate-spin" />
					</div>
				)}

				{/* RESULTS */}
				{searchData && !loading && (<>
					<div className="flex flex-col items-center gap-3 sm:gap-4">
						<h1 className="h1 sm:h1-sm italic">{isDemo ? "demos" : "results"}</h1>

						<Carousel className="w-full grid gap-3">
							<CarouselContent>
								{searchData["products"].map((product) => (
									<CarouselItem className="lg:basis-1/2 2xl:basis-1/3" key={product.asin}>
										<Card
											image={product.image_url}
											title={product.title}
											price={product.price}
											asin={product.asin}
										/>
									</CarouselItem>
								))}
							</CarouselContent>
							<div className="w-full flex items-center justify-between">
								<CarouselPrevious />
								<p className="para size-8 sm:size-9 flex-center italic border border-black/10 rounded-full">{searchData["products-count"]}</p>
								<CarouselNext />
							</div>
						</Carousel>
					</div>

					{/* ACTION BUTTONS */}
					<div className="flex justify-center gap-4">
						<Button className="sm:rounded-lg" onClick={downloadCsv}><CsvFileSvg className="sm:size-8" />Download</Button>
					</div>
				</>
				)}
			</div>

		</main>
	);
}
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

import SpiderToCsvSvg from "@/assets/SpiderToCsvSvg";
import Image from "next/image";
import { searchBarSchema } from "@/schemas/searchBarSchema";
import SearchSvg from "@/assets/SearchSvg"
import Card from "@/components/Card"
import ArrowLeftSvg from "@/assets/ArrowLeftSvg"
import SpiderSvg from "@/assets/SpiderSvg"
import CsvFileSvg from "@/assets/CsvFileSvg"


export default function Home() {
	const form = useForm<z.infer<typeof searchBarSchema>>({
		resolver: zodResolver(searchBarSchema),
		defaultValues: {
			text: "",
		},
	})

	const onSubmit = (data: z.infer<typeof searchBarSchema>) => {
		console.log(data)
	}


	return (
		<main>

			{/* HEADER */}
			<div className="relative">
				<div className="w-full h-full absolute top-0 flex flex-col items-center justify-center gap-5 bg-black/60 text-primary text-[32px] font-bold italic uppercase">
					<h1>amazon scraper</h1>
					<SpiderToCsvSvg />
				</div>

				<Image
					src="/header.webp"
					alt="Header Image"
					width={1080}
					height={1080}
					quality={24}
					priority
				/>
			</div>

			{/* CONTAINER */}
			<div className="flex flex-col gap-6 py-6 px-4">
				{/* SEARCH BAR */}
				<Form {...form}>
					<form
						className="w-full h-9 flex border-2 border-secondary rounded shadow-b-light"
						onSubmit={form.handleSubmit(onSubmit)}
					>
						<FormField
							control={form.control}
							name="text"
							render={({ field }) => (
								<FormItem className="w-full">
									<FormControl>
										<Input
											className="w-full h-full border-0 rounded-none capitalize"
											placeholder="Search"
											{...field}
										/>
									</FormControl>
								</FormItem>
							)}
						/>
						<Button className="min-w-[52px] p-0 rounded-none" type="submit"><SearchSvg /></Button>
					</form>
				</Form>

				{/* RESULTS */}
				<div className="flex flex-col items-center gap-3">
					<h1 className="h1 italic">results</h1>

					<Card
						image="https://m.media-amazon.com/images/I/81R3dLptKcL._AC_SL1500_.jpg"
						title="VIZIO 40-inch Full HD 1080p Smart TV with DTS Virtual: X, Alexa Compatibility, Google Cast Built-in, Bluetooth Headphone Capable, (VFD40M-08 New)"
						asin="B0CXG3HMX1"
					/>

					<div className="w-full flex items-center justify-between">
						<Button className="w-28 h-9 rounded-l-[36px] rounded-r-md"><ArrowLeftSvg /></Button>
						<p className="para">1 of 16</p>
						<Button className="rotate-180 w-28 h-9 rounded-l-[36px] rounded-r-md"><ArrowLeftSvg /></Button>
					</div>
				</div>

				{/* ACTION BUTTONS */}
				<div className="flex justify-center gap-4">
					<Button><SpiderSvg />Scrape</Button>
					<Button><CsvFileSvg />Download</Button>
				</div>
			</div>

		</main>
	);
}
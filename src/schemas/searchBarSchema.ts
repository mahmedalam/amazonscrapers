"use client"

import { z } from "zod"

export const searchBarSchema = z.object({
	text: z.string().min(1),
})
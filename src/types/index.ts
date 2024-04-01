export interface PortfolioImage {
	original: string
	thumb?: string
}

export interface Project {
	id: string
	name: string
	company?: string
	website?: string
	when: string
	images: PortfolioImage[]
	currentImage: number
	description?: string
	technologies?: string[]
}

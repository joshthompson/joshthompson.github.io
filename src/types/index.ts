export interface Project {
	id: string
	name: string
	when: string
	images: string[]
	currentImage: number
	description?: string,
	technologies?: string[]
}

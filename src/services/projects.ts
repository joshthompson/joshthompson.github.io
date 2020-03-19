import { Project } from '@/types'

const projects: Project[] = [
	{
		id: 'brinstarbookingengine',
		name: 'Car Rental Booking Engine',
		image: require('@/assets/projects/brinstar.png'),
		description: `
			<div>
				I created a rental car booking engine / embeddable widget. The aim was to create an updated version of an existing product that connected to a new APIs our parent company had developed. This was to streamline the booking process and provide a more modern web experience. I worked as lead frontend in a team of six.
			</div>
			<div>
				The project was developed with <em>Vue</em>, <em>Typescript</em> and <em>SASS</em> for the frontend with a microservices based backend that utilised <em>Node.js</em> amongst other technologies. I also implemented our click tests, this time opting to use <em>Cypress</em>.
			</div>
			<div>
				The project was highly customisable, to meet partners' requirements. This included the ability to style the booking engine to match the brand (especially important when embedded on their site) and to customise what rates, vehicles and other restrictions apply to each partner.
			</div>
		`
	},
	{
		id: 'ooobot',
		name: 'Out Of Office Bot',
		image: require('@/assets/projects/ooobot.png')
	},
	{
		id: 'pbka',
		name: 'Partner Booking Kit Admin',
		image: require('@/assets/projects/pbka.png')
	},
	{
		id: 'fgo',
		name: 'Fareoffice GO!',
		image: require('@/assets/projects/fgo.png')
	},
	{
		id: 'cavsoc',
		name: 'CAVSOC',
		image: require('@/assets/projects/cavsoc.png')
	},
	{
		id: 'taxicode',
		name: 'Taxicode',
		image: require('@/assets/projects/taxicode.png')
	},
	{
		id: 'taxipricecompare',
		name: 'Taxi Price Compare',
		image: require('@/assets/projects/taxipricecompare.png')
	}
]

export default projects

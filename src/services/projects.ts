import { Project } from '@/types'

const projects: Project[] = [
	{
		id: 'brinstarbookingengine',
		name: 'Car Rental Booking Engine',
		when: '2018 - 2020',
		images: [
			require('@/assets/projects/brinstar1.png'),
			require('@/assets/projects/brinstar2.png'),
			require('@/assets/projects/brinstar3.png')
		],
		currentImage: 0,
		description: `
			<div>
				I created a rental car booking engine / embeddable widget. The aim was to create an updated version of an existing product that connected to a new APIs our parent company had developed. This was to streamline the booking process and provide a more modern web experience. I worked as lead frontend in a team of six.
			</div>
			<div>
				The project was developed with Vue, Typescript and SCSS for the frontend with a microservices based backend that utilised Node.js amongst other technologies. I also implemented our click tests, this time opting to use Cypress.
			</div>
			<div>
				The project was highly customisable, to meet partners' requirements. This included the ability to style the booking engine to match the brand (especially important when embedded on their site) and to customise what rates, vehicles and other restrictions apply to each partner.
			</div>
		`,
		technologies: ['Vue', 'Typescript', 'SCSS', 'Node.js', 'Microservices', 'Cypress', 'Jenkins']
	},
	{
		id: 'ooobot',
		name: 'Out Of Office Bot',
		when: '2019',
		images: [ require('@/assets/projects/ooobot1.png') ],
		currentImage: 0,
		description: `
			<div>
				OOO Bot (Out Of Office Bot) was developed to solve the problem of inbox clutter due to myself and colleagues having to let people know whereabouts we'll be every day (if OOO). I developed a Slack bot that made it easy for everyone to quickly add their OOO statuses. They displayed firstly to the persons team, they also appeared in the company's OOO Outlook Calendar and most importantly in a daily announcement to the company's general channel, like here:
			</div>
			<div>
				<img src="${require('@/assets/projects/ooobot2.png')}" style="width: 500px;" />
			</div>
			<div>
				Another hugely beneficial thing task that it did was to, on the first working day of the month, send a colated summary of your relevant OOO activity and allow you to 'Approve', 'Edit' or 'Decline'. A week later, it would send all approved activity to the accountant to allow them to process the month's payroll.
			</div>
			<div>
				This popular office tool made life simplier and easier for everyone! (especially the accountant who previously had to chase everyone for their reports)
			</div>
		`,
		technologies: ['Node.js', 'Slack API', 'Outlook Calendar API', 'AWS DynamoDB']
	},
	{
		id: 'pbka',
		name: 'Partner Booking Kit Admin',
		when: '2017 - 2018',
		images: [
			require('@/assets/projects/pbka1.png'),
			require('@/assets/projects/pbka2.png'),
			require('@/assets/projects/pbka3.png')
		],
		currentImage: 0,
		description: `
			<div>
				PBK Admin (Partner Booking Kit Admin) was a tool used by sales staff to quickly set up partner solutions. Put simply, it was a CMS with tools specifically built for car rental partners.
			</div>
			<div>
				A lot of effort was put into making the user experience and user interface quick and simple to use so sales staff could set up multiple solutions with ease.
			</div>
			<div>
				The solutions included the booking widget (mentioned above!) that could be embedded into such places as airline or hotels booking processes as well as private areas for companies own staff to make rentals at special rates.
			</div>
			<div>
				Other solutions included landing pages and sites (which included their own booking widget) which meant I had to design customer facing templates with built in content and style customisability to match each partners requirements.
			</div>`,
		technologies: ['AngularJS', 'SCSS', 'Groovy', 'Clojure', 'Ruby']
	},
	{
		id: 'fgo',
		name: 'Fareoffice GO!',
		when: '2019',
		images: [
			require('@/assets/projects/fgo1.png'),
			require('@/assets/projects/fgo2.png')
		],
		currentImage: 0,
		description: `
			<div>
				As the name may suggest, Fareoffice GO! was a Pokemon Go like team building game I built for an event that was ran whilst working at Fareoffice.
			</div>
			<div>
				Three teams had to explore Stockholm and find all their coworkers who were hidden accross the city. Once they found the coworker on the map, they had to answer a question to collect them and earn points and then take a team photo with their capture.
			</div>
			<div>
				In the image, you can see the admin view which included live trails and photos of the teams as they moved around. You can also see the view they had on their phone as they explored the city.
			</div>
		`,
		technologies: ['Vue', 'Typescript', 'Node.js', 'Websockets', 'SCSS', 'AWS DynamoDB']
	},
	{
		id: 'cavsoc',
		name: 'CAVSOC',
		when: '2018',
		images: [ require('@/assets/projects/cavsoc.png') ],
		currentImage: 0,
		description: `
			<div>
				CAVSOC is a video production company ran by my friend, Joe Madden. The specialise in branded content, music videos, fashion editorials and live events.
			</div>
			<div>
				He has a basic knowledge of HTML and CSS, so he asked if I could help design him a simple site that he would be easy for him to add content to about his projects. This means the project did not use any modern web technologies.
			</div>
			<div>
				The focus of my work was to create a simple and striking design to bring across the brand's image.
			</div>
		`,
		technologies: ['HTML', 'CSS', 'Javascript']
	},
	{
		id: 'taxicode',
		name: 'Taxicode',
		when: '2012 - 2016',
		images: [
			require('@/assets/projects/taxicode.png'),
			require('@/assets/projects/trip.png'),
			require('@/assets/projects/taxicode-api.png')
		],
		currentImage: 0,
		description: `
			<div>
				Taxicode is web platform I developed whilst working at Web3r. Taxicode itself is a taxi booking platform that connects customers with 100s of taxi companies based all over the UK. The product itself had many areas so I'll try and briefly describe a few of them.
			</div>
			<div>
				A dashboard that allowed admins and taxi partners to setup their pricing, vehicles, promotions and the content of their own person sites. It allows partners to view and manage new taxi bookings and has a variety of tools to monitor an individual partners performace as well as the entire system's performance.
			</div>
			<div>
				Partner local sites that would be area based and allowed us to target SEO and Google AdWord campaigns to bring work directly to individual companies. These would have a phone number that we tracked calls to monitor performance as well as the ability to make and pay for bookings directly on the site.
			</div>
			<div>
				An accounting system that worked out how much money each partner was to be paid out based off monthly membership fees, penalties for not complete journeys and revenue from completed journeys. This would then feed the information once a week into accounting software via an API.
			</div>
			<div>
				A taxi price comparison and booking API that powered many of our own sites, apps and some thirds party applications.
			</div>
			<div>
				I worked with Taxicode for 5 years and was lead developer on the project.
			</div>
		`,
		technologies: ['PHP', 'MySQL', 'Javascript', 'jQuery', 'MySQL']
	}
]

export default projects

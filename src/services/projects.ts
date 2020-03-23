import { Project } from '@/types'

const projects: Project[] = [
	{
		id: 'brinstarbookingengine',
		name: 'Car Hire Booking Engine',
		company: 'Fareoffice',
		when: '2018 - 2020',
		images: [
			{ original: require('@/assets/projects/brinstar1.png') },
			{ original: require('@/assets/projects/brinstar2.png'), thumb: require('@/assets/projects/brinstar2-thumb.png') },
			{ original: require('@/assets/projects/brinstar3.png'), thumb: require('@/assets/projects/brinstar3-thumb.png') }
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
				The project was highly customisable, to meet partners' requirements. This included the ability to style the booking engine to match their brand (especially important when embedded on their site) and to customise what rates, vehicles and other restrictions apply to each partner.
			</div>
		`,
		technologies: ['Vue', 'Typescript', 'SCSS', 'Node.js', 'Microservices', 'Cypress', 'Jenkins']
	},
	{
		id: 'ooobot',
		name: 'Out Of Office Bot',
		company: 'Fareoffice',
		when: '2019',
		images: [ { original: require('@/assets/projects/ooobot1.png') } ],
		currentImage: 0,
		description: `
			<div>
				OOO Bot (Out Of Office Bot) was developed to solve the problem of inbox clutter due to everyone having to let the whole company know their whereabouts, if they're out of the office.
			</div>
			<div>
				I developed a Slack bot that made it easy for everyone to quickly add their OOO statuses. They displayed firstly to that person's team, they also appeared in the company's OOO Outlook Calendar and most importantly in a daily announcement to the company's general channel, like here:
			</div>
			<div>
				<img src="${require('@/assets/projects/ooobot2.png')}" style="width: 500px;" />
			</div>
			<div>
				Another hugely beneficial thing task that it did was to, on the first working day of the month, send a colated summary of your relevant OOO activity and allow you to 'Approve', 'Edit' or 'Decline'. A week later, it would send all approved activity to the accountant to allow them to process the month's payroll.
			</div>
			<div>
				This popular office tool made life simplier and more efficient for everyone! (especially the accountant, who previously had to chase everyone for their monthly time reports)
			</div>
		`,
		technologies: ['Node.js', 'Slack API', 'Outlook Calendar API', 'AWS DynamoDB']
	},
	{
		id: 'pbka',
		name: 'Partner Booking Kit Admin',
		company: 'Fareoffice',
		when: '2017 - 2018',
		images: [
			{ original: require('@/assets/projects/pbka1.png') },
			{ original: require('@/assets/projects/pbka2.png'), thumb: require('@/assets/projects/pbka2-thumb.png') },
			{ original: require('@/assets/projects/pbka3.png'), thumb: require('@/assets/projects/pbka3-thumb.png') }
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
				The solutions included the booking widget (mentioned above!) that could be embedded into such places as airline or hotels' booking processes, as well as private areas for companies own staff to make rentals at special rates.
			</div>
			<div>
				Other solutions included landing pages and sites (which included their own booking widget). For these I had to design customer facing templates with built in content and style customisability to match each partner's requirements.
			</div>`,
		technologies: ['AngularJS', 'SCSS', 'Groovy', 'Clojure', 'Ruby', 'Selenium', 'Robot Framework']
	},
	{
		id: 'fgo',
		name: 'Fareoffice GO!',
		company: 'Fareoffice',
		when: '2019',
		images: [
			{ original: require('@/assets/projects/fgo1.png') },
			{ original: require('@/assets/projects/fgo2.png'), thumb: require('@/assets/projects/fgo2-thumb.png') }
		],
		currentImage: 0,
		description: `
			<div>
				As the name may suggest, Fareoffice GO! was a Pokemon Go like game which acted as a team building experience. I built it for an event that was ran whilst working at Fareoffice.
			</div>
			<div>
				Three teams had to explore Stockholm and find their coworkers, who were hidden accross the city. Once they followed the clue and found the coworker on the map, they had to answer a question to collect them, earn points and then take a team photo with their "capture".
			</div>
			<div>
				In the first image, you can see the admin view which included live trails and photos of the teams as they moved around. You can also see the view they had on their phone as they explored the city. The second image shows the admin timeline which allowed us to quickly see the new photos that were being sent in.
			</div>
		`,
		technologies: ['Vue', 'Typescript', 'Node.js', 'Websockets', 'SCSS', 'AWS DynamoDB']
	},
	{
		id: 'cavsoc',
		name: 'CAVSOC',
		website: 'https://www.cavsoc.com/',
		when: '2018',
		images: [ { original: require('@/assets/projects/cavsoc.png') } ],
		currentImage: 0,
		description: `
			<div>
				CAVSOC is a video production company ran by my friend, Joe Madden. They specialise in branded content, music videos, fashion editorials and live events.
			</div>
			<div>
				He has a basic grasp of HTML and CSS and wanted a site that he could easily update himself. It also needed some content-based features built with Javascript so I created a simple JSON data structure he could edit which would then be used to create the more dynamic elements of the site.
			</div>
			<div>
				A lot of the focus of the work was to create a simple and striking design that gave room for the brand's portfolio images and videos to take centre stage.
			</div>
		`,
		technologies: ['HTML', 'CSS', 'Javascript']
	},
	{
		id: 'taxicode',
		name: 'Taxicode',
		company: 'Web3r',
		website: 'https://www.taxicode.com',
		when: '2012 - 2016',
		images: [
			{ original: require('@/assets/projects/taxicode.png') },
			{ original: require('@/assets/projects/trip.png'), thumb: require('@/assets/projects/trip-thumb.png') },
			{ original: require('@/assets/projects/taxicode-api.png'), thumb: require('@/assets/projects/taxicode-api-thumb.png') }
		],
		currentImage: 0,
		description: `
			<div>
				Taxicode is web platform I developed whilst working at Web3r. Taxicode itself is a taxi booking platform that connects customers with 100s of taxi companies based all over the UK. The product itself had many areas so I'll try and briefly describe a few of them.
			</div>
			<div>
				APIs for taxi price comparison, making bookings and taking payments. These APIs were used to run many of our own apps and sites as well as several third party applications.
			</div>
			<div>
				A dashboard that allowed admins and taxi partners to setup their pricing, vehicles, promotions and the content of their company site. It allows partners to view and manage new taxi bookings and has a variety of tools to monitor an individual partners performace as well as the entire system's performance.
			</div>
			<div>
				Partner local sites that would be area based and allowed us to target SEO and Google AdWord campaigns to bring work directly to individual companies. These would have a phone number that we tracked calls to monitor performance as well as the ability to make and pay for bookings directly on the site.
			</div>
			<div>
				An accounting system that worked out how much money each partner was to be paid out based off monthly membership fees, penalties for not complete journeys and revenue from completed journeys. This would then feed the information once a week into accounting software via an API.
			</div>
			<div>
				I worked with Taxicode for 5 years and was lead developer on the project.
			</div>
		`,
		technologies: ['PHP', 'MySQL', 'Javascript', 'jQuery', 'LESS', 'MySQL']
	}
]

export default projects

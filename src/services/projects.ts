import { PortfolioImage, Project } from '@/types'

function image(filename: string, type = 'png', thumbtype = type): PortfolioImage {
	return {
		original: require(`@/assets/projects/${filename}.${type}`),
		thumb: require(`@/assets/projects/${filename}-thumb.${thumbtype}`)
	}
}

const projects: Project[] = [
	{
		id: 'apsis-one-frontend',
		name: 'APSIS One - Frontend Platform',
		company: 'APSIS / Efficy',
		when: '2020-2024',
		images: [
			image('apsis-dashboard'),
			image('apsis-storybook'),
			image('apsis-infra')
		],
		currentImage: 0,
		description: `
			<div>
				I worked on the frontend platform on a number of projects ranging from larger cross team efforts to architecture of the frontend. Some of these projects include:
			</div>
			<div>
				I was the project lead on improving standardisting of our shared components. This involved a lot of cleanup as well as migrating them to a monorepo as a library that we published as an npm pacakge.
			</div>
			<div>
				I also led the introduction of our shared component documentation using Storybook <a href="https://apsisinternational.github.io/one-common/latest" target="_blank">here</a>.
			</div>
			<div>
				When we were aquired and had to migrate to a new design system to match our new parent company, I lead work on a project to support both themes simaltaneously.
			</div>
			<div>
				I was also active in developing and supporting our CD pipeline.
			</div>
		`,
		technologies: ['Angular', 'Typescript', 'Storybook', 'NX', 'npm', 'AWS Codebuild', 'AWS CodePipeline', 'AWS S3', 'AWS CloudFront', 'AWS CloudFormation', 'GitHub Actions', 'Monorepo', 'Figma']
	},
	{
		id: 'apsis-one-ma',
		name: 'APSIS One - Marketing Automation',
		company: 'APSIS / Efficy',
		when: '2020-2024',
		images: [
			image('apsis-ma1'),
			image('apsis-ma2', 'gif', 'png')
		],
		currentImage: 0,
		description: `
			<div>
				I worked as the solo frontend developer on the new version of the Marketing Automation tool. This tool allows users to setup a flow chart that allows them to setup complex flows to automate marketing campaigns.
			</div>
			<div>
				After trialing several existing flow chart tools it was decided that we would opt to develop our own from scratch using Angular to generate an interactive SVG canvas that drag around nodes, setup connections and manipulate like other similar canvas based tools such as Figma.
			</div>
			<div>
				The tool's backend was built with Node.js so a shared types package was worked on with the backend developers which also allowed us to share other features like a validation of the data model.
			</div>
			<div>
				I was also on the on-call PagerDuty schedule for the Marketing Automation tool.
			</div>
		`,
		technologies: ['Angular', 'Typescript', 'Node.js', 'SVG', 'PagerDuty', 'AWS CloudWatch']
	},
	{
		id: 'apsis-one-integrations',
		name: 'APSIS One - Integrations',
		company: 'APSIS / Efficy',
		when: '2020-2024',
		images: [
			image('apsis-integrations1'),
			image('apsis-integrations2'),
			image('apsis-integrations3')
		],
		currentImage: 0,
		description: `
			<div>
				I worked in the Integrations teams developing a tool that allowed customers to connect to many different platforms and to sync data between APSIS One and the third party system.
			</div>
			<div>
				This involved installation with third party systems which varied a lot but often involved OAuth flows and connecting to different APIs. Larger integrations including Shopify, Microsoft Dynamics and Facebook.
			</div>
			<div>
				I was also on the on-call PagerDuty schedule for the Integrations tool.
			</div>
		`,
		technologies: ['Angular', 'Typescript', 'npm', 'OAuth', 'PagerDuty', 'AWS CloudWatch']
	},
	{
		id: 'brinstarbookingengine',
		name: 'Car Hire Booking Engine',
		company: 'Fareoffice',
		when: '2018 - 2020',
		images: [
			image('brinstar1'),
			image('brinstar2'),
			image('brinstar3')
		],
		currentImage: 0,
		description: `
			<div>
				I created a rental car booking engine / embeddable widget. The aim was to create an updated version of an existing product that connected to a new APIs that our parent company had developed. This was to streamline the booking process and provide a more modern web experience. I worked as lead frontend in a team of six.
			</div>
			<div>
				The project was developed with Vue, Typescript and SCSS for the frontend with a microservices based backend that utilised Node.js amongst other technologies. I also implemented our click tests using Cypress.
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
		images: [image('ooobot1')],
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
			image('pbka1'),
			image('pbka2'),
			image('pbka3')
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
			image('fgo1'),
			image('fgo2')
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
		images: [image('cavsoc')],
		currentImage: 0,
		description: `
			<div>
				CAVSOC is a video production company ran by my friend, Joe Madden. They specialise in branded content, music videos, fashion editorials and live events.
			</div>
			<div>
				He has a basic grasp of HTML, CSS and PHP and wanted a site that he could easily update himself. It also needed some content-based features built with Javascript so I created a simple JSON data structure he could edit which would then be used to create the more dynamic elements of the site.
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
			image('taxicode'),
			image('trip'),
			image('taxicode-api')
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

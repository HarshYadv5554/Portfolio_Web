export const navLinks = [
	{
		id: "about",
		title: "About",
	},
	{
		id: "work",
		title: "Work",
	},
	{
		id: "contact",
		title: "Contact",
	},
];

const services = [
	{
		title: "Full Stack Developer",
		icon: "/backend.webp",
	},
	{
		title: "IoT Enthusiast",
		icon: "/web.webp",
	},
	{
		title: "Problem Solver",
		icon: "/mobile.webp",
	},
	{
		title: "Software Engineer",
		icon: "/creator.webp",
	},
];

const technologies = [
	{
		name: "C++",
		icon: "/tech/cpp.webp",
	},
	{
		name: "Python",
		icon: "/tech/python.webp",
	},
	{
		name: "JavaScript",
		icon: "/tech/javascript.webp",
	},
	{
		name: "TypeScript",
		icon: "/tech/typescript.webp",
	},
	{
		name: "React JS",
		icon: "/tech/reactjs.webp",
	},
	{
		name: "Next.JS",
		icon: "/tech/nextjs.svg",
	},
	{
		name: "Node.js",
		icon: "/tech/nodejs.webp",
	},
	{
		name: "Express.js",
		icon: "/tech/express.webp",
	},
	{
		name: "MongoDB",
		icon: "/tech/mongodb.webp",
	},
	{
		name: "PostgreSQL",
		icon: "/tech/postgresql.webp",
	},
	{
		name: "Docker",
		icon: "/tech/docker.webp",
	},
	{
		name: "Kubernetes",
		icon: "/tech/kubernetes.webp",
	},
	{
		name: "AWS",
		icon: "/tech/aws.webp",
	},
	{
		name: "Raspberry Pi",
		icon: "/tech/raspberrypi.webp",
	},
	{
		name: "Arduino",
		icon: "/tech/arduino.webp",
	},
];

const experiences = [
	{
		title: "Freelancer",
		company_name: "Self-Employed",
		icon: "/company/freelance.webp",
		iconBg: "#383E56",
		date: "Jun 2024 - Dec 2024",
		points: [
			"Developed UI for an interview application",
			"Built an AI-powered resume shortlisting bot",
		],
	},
];

const testimonials = [
	{
		id: 1,
		testimonial: "Check out my GitHub profile for all my projects and contributions.",
		name: "Harsh Yadav",
		image: "/tech/github.webp",
		link: "https://github.com/HarshYadv5554",
	},
	{
		id: 2,
		testimonial: "Connect with me on LinkedIn for professional updates and networking.",
		name: "Harsh Yadav",
		image: "/socialmedia/linkedin.svg",
		link: "https://linkedin.com/in/harsh-yadav5554",
	},
	{
		id: 3,
		testimonial: "Follow my coding journey and problem-solving skills on LeetCode.",
		name: "Harsh Yadav",
		image: "/socialmedia/leetcode.svg",
		link: "https://leetcode.com/HarshYadav",
	},
];

const projects = [
	{
		name: "Event Management System",
		description: "A full-stack event management system built with MERN stack featuring real-time updates and secure authentication.",
		tags: [
			{
				name: "MERN",
				color: "blue-text-gradient",
			},
			{
				name: "JWT",
				color: "green-text-gradient",
			},
			{
				name: "WebSockets",
				color: "pink-text-gradient",
			},
			{
				name: "Docker",
				color: "blue-text-gradient",
			},
		],
		image: "/projectimg/event-management.webp",
		source_code_link: "https://github.com/HarshYadv5554/event-management",
		platform: "Web",
		deploy_link: "https://event-management-demo.vercel.app",
	},
	{
		name: "Real-Time Fitness Tracking App",
		description: "A mobile-first fitness tracking application with real-time data synchronization and push notifications.",
		tags: [
			{
				name: "Firebase",
				color: "green-text-gradient",
			},
			{
				name: "Firestore",
				color: "blue-text-gradient",
			},
			{
				name: "Cloud Messaging",
				color: "pink-text-gradient",
			},
		],
		image: "/projectimg/fitness-app.webp",
		source_code_link: "https://github.com/HarshYadv5554/fitness-tracker",
		platform: "Web",
		deploy_link: "https://fitness-tracker-demo.vercel.app",
	},
	{
		name: "Wireframe to Code AI App",
		description: "An AI-powered application that converts wireframes into production-ready code using Next.js and OpenRouter AI.",
		tags: [
			{
				name: "Next.js",
				color: "blue-text-gradient",
			},
			{
				name: "TypeScript",
				color: "green-text-gradient",
			},
			{
				name: "OpenRouter AI",
				color: "pink-text-gradient",
			},
		],
		image: "/projectimg/wireframe-ai.webp",
		source_code_link: "https://github.com/HarshYadv5554/wireframe-to-code",
		platform: "Vercel",
		deploy_link: "https://wireframe-to-code.vercel.app",
	},
	{
		name: "AI-Powered Surveillance Robot",
		description: "An intelligent surveillance system using Raspberry Pi, OpenCV, and MQTT for real-time monitoring.",
		tags: [
			{
				name: "Raspberry Pi",
				color: "blue-text-gradient",
			},
			{
				name: "OpenCV",
				color: "green-text-gradient",
			},
			{
				name: "MQTT",
				color: "pink-text-gradient",
			},
		],
		image: "/projectimg/surveillance-robot.webp",
		source_code_link: "https://github.com/HarshYadv5554/surveillance-robot",
		platform: "Web",
		deploy_link: "https://surveillance-robot-demo.vercel.app",
	},
];

export { services, technologies, experiences, testimonials, projects };

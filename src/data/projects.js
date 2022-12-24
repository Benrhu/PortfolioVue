// Projects data.
// Note: Here we are getting data from a js file, but in a different project I'll be fetching these projects from some srt of APIs.

const projects = [
	{
		id: 1,
		title: 'Misy-CRM',
		category: 'web',
		img: require('@/assets/images/web-project-2.jpg'),
	},
	{
		id: 2,
		title: 'Network Marketing API',
		category: 'backend',
		img: require('@/assets/images/mobile-project-2.jpg'),
	},
	{
		id: 3,
		title: 'Copy-writing Micro Saas',
		category: 'ai',
		img: require('@/assets/images/ui-project-1.jpg'),
	},
	{
		id: 4,
		title: 'Grouzy Website',
		category: 'web',
		img: require('@/assets/images/ui-project-2.jpg'),
	},
	{
		id: 5,
		title: 'OCD simulator',
		category: 'Abackend',
		img: require('@/assets/images/mobile-project-1.jpg'),
	},
	{
		id: 6,
		title: 'Real estate template',
		category: 'template',
		img: require('@/assets/images/web-project-1.jpg'),
	},
];

export default projects;

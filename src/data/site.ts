// Single place for the club's real-world details.
// Everything marked TODO is a placeholder — replace before launch.
export const site = {
	name: 'UNLV AI Club',
	shortName: 'AI Club',
	university: 'University of Nevada, Las Vegas',
	description:
		'A student club at UNLV for anyone curious about artificial intelligence — no experience required.',

	// TODO: replace with the club's real contact address.
	email: 'TODO@unlv.edu',

	// TODO: confirm the regular meeting time and place.
	meeting: {
		when: 'TODO — e.g. Thursdays, 5:30–6:30 PM',
		where: 'TODO — building and room',
	},

	// TODO: add real links, or delete the ones the club does not use.
	links: {
		discord: '',
		instagram: '',
		github: '',
		involvementCenter: '',
	},
} as const;

export const navItems = [
	{ href: '/', label: 'Home' },
	{ href: '/about', label: 'About' },
	{ href: '/events', label: 'Events' },
	{ href: '/officers', label: 'Officers' },
	{ href: '/join', label: 'Join' },
] as const;

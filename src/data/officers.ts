// TODO: replace these placeholders with the real officer roster.
// Leave `email` empty to omit the contact link for that officer.
export type Officer = {
	role: string;
	name: string;
	email?: string;
	blurb?: string;
};

export const officers: Officer[] = [
	{ role: 'President', name: 'TODO — name' },
	{ role: 'Vice President', name: 'TODO — name' },
	{ role: 'Treasurer', name: 'TODO — name' },
	{ role: 'Secretary', name: 'TODO — name' },
	{ role: 'Faculty Advisor', name: 'TODO — name' },
];

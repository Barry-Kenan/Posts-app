export interface IMyProfile {
	id: number;
	name: string;
	surname: string;
	address: Address;
	phone: string;
	email: string;
	jobTitle: string;
	github: string;
	hh: string;
	telegram: string;
	image: string;
	skills: string[];
}

interface Address {
	country: string;
	city: string;
}

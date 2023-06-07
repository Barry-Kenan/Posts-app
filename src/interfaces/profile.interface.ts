export interface IMyProfile {
	id: number;
	name: string;
	surname: string;
	address: Address;
	phone: string;
	email: string;
	github: string;
	telegram: string;
}

interface Address {
	country: string;
	city: string;
}

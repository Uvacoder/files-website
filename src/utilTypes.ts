export type Item = {
	name: string;
	href: string;
	icon?: string;
	selectedIcon?: string;
	selected?: boolean;
	external?: boolean;
	endOfSection?: boolean;
};
export type File = {
	name: string;
	type: string;
	icon: string;
	modified: string;
	size?: string;
};
export type Contributor = {
	login: string;
	avatar_url: string;
	contributions: number;
};
export type ButtonType = "primary" | "secondary";
export type Theme =
	| "light"
	| "dark"
	| "cupcake"
	| "bumblebee"
	| "emerald"
	| "corporate"
	| "synthwave"
	| "retro"
	| "cyberpunk"
	| "valentine"
	| "halloween"
	| "garden"
	| "forest"
	| "aqua"
	| "lofi"
	| "pastel"
	| "fantasy"
	| "wireframe"
	| "black"
	| "luxury"
	| "dracula";

export interface User {
	id: string;
	name: string;
	email: string;
	avatar: string;
	role: "admin" | "user";
}

export interface Stat {
	title: string;
	value: string;
	icon: string;
	trend?: {
		value: number;
		isPositive: boolean;
	};
	description?: string;
}

export interface TableData {
	id: string;
	name: string;
	email: string;
	role: string;
	status: "Active" | "Pending" | "Inactive";
	lastLogin: string;
}

export interface Dashboard {
	id: string;
	name: string;
	imageUrl: string;
}
export interface Category {
	id: string;
	name: string;
	dashboard: Dashboard;
}

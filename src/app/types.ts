export interface Dashboard {
	id: string;
	label: string;
	imageUrl: string;
	description: string;
}

export interface Category {
	id: string;
	name: string;
	dashboard: Dashboard;
	description: string;
}

export interface Product {
	id: string;
	categoryId: string;
	imageUrl: string;
	category: Category;
	name: string;
	description: string;
	productName: string;
	price: string;
	isFeatured: boolean;
	size: Size;
	color: Color;
	images: Image[];
}

export interface Image {
	id: string;
	url: string;
}

export interface Size {
	id: string;
	name: string;
	value: string;
}

export interface Color {
	id: string;
	name: string;
	value: string;
}

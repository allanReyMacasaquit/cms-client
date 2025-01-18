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
	category: string;
	categoryName: string;
	name: string;
	price: string;
	description: string;
	isFeatured: boolean;
	sizeId: string;
	colorId: string;
	imageUrl: string;
	images: Image[];
}

export interface Image {
	id: string;
	url: string;
	colorId: string;
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

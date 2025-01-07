import { Category } from '@/app/types';

const getCategories = async (): Promise<Category[]> => {
	const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/category`);
	return res.json();
};
export default getCategories;

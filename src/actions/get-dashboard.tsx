import { Dashboard } from '@/app/types';

const getDashboard = async (id: string): Promise<Dashboard> => {
	const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/dashboard/${id}`);
	return res.json();
};
export default getDashboard;

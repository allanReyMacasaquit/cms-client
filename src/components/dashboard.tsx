import { Dashboard as DashboardType } from '@/app/types';

interface DashboardProps {
	data: DashboardType;
}

const Dashboard: React.FC<DashboardProps> = ({ data }) => {
	return (
		<div className='overflow-hidden shadow-2xl shadow-blue-950'>
			<div
				className=' relative aspect-square md:aspect-[3/1] overflow-hidden bg-cover bg-center shadow-lg'
				style={{
					backgroundImage: `url(${data?.imageUrl})`,
				}}
			>
				<div className='h-full w-full flex flex-col justify-center items-center text-center gap-y-4'>
					<div className='font-bold text-[clamp(1.5rem, 5vw, 3rem)] text-6xl sm:max-w-xl max-w-xs p-4 lg:px-6 text-white tracking-widest'>
						{data.label}
					</div>
					<div className='font-bold text-[clamp(1.5rem, 5vw, 3rem)] text-black sm:max-w-xl max-w-xs p-4 lg:px-6 leading-snug bg-slate-200 rounded-full'>
						{data.description}
					</div>
					<button className='px-6 py-2 text-black font-medium text-sm shadow-md hover:bg-gray-100 transition duration-300 bg-slate-200 rounded-full'>
						Learn More
					</button>
				</div>
			</div>
		</div>
	);
};

export default Dashboard;

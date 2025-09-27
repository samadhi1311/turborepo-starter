import { Loader2Icon } from 'lucide-react';

export default function FullScreenLoader() {
	return (
		<div className='flex items-center justify-center w-full h-screen'>
			<Loader2Icon className='size-4 animate-spin' strokeWidth={2.5} />
		</div>
	);
}

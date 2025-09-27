'use client';

import FullScreenLoader from '@/components/loading-screens/full-screen-loader';
import { useAuth } from '@/contexts/auth/auth-context';

export default function DashboardPage() {
	const { session, isLoading } = useAuth();

	if (isLoading) return <FullScreenLoader />;

	return (
		<div className='flex items-center justify-center w-full h-screen'>
			<h1>Dashboard</h1>
			<pre>{JSON.stringify(session, null, 2)}</pre>
		</div>
	);
}

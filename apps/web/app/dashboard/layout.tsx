// app/dashboard/layout.tsx
'use client';

import { ReactNode, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import { AuthProvider, useAuth } from '@/contexts/auth/auth-context';
import FullScreenLoader from '@/components/loading-screens/full-screen-loader';
import { routes } from '@/lib/routes';

function DashboardAuthGate({ children }: { children: ReactNode }) {
	const router = useRouter();
	const { session, isLoading } = useAuth();

	useEffect(() => {
		if (!isLoading && !session?.user) {
			router.replace(routes.signIn); // redirect if not logged in
		}
	}, [isLoading, session, router]);

	if (isLoading) return <FullScreenLoader />;

	return <>{children}</>;
}

export default function DashboardLayout({ children }: { children: ReactNode }) {
	return (
		<AuthProvider>
			<DashboardAuthGate>{children}</DashboardAuthGate>
		</AuthProvider>
	);
}

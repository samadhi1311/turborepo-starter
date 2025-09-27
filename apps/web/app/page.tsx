'use client';

import { routes } from '@/lib/routes';
import { Button } from '@workspace/ui/components/button';
import { ExternalLinkIcon, GaugeIcon } from 'lucide-react';
import { useTheme } from 'next-themes';
import Link from 'next/link';

export default function Home() {
	const { theme } = useTheme();
	return (
		<div className='flex flex-col gap-8 items-center justify-center w-screen h-screen bg-background'>
			<div>
				<img
					src={`${theme === 'dark' ? '/turborepo-dark.svg' : '/turborepo-light.svg'}`}
					className='h-16'
					alt='Turborepo Logo'
				/>
			</div>

			<div className='max-w-prose text-center'>
				<p>
					A starter template using Next.JS frontend with Shadcn UI,
					Nest.JS backend, PostgresSQL database with Drizzle ORM and
					Better-Auth authentication.
				</p>
			</div>

			<div className='flex items-center gap-4'>
				<Button variant='default' asChild>
					<Link href={routes.dashboard}>
						<GaugeIcon className='size-4' strokeWidth={2.5} />
						Dashboard
					</Link>
				</Button>

				<Button variant='link' asChild>
					<Link
						href='https://github.com/samadhi1311/turborepo-starter'
						target='_blank'
					>
						Learn More
					</Link>
				</Button>
			</div>
		</div>
	);
}

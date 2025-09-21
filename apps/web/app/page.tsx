'use client';

import { Button } from '@repo/ui/components/ui/button';
import { ExternalLinkIcon } from 'lucide-react';
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
                    A starter template using Next.JS frontend, Nest.JS backend
                    and PostgresSQL database with Drizzle ORM
                </p>
            </div>

            <div>
                <Button variant='secondary' asChild>
                    <Link
                        href='https://github.com/samadhi1311/turborepo-starter'
                        target='_blank'
                    >
                        <ExternalLinkIcon
                            className='size-4'
                            strokeWidth={2.5}
                        />
                        Learn More
                    </Link>
                </Button>
            </div>
        </div>
    );
}

import { Metadata } from 'next';
import { Inter } from 'next/font/google';
import { ThemeProvider } from '@/components/providers/theme-provider';
import { Toaster } from '@workspace/ui/components/sonner';
import '@workspace/ui/globals.css';

const inter = Inter({
	subsets: ['latin'],
	style: 'normal',
	weight: ['100', '200', '300', '400', '500', '600', '700', '800', '900'],
	display: 'auto',
	fallback: ['Helvetica', 'Segoe UI', 'sans-serif'],
	preload: true,
	variable: '--font-inter',
});

export const metadata: Metadata = {
	title: 'Turborepo Starter',
	description:
		'A starter template using Next.JS frontend, Nest.JS backend and PostgresSQL database with Drizzle ORM.',
};

export default function RootLayout({
	children,
}: Readonly<{ children: React.ReactNode }>) {
	return (
		<html lang='en' suppressHydrationWarning>
			<body className={`${inter.className} antialiased!`}>
				<ThemeProvider>{children}</ThemeProvider>
				<Toaster />
			</body>
		</html>
	);
}

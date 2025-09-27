'use client';

import {
	AlertCircleIcon,
	CircleCheckIcon,
	Loader2Icon,
	XCircleIcon,
} from 'lucide-react';
import { useTheme } from 'next-themes';
import { Toaster as Sonner, ToasterProps } from 'sonner';

const Toaster = ({ ...props }: ToasterProps) => {
	const { theme = 'system' } = useTheme();

	return (
		<Sonner
			theme={theme as ToasterProps['theme']}
			className='toaster group'
			richColors
			closeButton
			expand
			icons={{
				success: (
					<CircleCheckIcon className='size-4' strokeWidth={2.5} />
				),
				info: <AlertCircleIcon className='size-4' strokeWidth={2.5} />,
				warning: (
					<AlertCircleIcon className='size-4' strokeWidth={2.5} />
				),
				error: <XCircleIcon className='size-4' strokeWidth={2.5} />,
				loading: (
					<Loader2Icon
						className='animate-spin size-4'
						strokeWidth={2.5}
					/>
				),
			}}
			style={
				{
					fontFamily: 'inherit',
					'--normal-bg': 'var(--popover)',
					'--normal-text': 'var(--popover-foreground)',
					'--normal-border': 'var(--border)',
				} as React.CSSProperties
			}
			{...props}
		/>
	);
};

export { Toaster };

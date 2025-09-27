import { Card, CardContent } from '@workspace/ui/components/card';

export default function NotFound() {
	return (
		<div className='bg-muted/20 flex min-h-svh flex-col items-center justify-center p-6 md:p-10'>
			<div className='w-full max-w-sm md:max-w-3xl'>
				<div className='flex flex-col gap-6'>
					<Card className='p-0 border rounded-lg overflow-hidden'>
						<CardContent className='grid p-0 md:grid-cols-2'>
							<div className='p-6 md:p-8 lg:p-12 min-h-[48svh] flex flex-col justify-around'>
								<h1 className='text-lg font-semibold tracking-tight'>
									404
								</h1>
								<h2 className='text-sm text-muted-foreground'>
									We are sorry, but the page you are looking
									for does not exist.
								</h2>
							</div>
							<div className='relative hidden md:block bg-muted/60 overflow-hidden'>
								<img
									src='https://images.unsplash.com/photo-1752150127767-77bccbed07e2?q=80&w=1374&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
									alt='An image by Shubham Dhage on Unsplash: https://unsplash.com/photos/a-flower-filled-ring-floats-in-fluffy-clouds-qNMRub72lxo'
									className='absolute inset-0 h-full w-full object-cover'
								/>
							</div>
						</CardContent>
					</Card>
				</div>
			</div>
		</div>
	);
}

'use client';

import { useState } from 'react';
import { Input } from '@workspace/ui/components/input';
import { Card, CardContent } from '@workspace/ui/components/card';
import { Button } from '@workspace/ui/components/button';
import { z } from 'zod';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import {
	Form,
	FormControl,
	FormField,
	FormItem,
	FormLabel,
	FormMessage,
} from '@workspace/ui/components/form';
import { authClient } from '@workspace/lib/better-auth';
import Link from 'next/link';
import { routes } from '@/lib/routes';
import { Loader2Icon, XIcon } from 'lucide-react';
import { toast } from '@workspace/ui/components/toast';

const formSchema = z.object({
	email: z.email({ message: 'A valid email address is required.' }),
	password: z
		.string({ error: 'Password is required.' })
		.min(8, { message: 'Password must be at least 8 characters.' }),
});

export default function SignIn() {
	const [isLoading, setIsLoading] = useState(false);

	const form = useForm<z.infer<typeof formSchema>>({
		resolver: zodResolver(formSchema),
		defaultValues: {
			email: '',
			password: '',
		},
	});

	const onSubmit = async (values: z.infer<typeof formSchema>) => {
		setIsLoading(true);

		try {
			const { error } = await authClient.signIn.email({
				email: values.email,
				password: values.password,
			});

			if (error) {
				toast.error(error.message || 'Something went wrong.');
			}
		} catch (error: any) {
			console.error(error.message || 'Something went wrong.');
		} finally {
			setIsLoading(false);
		}
	};

	return (
		<div className='bg-muted/20 flex min-h-svh flex-col items-center justify-center p-6 md:p-10'>
			<div className='w-full max-w-sm md:max-w-3xl'>
				<div className='flex flex-col gap-6'>
					<Card className='p-0 border rounded-lg overflow-hidden'>
						<CardContent className='grid p-0 md:grid-cols-2'>
							<Form {...form}>
								<form
									onSubmit={form.handleSubmit(onSubmit)}
									className='p-6 md:p-8 lg:p-12'
								>
									<div className='flex flex-col gap-6'>
										<div className='flex flex-col items-center text-center md:mb-8'>
											<h1 className='text-lg font-semibold tracking-tight'>
												Welcome back
											</h1>
											<p className='text-muted-foreground text-balance text-sm'>
												Sign in to your account
											</p>
										</div>

										<div className='grid gap-6'>
											<FormField
												control={form.control}
												name='email'
												render={({ field }) => (
													<FormItem className='grid gap-2'>
														<FormLabel>
															Email
														</FormLabel>
														<FormControl>
															<Input
																placeholder='example@mail.com'
																{...field}
															/>
														</FormControl>
														<FormMessage />
													</FormItem>
												)}
											/>

											<FormField
												control={form.control}
												name='password'
												render={({ field }) => (
													<FormItem className='grid gap-2'>
														<div className='flex items-center'>
															<FormLabel>
																Password
															</FormLabel>
															<a
																href='#'
																className='ml-auto text-sm underline-offset-2 hover:underline'
															>
																Forgot your
																password?
															</a>
														</div>
														<FormControl>
															<Input
																placeholder='••••••••'
																type='password'
																{...field}
															/>
														</FormControl>
														<FormMessage />
													</FormItem>
												)}
											/>
										</div>

										<Button
											type='submit'
											className='w-full'
										>
											{isLoading ? (
												<Loader2Icon
													className='size-4 animate-spin'
													strokeWidth={2.5}
												/>
											) : (
												'Continue'
											)}
										</Button>
										<div className='text-center text-sm md:mt-8'>
											Don&apos;t have an account?{' '}
											<Link
												href={routes.signUp}
												className='underline underline-offset-4'
											>
												Sign up
											</Link>
										</div>
									</div>
								</form>
							</Form>
							<div className='relative hidden md:block bg-muted/60 overflow-hidden'>
								<img
									src='https://images.unsplash.com/photo-1743361657693-7b60363b6d16?q=80&w=627&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
									alt='An image by Shubham Dhage on Unsplash: https://unsplash.com/photos/wavy-grassy-hills-with-wildflowers-spread-across-them-_Y16IPy6UGc'
									className='absolute inset-0 h-full w-full object-cover'
								/>
							</div>
						</CardContent>
					</Card>
					<div className='text-muted-foreground *:[a]:hover:text-primary text-center text-xs text-balance *:[a]:underline *:[a]:underline-offset-4'>
						By clicking continue, you agree to our{' '}
						<a href='#'>Terms of Service</a> and{' '}
						<a href='#'>Privacy Policy</a>.
					</div>
				</div>
			</div>
		</div>
	);
}

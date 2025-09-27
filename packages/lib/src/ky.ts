import ky from 'ky';
import { authClient } from './better-auth.js';

export const api: typeof ky = ky.create({
	prefixUrl: `${process.env.NEXT_PUBLIC_API_URL}/api`,
	timeout: 10000,
	hooks: {
		afterResponse: [
			async (_req, _opts, res) => {
				if (!res.ok) {
					const msg = await res.text();
					throw new Error(msg || 'API Error');
				}
				return res;
			},
		],
	},
});

export async function signIn(email: string, password: string) {
	return await authClient.signIn.email({ email, password });
}

export async function signUp(email: string, password: string) {
	return await authClient.signIn.email({ email, password });
}

export async function signOut() {
	return await authClient.signOut();
}

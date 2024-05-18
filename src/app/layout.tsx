import Providers from '@/lib/Providers/Providers';
import { AppRouterCacheProvider } from '@mui/material-nextjs/v13-appRouter';
import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import { Toaster } from 'sonner';
import './globals.css';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
	title: 'Ph Health Care',
	description: 'A health care platform for all your health needs'
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
	return (
		<Providers>
			<html lang='en'>
				<body className={inter.className}>
					<AppRouterCacheProvider>
						{children}
						<Toaster position='bottom-right' expand={true} richColors />
					</AppRouterCacheProvider>
				</body>
			</html>
		</Providers>
	);
}

import './globals.css';
import type { Metadata } from 'next';
import { Open_Sans } from 'next/font/google';
import NavBar from '../components/NavBar';

const openSans = Open_Sans({ subsets: ['latin'] });

export const metadata: Metadata = {
    title: 'AllergEye',
    description: 'AllergEye',
};

export default function RootLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
        <html lang="en">
            <body className={openSans.className}>
                <NavBar />
                {children}
            </body>
        </html>
    );
}

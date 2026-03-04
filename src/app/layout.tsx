import type { Metadata } from 'next';
import { IBM_Plex_Mono, Outfit } from 'next/font/google';
import './globals.scss';
import Header from '@widgets/header/Header';

const outfit = Outfit({
  subsets: ['latin'],
  variable: '--font-outfit',
});

const ibmPlexMono = IBM_Plex_Mono({
  subsets: ['latin'],
  weight: ['400', '500'],
  variable: '--font-mono',
});

export const metadata: Metadata = {
  title: 'TP RD',
  description: '',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="uk">
      <body className={`${outfit.variable} ${ibmPlexMono.variable}`}>
        <Header />
        {children}
        <footer></footer>
      </body>
    </html>
  );
}

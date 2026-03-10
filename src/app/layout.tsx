import type { Metadata } from 'next';
import { Manrope } from 'next/font/google';
import './globals.scss';
import { Header } from '@/widgets/header/Header';

const manrope = Manrope({
  subsets: ['latin', 'cyrillic'],
  weight: ['400', '500', '600', '700'],
  variable: '--font-manrope',
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
      <body className={manrope.variable}>
        <Header />
        {children}
      </body>
    </html>
  );
}

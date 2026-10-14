import type { Metadata } from 'next';
import { Geist, Geist_Mono } from 'next/font/google';
import './globals.css';
import './retro-desktop.css';

const geistSans = Geist({ variable: '--font-geist-sans', subsets: ['latin'] });
const geistMono = Geist_Mono({ variable: '--font-geist-mono', subsets: ['latin'] });

export const metadata: Metadata = {
  metadataBase: new URL('https://michaeldanielos.vercel.app'),
  title: { default: 'Michael Daniel — Mi escritorio personal', template: '%s | Michael Daniel' },
  description: 'Explora el escritorio de Michael Daniel: proyectos, cursos gratuitos, tecnología e ideas. Desarrollador frontend y creador de contenido.',
  icons: { icon: '/michael-daniel.png', apple: '/michael-daniel.png' },
  openGraph: {
    title: 'Michael Daniel — Mi escritorio personal',
    description: 'Un escritorio, muchas ideas. Explora mis proyectos, cursos y un poco de lo que soy.',
    url: '/',
    siteName: 'Michael Daniel',
    locale: 'es_PE',
    type: 'website',
  },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return <html lang="es" className="dark"><body className={`${geistSans.variable} ${geistMono.variable}`}>{children}</body></html>;
}

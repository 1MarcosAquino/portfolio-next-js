import type { Metadata } from 'next';
import { Roboto } from 'next/font/google';
import './globals.css';

const roboto = Roboto({
  subsets: ['latin'],
  weight: ['400', '700'],
  display: 'swap',
});

export const metadata: Metadata = {
  title: {
    default: 'Marcos Aquino | Desenvolvedor Web Fullstack',
    template: '%s | Marcos Aquino',
  },

  description: 'Desenvolvedor fullstack PHP, Javacript.',

  keywords: [
    'desenvolvedor full stack',
    'desenvolvimento web',
    'aplicações web',
    'front-end',
    'back-end',
    'React',
    'PHP',
    'TypeScript',
    'MySQL',
    'APIs',
    'Marcos Aquino',
  ],

  authors: [{ name: 'Marcos Aquino' }],

  metadataBase: new URL('https://1marcosaquino.github.io/Portfolio'),

  alternates: {
    canonical: '/Portfolio/',
  },

  openGraph: {
    title: 'Marcos Aquino | Desenvolvedor Full Stack',
    description: 'Portfólio com projetos de sites e soluções digitais.',
    url: 'https://1marcosaquino.github.io/Portfolio/',
    siteName: 'Marcos Aquino Portfolio',
    images: [
      {
        url: '/perfil.webp',
        width: 1200,
        height: 630,
        alt: 'Marcos Aquino Desenvolvedor Full Stack',
      },
    ],
    locale: 'pt_BR',
    type: 'website',
  },

  twitter: {
    card: 'summary_large_image',
    title: 'Marcos Aquino | Desenvolvedor Full Stack',
    description: 'Confira meu portfólio com projetos de sites e soluções digitais.',
    images: ['/images/perfil.webp'],
  },

  icons: {
    icon: '/images/favicon.ico',
  },

  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const schema = {
    '@context': 'https://schema.org',
    '@type': 'Person',
    name: 'Marcos Aquino',
    url: 'https://1marcosaquino.github.io/Portfolio/',
    jobTitle: 'Desenvolvedor Full Stack',
    image: 'https://1marcosaquino.github.io/Portfolio/images/perfil.webp',
    sameAs: ['https://github.com/1marcosaquino'],
    knowsAbout: ['JavaScript', 'React', 'Next.js', 'PHP', 'TypeScript', 'MySQL', 'APIs REST'],
  };

  return (
    <html lang="pt-BR">
      <body className={roboto.className}>{children}</body>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />
    </html>
  );
}

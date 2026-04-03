import { Footer } from '@/components/Footer';
import { Header } from '@/components/Header';
import { ThemeProvider } from '@/context/ThemeProvider';
import '@/globals.css';
import type { Metadata } from 'next';
import { Nunito } from 'next/font/google';
import Script from 'next/script';

const roboto = Nunito({
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

    metadataBase: new URL('https://portfolio-de-marcos.netlify.app'),

    alternates: {
        canonical: '/',
    },

    openGraph: {
        title: 'Marcos Aquino | Desenvolvedor Full Stack',
        description: 'Portfólio com projetos de sites e soluções digitais.',
        url: 'https://portfolio-de-marcos.netlify.app/',
        siteName: 'Marcos Aquino Portfolio',
        images: [
            {
                url: '/images/perfil.webp',
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
        url: 'https://portfolio-de-marcos.netlify.app/',
        jobTitle: 'Desenvolvedor Full Stack',
        image: 'https://portfolio-de-marcos.netlify.app/images/perfil.webp',
        sameAs: ['https://github.com/1marcosaquino'],
        knowsAbout: ['JavaScript', 'React', 'Next.js', 'PHP', 'TypeScript', 'MySQL', 'APIs REST'],
    };

    return (
        <html lang="pt-BR">
            {/* HEADER */}
            <body className={roboto.className}>
                <ThemeProvider>
                    <Header title="" />
                    {children}
                    <Footer />
                </ThemeProvider>
            </body>
            <Script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />
        </html>
    );
}

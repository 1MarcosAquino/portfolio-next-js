import Link from 'next/link';
import MyIcon from './MyIcon';

export const Footer = () => {
    return (
        <footer className="bg-background text-center pb-4">
            <p className="text-muted">&copy; 2026 Portfólio de Marcos Aquino - Todos os direitos reservados!</p>
            <Link href="/" className="text-sky-450 flex justify-center pt-3">
                <MyIcon className="text-highlight" icon="ep:arrow-up-bold" />
            </Link>
        </footer>
    );
};

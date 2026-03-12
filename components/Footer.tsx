import Link from 'next/link';
import MyIcon from './MyIcon';

export const Footer = () => {
  return (
    <footer className="text-center pb-4">
      <p className="text-gray-550">&copy; 2026 Portfólio de Marcos Aquino - Todos os direitos reservados!</p>
      <Link href="/" className="text-sky-450 flex justify-center pt-3">
        <MyIcon icon="ep:arrow-up-bold" />
      </Link>
    </footer>
  );
};

'use client';

import { AnimatePresence, motion } from 'framer-motion';
import Link from 'next/link';
import { useState } from 'react';

type NavItem = {
  text: string;
  href: string;
};

const navmenu: NavItem[] = [
  { text: 'Sobre mim', href: '/sobre-mim' },
  { text: 'Projetos', href: '/projetos' },
  { text: 'Contato', href: '/contato' },
];

const mobileMenuAnimation = {
  hidden: {
    opacity: 0,
    y: -20,
  },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.3 },
  },
  exit: {
    opacity: 0,
    y: -20,
    transition: { duration: 0.2 },
  },
};

function NavItemLink({ item }: { item: NavItem }) {
  return (
    <Link
      href={item.href}
      className=" hover:scale-108 transition-colors duration-300 font-semibold uppercase text-sm  hover:text-sky-500"
    >
      {item.text}
    </Link>
  );
}

export function NavMenu() {
  const [open, setOpen] = useState(false);

  const toggle = () => setOpen(prev => !prev);
  const close = () => setOpen(false);

  return (
    <nav className="relative">
      {/* Desktop */}
      <ul className="hidden md:flex items-center gap-8">
        {navmenu.map(item => (
          <NavItemLink key={item.text} item={item} />
        ))}
      </ul>

      {/* Mobile Button */}
      <button onClick={toggle} aria-label="Abrir menu" className="md:hidden text-2xl">
        ☰
      </button>

      {/* Mobile Menu */}
      <AnimatePresence>
        {open && (
          <motion.ul
            variants={mobileMenuAnimation}
            initial="hidden"
            animate="show"
            exit="exit"
            className="absolute right-0 top-12 w-48 flex flex-col items-center gap-4 bg-background border shadow-lg py-6 rounded-lg md:hidden"
          >
            {navmenu.map(item => (
              <li key={item.text}>
                <Link href={item.href} onClick={close} className="font-semibold uppercase hover:text-sky-500">
                  {item.text}
                </Link>
              </li>
            ))}
          </motion.ul>
        )}
      </AnimatePresence>
    </nav>
  );
}

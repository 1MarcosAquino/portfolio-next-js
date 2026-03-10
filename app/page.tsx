'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import HardSkills from './components/HardSkills';
import NavMenu from './components/NavMenu';

const config = {
  name: 'Marcos',
  title: 'Desenvolvedor fullstack PHP, Javascript.',
  tools: ['PHP', 'Javascript'],
};

const destacarPalavras = (texto: string, palavras: string[]) => {
  const regex = new RegExp(`\\b(${palavras.join('|')})\\b`, 'gi');
  return texto.split(regex);
};

const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6 },
  },
};

export default function Home() {
  const title = destacarPalavras(config.title, config.tools);

  return (
    <>
      {/* HEADER */}
      <header className="fixed top-0 left-0 w-full bg-background shadow-sm z-50">
        <div className="max-w-6xl mx-auto px-6 py-4 flex justify-between items-center">
          <motion.h2 initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="text-xl md:text-2xl font-bold">
            {config.name}
          </motion.h2>

          {/* Desktop Menu */}
          <NavMenu />
        </div>
        {/* Mobile Menu */}
      </header>

      {/* HERO */}
      <section className="max-w-6xl mx-auto px-6 pt-32 pb-16 grid md:grid-cols-2 gap-10 items-center">
        {/* Texto */}

        <motion.div variants={fadeUp} initial="hidden" animate="show">
          <h1 className="font-bold text-4xl sm:text-5xl leading-tight">
            {title.map((parte, index) =>
              config.tools.some(palavra => palavra.toLowerCase() === parte.toLowerCase()) ? (
                <span key={index} className="text-sky-500">
                  {parte}
                </span>
              ) : (
                <span key={index}>{parte}</span>
              )
            )}
          </h1>

          <p className="mt-6 text-muted text-lg">
            Desenvolvo APIs, sistemas e aplicações web modernas usando PHP, Javascript e React.
          </p>

          <motion.div className="mt-6 flex gap-4" whileHover={{ scale: 1.02 }}>
            <Link
              href="/projetos"
              className="bg-sky-500 text-white px-6 py-3 rounded-lg font-semibold hover:bg-sky-600 transition"
            >
              Ver Projetos
            </Link>

            <Link href="/contato" className="border px-6 py-3 rounded-lg font-semibold hover:bg-gray-100 transition">
              Contato
            </Link>
          </motion.div>
        </motion.div>

        {/* Foto */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6 }}
          className="flex justify-center"
        >
          {/* <Image src="/images/perfil.webp" width={380} height={380} alt="Foto Marcos Aquino" /> */}
          <HardSkills />
        </motion.div>
      </section>

      {/* Skills */}
      <motion.section
        variants={fadeUp}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true }}
        className="max-w-6xl mx-auto px-6 pb-16"
      ></motion.section>
    </>
  );
}

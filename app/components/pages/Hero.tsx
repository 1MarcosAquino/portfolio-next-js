'use client';

import { highlightWord } from '@/helpers/highlight-word';
import { motion } from 'framer-motion';
import Link from 'next/link';
import { HardSkills } from '../HardSkills';
import { Section } from '../Section';

const config = {
    name: 'Marcos',
    title: 'Desenvolvedor fullstack PHP, Javascript.',
    tools: ['PHP', 'Javascript'],
};

const fadeUp = {
    hidden: { opacity: 0, y: 40 },
    show: {
        opacity: 1,
        y: 0,
        transition: { duration: 0.6 },
    },
};

export function Hero() {
    const title = highlightWord(config.title, config.tools);

    return (
        <Section title="Marcos Aquino" id="Hero">
            <section className="text-foreground max-w-6xl mx-auto px-6 pt-32 pb-16 grid md:grid-cols-2 gap-10 items-center">
                <motion.div variants={fadeUp} initial="hidden" animate="show">
                    <h1 className="font-bold text-4xl sm:text-5xl leading-tight">
                        {title.map((parte, index) =>
                            config.tools.some(palavra => palavra.toLowerCase() === parte.toLowerCase()) ? (
                                <span key={index} className="text-highlight">
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

                    <div className="mt-8 flex gap-4">
                        <Link
                            href="#Project"
                            className="px-6 py-3 rounded-md text-gray-100 bg-sky-600 hover:bg-highlight hover:scale-105 transition"
                        >
                            Ver Projetos
                        </Link>

                        <Link
                            href="#Contact"
                            className="px-6 py-3 rounded-md text-foreground border hover:scale-105 transition"
                        >
                            Contato
                        </Link>
                    </div>
                </motion.div>

                <motion.div
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.6 }}
                    className="flex justify-center"
                >
                    <motion.section
                        variants={fadeUp}
                        initial="hidden"
                        whileInView="show"
                        viewport={{ once: true }}
                        className="max-w-6xl mx-auto px-6 pb-16"
                    >
                        <HardSkills />
                    </motion.section>
                </motion.div>
            </section>
        </Section>
    );
}

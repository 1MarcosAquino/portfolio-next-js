'use client';

import { alert, MyAlert } from '@/components/MyAlert';
import MyIcon from '@/components/MyIcon';
import { Section } from '@/components/Section';
import { clipboard } from '@/helpers/clipboard';
import Link from 'next/link';
import { Wrapper } from '../Wrapper';

const contacts = [
    {
        icon: 'ic:sharp-whatsapp',
        href: 'https://api.whatsapp.com/send?phone=5582993233217&text=oi+vim+do+seu+portfolio',
        text: 'Clique aqui para enviar uma mensagem no WhatsApp',
    },
    {
        icon: 'line-md:github-loop',
        href: 'https://github.com/1MarcosAquino',
        text: 'Clique aqui para acessar meu GitHub',
    },
    {
        icon: 'line-md:linkedin',
        href: 'https://www.linkedin.com/in/marcosaquino21/',
        text: 'Clique aqui para acessar meu Linkedin',
    },
    {
        icon: 'basil:gmail-outline',
        href: '',
        text: 'Clique para copiar meu e-mail.',
    },
];

const action = () => {
    const { status, message } = clipboard('contatomarcosaquino@gmail.com');

    if (status) {
        alert.success(message);
    } else {
        alert.error(message);
    }
};

export function Contact() {
    setTimeout(() => {
        alert.info('Esse projeto está em desenvovimento');
    }, 4000);
    return (
        <>
            <MyAlert style={{ top: 80 }} />

            <Section id="Contact" title="Contato">
                <Wrapper>
                    <h3 className="text-highlight font-bold text-2xl sm:text-3xl mb-4">
                        Deixe-me uma mensagem ou mande um e-mail.
                    </h3>

                    <p className="mb-8 text-foreground max-w-md">
                        Vamos conversar e desenvolver soluções para sua empresa, juntos!
                    </p>

                    <div className="flex flex-col gap-3 w-full max-w-md">
                        {contacts.map(item =>
                            item.href === '' ? (
                                <button
                                    key={item.text}
                                    onClick={action}
                                    className="group flex items-center gap-4 w-full p-4 rounded-xl bg-sky-900/30 border border-sky-700/30 hover:border-highlight hover:bg-sky-900/50 transition cursor-pointer"
                                >
                                    <div className="text-highlight group-hover:scale-110 transition">
                                        <MyIcon icon={item.icon} width="22" height="22" />
                                    </div>

                                    <span className="font-medium text-foreground group-hover:text-white">
                                        {item.text}
                                    </span>
                                </button>
                            ) : (
                                <Link
                                    key={item.text}
                                    href={item.href}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="group flex items-center gap-4 w-full p-4 rounded-xl bg-sky-900/30 border border-sky-700/30 hover:border-highlight hover:bg-sky-900/50 transition"
                                >
                                    <div className="text-highlight group-hover:scale-110 transition">
                                        <MyIcon icon={item.icon} width="22" height="22" />
                                    </div>

                                    <span className="font-medium text-foreground group-hover:text-white">
                                        {item.text}
                                    </span>
                                </Link>
                            )
                        )}
                    </div>
                </Wrapper>
            </Section>
        </>
    );
}

'use client';

import { Carousel } from '@/components/Carousel';
import { RepoUI } from '@/components/RepoUI';
import { Section } from '@/components/Section';

const projects = [
    {
        id: 727791328,
        name: 'CORE PHP',
        description:
            'Um mini framework PHP criado do zero com foco em aprendizado, simplicidade e estrutura profissional. Inspirado em conceitos de frameworks modernos como Laravel.',
        html_url: 'https://github.com/1MarcosAquino/corephp',
        homepage: null,
        language: ['PHP'],
        languages_url: 'https://api.github.com/repos/1MarcosAquino/corephp/languages',
        created_at: null,
        updated_at: null,
    },
    {
        id: 770067054,
        name: 'DEMONSTRATIVO DE RESULTADO',
        description:
            'Feito com em HTML5, CSS3, JavaScript e Appexcharts.  Este projeto consiste em uma dashboard integrada a um sistema ERP, desenvolvida para apresentar de forma clara e visual os resultados de vendas mensais.',
        html_url: '',
        homepage: '',
        language: ['HTML', 'CSS', 'JavaScript'],
        languages_url: '',
        created_at: null,
        updated_at: null,
    },
    {
        id: 770103436,
        name: 'PRODUTOS PARADOS NO ESTOQUE',
        description:
            'Feito com em HTML5, CSS3, JavaScript e Appexcharts. Este projeto consiste em uma dashboard integrada a um sistema ERP, desenvolvida para apresentar de forma clara e visual o estoque que está parado.',
        html_url: '',
        homepage: null,
        language: ['HTML', 'CSS', 'JavaScript'],
        languages_url: '',
        created_at: null,
        updated_at: null,
    },
    {
        id: 779079130,
        name: 'NFE NFCE',
        description:
            'API para emissão de Nota Fiscal Eletrônica (NF-e) e Nota Fiscal de Consumidor Eletrônica (NFC-e), utilizando a linguagem PHP e as melhores práticas de desenvolvimento. A API tem como objetivo facilitar a integração com diversos sistemas, automatizando o processo de emissão e reduzindo a complexidade associada às especificações técnicas da NF-e e NFC-e.',
        html_url: '',
        homepage: '',
        language: ['php', 'composer'],
        languages_url: '',
        created_at: null,
        updated_at: null,
    },
];

export function Project() {
    return (
        <div className="bg-background grid place-items-center h-screen">
            <Section id="Project" title="Projetos">
                <Carousel.Root delay={5000}>
                    {projects.map(project => (
                        <Carousel.Content key={project.id}>
                            <RepoUI repo={project} />
                        </Carousel.Content>
                    ))}
                </Carousel.Root>
            </Section>
        </div>
    );
}

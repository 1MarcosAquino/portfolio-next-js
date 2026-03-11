'use client';

import { Carousel } from '@/components/Carousel';
import { RepoUI } from '@/components/RepoUI';
import { Section } from '@/components/Section';

const projects = [
  {
    id: 727791328,
    name: 'CALCULADORA SIMPLES TDD CSHAP',
    description:
      'Desenvolver uma calculadora básica utilizando a linguagem C# e aplicando a metodologia Test-Driven Development (TDD). O projeto visa demonstrar a implementação prática de TDD, garantindo a qualidade do código e a cobertura de testes unitários.',
    html_url: 'https://github.com/1MarcosAquino/calculadora-simples_TDD_Cshap',
    homepage: 'https://react-entrega-s1-template-nu-kenzie-psi.vercel.app/',
    language: ['C#'],
    languages_url: 'https://api.github.com/repos/1MarcosAquino/calculadora-simples_TDD_Cshap/languages',
    created_at: 'string',
    updated_at: 'string',
  },
  {
    id: 770067054,
    name: 'DEMONSTRATIVO DE RESULTADO',
    description:
      'Frellancer feito com em HTML5, CSS3, JavaScript e Appexcharts.  Este projeto consiste em uma dashboard integrada a um sistema ERP, desenvolvida para apresentar de forma clara e visual os resultados de vendas mensais.',
    html_url: 'https://github.com/1MarcosAquino/DEMONSTRATIVO_DE_RESULTADO',
    homepage: '',
    language: ['HTML', 'CSS', 'JavaScript'],
    languages_url: 'https://api.github.com/repos/1MarcosAquino/DEMONSTRATIVO_DE_RESULTADO/languages',
    created_at: 'string',
    updated_at: 'string',
  },
  {
    id: 770103436,
    name: 'PRODUTOS PARADOS NO ESTOQUE',
    description:
      'Frellancer feito com em HTML5, CSS3, JavaScript e Appexcharts. Este projeto consiste em uma dashboard integrada a um sistema ERP, desenvolvida para apresentar de forma clara e visual o estoque que está parado.',
    html_url: 'https://github.com/1MarcosAquino/PRODUTOS_PARADOS_NO_ESTOQUE',
    homepage: null,
    language: ['HTML', 'CSS', 'JavaScript'],
    languages_url: 'https://api.github.com/repos/1MarcosAquino/PRODUTOS_PARADOS_NO_ESTOQUE/languages',
    created_at: 'string',
    updated_at: 'string',
  },
  {
    id: 779079130,
    name: 'NFE NFCE',
    description:
      'API robusta e escalável para emissão de Nota Fiscal Eletrônica (NF-e) e Nota Fiscal de Consumidor Eletrônica (NFC-e), utilizando a linguagem PHP e as melhores práticas de desenvolvimento. A API tem como objetivo facilitar a integração com diversos sistemas, automatizando o processo de emissão e reduzindo a complexidade associada às especificações técnicas da NF-e e NFC-e.',
    html_url: 'https://github.com/1MarcosAquino/NFe_NFCe',
    homepage: '',
    language: ['php', 'composer'],
    languages_url: 'https://api.github.com/repos/1MarcosAquino/NFe_NFCe/languages',
    created_at: 'string',
    updated_at: 'string',
  },
];

export default function Projetos() {
  return (
    <div className="grid place-items-center h-screen">
      <Section title="Projetos">
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

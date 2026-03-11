import { Section } from '@/components/Section';

function destacarPalavras(texto: string, palavras: string[]) {
  // Cria regex com todas as palavras
  const regex = new RegExp(`\\b(${palavras.join('|')})\\b`, 'gi');

  return texto.split(regex);
}

const config = {
  description: `Desenvolvedor com sólida base em PHP, atuando no desenvolvimento e manutenção de sistemas e plataformas como
  WordPress e PrestaShop. Tenho experiência prática em todo o ciclo de vida de aplicações, desde a modelagem de
  bancos de dados MySQL até a construção de APIs REST. Atualmente, foco minha evolução técnica em JavaScript e
  TypeScript, aplicando esses conhecimentos para criar interfaces mais dinâmicas e códigos mais organizados. Busco
  sempre o equilíbrio entre a entrega de regras de negócio e a performance técnica do sistema.`,

  tools: ['WordPress', 'PrestaShop', 'PHP', 'MySQL', 'JavaScript', 'TypeScript', 'APIs REST'],

  antigo: `Sou um desenvolvedor web com experiência em criar soluções personalizadas que atendem às necessidades específicas de cada cliente. Dominando um amplo conjunto de tecnologias, desde bancos de dados até frameworks front-end, construo aplicações escaláveis. Desenvolvi diversos projetos, otimizando processos e entregando resultados que superaram as expectativas dos clientes.`,
};

const jobs = [
  {
    icon: 'iconoir:www',
    title: 'Desenvolvedor Web',
    description: 'Desenvolvimento com PHP, MYSQL, HTML, CSS, JQuery e JavaScript.',
  },
  {
    icon: 'icons8:services',
    title: 'APIs sob medida',
    description: 'Estrutura lógica clara, projetadas para escalar e funcionar com eficiência.',
  },
  {
    icon: 'grommet-icons:system',
    title: 'Sistemas sob medida',
    description: 'Sistemas feitos para atender às necessidades do seu negócio e escalar conforme necessário.',
  },
  {
    icon: 'carbon:dns-services',
    title: 'Sites e Interfaces Web',
    description:
      'Sites, landing pages e lojas virtuais, alinhado à identidade da marca e implementação de novas funcionalidades.',
  },
];

export default function SobreMim() {
  const description = destacarPalavras(config.description, config.tools);

  return (
    <div className="grid place-items-center h-screen">
      <Section title="Sobre mim" id="sobre_mim">
        <p className="text-justify indent-14 tracking-wider text-xl">
          {description.map((parte, index) =>
            config.tools.some(palavra => palavra.toLowerCase() === parte.toLowerCase()) ? (
              <span key={index} className="text-sky-450">
                {parte}
              </span>
            ) : (
              <span key={index}>{parte}</span>
            )
          )}
        </p>
      </Section>
    </div>
  );
}

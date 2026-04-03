import { Section } from '@/components/Section';
import { highlightWord } from '@/helpers/highlight-word';

const config = {
    antigo: `Desenvolvedor com sólida base em PHP, atuando no desenvolvimento e manutenção de sistemas e plataformas como
  WordPress e PrestaShop. Tenho experiência prática em todo o ciclo de vida de aplicações, desde a modelagem de
  bancos de dados MySQL até a construção de APIs REST. Atualmente, foco minha evolução técnica em JavaScript e
  TypeScript, aplicando esses conhecimentos para criar interfaces mais dinâmicas e códigos mais organizados. Busco
  sempre o equilíbrio entre a entrega de regras de negócio e a performance técnica do sistema.`,

    tools: ['PHP', 'MySQL', 'JavaScript', 'TypeScript', 'APIs REST'],

    description: `Sou um desenvolvedor web com experiência em criar soluções personalizadas que atendem às necessidades específicas de cada cliente. Dominando um amplo conjunto de tecnologias, desde bancos de dados até frameworks front-end, construo aplicações escaláveis. Desenvolvi diversos projetos, otimizando processos e entregando resultados que superaram as expectativas dos clientes.`,
};

export function About() {
    const description = highlightWord(config.description, config.tools);

    return (
        <Section title="Sobre mim" id="About">
            <p className="text-foreground text-justify indent-14 tracking-wider text-xl">
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
    );
}

import Link from 'next/link';
import HardSkills from './components/HardSkills';

const config = {
  name: 'Marcos',
  title: 'Desenvolvedor fullstack PHP, Javacript.',
  tools: ['PHP', 'Javacript'],
};
const navmenu = [
  {
    text: 'Sobre mim',
    href: '#sobre_mim',
  },
  {
    text: 'Projetos',
    href: '#projetos',
  },
  {
    text: 'Contato',
    href: '#contato',
  },
];

const NavMenu = () => {
  return (
    <nav className="flex justify-center mt-6 gap-x-4 md:mt-0">
      {navmenu.map(item => (
        <Link
          key={item.text}
          href={item.href}
          children={item.text}
          className="nav-item transition-colors delay-40 hover:text-sky-400 uppercase font-semibold"
        />
      ))}
    </nav>
  );
};

const destacarPalavras = function (texto: string, palavras: string[]) {
  // Cria regex com todas as palavras
  const regex = new RegExp(`\\b(${palavras.join('|')})\\b`, 'gi');

  return texto.split(regex);
};

export default function Home() {
  const title = destacarPalavras(config.title, config.tools);
  return (
    <>
      <header id="top" className="mt-8 ">
        <div className="shadow-md">
          <div className="section-wrapper flex flex-col md:flex-row md:justify-between">
            <h2 className="text-center sm:text-left font-semibold text-2xl md:text-3xl">{config.name}</h2>
            {/* align-center items-center justify-center */}

            <NavMenu />
          </div>
        </div>

        <div className="section-wrapper pb-12 flex flex-col gap-12 sm:grid sm:grid-cols-2 sm:gap-x-12 sm:gap-y-16">
          <div className="text-center sm:text-left">
            {/* <h2 className="font-semibold text-xl sm:text-2xl md:text-3xl">{config.name}</h2> */}
          </div>

          {/* <div className="shadow-md p-6 bg-white rounded">Default Shadow</div> */}
          {/* NavMenu */}

          {/* Título Principal */}
          <div className="sm:col-span-2 text-center sm:text-left">
            <h1 className="font-semibold text-3xl sm:text-4xl md:text-5xl leading-tight">
              {title.map((parte, index) =>
                config.tools.some(palavra => palavra.toLowerCase() === parte.toLowerCase()) ? (
                  <span key={index} className="text-sky-400">
                    {parte}
                  </span>
                ) : (
                  <span key={index}>{parte}</span>
                )
              )}
            </h1>
          </div>

          {/* HardSkills */}
          <HardSkills />
        </div>
      </header>
    </>
  );
}

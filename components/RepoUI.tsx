import MyIcon from './MyIcon';

interface Repo {
  id: number;
  name: string;
  description: string;
  language: string[];
  homepage: string | null;
  html_url: string;
  created_at: string | Date | number;
  updated_at: string | Date | number;
}

type Tech = {
  [key: string]: string;
};

const skills: Tech = {
  CSS: 'tabler:brand-css3',
  JavaScript: 'tabler:brand-javascript',
  HTML: 'icon-park-outline:html-five',
  react: 'teenyicons:react-solid',
  TypeScript: 'hugeicons:typescript-01',
  nodejs: 'tabler:brand-nodejs',
  mysql: 'simple-icons:mysql',
  git: 'arcticons:git',
  github: 'line-md:github-loop',
  'github actions': 'devicon-plain:githubactions',
  jquery: 'devicon-plain:jquery-wordmark',
  php: 'bxl:php',
  composer: 'simple-icons:composer',
};

export const RepoUI = ({ repo }: { repo: Repo }) => {
  const { name, description, html_url, homepage, language } = repo;

  return (
    <article
      className="
      group
      w-full
      max-w-sm
      bg-linear-to-b from-sky-900/60 to-sky-950
      backdrop-blur-md
      border border-sky-700/40
      rounded-2xl
      overflow-hidden
      shadow-lg
      transition-all
      duration-300
      hover:shadow-2xl
      hover:-translate-y-1
    "
    >
      {/* IMAGE */}
      <div className="relative overflow-hidden">
        <img
          src="/images/source-Code.webp"
          alt="repo image"
          className="
          w-full
          h-40
          object-cover
          transition-transform
          duration-500
          group-hover:scale-110
        "
        />

        <div className="absolute inset-0 bg-linear-to-t from-black/60 to-transparent" />
      </div>

      {/* CONTENT */}
      <div className="p-4 flex flex-col gap-3">
        {/* TITLE */}
        <h3
          className="
          text-lg
          font-bold
          tracking-wide
          text-white
          line-clamp-1
        "
        >
          {name}
        </h3>

        {/* DESCRIPTION */}
        <p
          className="
          text-sm
          text-gray-300
          leading-relaxed
          line-clamp-3
        "
        >
          {description}
        </p>

        {/* LANGUAGES */}
        <div className="flex flex-wrap gap-2 pt-1">
          {language.map(lang => (
            <span
              key={lang}
              className="
              flex
              items-center
              gap-1
              text-xs
              px-2.5
              py-1
              rounded-lg
              bg-sky-500/20
              border
              border-sky-400/20
              text-sky-300
              font-semibold
              transition
              hover:bg-sky-500/30
            "
            >
              <MyIcon icon={skills[lang]} width="14" height="14" />
              {lang}
            </span>
          ))}
        </div>

        {/* ACTIONS */}
        <div className="flex gap-2 pt-3">
          {homepage && (
            <a
              href={homepage}
              target="_blank"
              className="
              flex-1
              flex
              items-center
              justify-center
              gap-2
              text-sm
              font-semibold
              bg-white/10
              hover:bg-white/20
              text-white
              py-2
              rounded-xl
              transition
            "
            >
              <MyIcon icon="hugeicons:link-forward" width="18" height="18" />
              Demo
            </a>
          )}

          <a
            href={html_url}
            target="_blank"
            rel="noopener noreferrer"
            className="
            flex-1
            flex
            items-center
            justify-center
            gap-2
            text-sm
            font-semibold
            bg-sky-500
            hover:bg-sky-400
            text-black
            py-2
            rounded-xl
            transition
            shadow
            hover:shadow-lg
          "
          >
            <MyIcon icon="line-md:github-loop" width="18" height="18" />
            GitHub
          </a>
        </div>
      </div>
    </article>
  );
};

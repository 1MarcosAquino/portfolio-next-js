'use client';

import { useEffect, useState } from 'react';
import MyIcon from './MyIcon';

const skills = [
  { name: 'CSS', icon: 'tabler:brand-css3' },
  { name: 'JavaScript', icon: 'tabler:brand-javascript' },
  { name: 'HTML', icon: 'icon-park-outline:html-five' },
  { name: 'React', icon: 'teenyicons:react-solid' },
  { name: 'TypeScript', icon: 'hugeicons:typescript-01' },
  { name: 'Node.js', icon: 'tabler:brand-nodejs' },
  { name: 'MySQL', icon: 'simple-icons:mysql' },
  { name: 'Git', icon: 'arcticons:git' },
  { name: 'GitHub', icon: 'line-md:github-loop' },
  { name: 'GitHub Actions', icon: 'devicon-plain:githubactions' },
  { name: 'jQuery', icon: 'devicon-plain:jquery-wordmark' },
  { name: 'PHP', icon: 'bxl:php' },
  { name: 'Composer', icon: 'simple-icons:composer' },
];

interface HardSkillsProps extends React.HTMLAttributes<HTMLDivElement> {}

export default function HardSkills({ ...rest }: HardSkillsProps) {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex(prev => (prev + 1) % skills.length);
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  const prev = skills[(index - 1 + skills.length) % skills.length];
  const current = skills[index];
  const next = skills[(index + 1) % skills.length];

  return (
    <div className="transition-all duration-300 ease-in-out" {...rest}>
      <div className="flex items-center gap-4">
        <span title={prev.name}>
          <MyIcon icon={prev.icon} width={40} height={40} />
        </span>

        <span title={current.name}>
          <MyIcon icon={current.icon} width={64} height={64} />
        </span>

        <span title={next.name}>
          <MyIcon icon={next.icon} width={40} height={40} />
        </span>
      </div>
    </div>
  );
}

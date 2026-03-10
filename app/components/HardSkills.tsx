'use client';

import { motion } from 'framer-motion';
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

  const items = [
    { ...prev, position: 'left' },
    { ...current, position: 'center' },
    { ...next, position: 'right' },
  ];

  return (
    <div className="relative flex justify-center items-center h-80" {...rest}>
      {items.map(item => (
        <motion.div
          key={item.name}
          layout
          transition={{ duration: 0.6, ease: 'easeInOut' }}
          className="absolute"
          animate={{
            x: item.position === 'left' ? -160 : item.position === 'right' ? 160 : 0,

            scale: item.position === 'center' ? 1 : 0.6,

            opacity: item.position === 'center' ? 1 : 0.4,
          }}
        >
          <MyIcon
            icon={item.icon}
            width={item.position === 'center' ? 200 : 100}
            height={item.position === 'center' ? 200 : 100}
          />
        </motion.div>
      ))}
    </div>
  );
}

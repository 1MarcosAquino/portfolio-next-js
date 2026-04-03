import { About } from '@/components/pages/About';
import { Contact } from '@/components/pages/Contact';
import { Hero } from '@/components/pages/Hero';
import { Project } from '@/components/pages/Project';

export default function Home() {
    return (
        <>
            <Hero />
            <About />
            <Project />
            <Contact />
        </>
    );
}

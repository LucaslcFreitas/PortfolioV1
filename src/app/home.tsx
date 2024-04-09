'use client';

import About from '@/components/About';
import Presentation from '@/components/Presentation';
import Section from '@/components/Section';
import Skills, { SkillList } from '@/components/Skills';
import Projects from '@/components/Projects';
import Contacts from '@/components/Contacts';
import Footer from '@/components/Footer';
import { ProjectType } from '@/components/ProjectCard';
import { ContactType } from '@/components/ContactCard';

type HomePageProps = {
    descriptions: string[];
    skills: SkillList[];
    projects: ProjectType[];
    contacts: ContactType[];
};

export default function Homepage({
    descriptions,
    skills,
    projects,
    contacts,
}: HomePageProps) {
    return (
        <>
            <Presentation />
            <Section id="about" title="Sobre Mim">
                <About descriptions={descriptions} />
            </Section>
            <Section id="skills" title="Habilidades">
                <Skills skillsList={skills} />
            </Section>
            <Section id="projects" title="Projetos">
                <Projects projects={projects} />
            </Section>
            <Section id="contacts" title="Contatos">
                <Contacts contacts={contacts} />
            </Section>
            <Footer />
        </>
    );
}

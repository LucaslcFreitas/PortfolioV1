'use client';

import About from '@/components/About';
import Presentation from '@/components/Presentation';
import Section from '@/components/Section';
import Skills from '@/components/Skills';
import styled from 'styled-components';
import Projects from '@/components/Projects';
import Contacts from '@/components/Contacts';
import Footer from '@/components/Footer';

//Datas
import { descriptionsData } from '@/data/descriptions';
import { skillsData } from '@/data/skills';
import { projectsData } from '@/data/projects';
import { contactsData } from '@/data/contacts';

const Heading = styled.h1`
    background: ${({ theme }) => theme.colors.backgroundPrimary};
`;

export default function Homepage() {
    return (
        <>
            <Presentation />
            <Section id="about" title="Sobre Mim">
                <About descriptions={descriptionsData} />
            </Section>
            <Section id="skills" title="Habilidades">
                <Skills skillsList={skillsData} />
            </Section>
            <Section id="projects" title="Projetos">
                <Projects projects={projectsData} />
            </Section>
            <Section id="contacts" title="Contatos">
                <Contacts contacts={contactsData} />
            </Section>
            <Footer />
        </>
    );
}

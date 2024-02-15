'use client';

import About from '@/components/About';
import Presentation from '@/components/Presentation';
import Section from '@/components/Section';
import Skills from '@/components/Skills';
import styled from 'styled-components';

import { skillsData } from '@/components/Skills/data';

const Heading = styled.h1`
    background: ${({ theme }) => theme.colors.backgroundPrimary};
`;

export default function Homepage() {
    return (
        <>
            <Presentation />
            <Section id="about" title="Sobre Mim">
                <About />
            </Section>
            <Section id="about" title="Habilidades">
                <Skills skillsList={skillsData} />
            </Section>
        </>
    );
}

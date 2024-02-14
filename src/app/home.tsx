'use client';

import About from '@/components/About';
import Presentation from '@/components/Presentation';
import Section from '@/components/Section';
import styled from 'styled-components';

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
        </>
    );
}

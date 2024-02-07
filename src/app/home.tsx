'use client';

import styled from 'styled-components';

const Heading = styled.h1`
    background: ${({ theme }) => theme.colors.primaryColor};
`;

export default function Homepage() {
    return (
        <main>
            <Heading>Portfolio Heading</Heading>
        </main>
    );
}

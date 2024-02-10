'use client';

import styled from 'styled-components';

const Heading = styled.h1`
    background: ${({ theme }) => theme.colors.backgroundPrimary};
`;

export default function Homepage() {
    return (
        <>
            <Heading>Portfolio Heading</Heading>
        </>
    );
}

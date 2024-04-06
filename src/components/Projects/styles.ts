import styled from 'styled-components';

export const ProjectContainer = styled.div`
    position: relative;
    padding: 2rem 0;
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    gap: 1.5rem;

    @media ${({ theme }) => theme.media.smallMobile} {
        grid-template-columns: 1fr;
    }

    @media ${({ theme }) => theme.media.mobile} {
        grid-template-columns: 1fr;
    }

    @media ${({ theme }) => theme.media.tablet} {
        grid-template-columns: 1fr 1fr;
    }

    @media ${({ theme }) => theme.media.smallDesktop} {
        grid-template-columns: 1fr 1fr;
    }
`;

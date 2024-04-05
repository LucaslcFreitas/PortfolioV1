import styled from 'styled-components';

export const Container = styled.main`
    margin-left: 8rem;

    @media ${({ theme }) => theme.media.smallMobile} {
        margin-left: 0rem;
    }

    @media ${({ theme }) => theme.media.mobile} {
        margin-left: 0rem;
    }

    @media ${({ theme }) => theme.media.tablet} {
        margin-left: 0rem;
    }
`;

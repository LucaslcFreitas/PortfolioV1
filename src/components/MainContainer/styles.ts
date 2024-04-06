import styled from 'styled-components';

export const Container = styled.main`
    margin-left: 8rem;

    @media ${({ theme }) => theme.media.tablet},
        ${({ theme }) => theme.media.mobile},
        ${({ theme }) => theme.media.smallMobile} {
        margin-left: 0rem;
        margin-bottom: 7rem;
    }
`;

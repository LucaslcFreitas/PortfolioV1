import styled from 'styled-components';

export const FooterContainer = styled.footer`
    position: relative;
    width: ${({ theme }) => theme.container.large};
    margin: 7rem auto;
    padding: 4rem;
    border-top: 0.2rem solid ${({ theme }) => theme.colors.backgroundTertiary};

    @media ${({ theme }) => theme.media.smallMobile} {
        width: ${({ theme }) => theme.container.smallMobile};
        padding: 4rem 2rem;
    }

    @media ${({ theme }) => theme.media.mobile} {
        width: ${({ theme }) => theme.container.mobile};
    }

    @media ${({ theme }) => theme.media.tablet} {
        width: ${({ theme }) => theme.container.tablet};
    }

    @media ${({ theme }) => theme.media.smallDesktop} {
        width: ${({ theme }) => theme.container.small};
    }

    @media ${({ theme }) => theme.media.normalDesktop} {
        width: ${({ theme }) => theme.container.medium};
    }
`;

export const FooterText = styled.p`
    text-align: center;
    font-size: 1.2rem;
`;

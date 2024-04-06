import styled from 'styled-components';

export const Paragraph = styled.div`
    font-size: 2rem;
    margin: 2rem 0;
    color: ${({ theme }) => theme.colors.paragraph};

    @media ${({ theme }) => theme.media.smallMobile} {
        font-size: 1.6rem;
        margin: 1.6rem 0;
        line-height: 22px;
    }

    @media ${({ theme }) => theme.media.mobile} {
        font-size: 1.6rem;
    }

    @media ${({ theme }) => theme.media.tablet} {
        font-size: 1.8rem;
    }

    @media ${({ theme }) => theme.media.smallDesktop} {
        font-size: 1.8rem;
    }
`;

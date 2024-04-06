import styled from 'styled-components';

export const ContactsContainer = styled.div`
    position: relative;
    margin: 6rem auto;
    display: flex;
    justify-content: space-around;
    align-items: center;

    @media ${({ theme }) => theme.media.smallMobile} {
        flex-wrap: wrap;
    }
`;

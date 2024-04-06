import React from 'react';
import * as Styled from './styles';

type MainContainerProps = {
    children: React.ReactNode;
};

function MainContainer({ children }: MainContainerProps) {
    return <Styled.Container>{children}</Styled.Container>;
}

export default MainContainer;

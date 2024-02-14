import * as Styled from './styles';
import React from 'react';

type SectionProps = {
    id: string;
    title: string;
    children: React.ReactNode;
};

function Section({ id, title, children }: SectionProps) {
    return (
        <Styled.Section id={id}>
            <Styled.TitleBox>
                <Styled.Title>{title}</Styled.Title>
            </Styled.TitleBox>
            {children}
        </Styled.Section>
    );
}

export default Section;

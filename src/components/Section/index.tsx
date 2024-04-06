import * as Styled from './styles';
import React from 'react';

type SectionProps = {
    id: string;
    title: string;
    children: React.ReactNode;
};

function Section({ id, title, children }: SectionProps) {
    return (
        <Styled.Section
            id={id}
            variants={{
                hidden: { opacity: 0, y: 75 },
                visible: { opacity: 1, y: 0 },
            }}
            initial="hidden"
            whileInView="visible"
            transition={{ duration: 0.3, delay: 0.2 }}
            viewport={{ once: true, amount: 0.1 }}
        >
            <Styled.TitleBox>
                <Styled.Title>{title}</Styled.Title>
            </Styled.TitleBox>
            {children}
        </Styled.Section>
    );
}

export default Section;

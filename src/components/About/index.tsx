import * as Styled from './styles';

type AboutProps = {
    descriptions: string[];
};

function About({ descriptions }: AboutProps) {
    return (
        <>
            {descriptions.map((item, index) => (
                <Styled.Paragraph key={index}>{item}</Styled.Paragraph>
            ))}
        </>
    );
}

export default About;

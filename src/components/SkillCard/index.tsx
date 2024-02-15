import * as Styled from './styles';

export type SkillCardProps = {
    imgSource: string;
    label: string;
};

function SkillCard({ imgSource, label }: SkillCardProps) {
    return (
        <Styled.ContainerCard>
            <Styled.SkillImg src={imgSource} alt={label} />
            <Styled.SkillTitle>{label}</Styled.SkillTitle>
        </Styled.ContainerCard>
    );
}

export default SkillCard;

import SkillCard, { SkillCardProps } from '../SkillCard';
import * as Styled from './styles';

export type SkillProps = {
    skillsList: SkillList[];
};

export type SkillList = {
    id: string;
} & SkillCardProps;

function Skills({ skillsList }: SkillProps) {
    return (
        <Styled.ContainerSkill>
            {skillsList.map((item) => (
                <SkillCard key={item.id} {...item} />
            ))}
        </Styled.ContainerSkill>
    );
}

export default Skills;

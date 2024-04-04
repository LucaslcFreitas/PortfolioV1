import ProjectCard, { ProjectCardProps } from '../ProjectCard';
import * as Styled from './styles';

type ProjectsProps = {
    projects: ProjectType[];
};

export type ProjectType = {
    id: string;
} & ProjectCardProps;

function Projects({ projects }: ProjectsProps) {
    return (
        <Styled.ProjectContainer>
            {projects.map((item) => (
                <ProjectCard key={item.id} {...item} />
            ))}
        </Styled.ProjectContainer>
    );
}

export default Projects;

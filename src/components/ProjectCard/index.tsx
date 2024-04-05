import * as Styled from './styles';

export type ProjectCardProps = {
    onOpen: (project: ProjectType) => void;
    project: ProjectType;
};

export type ProjectType = {
    id: string;
    name: string;
    thumbnail: string;
    createAt: string;
    descriptions: string[];
    repositoryUrl?: string;
    viewUrl?: string;
    images: ProjectImage[];
};

export type ProjectImage = {
    id: string;
    imgSource: string;
    alt: string;
};

function ProjectCard({ onOpen, project }: ProjectCardProps) {
    return (
        <Styled.ContainerProject
            thumbnail={project.thumbnail}
            onClick={() => onOpen(project)}
        >
            <Styled.ProjectFooter>
                <Styled.FooterSubitle>{project.name}</Styled.FooterSubitle>
                <Styled.FooterButton>Ver mais</Styled.FooterButton>
            </Styled.ProjectFooter>
            <Styled.ProjectTitle>{project.name}</Styled.ProjectTitle>
        </Styled.ContainerProject>
    );
}

export default ProjectCard;

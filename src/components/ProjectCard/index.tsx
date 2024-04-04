import * as Styled from './styles';

export type ProjectCardProps = {
    name: string;
    thumbnail: string;
    createAt: string;
    descriptions: string[];
    repositoryUrl?: string;
    viewUrl?: string;
    images: ProgectImage[];
};

export type ProgectImage = {
    id: string;
    imgSource: string;
};

function ProjectCard({
    name,
    thumbnail,
    createAt,
    descriptions,
    repositoryUrl = undefined,
    viewUrl = undefined,
    images,
}: ProjectCardProps) {
    return (
        <Styled.ContainerProject thumbnail={thumbnail}>
            <Styled.ProjectFooter>
                <Styled.FooterSubitle>{name}</Styled.FooterSubitle>
                <Styled.FooterButton>Ver mais</Styled.FooterButton>
            </Styled.ProjectFooter>
            <Styled.ProjectTitle>{name}</Styled.ProjectTitle>
        </Styled.ContainerProject>
    );
}

export default ProjectCard;

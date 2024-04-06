import Carousel from '../Carousel';
import { ProjectType } from '../ProjectCard';
import * as Styled from './styles';
import { IoClose } from 'react-icons/io5';

type ModalViewProjectProps = {
    show: boolean;
    onHide: () => void;
    project: ProjectType;
};

function ModalViewProject({ show, onHide, project }: ModalViewProjectProps) {
    if (!show) {
        return <></>;
    }

    return (
        <Styled.ContainerModal>
            <Styled.ModalGlobalStyles />
            <Styled.ContentModal>
                <Styled.Galery>
                    <IoClose onClick={onHide} />
                    <Carousel
                        images={project.images}
                        width="50rem"
                        height="30rem"
                    />
                </Styled.Galery>
                <Styled.Datas>
                    <div>
                        <Styled.HeadTitle>
                            <div>
                                <h3>{project.name}</h3>
                                <p>
                                    {new Date(
                                        project.createAt,
                                    ).toLocaleDateString('pt-BR')}
                                </p>
                            </div>
                            <IoClose onClick={onHide} />
                        </Styled.HeadTitle>
                        {project.descriptions.map((item, index) => (
                            <Styled.Descriptions key={index}>
                                {item}
                            </Styled.Descriptions>
                        ))}
                    </div>
                    <Styled.LinksContainer>
                        {project.viewUrl ? (
                            <Styled.Link href={project.viewUrl} target="_blank">
                                Visualizar
                            </Styled.Link>
                        ) : (
                            <></>
                        )}
                        {project.repositoryUrl ? (
                            <Styled.Link
                                href={project.repositoryUrl}
                                target="_blank"
                            >
                                Acessar Repositório
                            </Styled.Link>
                        ) : (
                            <></>
                        )}
                    </Styled.LinksContainer>
                </Styled.Datas>
            </Styled.ContentModal>
        </Styled.ContainerModal>
    );
}

export default ModalViewProject;

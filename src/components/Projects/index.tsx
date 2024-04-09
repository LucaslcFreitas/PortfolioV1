import { useState } from 'react';
import ModalViewProject from '../ModalViewProject';
import ProjectCard, { ProjectType } from '../ProjectCard';
import * as Styled from './styles';

export type ProjectsProps = {
    projects: ProjectType[];
};

function Projects({ projects }: ProjectsProps) {
    const [showProject, setShowProject] = useState(false);
    const [selectedProject, setSelectedProject] = useState<ProjectType>();

    const handleOpenProject = (project: ProjectType) => {
        console.log('open project ' + project.name);
        setSelectedProject(project);
        setShowProject(true);
    };

    return (
        <Styled.ProjectContainer>
            <ModalViewProject
                show={showProject}
                onHide={() => setShowProject(false)}
                project={selectedProject!}
            />
            {projects.map((item) => (
                <ProjectCard
                    key={item.id}
                    project={item}
                    onOpen={handleOpenProject}
                />
            ))}
        </Styled.ProjectContainer>
    );
}

export default Projects;

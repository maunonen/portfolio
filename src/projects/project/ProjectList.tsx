import React from 'react';
import s from './Project.module.scss'
import rentalProject from '../../assets/img/rental.png';
import Project, {ProjectPropsType} from "./Project";


export interface ProjectListPropsType {
    projectList: Array<ProjectPropsType>
}

const ProjectList: React.FC<ProjectListPropsType> = (props) => {
    const {projectList} = props;
    return (
        <>
            {
                projectList && projectList.map((project, index) => {
                    return (
                        <Project
                            title={project.title}
                            description={project.description}
                            imageUrl={project.imageUrl}
                            imageAlt={project.imageAlt}
                        />

                    )
                })
            }
        </>
    );
};

export default ProjectList;

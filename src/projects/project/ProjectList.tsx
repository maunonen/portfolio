import React from 'react';
import Project, {ProjectType} from "./Project";


export interface ProjectListPropsType {
    projectList: Array<ProjectType>
}

const ProjectList: React.FC<ProjectListPropsType> = (props) => {
    const {projectList} = props;
    return (
        <>
            {
                projectList && projectList.map((project, index) => {
                    return (
                        <Project
                            key={index}
                            project={project}
                        />

                    )
                })
            }
        </>
    );
};

export default ProjectList;

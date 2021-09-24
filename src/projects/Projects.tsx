import React from 'react';
import s from './Projects.module.scss'
import styleContainer from '../common/styles/Container.module.css'
import Project from './project/Project'
import imageUrl from '../assets/img/projectMock.png'
import Title from "../common/components/title/Title";
import Subtitle from "../common/components/subtitle/Subtitle";

const Projects: React.FC = () => {
    return (
        <div className={s.projectsBlock}>
            <div className={` ${styleContainer.container} ${s.projectsContainer}`}>
                <Subtitle text={"Projects"}/>
                <Title text={"Recent projects"}/>
                <div className={s.projects}>
                    <Project
                        title={"Car rental service"}
                        description={"Creating car rental service system using Django, " +
                            "Python,  Bootstrap, PostgreSQL"}
                        imageUrl={imageUrl}
                        imageAlt={"Some "}
                    />
                    <Project
                        title={"Todo list "}
                        description={"Creating car rental service system using Django, " }
                        imageUrl={imageUrl}
                        imageAlt={"Some "}
                    />
                    <Project
                        title={"Sticker price printing service"}
                        description={"Creating services for printing taxi price. Using To do list using React, Typescript, Material UI"}
                        imageUrl={imageUrl}
                        imageAlt={"Some "}
                    />
                    <Project
                        title={"Sticker price printing service"}
                        description={"Creating services for printing taxi price. Using To do list using React, Typescript, Material UI"}
                        imageUrl={imageUrl}
                        imageAlt={"Some "}
                    />
                </div>
            </div>
        </div>
    );
}

export default Projects;

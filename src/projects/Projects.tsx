import React from 'react';
import s from './Projects.module.scss';
import styleContainer from '../common/styles/Container.module.scss';
import {ProjectType} from './project/Project';
import rentalUrl from '../assets/img/rental.png';
import stickerUrl from '../assets/img/stickerPrice.png';
import elidoUrl from '../assets/img/elidoProject.png';
import codexTest from '../assets/img/codexTest.png';

import Title from "../common/components/title/Title";
import Subtitle from "../common/components/subtitle/Subtitle";
import ProjectList from "./project/ProjectList";


const projectArray : ProjectType[] = [
    {
        title : "Car Rental Service",
        description : "Creating car rental service using Django, " +
            "Python,  Bootstrap, PostgreSQL",
        imageAlt : "car rental project image",
        imageUrl : rentalUrl,
        projectUrl : "https://lds-project-django.herokuapp.com/",
    },
    {
        title : "Music catalog",
        description : "Creating music catalog using React, Node.js, Sequelize, Material UI",
        imageUrl : codexTest,
        imageAlt : "music catalog image",
        projectUrl : "https://codex-test.herokuapp.com/",
    },
    {
        title : "Sticker price printing service",
        description : "Creating sticker price printing service. Using React, NodeJS, HTML, CSS",
        imageUrl : stickerUrl,
        imageAlt : "sticker price project image",
        projectUrl : "https://thawing-oasis-73016.herokuapp.com/",
    },
    {
        title : "Companies catalog of Kerava",
        description : "Creating a catalog of companies city of Kerava. Using Django, Graphene, React, Material UI, GraphQL",
        imageUrl : elidoUrl,
        imageAlt : "elido project image",
        projectUrl : "",
    },

]

const Projects: React.FC = () => {
    return (
        <div className={s.projectsBlock} id={"projects"}>
            <div className={` ${styleContainer.container} ${s.projectsContainer}`}>
                <Subtitle text={"Projects"}/>
                <Title text={"Recent projects"}/>
                <div className={s.projects}>
                    <ProjectList projectList={projectArray}/>
                </div>
            </div>
        </div>
    );
}

export default Projects;

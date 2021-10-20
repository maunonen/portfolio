import React from 'react';
import s from './Projects.module.scss';
import styleContainer from '../common/styles/Container.module.scss';
import {ProjectType} from './project/Project';
import rentalUrl from '../assets/img/rental.png';
import stickerUrl from '../assets/img/sticker.png';
import cardsUrl from '../assets/img/cards.png';
import Title from "../common/components/title/Title";
import Subtitle from "../common/components/subtitle/Subtitle";
import ProjectList from "./project/ProjectList";


const projectArray : ProjectType[] = [
    {
        title : "Car Rental Service",
        description : "Creating car rental service system using Django, " +
            "Python,  Bootstrap, PostgreSQL",
        imageAlt : "car rental project image",
        imageUrl : rentalUrl,
        projectUrl : "https://lds-project-django.herokuapp.com/",
    },
    {
        title : "Music catalog",
        description : "Creating music catalog using React, Node.js, sequelize, Material UI",
        imageUrl : stickerUrl,
        imageAlt : "music catalog image",
        projectUrl : "https://codex-test.herokuapp.com/",
    },
    {
        title : "Sticker price printing service",
        description : "Creating services for printing taxi price. Using React, Typescript, Material UI",
        imageUrl : cardsUrl,
        imageAlt : "sticker price project image",
        projectUrl : "https://thawing-oasis-73016.herokuapp.com/",
    },
    {
        title : "Sticker price printing service",
        description : "Creating services for printing taxi price. Using To do list using React, Typescript, Material UI",
        imageUrl : stickerUrl,
        imageAlt : "",
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

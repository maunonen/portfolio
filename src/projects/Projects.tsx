import React from 'react';
import s from './Projects.module.scss';
import styleContainer from '../common/styles/Container.module.css';
import Project, {ProjectPropsType} from './project/Project';
import rentalUrl from '../assets/img/rental.png';
import stickerUrl from '../assets/img/sticker.png';
import cardsUrl from '../assets/img/cards.png';
import Title from "../common/components/title/Title";
import Subtitle from "../common/components/subtitle/Subtitle";
import ProjectList from "./project/ProjectList";


const projectArray : ProjectPropsType[] = [
    {
        title : "Car Rental Service",
        description : "Creating car rental service system using Django, " +
            "Python,  Bootstrap, PostgreSQL",
        imageAlt : "car rental project image",
        imageUrl : rentalUrl
    },
    {
        title : "Card ",
        description : "Creating car rental service system using Django, ",
        imageUrl : stickerUrl,
        imageAlt : "Some ",
    },
    {
        title : "Sticker price printing service",
        description : "Creating services for printing taxi price. Using To do list using React, Typescript, Material UI",
        imageUrl : cardsUrl,
        imageAlt : "some",
    },
    {
        title : "Sticker price printing service",
        description : "Creating services for printing taxi price. Using To do list using React, Typescript, Material UI",
        imageUrl : stickerUrl,
        imageAlt : "some",
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

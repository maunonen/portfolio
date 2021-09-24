import React from 'react';
import s from './Skills.module.scss'
import styleContainer from '../common/styles/Container.module.css'
import Skill from '../skills/skill/Skill'
import Title from "../common/components/title/Title";
import Subtitle from "../common/components/subtitle/Subtitle";

const Skills: React.FC = () => {
    return (
        <div className={s.skillsBlock}>
            <div className={`${styleContainer.container} ${s.skillsContainer}`}>
                <Subtitle text={"Skills"}/>
                <Title text={"All skills"}/>
                <div className={s.skills}>
                    <Skill title={"JS"} description={"Some description"}/>
                    <Skill title={"React"} description={"Some description"}/>
                    <Skill title={"HTML/CSS"} description={"Some description"}/>
                </div>
            </div>
        </div>
    );
}

export default Skills;

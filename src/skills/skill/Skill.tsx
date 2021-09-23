import React from 'react';
import s from './Skill.module.css'

export interface SkillPropsType {
    title : string
    description : string
}

const Skill: React.FC<SkillPropsType> = (props) => {
    const {title, description} = props
    return (
        <div className={s.skill}>
            <div className={s.icon}></div>
            <h3>{title}</h3>
            <span className={s.description}>{description}</span>
        </div>
    );
}

export default Skill;

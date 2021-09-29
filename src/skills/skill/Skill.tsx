import React from 'react';
import s from './Skill.module.scss'
import TelegramIcon from "../../assets/svg/TelegramIcon";
import CornerUrl from '../../../src/assets/img/corner.png';
import EmailIcon from "../../assets/svg/EmailIcon";
import GithubIcon from "../../assets/svg/GithubIcon";

export interface SkillPropsType {
    title: string
    description: string
    svgIcon : JSX.Element
}

const Skill: React.FC<SkillPropsType> = (props) => {
    const {title, description, svgIcon} = props
    return (
        <div className={s.skill}>
            <div className={s.descriptionBlock}>
                <div className={s.icon}>
                    {svgIcon}
                </div>
                <h3 className={s.title}>{title}</h3>
                <span className={s.description}>{description}</span>
            </div>
            <div className={s.corner}>
                <img src={CornerUrl}/>
            </div>
        </div>
    );
}

export default Skill;

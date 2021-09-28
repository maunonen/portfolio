import React from 'react';
import s from './Skills.module.scss'
import styleContainer from '../common/styles/Container.module.css'
import Skill, {SkillPropsType} from '../skills/skill/Skill'
import Title from "../common/components/title/Title";
import Subtitle from "../common/components/subtitle/Subtitle";
import GithubIcon from "../common/svg/GithubIcon";
import LinkedInIcon from "../common/svg/LinkedInIcon";
import EmailIcon from "../common/svg/EmailIcon";
import TelegramIcon from "../common/svg/TelegramIcon";

const skillList: Array<SkillPropsType> = [
    {
        svgIcon: <GithubIcon/>, title: "Github",
        description: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
    },
    {
        svgIcon: <LinkedInIcon/>, title: "Linked",
        description: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
    },
    {
        svgIcon: <EmailIcon/>, title: "Email",
        description: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
    },
    {
        svgIcon: <TelegramIcon/>, title: "Telegram",
        description: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
    },
]

const Skills: React.FC = () => {

    return (
        <div className={s.skillsBlock}>
            <div className={`${styleContainer.container} ${s.skillsContainer}`}>
                <Subtitle text={"Skills"}/>
                <Title text={"All skills"}/>
                <div className={s.skills}>
                    {skillList && skillList.map((skill, index) => (
                        <Skill svgIcon={skill.svgIcon} title={skill.title}
                               description={skill.description}/>
                    ))}

                    {/*<Skill svgIcon={<GithubIcon/>} title={"React"} description={"Lorem ipsum dolor sit amet consectetur adipisicing elit. " +
                    "Maxime mollitia, molestiae quas vel sint, molestiae quas vel sint " }/>
                    <Skill svgIcon={<GithubIcon/>} title={"HTML/CSS"} description={"Lorem ipsum dolor sit amet consectetur adipisicing elit. " +
                    "Maxime mollitia, molestiae quas vel sint, molestiae quas vel sint " }/>*/}
                </div>
            </div>
        </div>
    );
}

export default Skills;

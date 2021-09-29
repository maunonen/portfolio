import React from 'react';
import s from './Skills.module.scss'
import styleContainer from '../common/styles/Container.module.css'
import Skill, {SkillPropsType} from '../skills/skill/Skill'
import Title from "../common/components/title/Title";
import Subtitle from "../common/components/subtitle/Subtitle";
import GithubIcon from "../assets/svg/GithubIcon";
import LinkedInIcon from "../assets/svg/LinkedInIcon";
import EmailIcon from "../assets/svg/EmailIcon";
import TelegramIcon from "../assets/svg/TelegramIcon";
import DjangoIcon from "../assets/svg/DjangoIcon";
import MongoIcon from "../assets/svg/MongoIcon";
import NodeIcon from "../assets/svg/NodeIcon";
import MaterialIcon from "../assets/svg/MaterialIcon";
import TypescriptIcon from "../assets/svg/TypescriptIcon";
import ReactIcon from "../assets/svg/ReactIcon";
import ReduxIcon from "../assets/svg/ReduxIcon";
import HtmlIcon from "../assets/svg/HtmlIcon";
import CssIcon from "../assets/svg/CssIcon";
import ExpressIcon from "../assets/svg/ExpressIcon";
import PythonIcon from "../assets/svg/PythonIcon";
import PostgresIcon from "../assets/svg/PostgresIcon";




const skillList: Array<SkillPropsType> = [
    {
        svgIcon: <ReactIcon/>, title: "React",
        description: "An open source JavaScript library for developing user interfaces. Used to develop single page and mobile applications. Its goal is to provide high speed, simplicity and scalability.",
    },
    {
        svgIcon: <ReduxIcon/>, title: "Redux",
        description: "JavaScript library for managing application state. Used in conjunction with React or Angular. Contains tools to simplify the transfer of data through context.",
    },
    {
        svgIcon: <TypescriptIcon/>, title: "Typescript",
        description: "A programming language introduced by Microsoft in 2012 and positioned as a web application development tool that extends JavaScript.",
    },
    {
        svgIcon: <HtmlIcon/>, title: "HTML",
        description: "Hypertext Markup Language. It is interpreted by browsers, and then the formatted text obtained as a result of interpretation is displayed on the screen of a computer monitor or mobile device",
    },
    {
        svgIcon: <CssIcon/>, title: "CSS",
        description: "CSS is used by web page creators to specify colors, fonts, styles, block placement, and other aspects of the presentation of the appearance of these web pages.",
    },
    {
        svgIcon: <MaterialIcon/>, title: "Material UI",
        description: "An open source library that includes React Components that implement Google's Material Design. It is built using Less, a backward-compatible language extension for CSS.",
    },
    {
        svgIcon: <NodeIcon/>, title: "Node.JS",
        description: "As an asynchronous event-driven JavaScript runtime, Node.js is designed to build scalable network applications.",
    },
    {
        svgIcon: <ExpressIcon/>, title: "Express.JS",
        description: "Express is a minimal and flexible Node.js web application framework that provides a robust set of features for web and mobile applications.",
    },
    {
        svgIcon: <MongoIcon/>, title: "Mongo DB",
        description: "MongoDB is a cross-platform document-oriented database program or NoSQL database uses JSON-like documents with optional schemas.",
    },
    {
        svgIcon: <PostgresIcon/>, title: "PostgreSQL",
        description: "PostgreSQL is an advanced, enterprise-class, and open-source relational database system. PostgreSQL supports both SQL and JSON querying.",
    },
    {
        svgIcon: <DjangoIcon/>, title: "Django",
        description: "Django is open source high-level Python web framework that enables rapid development of secure and maintainable websites.",
    },
    {
        svgIcon: <PythonIcon/>, title: "Python",
        description: "Python is an interpreted, object-oriented, high-level programming language. It supports multiple programming paradigms, such as procedural, object-oriented and functional.",
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

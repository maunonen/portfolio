import React from 'react';
import s from './Project.module.scss'
import projectImage from '../../assets/img/projectMock.png'

export interface SkillPropsType {
    title: string
    description: string
    imageUrl?: string
    imageAlt?: string
}

const Project: React.FC<SkillPropsType> = (props) => {
    const {title, description, imageAlt, imageUrl} = props
    return (
        <div className={s.project}>
            <div className={s.imageBlock}
                 style={{
                     backgroundImage: `url(${imageUrl})`,
                     backgroundPosition: 'center',
                     backgroundSize: 'cover',
                     backgroundRepeat: 'no-repeat',
                 }}>
                <a className={s.preview} href={"#"}>Preview</a>
                {/*<img src={imageUrl} alt={imageAlt && imageAlt} className={s.image} />*/}
            </div>
            <div className={s.projectInfo}>
                <h3 className={s.title}>{title}</h3>
                <span className={s.description}>{description}</span>
            </div>
        </div>
    );
}

export default Project;

import React from 'react';
import s from './Project.module.scss'
import rentalProject from '../../assets/img/rental.png';

export interface SkillPropsType {
    title: string
    description: string
    imageUrl?: string
    imageAlt?: string
}

const Project: React.FC<SkillPropsType> = (props) => {
    const {title, description, imageAlt, imageUrl} = props
    return (
        <div className={s.project}  style={{
            backgroundImage: `url(${imageUrl})`,
            backgroundPosition: 'center',
            backgroundSize: 'cover',
            backgroundRepeat: 'no-repeat',
        }}>

            <div className={s.hoverBlock}>
                <div className={s.hoverContentBlock}>
                    <a className={s.preview} href={"#"}>
                        <h3 className={s.title}>{title}</h3>
                    </a>
                    <span className={s.description}>{description}</span>
                </div>
            </div>
        </div>
    );
}

export default Project;

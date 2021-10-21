import React from 'react';
import s from './Project.module.scss'

export interface ProjectType {
    title: string
    projectUrl?: string
    description?: string
    imageUrl?: string
    imageAlt?: string
}

export interface ProjectPropsType {
    project: ProjectType
}

const Project: React.FC<ProjectPropsType> = (props) => {
    const {title, description, imageUrl, projectUrl} = props.project
    return (
        <div className={s.project} style={{
            backgroundImage: `url(${imageUrl})`,
            backgroundPosition: 'center',
            backgroundSize: 'cover',
            backgroundRepeat: 'no-repeat',
        }}>

            <div className={s.hoverBlock}>
                <div className={s.hoverContentBlock}>
                    {
                        projectUrl ? (<a target="_blank" className={s.preview} href={projectUrl ? projectUrl : "#"}>
                                <h3 className={s.title}>{title}</h3>
                            </a>) :
                            (<h3 className={s.title}>{title}</h3>)
                    }

                    <span className={s.description}>{description}</span>
                </div>
            </div>
        </div>
    );
}

export default Project;

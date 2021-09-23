import React from 'react';
import s from './Title.module.scss'

export interface TitlePropsType {
    title : string
}

const Title: React.FC<TitlePropsType> = (props) => {
    const {title} = props
    return (
        <div className={s.title}>
            <h2>{title}</h2>
        </div>
    );
}

export default Title;

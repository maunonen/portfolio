import React from 'react';
import s from './Title.module.scss'

export interface TitlePropsType {
    text : string
}

const Title: React.FC<TitlePropsType> = (props) => {
    const {text} = props
    return (
        <div className={s.title}>
            <h2>{text}</h2>
        </div>
    );
}

export default Title;

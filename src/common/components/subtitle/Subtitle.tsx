import React from 'react';
import s from './Subtitle.module.scss'

export interface TitlePropsType {
    text : string
}

const Subtitle: React.FC<TitlePropsType> = (props) => {
    const {text} = props
    return (
        <div className={s.subtitle}>
            <h3>{text}</h3>
        </div>
    );
}

export default Subtitle;

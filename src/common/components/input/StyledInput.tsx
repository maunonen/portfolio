import React from 'react';
import s from './StyledInput.module.scss'

export interface TitlePropsType {
    text : string
}

const StyledInput: React.FC<TitlePropsType> = (props) => {
    const {text} = props
    return (
        <div className={s.subtitle}>

        </div>
    );
}

export default StyledInput;

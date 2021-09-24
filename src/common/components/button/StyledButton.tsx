import React, {ButtonHTMLAttributes, ChangeEvent, DetailedHTMLProps,KeyboardEvent} from 'react';
import s from './StyledButton.module.scss'

type DefaultButtonPropsType = DetailedHTMLProps<ButtonHTMLAttributes<HTMLButtonElement>, HTMLButtonElement>

export interface StyledButtonPropsType extends DefaultButtonPropsType {
    red?: boolean
    withArrow? : boolean
}

const StyledButton: React.FC<StyledButtonPropsType> = (props) => {
    const {
        red,
        className,
        ...restProps
    } = props

    const finalClassName = `${s.default} ${className}`

    return (
        <button
            className={finalClassName}
            {...restProps}
        />
    );
}

export default StyledButton;

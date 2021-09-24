import React, {ChangeEvent, DetailedHTMLProps, InputHTMLAttributes, KeyboardEvent} from 'react';
import s from './StyledInput.module.scss'

type DefaultInputPropsType = DetailedHTMLProps<InputHTMLAttributes<HTMLInputElement>, HTMLInputElement>

export interface StyledInputTextPropsType extends DefaultInputPropsType { // и + ещё пропсы которых нет в стандартном инпуте
    onChangeText?: (value: string) => void
    onEnter?: () => void
    error?: string
    spanClassName?: string
}

const StyledInput: React.FC<StyledInputTextPropsType> = (props) => {
    const {
        type, onChange, onChangeText, onKeyPress,
        onEnter, error, className, spanClassName,
        ...restProps
    } = props

    const onChangeCallback = (e: ChangeEvent<HTMLInputElement>) => {
        onChange
        && onChange(e)

        onChangeText && onChangeText(e.currentTarget.value)
    }
    const onKeyPressCallback = (e: KeyboardEvent<HTMLInputElement>) => {
        onKeyPress && onKeyPress(e);
        onEnter && e.key === 'Enter' && onEnter()
    }

    const finalSpanClassName = `${error ? s.error : ''} ${spanClassName ? spanClassName : ''}`
    const finalInputClassName = `${error ? s.errorInput : ''} ${className ? className : ''} ${s.styledInput}`
    return (
        <div className={s.inputBlock}>
            <input
                type={'text'}
                onChange={onChangeCallback}
                onKeyPress={onKeyPressCallback}
                className={finalInputClassName}
                {...restProps}
            />
            {error && <span className={finalSpanClassName}>{error}</span>}
        </div>
    );
}

export default StyledInput;

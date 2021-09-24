import React, {ChangeEvent, DetailedHTMLProps, InputHTMLAttributes, KeyboardEvent, TextareaHTMLAttributes} from 'react';
import s from './StyledTextArea.module.scss'

/*ChangeEvent<HTMLTextAreaElement>*/

type DefaultInputPropsType = DetailedHTMLProps<TextareaHTMLAttributes<HTMLTextAreaElement>, HTMLTextAreaElement>

export interface StyledInputTextPropsType extends DefaultInputPropsType { // и + ещё пропсы которых нет в стандартном инпуте
    onChangeText?: (value: string) => void
    onEnter?: () => void
    error?: string
    spanClassName?: string
}

const StyledTextArea: React.FC<StyledInputTextPropsType> = (props) => {
    const {
        onChange, onChangeText, onKeyPress,
        onEnter, error, className, spanClassName,
        ...restProps
    } = props

    const onChangeCallback = (e: ChangeEvent<HTMLTextAreaElement>) => {
        onChange
        && onChange(e)

        onChangeText && onChangeText(e.currentTarget.value)
    }
    const onKeyPressCallback = (e: KeyboardEvent<HTMLTextAreaElement>) => {
        onKeyPress && onKeyPress(e);
        onEnter && e.key === 'Enter' && onEnter()
    }

    const finalSpanClassName = `${error ? s.error : ''} ${spanClassName ? spanClassName : ''}`
    const finalInputClassName = `${error ? s.errorInput : ''} ${className ? className : ''} ${s.styledInput}`
    return (
        <div className={s.textAreaBlock}>
            <textarea
                onChange={onChangeCallback}
                onKeyPress={onKeyPressCallback}
                className={finalInputClassName}
                {...restProps}
            />
            {error && <span className={finalSpanClassName}>{error}</span>}
        </div>
    );
}

export default StyledTextArea;

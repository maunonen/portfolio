import React, {ButtonHTMLAttributes, ChangeEvent, DetailedHTMLProps, KeyboardEvent} from 'react';
import s from './TextIconList.module.scss'
import {ReactComponent} from "*.svg";

export interface TextIconListPropsType {
    items: Array<IconListItemType>
}

export interface IconListItemType {
    svgIcon?: JSX.Element
    itemText: string
    itemLink?: string
}

const TextIconList: React.FC<TextIconListPropsType> = (props) => {
    const {
        items
    } = props

    let iconListJSX = items.map((item, index) => (
            <li key={index}>
                <div className={s.itemIconBlock}>
                    {
                        item.svgIcon &&
                        <div className={s.itemIcon}>
                            {item.svgIcon}
                        </div>
                    }
                    {
                        item.itemLink
                            ? (
                                <a className={s.itemLink} href={item.itemLink}>
                                    <span className={s.itemText}>{item.itemText}</span>
                                </a>
                            )
                            : <span className={s.itemText}>{item.itemText}</span>
                    }

                </div>
            </li>
        )
    )

    return (
        <>
            <ul className={s.iconListBlock}>
                {
                    iconListJSX
                }
            </ul>
        </>
    );
};

export default TextIconList;

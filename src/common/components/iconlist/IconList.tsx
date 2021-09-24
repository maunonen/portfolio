import React, {ButtonHTMLAttributes, ChangeEvent, DetailedHTMLProps, KeyboardEvent} from 'react';
import s from './IconList.module.scss'
import {ReactComponent} from "*.svg";

export interface IconListPropsType {
    items: Array<IconListItemType>
}

export interface IconListItemType {
    svgIcon?: JSX.Element
    itemText: string
}

const IconList: React.FC<IconListPropsType> = (props) => {
    const {
        items
    } = props

    let iconListJSX = items.map((item, index) => (
            <li key={index}>
                <div className={s.itemIconBlock}>
                    <div className={s.itemIcon}>
                        {item.svgIcon}
                    </div>
                    <span className={s.itemText}>{item.itemText}</span>
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
}

export default IconList;

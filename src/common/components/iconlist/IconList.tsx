import React from 'react';
import s from './IconList.module.scss'

export interface IconListPropsType {
    items: Array<IconListItemType>
}

export interface IconListItemType {
    svgIcon: JSX.Element
    iconLink : string
}

const IconList: React.FC<IconListPropsType> = (props) => {
    const {
        items
    } = props

    let iconListJSX = items.map((item, index) => (
            <div key={index} className={s.itemIcon}>
                <a href={item.iconLink}>{item.svgIcon}</a>
            </div>
        )
    )

    return (
        <div className={s.itemIconBlock}>
            {
                iconListJSX && iconListJSX
            }
        </div>
    );
};

export default IconList;

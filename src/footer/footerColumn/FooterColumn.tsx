import React, {ChangeEvent, useState} from 'react';
import s from './FooterColumn.module.css'
import styleContainer from "../../common/styles/Container.module.css"

export interface FooterItemType {
    itemLink: string
    itemText: string
    id: string
}

export interface FooterColumnPropsType {
    itemList: FooterItemType[]

}

const FooterColumn: React.FC<FooterColumnPropsType> = (props) => {

    return (
        <div className={s.footerColumn}>
            <div className={s.footerColumnContainer}>
                {
                    props.itemList.length > 0 && props.itemList.map((item) => {
                        return <a key={item.id} href={item.itemLink}>{item.itemText}</a>
                    })
                }
            </div>
        </div>
    );
}

export default FooterColumn

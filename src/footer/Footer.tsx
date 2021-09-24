import React, {ChangeEvent, useState} from 'react';
import s from './Footer.module.scss'
import styleContainer from "../common/styles/Container.module.css";
import FooterColumn, {FooterItemType} from "./footerColumn/FooterColumn";
import Title from "../common/components/title/Title";

const columnList: FooterItemType[] = [
    {itemText: "some 1", itemLink: "#", id: "1"},
    {itemText: "some 2", itemLink: "#", id: "2"},
    {itemText: "some 3 ", itemLink: "#", id: "3"},
    {itemText: "some 4", itemLink: "#", id: "4"},
]

const Footer = () => {

    return (
        <div className={s.footer}>
            <div className={`${styleContainer.container} ${s.footerBlock}`}>
                <div className={s.copyrigth}>Copyright © 2021. All rights reserved.</div>
                {/*<Title text={"Alexander Maunonen"}/>*/}
                <div className={s.footerSocialBlock}>
                    <FooterColumn itemList={columnList}/>
                </div>
            </div>
        </div>
    );
}

export default Footer;

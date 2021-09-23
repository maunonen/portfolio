import React, {ChangeEvent, useState} from 'react';
import s from './Footer.module.scss'
import styleContainer from "../common/styles/Container.module.css";
import FooterColumn, {FooterItemType} from "./footerColumn/FooterColumn";
import Title from "../common/components/title/Title";

const columnList : FooterItemType[] =[
    { itemText : "some 1", itemLink: "http://890e2", id : "1"},
    { itemText : "some 2", itemLink: "http://890e2", id : "2"},
    { itemText : "some 3 ", itemLink: "http://890e2", id : "3"},
    { itemText : "some 4", itemLink: "http://890e2", id : "4"},
]

const Footer = () => {

    return (
        <div className={s.footer}>
            <div className={` ${styleContainer.container} ${s.footerContainer}`}>
                <Title title={"Alexander Maunonen"}/>
                <div className={s.footerColumnContainer}>
                    <FooterColumn itemList={columnList}/>
                    <FooterColumn itemList={columnList}/>
                    <FooterColumn itemList={columnList}/>
                </div>
            </div>
        </div>
    );
}

export default Footer;

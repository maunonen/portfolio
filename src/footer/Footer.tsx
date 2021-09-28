import React, {ChangeEvent, useState} from 'react';
import s from './Footer.module.scss'
import styleContainer from "../common/styles/Container.module.css";
import FooterColumn, {FooterItemType} from "./footerColumn/FooterColumn";
import Title from "../common/components/title/Title";
import IconList, {IconListItemType, IconListPropsType} from "../common/components/iconlist/IconList";
import EmailIcon from "../common/svg/EmailIcon";
import LinkedInIcon from "../common/svg/LinkedInIcon";
import TelegramIcon from "../common/svg/TelegramIcon";
import GithubIcon from "../common/svg/GithubIcon";

const iconArray: Array<IconListItemType> = [
    {svgIcon: <EmailIcon/>, iconLink: "mailto:santari33@gmail.com"},
    {svgIcon: <TelegramIcon/>, iconLink: "https://telegram.im/@maunonen"},
    {svgIcon: <GithubIcon/>, iconLink: "https://github.com/maunonen"},
    {svgIcon: <LinkedInIcon/>, iconLink: "https://www.linkedin.com/in/alexander-maunonen-a00aa3176/"},
];

const Footer = () => {

    return (
        <div className={s.footer}>
            <div className={`${styleContainer.container} ${s.footerBlock}`}>
                <div className={s.copyrigth}>Copyright © 2021. All rights reserved.</div>
                <IconList items={iconArray}/>
            </div>
        </div>
    );
}

export default Footer;

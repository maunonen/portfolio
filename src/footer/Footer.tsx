import React from 'react';
import s from './Footer.module.scss'
import styleContainer from "../common/styles/Container.module.scss";
import IconList, {IconListItemType} from "../common/components/iconlist/IconList";
import EmailIcon from "../assets/svg/EmailIcon";
import LinkedInIcon from "../assets/svg/LinkedInIcon";
import TelegramIcon from "../assets/svg/TelegramIcon";
import GithubIcon from "../assets/svg/GithubIcon";

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

import React, {useState} from 'react';
import s from './BurgerNav.module.scss'
import {Link} from "react-scroll/modules";
import BurgerMenuIcon from "../../assets/svg/BurgerMenuIcon";

const BurgerNav: React.FC = () => {
    const [menuStatus, setMenuStatus] = useState<boolean>(false);
    console.log(menuStatus);
    return (
        <div className={s.burgerNav}>
            <div className={menuStatus ? `${s.burgerNavItems} ${s.showMenu}` : s.burgerNavItems}>
                {/*<ul>
                <li>*/}
                {/*<a href={"#"}>Main</a>*/}
                <Link
                    onClick={() => {setMenuStatus(false)}}
                    activeClass={s.activeLink}
                    to="main"
                    spy={true}
                    smooth={true}
                    hashSpy={true}
                    offset={0}
                    duration={500}
                    ignoreCancelEvents={false}
                >
                    Main
                </Link>
                {/*</li>
                <li>*/}
                <Link
                    onClick={() => {setMenuStatus(false)}}
                    activeClass={s.activeLink}
                    to="skills"
                    spy={true}
                    smooth={true}
                    hashSpy={true}
                    offset={0}
                    duration={500}
                >
                    Skills
                </Link>
                {/*</li>
                <li>*/}
                <Link
                    onClick={() => {setMenuStatus(false)}}
                    activeClass={s.activeLink}
                    to="projects"
                    spy={true}
                    smooth={true}
                    hashSpy={true}
                    offset={0}
                    duration={500}
                >
                    Projects
                </Link>
                {/*<a href={"#projects"}>Project</a>*/}
                {/*</li>
                <li>*/}
                <Link
                    onClick={() => {setMenuStatus(false)}}
                    activeClass={s.activeLink}
                    to="contact"
                    spy={true}
                    smooth={true}
                    hashSpy={true}
                    offset={0}
                    duration={500}
                >
                    Contact
                </Link>
                {/*<a href={"#contact"}>Contact</a>*/}
                {/*</li>
            </ul>*/}
            </div>
            <div
                onClick={() => {setMenuStatus(!menuStatus)}}
                className={s.burgerButton}>
                <BurgerMenuIcon color={"#ff4522"}/>
            </div>
        </div>
    );
}

export default BurgerNav;

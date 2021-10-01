import React from 'react';
import s from './Nav.module.scss'
import {Link} from "react-scroll/modules";

const Nav: React.FC = () => {
    return (
        <div className={s.nav}>
            <ul>
                <li>
                    {/*<a href={"#"}>Main</a>*/}
                    <Link
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
                </li>
                <li>
                    <Link
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
                </li>
                <li>
                    <Link
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
                </li>
                <li>
                    <Link
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
                </li>
            </ul>
        </div>
    );
}

export default Nav;

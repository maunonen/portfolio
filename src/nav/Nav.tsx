import React from 'react';
import s from './Nav.module.css'

const  Nav : React.FC = () => {
    return (
        <div className={s.nav}>
            <a href={""}>Main</a>
            <a href={""}>Skills</a>
            <a href={""}>Project</a>
            <a href={""}>Contact</a>
            {/*<ul className={s.nav_list}>
                <li>1</li>
                <li>2</li>
                <li>3</li>
            </ul>*/}
        </div>
    );
}

export default Nav;

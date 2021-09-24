import React from 'react';
import s from './Nav.module.scss'

const  Nav : React.FC = () => {
    return (
        <div className={s.nav}>
            <ul>
                <li><a href={""}>Main</a></li>
                <li><a href={""}>Skills</a></li>
                <li><a href={""}>Project</a></li>
                <li><a href={""}>Contact</a></li>
            </ul>
        </div>
    );
}

export default Nav;

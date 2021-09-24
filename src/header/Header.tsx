import React from 'react';
import s from './Header.module.scss'
import Nav from "../nav/Nav";
import styleContainer from "../common/styles/Container.module.css";

const  Header : React.FC = () => {
    return (
        <div className={s.header}>
            <div className={`${styleContainer.container} ${s.headerContainer}`}>
                <Nav/>
            </div>
        </div>
    );
}

export default Header;

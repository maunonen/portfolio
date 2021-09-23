import React from 'react';
import s from './Main.module.css'
import styleContainer from '../common/styles/Container.module.css'
import photoUrl from '../assets/img/myFoto.png'

const Main: React.FC = () => {
    return (
        <div className={s.mainBlock}>
            <div className={styleContainer.container}>
                <div className={s.greetingBlock}>
                    <span>Hi there</span>
                    <h1>Alexander Maunonen</h1>
                    <p>Fullstack Developer</p>
                </div>
                <div className={s.photoBlock}>
                    <img alt={"My photo"} src={photoUrl} className={s.photo}/>
                </div>
            </div>
        </div>
    );
}

export default Main;

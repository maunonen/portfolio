import React from 'react';
import s from './Main.module.scss'
import styleContainer from '../common/styles/Container.module.css'
import photoUrl from '../assets/img/myFoto.png'
import testImage from '../assets/img/testImage.jpeg'
import Subtitle from "../common/components/subtitle/Subtitle";
import ArrowRightIcon from "../assets/svg/ArrowRightIcon";

const Main: React.FC = () => {
    return (
        <div className={s.mainBlock}>
            <div className={styleContainer.container}>
                <div className={s.greetingBlock}>
                    <Subtitle text={"Portfolio"}/>
                    <h1 className={s.title}>Alexander Maunonen</h1>
                    <div className={s.areas}>
                        <ul>
                            <li>
                                <div className={s.arrowSvg}>
                                    <a href={"#"} className={s.profileTitle}>React/Redux</a>
                                    <ArrowRightIcon/>
                                </div>
                            </li>
                            <li>
                                <div className={s.arrowSvg}>
                                    <a href={"#"} className={s.profileTitle}>Node.js/Express</a>
                                    <ArrowRightIcon/>
                                </div>
                            </li>
                            <li>
                                <div className={s.arrowSvg}>
                                    <a href={"#"} className={s.profileTitle}>Django/Python</a>
                                    <ArrowRightIcon/>
                                </div>
                            </li>
                        </ul>
                    </div>
                </div>
                <div className={s.photoBlock}>
                {/*<div>*/}
                    <div className={s.photo}>
                        <div
                            className={s.pseudoParent}
                            style={{
                           backgroundImage: `url(${testImage})`,
                           backgroundPosition: 'center',
                           backgroundSize: 'cover',
                           backgroundRepeat: 'no-repeat',
                       }}
                        >
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Main;

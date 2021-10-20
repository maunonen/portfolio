import React from 'react';
import s from './Main.module.scss'
import styleContainer from '../common/styles/Container.module.scss'
import myPhotoWEB from '../assets/img/myPhotoWEB.jpg';
import Subtitle from "../common/components/subtitle/Subtitle";
import ArrowRightIcon from "../assets/svg/ArrowRightIcon";
import Particles from "react-particles-js";
import ReactTypingEffect from 'react-typing-effect';

const particlesParams = {
    "particles": {
        "number": {
            "value": 50
        },
        "size": {
            "value": 3
        }
    },
    "interactivity": {
        "events": {
            "onhover": {
                "enable": true,
                "mode": "repulse"
            }
        }
    }
}

const Main: React.FC = () => {
    return (
        <div id={"main"} className={s.mainBlock}>
            <Particles
                className={s.particles}
                params={particlesParams}
            />
            <div className={styleContainer.container}>
                <div className={s.greetingBlock}>
                    <Subtitle text={"Portfolio"}/>
                    <h1 className={s.title}>
                        Alexander Maunonen
                    </h1>
                    <ReactTypingEffect
                        text={"Fullstack Developer"}
                        className={s.position}
                    />
                    <div className={s.areas}>
                        <ul>
                            <li>
                                <div className={s.arrowSvg}>
                                    <span className={s.profileTitle}>React/Redux</span>
                                    <ArrowRightIcon/>
                                </div>
                            </li>
                            <li>
                                <div className={s.arrowSvg}>
                                    <span className={s.profileTitle}>Node.js/Express</span>
                                    <ArrowRightIcon/>
                                </div>
                            </li>
                            <li>
                                <div className={s.arrowSvg}>
                                    <span className={s.profileTitle}>Django/Python</span>
                                    <ArrowRightIcon/>
                                </div>
                            </li>
                        </ul>
                    </div>
                </div>
                <div className={s.photoBlock}>
                    <div className={s.photo}>
                        <div
                            className={s.pseudoParent}
                            style={{
                                backgroundImage: `url(${myPhotoWEB})`,
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

import React from "react";
import {EmailIconPropsType} from "./EmailIcon";

export interface LinkedInIconPropsType {
    color?: string
    width?: string
    height?: string
}

const LinkedInIcon: React.FC<EmailIconPropsType> = (props) => {
    const {color, width, height} = props
    return (
        <svg
            xmlns="http://www.w3.org/2000/svg"
            width="512pt"
            height="512pt"
            viewBox="0 0 512 512"
        >
            <g fill={color ? color : "#fff"}>
                <path
                    d="M160.008 423h-70V197h70zm6.984-298.004c0-22.629-18.36-40.996-40.976-40.996C103.312 84 85 102.367 85 124.996 85 147.633 103.313 166 126.016 166c22.617 0 40.976-18.367 40.976-41.004zM422 298.664C422 237.996 409.184 193 338.312 193c-34.054 0-56.914 17.031-66.246 34.742H272V197h-68v226h68V310.79c0-29.388 7.48-57.856 43.906-57.856 35.93 0 37.094 33.605 37.094 59.722V423h69zM512 452V60c0-33.086-26.914-60-60-60H60C26.914 0 0 26.914 0 60v392c0 33.086 26.914 60 60 60h392c33.086 0 60-26.914 60-60zM452 40c11.027 0 20 8.973 20 20v392c0 11.027-8.973 20-20 20H60c-11.027 0-20-8.973-20-20V60c0-11.027 8.973-20 20-20zm0 0"></path>
            </g>
        </svg>
        /*<svg
            xmlns="http://www.w3.org/2000/svg"
            /!*width={width ? width : "18px"}
            height={height ? height : "18px"}*!/
            viewBox="0 0 24 24"
        >
            <g fill={color ? color : "#fff"}>
                <path
                    d="M23.994 24v-.001H24v-8.802c0-4.306-.927-7.623-5.961-7.623-2.42 0-4.044 1.328-4.707 2.587h-.07V7.976H8.489v16.023h4.97v-7.934c0-2.089.396-4.109 2.983-4.109 2.549 0 2.587 2.384 2.587 4.243V24zM.396 7.977h4.976V24H.396zM2.882 0C1.291 0 0 1.291 0 2.882s1.291 2.909 2.882 2.909 2.882-1.318 2.882-2.909A2.884 2.884 0 002.882 0z"></path>
            </g>
        </svg>*/
    );
}

export default LinkedInIcon;

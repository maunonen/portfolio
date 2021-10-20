import React from "react";

export interface EmailIconPropsType {
    color?: string
    width?: string
    height?: string
}

const EmailIcon: React.FC<EmailIconPropsType> = (props) => {
    const {color, width, height} = props
    return (
        <svg
            xmlns="http://www.w3.org/2000/svg"
            x="0"
            y="0"
            width={width ? width : "512"}
            height={height ? height : "384"}
            version="1.1"
            viewBox="0 0 512 384"
            xmlSpace="preserve"
        >
            <g transform="translate(-.11 -63.687)">
                <g fill={color ? color : "#fff"}>
                    <g>
                        <path
                            d="M10.688 95.156C80.958 154.667 204.26 259.365 240.5 292.01c4.865 4.406 10.083 6.646 15.5 6.646 5.406 0 10.615-2.219 15.469-6.604 36.271-32.677 159.573-137.385 229.844-196.896 4.375-3.698 5.042-10.198 1.5-14.719C494.625 69.99 482.417 64 469.333 64H42.667c-13.083 0-25.292 5.99-33.479 16.438-3.542 4.52-2.875 11.02 1.5 14.718z"></path>
                        <path
                            d="M505.813 127.406a10.618 10.618 0 00-11.375 1.542C416.51 195.01 317.052 279.688 285.76 307.885c-17.563 15.854-41.938 15.854-59.542-.021-33.354-30.052-145.042-125-208.656-178.917a10.674 10.674 0 00-11.375-1.542A10.674 10.674 0 000 137.083v268.25C0 428.865 19.135 448 42.667 448h426.667C492.865 448 512 428.865 512 405.333v-268.25a10.66 10.66 0 00-6.187-9.677z"></path>
                    </g>
                </g>
            </g>
        </svg>
    );
}

export default EmailIcon;

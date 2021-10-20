import React from "react";

export interface TelegramIconPropsType {
    color?: string
}

const TelegramIcon: React.FC<TelegramIconPropsType> = (props) => {
    const {color} = props
    return (
        <svg
            xmlns="http://www.w3.org/2000/svg"
            width="512"
            height="427"
            version="1.1"
            viewBox="0 0 24 20.016"
        >
            <g fill={color ? color : "#fff"}>
                <path
                    d="M9.422 13.185l-.397 5.584c.568 0 .814-.244 1.109-.537l2.663-2.545 5.518 4.04c1.012.565 1.725.268 1.998-.93l3.622-16.972v-.001C24.258.328 23.396-.257 22.41.11L1.119 8.26c-1.453.565-1.431 1.375-.247 1.742l5.443 1.693 12.643-7.911c.595-.394 1.136-.176.69.218z"
                ></path>
            </g>
        </svg>

    );
}

export default TelegramIcon;

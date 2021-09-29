import React from "react";
import {IconPropsType} from "./MongoIcon";

const MaterialIcon: React.FC<IconPropsType> = (props) => {
    const {color} = props
    return (
        <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="20"
            version="1.1"
            viewBox="0 0 24 20"
        >
            <g fill={color ? color : "#fff"}>
                <path
                    d="M-.014.475v10.39l3 1.734V5.67l6 3.465 6-3.465v3.465l-6 3.463v3.464l6 3.463 9-5.194V7.402l-3 1.733v3.463l-6 3.464-3-1.732 6-3.464V.476l-9 5.194zm24 0l-3 1.73V5.67l3-1.732V.474z"></path>
            </g>
        </svg>
    );
}

export default MaterialIcon;

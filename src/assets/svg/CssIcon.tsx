import React from "react";
import {IconPropsType} from "./MongoIcon";

const CssIcon: React.FC<IconPropsType> = (props) => {
    const {color} = props
    return (
        <svg
            xmlns="http://www.w3.org/2000/svg"
            x="0"
            y="0"
            enableBackground="new 0 0 512 512"
            version="1.1"
            viewBox="0 0 512 512"
            xmlSpace="preserve"
        >
            <g fill={color ? color : "#fff"}>
                <path
                    d="M32 0l40.8 460.8L256 512l183.136-51.168L480 0H32zm360.768 150.688l-5.152 57.888-15.52 173.568L256 414.208l-.064.032-116-32.128-8.128-90.752h56.832l4.224 47.104 63.072 17.024.064-.064 63.136-17.024 8.608-78.432-198.656.544-5.632-53.664 209.056-2.432 4.224-57.44-218.88.608-3.68-53.376h283.648l-5.056 56.48z"></path>
            </g>
        </svg>
    );
}

export default CssIcon;

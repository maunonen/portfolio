import React from "react";

export interface EmailIconPropsType {
    color?: string
    width?: string
    height?: string
}

const GithubIcon: React.FC<EmailIconPropsType> = (props) => {
    const {color, width, height} = props
    return (
        <svg
            xmlns="http://www.w3.org/2000/svg"
            width={width ? width : "438.536"}
            height={height ? height : "438.536"}
            x="0"
            y="0"
            enableBackground="new 0 0 438.536 438.536"
            version="1.1"
            viewBox="0 0 438.536 438.536"
            xmlSpace="preserve"
        >
            <g fill={color ? color : "#fff"}>
                <path
                    d="M158.173 352.599c-3.049.568-4.381 1.999-3.999 4.281.38 2.283 2.093 3.046 5.138 2.283 3.049-.76 4.38-2.095 3.997-3.997-.378-2.092-2.091-2.95-5.136-2.567zM141.898 354.885c-3.046 0-4.568 1.041-4.568 3.139 0 2.474 1.619 3.518 4.853 3.138 3.046 0 4.57-1.047 4.57-3.138 0-2.471-1.619-3.522-4.855-3.139zM119.629 354.022c-.76 2.095.478 3.519 3.711 4.284 2.855 1.137 4.664.568 5.424-1.714.572-2.091-.666-3.61-3.711-4.568-2.856-.759-4.663-.102-5.424 1.998z"></path>
                <path
                    d="M414.41 24.123C398.326 8.042 378.964 0 356.309 0H82.225C59.577 0 40.208 8.042 24.123 24.123 8.042 40.207 0 59.576 0 82.225v274.088c0 22.65 8.042 42.017 24.123 58.098 16.084 16.084 35.454 24.126 58.102 24.126h63.953c4.184 0 7.327-.144 9.42-.424 2.092-.288 4.184-1.526 6.279-3.717 2.096-2.187 3.14-5.376 3.14-9.562 0-.568-.05-7.046-.144-19.417-.097-12.375-.144-22.176-.144-29.41l-6.567 1.143c-4.187.76-9.469 1.095-15.846.999-6.374-.096-12.99-.76-19.841-1.998-6.855-1.239-13.229-4.093-19.13-8.562-5.898-4.477-10.085-10.328-12.56-17.559l-2.856-6.571c-1.903-4.373-4.899-9.229-8.992-14.554-4.093-5.332-8.232-8.949-12.419-10.852l-1.999-1.428c-1.331-.951-2.568-2.098-3.711-3.429-1.141-1.335-1.997-2.669-2.568-3.997-.571-1.335-.097-2.43 1.427-3.289 1.524-.855 4.281-1.279 8.28-1.279l5.708.855c3.808.76 8.516 3.042 14.134 6.851 5.614 3.806 10.229 8.754 13.846 14.843 4.38 7.806 9.657 13.75 15.846 17.843 6.184 4.097 12.419 6.143 18.699 6.143s11.704-.476 16.274-1.424c4.565-.954 8.848-2.385 12.847-4.288 1.713-12.751 6.377-22.559 13.988-29.41-10.848-1.143-20.602-2.854-29.265-5.14-8.658-2.286-17.605-5.995-26.835-11.136-9.234-5.14-16.894-11.512-22.985-19.13-6.09-7.618-11.088-17.61-14.987-29.978-3.901-12.375-5.852-26.652-5.852-42.829 0-23.029 7.521-42.637 22.557-58.814-7.044-17.32-6.379-36.732 1.997-58.242 5.52-1.714 13.706-.428 24.554 3.855 10.85 4.286 18.794 7.951 23.84 10.992 5.046 3.042 9.089 5.614 12.135 7.71 17.705-4.949 35.976-7.423 54.818-7.423 18.841 0 37.115 2.474 54.821 7.423l10.849-6.852c7.426-4.57 16.18-8.757 26.269-12.562 10.088-3.806 17.795-4.854 23.127-3.14 8.562 21.51 9.328 40.922 2.279 58.241 15.036 16.179 22.559 35.786 22.559 58.815 0 16.18-1.951 30.505-5.852 42.969-3.898 12.467-8.939 22.463-15.13 29.981-6.184 7.519-13.894 13.843-23.124 18.986-9.232 5.137-18.178 8.853-26.84 11.132-8.661 2.286-18.414 4.004-29.263 5.147 9.891 8.562 14.839 22.072 14.839 40.538v68.238c0 3.237.472 5.852 1.424 7.851.958 1.998 2.478 3.374 4.571 4.141 2.102.76 3.949 1.235 5.571 1.424 1.622.191 3.949.287 6.995.287h63.953c22.648 0 42.018-8.042 58.095-24.126 16.084-16.084 24.126-35.454 24.126-58.102V82.225c-.002-22.649-8.044-42.021-24.125-58.102z"></path>
                <path
                    d="M86.793 319.195c-1.331.948-1.141 2.471.572 4.565 1.906 1.902 3.427 2.189 4.57.855 1.331-.948 1.141-2.471-.575-4.569-1.902-1.71-3.424-1.997-4.567-.851zM77.374 312.057c-.57 1.335.096 2.478 1.999 3.426 1.521.955 2.762.767 3.711-.568.57-1.335-.096-2.478-1.999-3.433-1.903-.572-3.14-.38-3.711.575zM95.646 330.331c-1.715.948-1.715 2.666 0 5.137 1.713 2.478 3.328 3.142 4.853 1.998 1.714-1.334 1.714-3.142 0-5.427-1.521-2.468-3.14-3.046-4.853-1.708zM105.641 343.174c-1.714 1.526-1.336 3.327 1.142 5.428 2.281 2.279 4.185 2.566 5.708.849 1.524-1.519 1.143-3.326-1.142-5.42-2.281-2.28-4.185-2.568-5.708-.857z"></path>
            </g>
        </svg>

    );
}

export default GithubIcon;

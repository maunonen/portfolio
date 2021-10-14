import React from "react";

export interface ArrowRightIconRpopsType {
    color?: string
}

const BurgerMenuIcon: React.FC<ArrowRightIconRpopsType> = (props) => {
    const {color} = props
    return (
        <svg
            xmlns="http://www.w3.org/2000/svg"
            stroke="currentColor"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            className="feather feather-menu"
            viewBox="0 0 24 24"
        >
            <path d="M3 12L21 12"></path>
            <path d="M3 6L21 6"></path>
            <path d="M3 18L21 18"></path>
        </svg>
    );
}

export default BurgerMenuIcon;
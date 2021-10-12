import React from "react";

export interface AddressPropsType {
    color?: string
    width?: string
    height?: string
}

const AddressIcon: React.FC<AddressPropsType> = (props) => {
    const {color, width, height} = props
    return (
        <svg
            xmlns="http://www.w3.org/2000/svg"
            width={width ? width : "22"}
            height={height ? height : "22"}
            x="0"
            y="0"
            enableBackground="new 0 0 50 50"
            viewBox="0 0 50 50"
        >
            <g fill={color ? color : "#fff"}>
                <path d="M33 4v5.586l-8-8L1.293 25.293l1.414 1.414L4 25.414V49h42V25.414l1.293 1.293 1.414-1.414L42 18.586V4h-9zm2 2h5v10.586l-5-5V6zM20 47V31h10v16H20zm24 0H32V29H18v18H6V23.414l19-19 19 19V47z"></path>
            </g>
        </svg>
    );
}

export default AddressIcon;
import React from "react";
import {IconPropsType} from "./MongoIcon";

const ReactIcon: React.FC<IconPropsType> = (props) => {
    const {color} = props
    return (
        <svg
            xmlns="http://www.w3.org/2000/svg"
            x="0"
            y="0"
            enableBackground="new 0 0 227.333 227.333"
            version="1.1"
            viewBox="0 0 227.333 227.333"
            xmlSpace="preserve"
        >
            <g fill={color ? color : "#fff"}>
                <path
                    d="M193.591 113.667a144.207 144.207 0 005.399-5.575c16.3-17.84 21.992-34.136 16.026-45.885-3.434-6.764-12.22-14.827-34.571-14.827-8.519 0-18.046 1.181-28.189 3.394-1.449-5.557-3.091-10.825-4.933-15.711C138.797 12.452 126.844 0 113.667 0s-25.13 12.452-33.658 35.063c-1.843 4.886-3.485 10.154-4.933 15.711-10.143-2.213-19.67-3.394-28.189-3.394-22.351 0-31.137 8.063-34.571 14.827-5.966 11.749-.274 28.044 16.026 45.885 1.7 1.861 3.512 3.72 5.399 5.575a144.207 144.207 0 00-5.399 5.575c-16.3 17.84-21.992 34.136-16.026 45.885 3.434 6.764 12.22 14.827 34.571 14.827 8.519 0 18.046-1.181 28.189-3.394 1.449 5.557 3.091 10.825 4.933 15.711 8.528 22.611 20.481 35.063 33.658 35.063s25.13-12.452 33.657-35.063c1.843-4.886 3.485-10.154 4.933-15.712 10.143 2.213 19.67 3.394 28.189 3.395h.005c22.345 0 31.131-8.063 34.565-14.827 5.966-11.749.274-28.044-16.026-45.885a142.056 142.056 0 00-5.399-5.575zM180.447 57.38c13.481 0 22.592 3.322 25.655 9.354 3.889 7.66-1.394 20.275-14.493 34.612a135.524 135.524 0 01-5.358 5.52c-8.155-7.12-17.57-14.079-27.893-20.63-.859-8.958-2.144-17.571-3.82-25.681 9.421-2.06 18.209-3.175 25.909-3.175zm-50.49 88.37a278.43 278.43 0 01-16.29 7.615 277.823 277.823 0 01-16.29-7.615 281.945 281.945 0 01-18.875-10.506 280.893 280.893 0 01-.817-21.579c0-7.486.286-14.693.817-21.579a281.494 281.494 0 0118.875-10.505 278.152 278.152 0 0116.291-7.615 278.126 278.126 0 0116.29 7.615 281.945 281.945 0 0118.875 10.506c.531 6.886.817 14.092.817 21.579 0 7.486-.286 14.693-.817 21.579a282.016 282.016 0 01-18.876 10.505zm17.622 1.838a221.513 221.513 0 01-2.764 16.783 228.924 228.924 0 01-18.215-5.863 300.296 300.296 0 007.885-3.842c4.475-2.271 8.84-4.64 13.094-7.078zm-46.845 10.921a228.924 228.924 0 01-18.215 5.863 221.04 221.04 0 01-2.764-16.784 295.163 295.163 0 0013.094 7.079 294.105 294.105 0 007.885 3.842zm-32.667-29.966c-7.11-4.813-13.679-9.803-19.56-14.877 5.882-5.073 12.45-10.063 19.56-14.877-.247 4.895-.383 9.859-.383 14.877s.136 9.982.383 14.877zm11.687-48.798a221.541 221.541 0 012.764-16.784 229.333 229.333 0 0118.215 5.863 300.296 300.296 0 00-7.885 3.842 294.13 294.13 0 00-13.094 7.079zm46.845-10.921a228.924 228.924 0 0118.215-5.863 221.04 221.04 0 012.764 16.784 295.163 295.163 0 00-13.094-7.079 297.169 297.169 0 00-7.885-3.842zm32.667 29.966c7.11 4.813 13.679 9.803 19.56 14.877-5.882 5.073-12.45 10.063-19.56 14.877.247-4.895.383-9.859.383-14.877s-.136-9.982-.383-14.877zM113.667 10c10.526 0 21.794 16.29 28.861 43.17-9.303 2.538-19.003 5.874-28.861 9.94-9.858-4.066-19.557-7.403-28.861-9.94C91.873 26.29 103.141 10 113.667 10zm-77.943 91.346C22.625 87.01 17.343 74.394 21.232 66.734c3.063-6.032 12.174-9.354 25.655-9.354 7.7 0 16.487 1.115 25.908 3.175-1.676 8.111-2.96 16.723-3.82 25.681-10.323 6.551-19.738 13.51-27.893 20.63a135.524 135.524 0 01-5.358-5.52zm11.162 68.607c-13.481 0-22.592-3.322-25.655-9.354-3.889-7.66 1.394-20.275 14.493-34.612a135.524 135.524 0 015.358-5.52c8.155 7.12 17.57 14.079 27.893 20.63.859 8.958 2.144 17.571 3.82 25.681-9.421 2.06-18.209 3.175-25.909 3.175zm66.781 47.38c-10.526 0-21.794-16.29-28.861-43.17 9.303-2.538 19.003-5.874 28.861-9.941 9.857 4.066 19.557 7.403 28.861 9.94-7.068 26.881-18.335 43.171-28.861 43.171zm92.434-56.734c-3.063 6.033-12.171 9.354-25.649 9.354h-.005c-7.7 0-16.488-1.116-25.909-3.175 1.675-8.111 2.96-16.723 3.819-25.681 10.323-6.551 19.738-13.51 27.893-20.63a135.524 135.524 0 015.358 5.52c13.1 14.336 18.382 26.952 14.493 34.612zm-70.455-46.932c0 12.119-9.86 21.979-21.979 21.979-12.12 0-21.979-9.86-21.979-21.979s9.86-21.979 21.979-21.979 21.979 9.859 21.979 21.979z"></path>
            </g>
        </svg>
    );
}

export default ReactIcon;

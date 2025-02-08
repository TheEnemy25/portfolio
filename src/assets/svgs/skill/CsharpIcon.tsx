import React from "react";

type IconProps = {
    width?: string;
    height?: string;
    fill?: string;
    className?: string;
};

const CsharpIcon: React.FC<IconProps> = ({
    width = "40px",
    height = "40px",
    fill = "",
    className = "",
}) => {
    return (
        <svg
            width={width}
            height={height}
            fill={fill}
            className={className}
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0,0,256,256"
            fill-rule="evenodd"
        >
            <g
                fill="none"
                fill-rule="evenodd"
                stroke="none"
                stroke-width="1"
                stroke-linecap="butt"
                stroke-linejoin="miter"
                stroke-miterlimit="10"
                stroke-dasharray=""
                stroke-dashoffset="0"
                font-family="none"
                font-weight="none"
                font-size="none"
                text-anchor="none"
            >
                <g transform="scale(5.33333,5.33333)">
                    <path
                        d="M22.903,3.286c0.679,-0.381 1.515,-0.381 2.193,0c3.355,1.883 13.451,7.551 16.807,9.434c0.679,0.38 1.097,1.084 1.097,1.846c0,3.766 0,15.101 0,18.867c0,0.762 -0.418,1.466 -1.097,1.847c-3.355,1.883 -13.451,7.551 -16.807,9.434c-0.679,0.381 -1.515,0.381 -2.193,0c-3.355,-1.883 -13.451,-7.551 -16.807,-9.434c-0.678,-0.381 -1.096,-1.084 -1.096,-1.846c0,-3.766 0,-15.101 0,-18.867c0,-0.762 0.418,-1.466 1.097,-1.847c3.354,-1.883 13.452,-7.551 16.806,-9.434z"
                        fill="#68207b"
                    ></path>
                    <path
                        d="M5.304,34.404c-0.266,-0.356 -0.304,-0.694 -0.304,-1.149c0,-3.744 0,-15.014 0,-18.759c0,-0.758 0.417,-1.458 1.094,-1.836c3.343,-1.872 13.405,-7.507 16.748,-9.38c0.677,-0.379 1.594,-0.371 2.271,0.008c3.343,1.872 13.371,7.459 16.714,9.331c0.27,0.152 0.476,0.335 0.66,0.576z"
                        fill="#9a4f96"
                    ></path>
                    <path
                        d="M24,10c7.727,0 14,6.273 14,14c0,7.727 -6.273,14 -14,14c-7.727,0 -14,-6.273 -14,-14c0,-7.727 6.273,-14 14,-14zM24,17c3.863,0 7,3.136 7,7c0,3.863 -3.137,7 -7,7c-3.863,0 -7,-3.137 -7,-7c0,-3.864 3.136,-7 7,-7z"
                        fill="#ffffff"
                    ></path>
                    <path
                        d="M42.485,13.205c0.516,0.483 0.506,1.211 0.506,1.784c0,3.795 -0.032,14.589 0.009,18.384c0.004,0.396 -0.127,0.813 -0.323,1.127l-19.084,-10.5z"
                        fill="#813787"
                    ></path>
                    <path d="M34,20h1v8h-1zM37,20h1v8h-1z" fill="#ffffff"></path>
                    <path d="M32,25h8v1h-8zM32,22h8v1h-8z" fill="#ffffff"></path>
                </g>
            </g>
        </svg>
    );
};

export default CsharpIcon;

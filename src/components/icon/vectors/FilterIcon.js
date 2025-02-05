import React from "react";

function FilterIcon() {
    return (
        <svg width="70" height="70" viewBox="0 0 58 58">
            <defs>
                <filter id="Rectangle_27006" x="0" y="0" width="70" height="70" filterUnits="userSpaceOnUse">
                    <feOffset/>
                    <feGaussianBlur stdDeviation="4" result="blur" />
                    <feFlood floodOpacity="0.161" />
                    <feComposite operator="in" in2="blur" />
                    <feComposite in="SourceGraphic" />
                </filter>
            </defs>
            <g id="Component_2253_4" data-name="Component 2253 – 4" transform="translate(12 12)">
                <g transform="matrix(1, 0, 0, 1, -12, -12)" filter="url(#Rectangle_27006)">
                    <rect
                        id="Rectangle_27006-2"
                        data-name="Rectangle 27006"
                        width="34"
                        height="34"
                        rx="17"
                        transform="translate(12 12)"
                        fill="#fff"
                        opacity="0"
                    />
                </g>
                <g id="menu_open_black_24dp" transform="translate(5 5)">
                    <path id="Path_206129" data-name="Path 206129" d="M0,0H24V24H0Z" fill="none" />
                    <path
                        id="Path_206130"
                        data-name="Path 206130"
                        d="M3,18H16V16H3Zm0-5H13V11H3ZM3,6V8H16V6Zm18,9.59L17.42,12,21,8.41,19.59,7l-5,5,5,5Z"
                        fill="#1b5984"
                    />
                </g>
            </g>
        </svg>
    );
}

export default FilterIcon;

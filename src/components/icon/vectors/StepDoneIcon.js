import React from "react"

export default function StepDoneIcon({
    style
}) {
    return (
        <svg style={style} width="20" height="20" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
            <rect width="20" height="20" fill="#c3eac3"/> {/* Background rectangle */}
            <g id="Done/24px" clipPath="url(#clip0_710_10302)">
                <path id="Vector" d="M7.50016 13.5003L4.00016 10.0003L2.8335 11.167L7.50016 15.8337L17.5002 5.83366L16.3335 4.66699L7.50016 13.5003Z" fill="#00B917" />
            </g>
            <defs>
                <clipPath id="clip0_710_10302">
                    <rect width="20" height="20" fill="white" />
                </clipPath>
            </defs>
        </svg>
    )
}
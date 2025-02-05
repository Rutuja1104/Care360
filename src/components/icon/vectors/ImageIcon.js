import React from 'react'

const ImageIcon = () => {
    return (
        <svg xmlns="http://www.w3.org/2000/svg" width="198" height="198" viewBox="0 0 198 198">
            <defs>
                <filter id="Rectangle_37216" x="0" y="0" width="198" height="198" filterUnits="userSpaceOnUse">
                    <feOffset />
                    <feGaussianBlur stdDeviation="3" result="blur" />
                    <feFlood floodOpacity="0.161" />
                    <feComposite operator="in" in2="blur" />
                    <feComposite in="SourceGraphic" />
                </filter>
            </defs>
            <g id="Group_94401" data-name="Group 94401" transform="translate(-389 -273)">
                <g transform="matrix(1, 0, 0, 1, 389, 273)" filter="url(#Rectangle_37216)">
                    <rect id="Rectangle_37216-2" data-name="Rectangle 37216" width="180" height="180" rx="5" transform="translate(9 9)" fill="#fff" />
                </g>
                <g id="add_photo_alternate_black_24dp" transform="translate(458.001 342)">
                    <path id="Path_206814" data-name="Path 206814" d="M0,0H60V60H0Z" fill="none" />
                    <path id="Path_206815" data-name="Path 206815" d="M41.9,48.379H6.987V13.468H29.43V8.481H6.987A5,5,0,0,0,2,13.468V48.379a5,5,0,0,0,4.987,4.987H41.9a5,5,0,0,0,4.987-4.987V25.936H41.9Zm-19.425-7.9-4.888-5.885-6.857,8.8h27.43L29.33,31.647ZM46.885,8.481V1H41.9V8.481H34.417c.025.025,0,4.987,0,4.987H41.9v7.456c.025.025,4.987,0,4.987,0V13.468h7.481V8.481Z" transform="translate(3.089 1.545)" fill="#707070" />
                </g>
            </g>
        </svg>

    )
}

export default ImageIcon

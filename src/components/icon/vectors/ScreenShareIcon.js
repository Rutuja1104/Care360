import React from 'react'

const ScreenShareIcon = ({ style, onClickCb = () => { } }) => {
    return (
        <svg style={style} onClick={onClickCb} id="Component_2278_1" data-name="Component 2278 – 1" xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 40 40">
            <path id="Path_206754" data-name="Path 206754" d="M20,0A20,20,0,1,1,0,20,20,20,0,0,1,20,0Z" fill="#fff" />
            <g id="present_to_all_black_24dp" transform="translate(8 8)">
                <path id="Path_206763" data-name="Path 206763" d="M0,0H24V24H0Z" fill="none" />
                <path id="Path_206764" data-name="Path 206764" d="M21,3H3A1.993,1.993,0,0,0,1,5V19a1.993,1.993,0,0,0,2,2H21a1.993,1.993,0,0,0,2-2V5A1.993,1.993,0,0,0,21,3Zm0,16.02H3V4.98H21ZM10,12H8l4-4,4,4H14v4H10Z" fill="rgba(26,26,26,0.8)" />
            </g>
        </svg>
    )
}

export default ScreenShareIcon

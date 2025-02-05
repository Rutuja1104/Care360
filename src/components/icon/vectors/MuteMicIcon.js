import React from 'react'

const MuteMicIcon = ({ style, onClickCb = () => { } }) => {
    return (
        <svg onClick={onClickCb} style={style} id="Component_2275_7" data-name="Component 2275 – 7" xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 40 40">
            <path id="Path_206754" data-name="Path 206754" d="M20,0A20,20,0,1,1,0,20,20,20,0,0,1,20,0Z" fill="#fff" />
            <g id="mic_none_black_24dp_1_" data-name="mic_none_black_24dp (1)" transform="translate(8 8)">
                <path id="Path_206755" data-name="Path 206755" d="M0,0H24V24H0Z" fill="none" />
                <path id="Path_206756" data-name="Path 206756" d="M11.952,13.97a2.982,2.982,0,0,0,2.979-2.992V4.992a2.979,2.979,0,1,0-5.959,0v5.985A2.982,2.982,0,0,0,11.952,13.97Zm-.993-8.977a.993.993,0,1,1,1.986,0v5.985a.993.993,0,1,1-1.986,0Zm5.959,5.985a4.966,4.966,0,1,1-9.931,0H5a6.968,6.968,0,0,0,5.959,6.9v3.072h1.986V17.88a6.968,6.968,0,0,0,5.959-6.9Z" transform="translate(0.048 0.019)" fill="rgba(26,26,26,0.8)" />
            </g>
        </svg>
    )
}

export default MuteMicIcon

import React from 'react'

const CallRecordingIcon = ({ style, onClickCb = () => { } }) => {
    return (
        <svg style={style} onClick={onClickCb} id="Group_93443" data-name="Group 93443" xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 40 40">
            <path id="Path_206754" data-name="Path 206754" d="M20,0A20,20,0,1,1,0,20,20,20,0,0,1,20,0Z" fill="#fff" />
            <g id="radio_button_checked_black_24dp" transform="translate(8 8)">
                <path id="Path_206765" data-name="Path 206765" d="M0,0H24V24H0Z" fill="none" />
                <circle id="Ellipse_1317" data-name="Ellipse 1317" cx="8" cy="8" r="8" transform="translate(4 4)" fill="#ff3939" />
            </g>
        </svg>
    )
}

export default CallRecordingIcon

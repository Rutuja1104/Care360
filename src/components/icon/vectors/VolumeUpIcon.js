import React from 'react'

const VolumeUpIcon = ({ style, onClickCb = () => { } }) => {
    return (
        <svg style={style} onClick={onClickCb} id="volume_up_black_24dp" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
            <path id="Path_18481" data-name="Path 18481" d="M0,0H24V24H0Z" fill="none" />
            <path id="Path_18482" data-name="Path 18482" d="M3,9v6H7l5,5V4L7,9Zm7-.17v6.34L7.83,13H5V11H7.83ZM16.5,12A4.5,4.5,0,0,0,14,7.97v8.05A4.474,4.474,0,0,0,16.5,12ZM14,3.23V5.29a7,7,0,0,1,0,13.42v2.06A8.994,8.994,0,0,0,14,3.23Z" transform="translate(0 0)" fill="#fff" />
        </svg>
    )
}

export default VolumeUpIcon

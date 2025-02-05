import React from 'react'

const ExitFullScreen = ({ style, onClickCb = () => { } }) => {
    return (
        <svg style={style} onClick={onClickCb} id="fullscreen_exit_black_24dp" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
            <path id="Path_206412" data-name="Path 206412" d="M0,0H24V24H0Z" fill="none" />
            <path id="Path_206413" data-name="Path 206413" d="M5,18.322H8.633v3.633h2.422V15.9H5ZM8.633,8.633H5v2.422h6.055V5H8.633ZM15.9,21.955h2.422V18.322h3.633V15.9H15.9ZM18.322,8.633V5H15.9v6.055h6.055V8.633Z" transform="translate(-1.477 -1.477)" fill="#fff" />
        </svg>
    )
}

export default ExitFullScreen

import React from 'react'

const OffCamera = ({ style, onClickCb = () => { } }) => {
    return (
        <svg onClick={onClickCb} style={style} id="Component_2277_7" data-name="Component 2277 – 7" xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 40 40">
            <path id="Path_206754" data-name="Path 206754" d="M20,0A20,20,0,1,1,0,20,20,20,0,0,1,20,0Z" fill="#fff" />
            <g id="videocam_off_black_24dp" transform="translate(8 8)">
                <path id="Path_206761" data-name="Path 206761" d="M0,0H24V24H0Z" fill="none" />
                <path id="Path_206762" data-name="Path 206762" d="M9.433,7.9,7.467,5.93,3.386,1.86,2,3.246,4.684,5.93H3.966a.986.986,0,0,0-.983.983v9.832a.986.986,0,0,0,.983.983h11.8a1.012,1.012,0,0,0,.541-.177l3.127,3.127,1.386-1.386-8.711-8.711ZM4.95,15.762V7.9h1.7l7.866,7.866ZM14.782,7.9v2.566l5.9,5.9V6.422l-3.933,3.933V6.914a.986.986,0,0,0-.983-.983H10.249L12.215,7.9Z" transform="translate(0.132 0.123)" fill="rgba(26,26,26,0.8)" />
            </g>
        </svg>

    )
}

export default OffCamera

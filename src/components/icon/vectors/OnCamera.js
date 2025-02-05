import React from 'react'

const OnCamera = ({ style, onClickCb = () => { } }) => {
    return (
        <svg onClick={onClickCb} style={style} id="Component_2277_7" data-name="Component 2277 – 7" xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 40 40">
            <path id="Path_206754" data-name="Path 206754" d="M20,0A20,20,0,1,1,0,20,20,20,0,0,1,20,0Z" fill="#fff" />
            <g id="videocam_black_24dp_4_" data-name="videocam_black_24dp (4)" transform="translate(8 8)">
                <path id="Path_206759" data-name="Path 206759" d="M0,0H24V24H0Z" fill="none" />
                <path id="Path_206760" data-name="Path 206760" d="M14.988,8.006v8.025H5V8.006h9.99m1-2.006H4A1,1,0,0,0,3,7V17.034a1,1,0,0,0,1,1H15.987a1,1,0,0,0,1-1V13.523l4,4.012V6.5l-4,4.012V7A1,1,0,0,0,15.987,6Z" transform="translate(0.009 -0.019)" fill="rgba(26,26,26,0.8)" />
            </g>
        </svg>
    )
}

export default OnCamera

import React from 'react'

const UnMuteMicIcon = ({ style, onClickCb = () => { } }) => {
    return (
        <svg onClick={onClickCb} style={style} id="Component_2275_7" data-name="Component 2275 – 7" xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 40 40">
            <path id="Path_206754" data-name="Path 206754" d="M20,0A20,20,0,1,1,0,20,20,20,0,0,1,20,0Z" fill="#fff" />
            <g id="mic_off_black_24dp" transform="translate(8 8)">
                <path id="Path_206757" data-name="Path 206757" d="M0,0H24V24H0Z" fill="none" />
                <path id="Path_206758" data-name="Path 206758" d="M10.7,4.871a1.185,1.185,0,1,1,2.371,0l-.01,3.871,1.788,1.772V4.97a2.953,2.953,0,0,0-5.887-.347L10.7,6.366Zm8.1,6.039H17.126a5.132,5.132,0,0,1-.267,1.624l1.255,1.257A6.452,6.452,0,0,0,18.8,10.911ZM4.393,2.851,3,4.247l5.927,5.94v.723a2.963,2.963,0,0,0,2.963,2.97,2.715,2.715,0,0,0,.642-.079l1.64,1.644a5.421,5.421,0,0,1-2.282.515,5.131,5.131,0,0,1-5.235-5.049H4.976A6.909,6.909,0,0,0,10.9,17.564v3.247h1.976V17.564a7.032,7.032,0,0,0,2.519-.891l4.149,4.158,1.393-1.4Z" transform="translate(0.114 0.076)" fill="rgba(26,26,26,0.8)" />
            </g>
        </svg>
    )
}

export default UnMuteMicIcon

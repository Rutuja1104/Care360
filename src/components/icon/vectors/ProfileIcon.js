import React from 'react'

const ProfileIcon = ({ style, onClickCb }) => {
    return (
        <svg style={style} onClick={onClickCb} xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
            <g id="Group_88428" data-name="Group 88428" transform="translate(-16640 7035)">
                <rect id="Rectangle_36167" data-name="Rectangle 36167" width="24" height="24" transform="translate(16640 -7035)" fill="rgba(255,255,255,0.5)" opacity="0" />
                <path id="user" d="M15.321,2.629A8.975,8.975,0,0,0,2.629,15.321,8.975,8.975,0,0,0,15.321,2.629ZM3.9,15.05a5.135,5.135,0,0,1,5.08-4.519,5.115,5.115,0,0,1,5.08,4.518,7.906,7.906,0,0,1-10.159,0Zm5.08-5.6A2.726,2.726,0,1,1,11.7,6.722,2.729,2.729,0,0,1,8.975,9.448Zm5.985,4.713a6.182,6.182,0,0,0-3.87-4.31,3.778,3.778,0,1,0-4.228,0A6.177,6.177,0,0,0,2.989,14.16a7.923,7.923,0,1,1,11.97,0Zm0,0" transform="translate(16643 -7032)" fill="rgba(26,26,26,0.5)" />
            </g>
        </svg>
    )
}

export default ProfileIcon

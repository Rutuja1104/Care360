import React from 'react'

const LeaveMeetingIcon = ({ style, onClickCb = () => { } }) => {
    return (
        <svg style={style} onClick={onClickCb} id="Group_93444" data-name="Group 93444" xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 40 40">
            <path id="Path_206754" data-name="Path 206754" d="M20,0A20,20,0,1,1,0,20,20,20,0,0,1,20,0Z" fill="#ff3939" />
            <g id="call_black_24dp_6_" data-name="call_black_24dp (6)" transform="translate(36.971 20) rotate(135)">
                <path id="Path_206766" data-name="Path 206766" d="M0,0H24V24H0Z" fill="none" />
                <path id="Path_206767" data-name="Path 206767" d="M3.54,2a12.312,12.312,0,0,0,.45,2.59l-1.2,1.2A14.826,14.826,0,0,1,2.03,2H3.54M13.4,14.02a12.753,12.753,0,0,0,2.6.45v1.49a15.426,15.426,0,0,1-3.8-.75l1.2-1.19M4.5,0H1A1,1,0,0,0,0,1,17,17,0,0,0,17,18a1,1,0,0,0,1-1V13.51a1,1,0,0,0-1-1,11.407,11.407,0,0,1-3.57-.57.839.839,0,0,0-.31-.05,1.024,1.024,0,0,0-.71.29l-2.2,2.2A15.149,15.149,0,0,1,3.62,7.79l2.2-2.2a1,1,0,0,0,.25-1.02A11.36,11.36,0,0,1,5.5,1,1,1,0,0,0,4.5,0Z" transform="translate(3 3)" fill="#fff" />
            </g>
        </svg>
    )
}

export default LeaveMeetingIcon

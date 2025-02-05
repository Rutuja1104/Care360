import React from 'react'

const TriggerPatientIcon = ({ style, onClickCb = () => { } }) => {
    return (
        <svg onClick={onClickCb} style={style} id="Component_2334_3" data-name="Component 2334 – 3" xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 40 40">
            <g id="Group_94587" data-name="Group 94587" transform="translate(-11583 14027)">
                <path id="Path_206754" data-name="Path 206754" d="M20,0A20,20,0,1,1,0,20,20,20,0,0,1,20,0Z" transform="translate(11583 -14027)" fill="#fff" />
                <g id="Group_94586" data-name="Group 94586" transform="translate(11551 -14019)">
                    <path id="Path_204226" data-name="Path 204226" d="M0,0H24V24H0Z" transform="translate(40)" fill="none" />
                    <path id="Path_204227" data-name="Path 204227" d="M12,22a2.006,2.006,0,0,0,2-2H10A2.006,2.006,0,0,0,12,22Zm6-6V11c0-3.07-1.63-5.64-4.5-6.32V4a1.5,1.5,0,0,0-3,0v.68C7.64,5.36,6,7.92,6,11v5L4,18v1H20V18Zm-2,1H8V11c0-2.48,1.51-4.5,4-4.5s4,2.02,4,4.5Z" transform="translate(40)" fill="rgba(26,26,26,0.8)" />
                </g>
            </g>
        </svg>

    )
}

export default TriggerPatientIcon

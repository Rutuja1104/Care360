import React from "react";

function CallIcon({ style, onClickCb }) {
    return (
        <svg style={style} onClick={onClickCb} id="call_black_24dp_3_" data-name="call_black_24dp (3)" xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24">
            <path id="Path_186587" data-name="Path 186587" d="M0,0H24V24H0Z" fill="none" />
            <path
                id="Path_186588"
                data-name="Path 186588"
                d="M6.54,5a12.312,12.312,0,0,0,.45,2.59l-1.2,1.2A14.826,14.826,0,0,1,5.03,5H6.54M16.4,17.02a12.753,12.753,0,0,0,2.6.45v1.49a15.426,15.426,0,0,1-3.8-.75l1.2-1.19M7.5,3H4A1,1,0,0,0,3,4,17,17,0,0,0,20,21a1,1,0,0,0,1-1V16.51a1,1,0,0,0-1-1,11.407,11.407,0,0,1-3.57-.57.839.839,0,0,0-.31-.05,1.024,1.024,0,0,0-.71.29l-2.2,2.2a15.149,15.149,0,0,1-6.59-6.59l2.2-2.2a1,1,0,0,0,.25-1.02A11.36,11.36,0,0,1,8.5,4,1,1,0,0,0,7.5,3Z"
                fill="#1b5984"
            />
        </svg>
    );
}

export default CallIcon;

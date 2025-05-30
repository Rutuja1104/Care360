import React from "react";

function LocationIcon({ style, onClickCb }) {
    return (
        <svg style={style} onClick={onClickCb} id="place_black_24dp_1_" data-name="place_black_24dp (1)" xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24">
            <path id="Path_186597" data-name="Path 186597" d="M0,0H24V24H0Z" fill="none" />
            <path
                id="Path_186598"
                data-name="Path 186598"
                d="M12,12a2,2,0,1,1,2-2A2.006,2.006,0,0,1,12,12Zm6-1.8a6,6,0,1,0-12,0c0,2.34,1.95,5.44,6,9.14C16.05,15.64,18,12.54,18,10.2ZM12,2a7.955,7.955,0,0,1,8,8.2q0,4.98-8,11.8Q4.005,15.175,4,10.2A7.955,7.955,0,0,1,12,2Z"
                fill="#1b5984"
            />
        </svg>
    );
}

export default LocationIcon;

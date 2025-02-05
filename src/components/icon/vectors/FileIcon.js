import React from "react";

function FileIcon({ style,fill='#1b5984' }) {
    return (
        <svg style={style} id="list_alt_black_24dp" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
            <path id="Path_186917" data-name="Path 186917" d="M0,0H24V24H0Z" fill="none" />
            <path
                id="Path_186918"
                data-name="Path 186918"
                d="M11,7h6V9H11Zm0,4h6v2H11Zm0,4h6v2H11ZM7,7H9V9H7Zm0,4H9v2H7Zm0,4H9v2H7ZM20.1,3H3.9a.9.9,0,0,0-.9.9V20.1a.967.967,0,0,0,.9.9H20.1a1.061,1.061,0,0,0,.9-.9V3.9A.967.967,0,0,0,20.1,3ZM19,19H5V5H19Z"
                fill={fill}
            />
        </svg>
    );
}

export default FileIcon;

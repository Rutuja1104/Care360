import React from "react";

function FaxIcon({ style, onClickCb }) {
    return (
        <svg style={style} onClick={onClickCb} id="fax_black_24dp" xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24">
            <g id="Group_91744" data-name="Group 91744">
                <rect id="Rectangle_36751" data-name="Rectangle 36751" width="24" height="24" fill="none" />
            </g>
            <g id="Group_91748" data-name="Group 91748" transform="translate(2 4)">
                <g id="Group_91747" data-name="Group 91747">
                    <path
                        id="Path_206093"
                        data-name="Path 206093"
                        d="M19,9H18V4H8V9H7.22A2.989,2.989,0,0,0,2,11v7a2.989,2.989,0,0,0,5.22,2H22V12A3,3,0,0,0,19,9ZM6,18a1,1,0,0,1-2,0V11a1,1,0,0,1,2,0ZM10,6h6V9H10ZM20,18H8V11H19a1,1,0,0,1,1,1Z"
                        transform="translate(-2 -4)"
                        fill="#1b5984"
                    />
                    <g id="Group_91746" data-name="Group 91746" transform="translate(7.333 8)">
                        <circle id="Ellipse_1305" data-name="Ellipse 1305" cx="1" cy="1" r="1" transform="translate(4.667)" fill="#1b5984" />
                        <circle id="Ellipse_1306" data-name="Ellipse 1306" cx="1" cy="1" r="1" transform="translate(7.667)" fill="#1b5984" />
                        <circle id="Ellipse_1307" data-name="Ellipse 1307" cx="1" cy="1" r="1" transform="translate(4.667 3)" fill="#1b5984" />
                        <circle id="Ellipse_1308" data-name="Ellipse 1308" cx="1" cy="1" r="1" transform="translate(7.667 3)" fill="#1b5984" />
                        <g id="Group_91745" data-name="Group 91745">
                            <rect id="Rectangle_36752" data-name="Rectangle 36752" width="4" height="5" transform="translate(-0.333)" fill="#1b5984" />
                        </g>
                    </g>
                </g>
            </g>
        </svg>
    );
}

export default FaxIcon;

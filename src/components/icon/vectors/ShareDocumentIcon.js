import React from 'react'

const ShareDocumentIcon = ({ style, onClickCb = () => { } }) => {
    return (
        <svg style={style} onClick={onClickCb} xmlns="http://www.w3.org/2000/svg" width="48.083" height="48.083" viewBox="0 0 48.083 48.083">
            <g id="Group_93486" data-name="Group 93486" transform="translate(-1330 -1000)">
                <g id="Ellipse_1320" data-name="Ellipse 1320" transform="translate(1330 1000)" fill="rgba(26,26,26,0.02)" stroke="rgba(26,26,26,0.05)" strokeWidth="1">
                    <circle cx="24" cy="24" r="24" stroke="none" />
                    <circle cx="24" cy="24" r="23.5" fill="none" />
                </g>
                <g id="Group_93485" data-name="Group 93485" transform="translate(-394.634 1441.941) rotate(-45)">
                    <rect id="Rectangle_37080" data-name="Rectangle 37080" width="34" height="34" rx="5" transform="translate(1515 924)" fill="rgba(26,26,26,0.8)" opacity="0" />
                    <path id="Path_206773" data-name="Path 206773" d="M23.715,18.914H8.687a5.227,5.227,0,1,1,0-10.454H25.022a3.267,3.267,0,1,1,0,6.534H11.3a1.307,1.307,0,1,1,0-2.614H23.715V10.42H11.3a3.267,3.267,0,1,0,0,6.534H25.022a5.227,5.227,0,1,0,0-10.454H8.687a7.187,7.187,0,0,0,0,14.374H23.715Z" transform="translate(1516.327 927.473)" fill="rgba(26,26,26,0.8)" />
                </g>
            </g>
        </svg>
    )
}

export default ShareDocumentIcon

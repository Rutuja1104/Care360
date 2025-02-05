import React from 'react'

const SendEmojiIcon = ({ style, onClickCb = () => { } }) => {
    return (
        <svg style={style} onClick={onClickCb} id="emoji_emotions_black_24dp" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
            <g id="Group_93488" data-name="Group 93488">
                <rect id="Rectangle_37082" data-name="Rectangle 37082" width="24" height="24" fill="none" />
            </g>
            <g id="Group_93490" data-name="Group 93490">
                <g id="Group_93489" data-name="Group 93489">
                    <circle id="Ellipse_1321" data-name="Ellipse 1321" cx="1.5" cy="1.5" r="1.5" transform="translate(14 8)" fill="rgba(26,26,26,0.8)" />
                    <circle id="Ellipse_1322" data-name="Ellipse 1322" cx="1.5" cy="1.5" r="1.5" transform="translate(7 8)" fill="rgba(26,26,26,0.8)" />
                    <path id="Path_206774" data-name="Path 206774" d="M12,18a5.458,5.458,0,0,0,5-4H7A5.458,5.458,0,0,0,12,18Z" fill="rgba(26,26,26,0.8)" />
                    <path id="Path_206775" data-name="Path 206775" d="M11.99,2A10,10,0,1,0,22,12,10,10,0,0,0,11.99,2ZM12,20a8,8,0,1,1,8-8A8,8,0,0,1,12,20Z" fill="rgba(26,26,26,0.8)" />
                </g>
            </g>
        </svg>
    )
}

export default SendEmojiIcon

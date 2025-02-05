import React from 'react'

const UploadIcon = ({ style, onClickCb }) => {
    return (
        <svg style={style} onClick={onClickCb} id="file_upload_black_24dp" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
            <g id="Group_91315" data-name="Group 91315" transform="translate(4.506 4.506)">
                <rect id="Rectangle_36651" data-name="Rectangle 36651" width="14.989" height="14.989" fill="none" />
            </g>
            <g id="Group_91316" data-name="Group 91316">
                <path id="Path_206009" data-name="Path 206009" d="M25,20.5V25H7V20.5H4V25a3.009,3.009,0,0,0,3,3H25a3.009,3.009,0,0,0,3-3V20.5Zm-16.5-9,2.115,2.115L14.5,9.745V22h3V9.745l3.885,3.87L23.5,11.5,16,4Z" transform="translate(-4 -4)" fill="rgba(26,26,26,0.3)" />
            </g>
        </svg>

    )
}

export default UploadIcon


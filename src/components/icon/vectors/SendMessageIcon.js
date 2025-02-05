import React from 'react'

const SendMessageIcon = ({ style, onClickCb = () => { } }) => {
    return (
        <svg style={style} onClick={onClickCb} xmlns="http://www.w3.org/2000/svg" width="48" height="48" viewBox="0 0 48 48">
            <g id="Group_93491" data-name="Group 93491" transform="translate(-1330.083 -1000)">
                <g id="Ellipse_1320" data-name="Ellipse 1320" transform="translate(1330.083 1000)" fill="#1b5984" stroke="#16486a" strokeWidth="1">
                    <circle cx="24" cy="24" r="24" stroke="none" />
                    <circle cx="24" cy="24" r="23.5" fill="none" />
                </g>
                <g id="noun-send-1076084" transform="translate(1351.081 1007.213) rotate(45)">
                    <path id="Path_18375" data-name="Path 18375" d="M.61,10.581l9.049,3.5,3.5,9.049a.907.907,0,0,0,.9.61.967.967,0,0,0,.9-.61L23.68,1.308A.941.941,0,0,0,23.455.281,1,1,0,0,0,22.428.057L.609,8.784a.967.967,0,0,0-.609.9.95.95,0,0,0,.61.9ZM21.049,2.688,14.086,20.143l-2.439-6.321,3.53-3.53A.953.953,0,0,0,13.83,8.945l-3.4,3.337L3.594,9.651Z" fill="#fff" />
                </g>
            </g>
        </svg>
    )
}

export default SendMessageIcon

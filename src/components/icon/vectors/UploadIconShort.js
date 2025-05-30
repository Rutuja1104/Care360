import React from "react"

export default function UploadIconShort({
    style,
    fill = "#215DAA",
    onClickCb = () => { },
    color
}) {

    return <svg style={style} xmlns="http://www.w3.org/2000/svg" height="24" viewBox="0 -960 960 960" width="24"><path d="M160-80v-80h640v80H160Zm200-160v-280H200l280-360 280 360H600v280H360Zm80-80h80v-280h76L480-750 364-600h76v280Zm40-280Z" fill={color} /></svg>

}

import React from "react";

const PlusIcon = ({ style, onClickCb }) => {
    return (
        <svg style={style} onClick={onClickCb} xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
            <path id="Path_204259" data-name="Path 204259" d="M0,0H24V24H0Z" fill="none" />
            <path id="Path_204260" data-name="Path 204260" d="M19,13H13v6H11V13H5V11h6V5h2v6h6Z" fill={style?.fill} />{" "}
        </svg>
    );
};

export default PlusIcon;

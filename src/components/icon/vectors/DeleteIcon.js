import React from "react";

const DeleteIcon = ({ style = {}, onClickCb, fill = "rgba(255,57,57,0.8)" }) => {
    return (
        <svg
            id="delete_black_24dp_3_"
            style={style}
            onClick={onClickCb}
            data-name="delete_black_24dp (3)"
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            className="cursor-pointer"
        >
            <path id="Path_205553" data-name="Path 205553" d="M0,0H24V24H0Z" fill="none" />
            <path
                id="Path_205554"
                data-name="Path 205554"
                d="M16,9V19H8V9h8M14.5,3h-5l-1,1H5V6H19V4H15.5ZM18,7H6V19a2.006,2.006,0,0,0,2,2h8a2.006,2.006,0,0,0,2-2Z"
                fill={fill}
            />
        </svg>
    );
};

export default DeleteIcon;

import React from 'react';
import Icons from '../icon/Icons';
import { BUTTON_TYPE } from '../../libs/constatnt';

const Button = ({
    id = "",
    children,
    type = 'text',
    variant = BUTTON_TYPE.PRIMARY,
    className = '',
    onClickCb = () => { },
    disabled = false,
    prefixProps = {},
    suffixProps = {},
    iconColor = '#fff',
    styles = {}
}) => {
    return (
        <button
            id={id}
            onClick={onClickCb}
            disabled={disabled}
            type={type}
            style={styles}
            className={`btn ${className} ${getButtonStyles(variant)} ${(prefixProps?.icon || suffixProps?.icon) && ' button-with-icon'}`}
        >
            {prefixProps?.icon && <Icons familyName="vec" iconName={prefixProps?.icon} color={iconColor} />} {children} {suffixProps?.icon && <Icons familyName="vec" iconName={suffixProps?.icon} rotateDeg={suffixProps?.rotateDeg} />}
        </button>
    );
};

export default Button;

const getButtonStyles = (type) => {
    console.log('type',type)
    /* eslint-disable */
    switch (type) {
        case BUTTON_TYPE.PRIMARY:
            return 'primary-btn';
        case BUTTON_TYPE.PRIMARY_LIGHT_WITH_BORDER:
            return 'primary-light-with-border-btn';
        case BUTTON_TYPE.LIGHT_WITH_NO_BORDER:
            return 'light-with-no-border';
        case BUTTON_TYPE.DANGER:
            return 'primary';
        case BUTTON_TYPE.BUTTON_WITH_LIGHT_COLOR:
            return 'button-with-light-color';
        case BUTTON_TYPE.BUTTON_WITH_LIGHT_COLOR_NO_ICON:
            return 'button-with-light-color-no-icon'
        case BUTTON_TYPE.BUTTON_WITH_GRAY_COLOR:
            return 'button-with-gray-color';
        case BUTTON_TYPE.BUTTON_WITH_LIGHT_COLOR_BG:
            return 'button-with-light-color-bg';
        case BUTTON_TYPE.BUTTON_WITH_RED_COLOR_BG:
            return 'button-with-red-color-bg';
        case BUTTON_TYPE.BUTTON_WITH_LIGHT_COLOR_TOOGLE:
            return 'primary-light-with-border-btn-toogle'
        case BUTTON_TYPE.BUTTON_WITHOUT_BORDER:
            return 'light-without-border-btn'
        case BUTTON_TYPE.BUTTON_WITH_BOX_SHADOW:
            return 'button-with-box-shadow'
        case BUTTON_TYPE.BUTTON_WITHOUT_BG_COLOR_TOGGLE:
             return 'button-without-bg-color-toggle'
        case BUTTON_TYPE.BUTTON_WITHOUT_ANY_COLOR_TOGGLE:
             return 'button-without-any-color-toggle'   
        default:
            return 'primary-btn';
    }
    /* eslint-enable */
};

import React from 'react';
import styles from './TextArea.styles';

export default function TextArea({ value, label, onChangeCb = () => { }, onBlurCb, placeholder, rows = 4, cols, disabled, customStyles = {}, name = "", readOnly = false, rules, className = "",required=false }) {
    return <>
        <div style={styles.container}>
            {label && <label style={styles.label}>{label} <span style={styles?.errorStar}>{rules?.required && ' *'}</span></label>}
            <textarea
                readOnly={readOnly}
                className={`${className}  ${required? 'input-box-error-styles' : ''} `}
                value={value}
                onChange={(event) => onChangeCb(event, rules)}
                placeholder={placeholder}
                rows={rows}
                cols={cols}
                disabled={disabled}
                style={{ ...styles.textAreaStyle, ...customStyles }}
                onBlur={onBlurCb}
                name={name}
                required={required}
            />
        </div>
    </>
}
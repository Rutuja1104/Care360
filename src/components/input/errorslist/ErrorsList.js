import React from 'react';
import styles from './ErrorsList.styles';

const ErrorsList = ({ errors = {}, customStyle }) => {

    const lastErrorMessage = Object.values(errors).pop();

    return (
        <>
            {lastErrorMessage && (
                <ul style={{ ...styles.errorsList, ...customStyle }}>
                    <li>{lastErrorMessage}</li>
                </ul>
            )}
        </>
    );
};

export default ErrorsList;
import React from 'react';
import '../index.css';
import styles from './UiButton.module.css';
import cn from 'classnames';
import PropTypes from 'prop-types';

const UiButton = ({text, onClick, disabled, theme = 'dark', classes}) => {
    return (
        <button
            onClick={onClick}
            disabled={disabled}
            className={cn(styles.button, styles[theme], classes)}>
            {text}
        </button>
    );
};

export default UiButton;

UiButton.propTypes = {
    text: PropTypes.string,
    onClick: PropTypes.func,
    disabled: PropTypes.bool,
    theme: PropTypes.string,
    classes: PropTypes.string,
};
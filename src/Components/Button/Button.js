import React from 'react';
import './Button.css';

const STYLES = [
    'btn--primary',
    'btn--outline'
]

const SIZES = [
    'btn--medium',
    'btn--large'
]

export const Button = ({
    children,
    type,
    onClick,
    buttonStyle,
    buttonSize
}) =>{

    const checkButtonStyle = STYLES.includes(buttonStyle) ? buttonStyle : STYLES[0]
    const checkButtonStyle = SIZES.includes(buttonStyle) ? buttonStyle : SIZES[0]

    return (
        <button className={`btn ${checkButtonStyle} ${checkButtonSize}`}
        onClick={onClick} type={type}>
            {children}
        </button>
    )
}
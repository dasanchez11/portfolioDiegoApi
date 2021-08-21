import React from 'react';
import './button.styles.scss';


const Button = ({onClick}) => {

    const handleClick = () => {
        onClick()
    }
    return (
    <button className="button" onClick={handleClick}>
        Get Results!
    </button>
    )
}

export default Button;
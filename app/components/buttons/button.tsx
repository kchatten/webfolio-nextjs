'use client'

import React, { forwardRef } from 'react';
/*
###############################################################################################
##    This component is a clickable button element with its default behaviour prevented      ##
###############################################################################################
*/

import styles from './button.module.css';

export interface ButtonProps {
    className?: string; // Allows a button to be styled through {styles.button} for example.
    textContent?: string; // Allows a button to contain a string for display purposes.
    handleClick?: (event: React.MouseEvent<HTMLButtonElement> | React.KeyboardEvent<HTMLButtonElement>) => void; // Allows a handleClick function to be passed into the button.
}

const Button = forwardRef<HTMLButtonElement, ButtonProps>(({ className, textContent, handleClick }, ref) => {

    function handleDefaultButtonBehaviour(event: React.MouseEvent<HTMLButtonElement> | React.KeyboardEvent<HTMLButtonElement>) {

        event.preventDefault();

        if (process.env.NODE_ENV === 'development') {
            console.log(`You just clicked a base button element! You probably shouldn't be seeing this.`)
        }
    }

    return (

        <button
            ref={ref}
            className={className ? className : `${styles.button}`}
            onClick={handleClick ? handleClick : handleDefaultButtonBehaviour}
        >
            {textContent ? textContent : 'Click me!'}
        </button>

    )
})

Button.displayName = 'Button';

export default Button;
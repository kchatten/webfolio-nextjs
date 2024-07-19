'use client'

import { useEffect, useRef } from 'react';
import Button, { ButtonProps } from './button';

interface FocusButton extends ButtonProps {
    focus: string;
}

const FocusButton: React.FC<FocusButton> = ({ focus, ...buttonProps }) => {
    const selfRef = useRef<HTMLButtonElement>(null);
    const focusRef = useRef<HTMLElement | null>(null);

    useEffect(() => {
        const elementToFocus = document.getElementById(focus);
        if (elementToFocus !== null) {
            focusRef.current = elementToFocus as HTMLElement;
        } else {
            console.warn(`No element found with the id "${focus}"`);
        }
        //eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    const handleClick = (event: React.MouseEvent<HTMLButtonElement> | React.KeyboardEvent<HTMLButtonElement>) => {
        event.preventDefault();

        if (process.env.NODE_ENV === 'development') {
            console.log(`You just clicked a Focus button element! You probably shouldn't be seeing this.`);
        }

        if (focusRef.current) {
            focusRef.current.scrollIntoView({ block: 'end', behavior:'instant' });
            focusRef.current.focus();
        }
    }


    return (
        <Button
            ref={selfRef}
            {...buttonProps}
            handleClick={handleClick}
        />
    );
};

export default FocusButton;
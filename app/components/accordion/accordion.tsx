'use client'

import Button from '../buttons/button';
import { useRef } from 'react';

import styles from './accordion.module.css';

export interface AccordionProps {
    title: string,
    className?: string;
    trayStyle?: string;
}

const Accordion: React.FC<AccordionProps> = ({ title, className, trayStyle, }) => {

    const titleRef = useRef<HTMLButtonElement>(null);
    const trayRef = useRef<HTMLSpanElement>(null);

    const handleClick = () => {

        if (titleRef.current) {
            titleRef.current.classList.toggle(styles.active);

            const sidebar = titleRef.current.closest("aside");

            if (sidebar) {

                const headers = sidebar.querySelectorAll('button');

                if (headers) {
                    headers.forEach((header) => {
                        if (header !== titleRef.current) {
                            header.classList.remove(styles.active);
                        }
                    })
                }
            }

            const trays = sidebar?.querySelectorAll('span');

            if (trays) {
                trays.forEach((tray) => {
                    if (tray !== trayRef.current) {
                        tray.classList.remove(styles.extended);
                    }
                })
            }

            if (trayRef.current) {
                trayRef.current.classList.toggle(styles.extended);
            }

        }
    }

    return (
        <span
            className={className ? className : styles.accordion}
        >
            <Button
                ref={titleRef}
                className={className ? className : styles.header}
                textContent={title}
                handleClick={handleClick}
            />

            <span
                ref={trayRef}
                className={trayStyle ? trayStyle : styles.tray}>
            </span>
        </span>
    )
}

export default Accordion;
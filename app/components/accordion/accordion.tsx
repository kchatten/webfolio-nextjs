'use client'

import Button from '../buttons/button';
import { useEffect, useRef } from 'react';

import styles from './accordion.module.css';
import { usePathname } from 'next/navigation';

export interface AccordionProps {
    title: string,
    titleShorthand?: string;
    className?: string;
    trayStyle?: string;
    children?: React.ReactNode[] | React.ReactNode;
}

const Accordion: React.FC<AccordionProps> = ({ title, titleShorthand, className, trayStyle, children }) => {

    const titleRef = useRef<HTMLButtonElement>(null);
    const trayRef = useRef<HTMLSpanElement>(null);
    const pathname = usePathname();

    useEffect(() => {
        if (titleShorthand) {
            if (pathname.includes(titleShorthand)) {
                if (titleRef.current) {
                    titleRef.current.setAttribute("class", `${styles.active} ${styles.header}`)
                    if (trayRef.current) {
                        trayRef.current.classList.add(styles.extended);
                    }
                }
            }
        }
        //eslint-disable-next-line react-hooks/exhaustive-deps
    }, []) // Set styling on mount based on the current active path.

    const handleClick = () => { // Handle styling independentatly of state for efficiency.

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
                {children}
            </span>
        </span>
    )
}

export default Accordion;
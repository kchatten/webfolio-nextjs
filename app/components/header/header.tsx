'use client';

import { useEffect, useRef } from 'react';


import styles from './header.module.css';

import HeaderButton from '../buttons/routerbutton';


// #region HELPER FUNCTIONS RELATED TO BANNER TEXT 
export const generateRandomChar = (variants: Array<string>) => {
    return variants[Math.floor(Math.random() * variants.length)]; // Take in a variant array and return a random character from it.
};

export const generateSiteName = () => {
    const k = ['K', 'k', '|<', '₭'];
    const c = ['C', 'c', '₾', '⊆'];
    const h = ['H', 'h', '#'];
    const a = ['A', 'a', '4', '∆'];
    const t = ['T', 't', '+', '7', '⊤', '⊺', '⋋'];
    const dot = ['.'];
    const d = ['D', 'd', 'Ⅾ', 'ⅾ', 'ↁ'];
    const e = ['E', 'e', '∃', '∈', '∑', '⋲'];
    const v = ['V', 'v', '\\/', '√'];


    const variantsArray = [k, c, h, a, t, dot, d, e, v]; // Define an array, of arrays.
    return variantsArray.map(generateRandomChar).join(''); // For each variant in the array, run generateRandomChar, joining all results.
};
// #endregion END OF HELPER FUNCTIONS 

const Header = () => {

    const bannerTextRef = useRef<HTMLSpanElement>(null);

    const buttons = {
        home: {
            textContent: 'Home',
            href: '/'
        },
        blog: {
            textContent: 'Blog',
            href: '/blog'
        },
        projects: {
            textContent: 'Projects',
            href: '/projects'
        },
        contact: {
            textContent: 'Contact',
            href: '/contact'
        }
    }

    useEffect(() => {

        const updateBannerText = () => {
            if (bannerTextRef.current) {
                bannerTextRef.current.textContent = generateSiteName();
            }
        };

        const intervalId = setInterval(updateBannerText, 150);

        // Cleanup on component unmount
        return () => {
            clearInterval(intervalId);
        }

    }, []);

    const renderHeaderButtons = () => {

        const buttonsArray = Object.values(buttons);

        return (
            <div className={styles.buttonContainer}>
                {buttonsArray.map((button, index) => {
                    return (
                        <HeaderButton
                            key={index}
                            textContent={button.textContent}
                            href={button.href}
                        />
                    );
                })}
            </div>
        );
    };

    return (
            <header className={styles.header}>
                <span aria-label="kchat.dev" ref={bannerTextRef} />
                {renderHeaderButtons()}
            </header>
    )
}

export default Header;
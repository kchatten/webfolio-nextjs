'use client';

import { useEffect, useRef } from 'react';

import styles from './header.module.css';

import RouterButton from '../buttons/routerbutton';
import Button from '../buttons/button';


// #region HELPER FUNCTIONS RELATED TO BANNER TEXT 
const generateRandomChar = (variants: Array<string>) => {
    return variants[Math.floor(Math.random() * variants.length)]; // Take in a variant array and return a random character from it.
};

const generateSiteName = () => {
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

    const bannerTextRef = useRef<HTMLButtonElement>(null);

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

    const renderHeaderButtons = () => {

        const buttonsArray = Object.values(buttons);

        return (
            <div className={styles.buttonContainer}>
                {buttonsArray.map((button, index) => {
                    return (
                        <RouterButton
                            key={index}
                            textContent={button.textContent}
                            href={button.href}
                        />
                    );
                })}
            </div>
        );
    };

    const handleClick = ((event: React.MouseEvent<HTMLButtonElement> | React.KeyboardEvent<HTMLButtonElement>) => {
        event.preventDefault();

        if (bannerTextRef.current) {
            let body = bannerTextRef.current.closest("body") // Closest can only traverse in one direction to the root
            let section = body?.querySelector("section")
            let sidebar = section?.querySelector("aside")

            if (sidebar) {
                let state = sidebar.style.display;
                if (state != "none") {
                    sidebar.style.display = "none";
                } else {
                    sidebar.style.display = "flex";
                }
            }
        }
    });

    return (
        <header className={styles.header}>
            <Button aria-label="kchat.dev" className={styles.bannerText} ref={bannerTextRef} textContent='kchat.dev' handleClick={handleClick} />
            {renderHeaderButtons()}
        </header>
    )
}

export default Header;
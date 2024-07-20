'use client';

import { usePathname } from 'next/navigation';
import { useEffect } from 'react';
import Accordion from '../accordion/accordion';
import RouterButton from '../buttons/routerbutton';
import styles from './sidebar.module.css';

const Sidebar = () => {

    const activePath = usePathname();

    useEffect(() => {
        window.addEventListener('popstate', () => {window.location.reload();});
    }, []);

    return (
        <aside
            aria-label='Sidebar'
            aria-roledescription='Sidebar'
            className={`${styles.sidebar}`}
        >
            <Accordion title="Personal" titleShorthand="/personal" >
                <RouterButton className={activePath.includes("personal/crafts") ? `${styles.active} ${styles.link}` : styles.link} href="/blog/personal/crafts" textContent="Crafts" />
                <RouterButton className={activePath.includes("personal/cooking") ? `${styles.active} ${styles.link}` : styles.link} href="/blog/personal/cooking" textContent="Cooking" />
            </Accordion>
            <Accordion title="Web Development" titleShorthand="/webdev">
                <RouterButton className={activePath.includes("webdev/thebasics") ? `${styles.active} ${styles.link}` : styles.link} href="/blog/webdev/thebasics" textContent="The Basics" />
            </Accordion>
            <Accordion title="Information Technology" titleShorthand="/infotech">
                <RouterButton className={activePath.includes("infotech/thebasics") ? `${styles.active} ${styles.link}` : styles.link} href="/blog/infotech/thebasics" textContent="The Basics" />
                <RouterButton id="infotech-networking" className={activePath.includes("infotech/networking") ? `${styles.active} ${styles.link}` : styles.link} href="/blog/infotech/networking" textContent="Networking " />
            </Accordion>
        </aside>
    )
}

export default Sidebar;
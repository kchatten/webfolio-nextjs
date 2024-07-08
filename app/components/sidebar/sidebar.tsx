'use client';

import { usePathname } from 'next/navigation'
import Accordion from '../accordion/accordion';
import RouterButton from '../buttons/routerbutton';
import styles from './sidebar.module.css';

const Sidebar = () => {

    const activePath = usePathname();

    return (
        <aside
            className={styles.sidebar}
        >
            <Accordion title="Personal" >
                <RouterButton className={activePath.includes("crafts") ? `${styles.active} ${styles.link}` : styles.link} href="/blog/personal/crafts" textContent="Crafts" />
                <RouterButton className={activePath.includes("cooking") ? `${styles.active} ${styles.link}` : styles.link} href="/blog/personal/cooking" textContent="Cooking" />
            </Accordion>
            <Accordion title="Web Development" >
                <RouterButton className={activePath.includes("thebasics") ? `${styles.active} ${styles.link}` : styles.link} href="/blog/webdev/thebasics" textContent="The Basics" />
            </Accordion>
        </aside>
    )
}

export default Sidebar;
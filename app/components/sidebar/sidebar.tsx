'use client';

import Accordion from '../accordion/accordion';
import RouterButton from '../buttons/routerbutton';
import styles from './sidebar.module.css';

const Sidebar = () => {

    return (
        <aside
            className={styles.sidebar}
        >
            <Accordion title="Personal" >
                <RouterButton className={styles.link} href="/blog/personal/crafts" textContent="Crafts" />
                <RouterButton className={styles.link} href="/blog/personal/cooking" textContent="Cooking" />
            </Accordion>
            <Accordion title="Web Development" >
                <RouterButton className={styles.link} href="/blog/webdev/thebasics" textContent="The Basics" />
            </Accordion>
        </aside>
    )
}

export default Sidebar;
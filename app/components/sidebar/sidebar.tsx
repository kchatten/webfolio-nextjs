'use client';

import Accordion from '../accordion/accordion';
import styles from './sidebar.module.css';

const Sidebar = () => {

    return (
        <>
        <aside 
        className={styles.sidebar}
        >
            <Accordion title="Personal" />
            <Accordion title="Professional" />
        </aside>
        </>
    )
}

export default Sidebar;
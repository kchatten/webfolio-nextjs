'use client'

/*
####################################################################################################################
##    This component is a clickable button element that navigates between pages using the useRouter hook          ##
##    and updates its styling based on the current URL using the usePathname hook.                                ##
####################################################################################################################
*/

import { useRouter, usePathname } from 'next/navigation';
import Button, { ButtonProps } from './button';
import styles from './headerbutton.module.css';


interface HeaderButtonProps extends ButtonProps {
    href: string;
}

const HeaderButton: React.FC<HeaderButtonProps> = ({ href, ...buttonProps }) => {

    const router = useRouter();
    const pathname = usePathname();

    const handleClick = (event: React.MouseEvent<HTMLButtonElement> | React.KeyboardEvent<HTMLButtonElement>) => {

        event.preventDefault();

        if (process.env.NODE_ENV === 'development') {
            console.log(`You just clicked a Header button element!  You probably shouldn't be seeing this.`)
        }

        router.push(href);

    }

    return (

        <Button
            {...buttonProps}
            className={href === pathname ? `${styles.headerbutton} ${styles.active}` : `${styles.headerbutton}`}
            handleClick={handleClick}
        />

    )
}


export default HeaderButton;
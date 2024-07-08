'use client'

/*
####################################################################################################################
##    This component is a clickable button element that navigates between pages using the useRouter hook          ##
##    and updates its styling based on the current URL using the usePathname hook.                                ##
####################################################################################################################
*/

import { useRouter, usePathname } from 'next/navigation';
import Button, { ButtonProps } from './button';
import styles from './routerbutton.module.css';

interface RouterButtonProps extends ButtonProps {
    href: string;
    className?: string;
}

const RouterButton: React.FC<RouterButtonProps> = ({ className, href, ...buttonProps }) => {
    const router = useRouter();
    const pathname = usePathname();

    const handleClick = (event: React.MouseEvent<HTMLButtonElement> | React.KeyboardEvent<HTMLButtonElement>) => {
        event.preventDefault();

        if (process.env.NODE_ENV === 'development') {
            console.log(`You just clicked a Header button element! You probably shouldn't be seeing this.`);
        }

        router.push(href);
    }

    const isActive = () => {
        if (href === '/') {
            return pathname === '/';
        }
        return pathname.startsWith(href);
    }

    return (
        <Button
            {...buttonProps}
            className={className ? className : isActive() ? `${styles.headerbutton} ${styles.active}` : `${styles.headerbutton}`}
            handleClick={handleClick}
        />
    )
}

export default RouterButton;

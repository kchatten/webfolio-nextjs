'use client'

/*
####################################################################################################################
##    This component is a clickable button element that navigates between pages using the useRouter hook          ##
##    and updates its styling based on the current URL using the usePathname hook.                                ##
####################################################################################################################
*/

import Button, { ButtonProps } from './button';

interface OffsiteButtonProps extends ButtonProps {
    href: string;
}

const OffsiteButton: React.FC<OffsiteButtonProps> = ({ href, ...buttonProps }) => {

    const handleClick = (event: React.MouseEvent<HTMLButtonElement> | React.KeyboardEvent<HTMLButtonElement>) => {

        event.preventDefault();

        if (process.env.NODE_ENV === 'development') {
            console.log(`You just clicked an Offsite button element! You probably shouldn't be seeing this.`)
        }

        const confirmed = window.confirm(`Are you sure you want to open a new tab to\n{$href}?`)

        if (confirmed) {
            window.open(href, '_blank');
        }

    }

    return (

        <Button
            {...buttonProps}
            handleClick={handleClick}
        />

    )
}

export default OffsiteButton;
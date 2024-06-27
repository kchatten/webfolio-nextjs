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

const OffsiteButton: React.FC<OffsiteButtonProps> = ({href, ...buttonProps}) => {

    const handleClick = (event: React.MouseEvent<HTMLButtonElement> | React.KeyboardEvent<HTMLButtonElement>) => {

        const confirmed = window.confirm(`You are about to open a new window to:\n ${href}`);

        if (confirmed) {
            window.open(href, '_blank');
        }
        event.preventDefault();
        console.log(`You just clicked an Offsite button element!`)
    }

    return(
        <Button 
        {...buttonProps}
        handleClick={handleClick}
        />
    )
}

export default OffsiteButton;
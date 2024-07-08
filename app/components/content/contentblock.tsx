/*
###############################################################################################
##    This component is a server-side rendered element to display any form of content        ##
###############################################################################################
*/

import styles from './contentblock.module.css';

export interface ContentBlockProps {
    className?: string;
    children: string | React.ReactNode | React.ReactNode[];
}

const ContentBlock: React.FC<ContentBlockProps> = ( {className, children} ) => {
    return (
        <div 
        className={className? className: styles.contentBlock}
        children={children} />
    )
}

export default ContentBlock;
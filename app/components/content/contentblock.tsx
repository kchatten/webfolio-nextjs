/*
###############################################################################################
##    This component is a server-side rendered element to display any form of content        ##
###############################################################################################
*/

import styles from './contentblock.module.css';

export interface ContentBlockProps {
    tabIndex?: number;
    id?: string;
    className?: string;
    children: string | React.ReactNode | React.ReactNode[];
    
}

const ContentBlock: React.FC<ContentBlockProps> = ( {tabIndex, id, className, children} ) => {

    return (
        <div 
        tabIndex={tabIndex? tabIndex: -1}
        id={id}
        className={className? className: styles.contentBlock}
        >
        {children}
        </div>
    )
}

export default ContentBlock;
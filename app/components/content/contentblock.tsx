/*
###############################################################################################
##    This component is a server-side rendered element to display any form of content        ##
###############################################################################################
*/

import styles from './contentblock.module.css';

export interface ContentBlockProps {
    content: string | React.ReactNode | React.ReactNode[];
}

const ContentBlock: React.FC<ContentBlockProps> = ( {content} ) => {


    return (
        <div 
        className={styles.contentBlock}
        >
            {content}
        </div>
    )
}

export default ContentBlock;
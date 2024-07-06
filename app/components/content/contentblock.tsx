'use client'

/*
###############################################################################################
##    This component is a client-side rendered element to display any form of content        ##
###############################################################################################
*/

import { useState, useEffect } from 'react';

import styles from './contentblock.module.css';

export interface ContentBlockProps {
    className?: string;
    content: string | React.ReactNode | React.ReactNode[] | Promise<string | React.ReactNode | React.ReactNode[]>;
}

const ContentBlock: React.FC<ContentBlockProps> = ( {className, content} ) => {

    const [renderedContent, setRenderedContent] = useState<string | React.ReactNode | React.ReactNode[] | null>(null);

  useEffect(() => {
        if (content instanceof Promise) {
            // If content is a Promise, resolve it
            content.then((resolvedContent) => {
                setRenderedContent(resolvedContent);
            }).catch((error) => {
                // Handle error if needed
                console.error('Error loading content:', error);
                setRenderedContent(null); // or set an error message
            });
        } else {
            // If content is not a Promise, set it directly
            setRenderedContent(content);
        }
    }, [content]);

    return (
        <div 
        className={className? className: styles.contentBlock}
        >
            {renderedContent}
        </div>
    )
}

export default ContentBlock;
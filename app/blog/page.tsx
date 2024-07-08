import ContentBlock from "../components/content/contentblock";
import styles from "./page.module.css"


export default function BlogLandingPage() {

  const content = "Sample blog lander"

  return (
    <main>
      <ContentBlock className={styles.lander} content={content}/>
     </main>
  );
};
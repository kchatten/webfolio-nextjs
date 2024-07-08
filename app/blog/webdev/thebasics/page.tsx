import ContentBlock from "../../../components/content/contentblock";
import styles from "./page.module.css"


export default function WebDevBasicsPage() {

  const content = "Sample webdev content"
  return (
    <main>
      <ContentBlock className={styles.lander} content={content} />
    </main>
  );
};
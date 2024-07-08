import ContentBlock from "../../../components/content/contentblock";
import styles from "./page.module.css"


export default function WebDevBasicsPage() {

  return (
    <main>
      <ContentBlock className={styles.lander}>
        <p>Sample webdev content</p>
      </ContentBlock>
    </main>
  );
};
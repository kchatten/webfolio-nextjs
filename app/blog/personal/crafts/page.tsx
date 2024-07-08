import ContentBlock from "../../../components/content/contentblock";
import styles from "./page.module.css"


export default function CraftsBlogPage() {

  return (
    <main>
      <ContentBlock className={styles.lander}>
        <p>Sample craft content</p>
      </ContentBlock>
    </main>
  );
};
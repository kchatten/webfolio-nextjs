import ContentBlock from "../../../components/content/contentblock";
import styles from "./page.module.css"


export default function CookingBlogPage() {

  return (
    <main>
      <ContentBlock className={styles.lander}>
        <p>Sample cooking content</p>
        </ContentBlock>
    </main>
  );
};
import ContentBlock from "../../../components/content/contentblock";
import styles from "./page.module.css"


export default function CookingBlogPage() {

  const content = "Sample cooking content"
  return (
    <main>
      <ContentBlock className={styles.lander} content={content} />
    </main>
  );
};
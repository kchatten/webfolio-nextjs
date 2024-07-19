import OffsiteButton from "../components/buttons/offsitebutton";
import ContentBlock from "../components/content/contentblock";
import styles from "./page.module.css";



export default function ProjectsPage() {

  return (
    <main>
      <ContentBlock className={styles.contentBlock}>
        <div className={styles.projectContainer}>
          <OffsiteButton textContent="Sleep Aide Application" href="https://audioverlay.netlify.app" />
          <OffsiteButton textContent="Type 1 Diabetes Awareness and Education Website" href="https://www.thedword.ca" />
        </div>
      </ContentBlock>
    </main>
  );
}

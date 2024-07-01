import OffsiteButton from "../components/buttons/offsitebutton";
import ContentBlock from "../components/content/contentblock";
import styles from "./page.module.css";



export default function ProjectsPage() {

  const content =
    <div className={styles.projectContainer}>
      <OffsiteButton textContent="Sleep Aide Application" href="https://audioverlay.netlify.app" />
      <OffsiteButton textContent="Type 1 Diabetes Awareness and Education Website" href="https://www.thedword.ca" />
    </div>

  return (
    <main className="small">
      <ContentBlock className={styles.contentBlock} content={content} />
    </main>
  );
}

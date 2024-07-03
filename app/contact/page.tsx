import OffsiteButton from "../components/buttons/offsitebutton";
import styles from "./page.module.css";
import ContentBlock from "../components/content/contentblock";

export default function ContactPage() {

  const content =
    <div className={styles.contactContainer}>

      <OffsiteButton
        textContent="LinkedIn"
        href="https://www.linkedin.com/in/kyalchatten"
      />

      <OffsiteButton
        textContent="GitHub"
        href="https://github.com/kchatten"
      />

      <OffsiteButton
        textContent="Email"
        href="mailto:kyalchatten@gmail.com?subject=Hi Kyal!"
      />
      
    </div>

  return (
    <main className="small">
      <ContentBlock className={styles.contentBlock} content={content} />
    </main>
  );
}

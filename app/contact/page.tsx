import OffsiteButton from "../components/buttons/offsitebutton";
import styles from "./page.module.css";
import ContentBlock from "../components/content/contentblock";

export default function ContactPage() {

  return (
    <main className="small">
      <ContentBlock className={styles.contentBlock}>
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
      </ContentBlock>
    </main>
  );
}

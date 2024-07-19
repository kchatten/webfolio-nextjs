import FocusButton from "@/app/components/buttons/focusbutton";
import ContentBlock from "../../../components/content/contentblock";
import styles from "./page.module.css"


export default function InfoTechBasicsPage() {

  return (
    <main>
      <ContentBlock className={styles.lander}>
        <ContentBlock className={styles.tocBlock}>
          <p style={{ textDecoration: "underline", marginBottom: "0.25rem" }}>Table of Contents</p>

          <ol>
            <li><FocusButton id="preambleTOC" focus="preamble" textContent="Preamble" className={styles.toc} /></li>
            {/* Describe the contents of the article and set reader expectations */}
            <li><FocusButton id="article1TOC" focus="article1" textContent="What is Information Technology?" className={styles.toc} /></li>
            {/* Describe IT, basics of computing hardware and software, introduction to OS */}
            <li><FocusButton id="article2TOC" focus="article2" textContent="What is a device?" className={styles.toc} /></li>
            {/* Describe different end devices, network types (wifi, bluetooth) */}
            <li><FocusButton id="article3TOC" focus="article3" textContent="How do devices work?" className={styles.toc} /></li>
            {/* Describe how the previously discussed parts and components interact on a higher level, OS, Kernel, Drivers, HAL, etc*/}
            <li><FocusButton id="article4TOC" focus="article4" textContent="Virtualization" className={styles.toc} /></li>
            {/* Describe virtual machines, vpns, x-as-a-service, etc*/}
            <li><FocusButton id="article5TOC" focus="article5" textContent="IoT?" className={styles.toc} /></li>
            {/* Describe the IoT, IoT devices and technologies, etc */}
          </ol>
        </ContentBlock>

        <ContentBlock className={styles.contentBlock}>
          <FocusButton id="preamble" focus="preambleTOC" textContent="Preamble" className={styles.sectionHeader} />
          <p></p>
        </ContentBlock>

        <ContentBlock className={styles.contentBlock}>
          <FocusButton id="article1" focus="article1TOC" textContent="What is Information Technology?" className={styles.sectionHeader} />
          <p></p>
        </ContentBlock>

        <ContentBlock className={styles.contentBlock}>
          <FocusButton id="article2" focus="article2TOC" textContent="What is a device?" className={styles.sectionHeader} />
          <p></p>
        </ContentBlock>

        <ContentBlock className={styles.contentBlock}>
          <FocusButton id="article3" focus="article3TOC" textContent="How do devices work?" className={styles.sectionHeader} />
          <p></p>
        </ContentBlock>

        <ContentBlock className={styles.contentBlock}>
          <FocusButton id="article4" focus="article4TOC" textContent="Virtualization?" className={styles.sectionHeader} />
          <p></p>
        </ContentBlock>

        <ContentBlock className={styles.contentBlock}>
          <FocusButton id="article5" focus="article5TOC" textContent="Internet of Things?" className={styles.sectionHeader} />
          <p></p>
        </ContentBlock>

      </ContentBlock>
    </main>
  );
};
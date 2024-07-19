import FocusButton from "@/app/components/buttons/focusbutton";
import ContentBlock from "../../../components/content/contentblock";
import styles from "./page.module.css"


export default function InfoTechNetworkingPage() {

  return (
    <main>
      <ContentBlock className={styles.lander}>
        <ContentBlock className={styles.tocBlock}>
          <p style={{ textDecoration: "underline", marginBottom: "0.25rem" }}>Table of Contents</p>

          <ol>
            <li><FocusButton id="preambleTOC" focus="preamble" textContent="Preamble" className={styles.toc} /></li>
            {/* Describe the contents of the article and set reader expectations */}
            <li><FocusButton id="article1TOC" focus="article1" textContent="What is a Network?" className={styles.toc} /></li>
            {/* Describe network, network types, network topology */}
            <li><FocusButton id="article2TOC" focus="article2" textContent="What is a Protocol?" className={styles.toc} /></li>
            {/* Describe what a protocol is, and some of the common protocols and port associations */}
            <li><FocusButton id="article3TOC" focus="article3" textContent="The TCP/IP and OSI Networking Models" className={styles.toc} /></li>
            {/* Describe what the TCP/IP OSI models are */}
            <li><FocusButton id="article4TOC" focus="article4" textContent="The Physical Layer" className={styles.toc} /></li>
            {/* Describe cable types, transmission mediums, WiFi, Ethernet, Networking Devices */}
            <li><FocusButton id="article5TOC" focus="article5" textContent="The Data Link Layer" className={styles.toc} /></li>
            {/* */}
            <li><FocusButton id="article6TOC" focus="article6" textContent="The Network Layer" className={styles.toc} /></li>
            {/* */}
            <li><FocusButton id="article7TOC" focus="article7" textContent="The Transport Layer" className={styles.toc} /></li>
            {/* */}
            <li><FocusButton id="article8TOC" focus="article8" textContent="The Application Layer" className={styles.toc} /></li>
            {/* */}
            <li><FocusButton id="article9TOC" focus="article9" textContent="The Session Layer" className={styles.toc} /></li>
            {/* */}
            <li><FocusButton id="article10TOC" focus="article10" textContent="The Presentation Layer" className={styles.toc} /></li>
            {/* */}
          </ol>
        </ContentBlock>

        <ContentBlock className={styles.contentBlock}>
          <FocusButton id="preamble" focus="preambleTOC" textContent="Preamble" className={styles.sectionHeader} />
        </ContentBlock>

        <ContentBlock className={styles.contentBlock}>
          <FocusButton id="article1" focus="article1TOC" textContent="What is a Network?" className={styles.sectionHeader} />
        </ContentBlock>

        <ContentBlock className={styles.contentBlock}>
          <FocusButton id="article2" focus="article2TOC" textContent="What is a Protocol?" className={styles.sectionHeader} />
        </ContentBlock>

        <ContentBlock className={styles.contentBlock}>
          <FocusButton id="article3" focus="article3TOC" textContent="The TCP/IP and OSI Networking Models" className={styles.sectionHeader} />
        </ContentBlock>

        <ContentBlock className={styles.contentBlock}>
          <FocusButton id="article4" focus="article4TOC" textContent="The Physical Layer" className={styles.sectionHeader} />
        </ContentBlock>

        <ContentBlock className={styles.contentBlock}>
          <FocusButton id="article5" focus="article5TOC" textContent="The Data Link Layer" className={styles.sectionHeader} />
        </ContentBlock>

        <ContentBlock className={styles.contentBlock}>
          <FocusButton id="article6" focus="article6TOC" textContent="The Networking Layer" className={styles.sectionHeader} />
          <p> IP Addresses</p>
          <p> Subnets</p>
        </ContentBlock>

        <ContentBlock className={styles.contentBlock}>
          <FocusButton id="article7" focus="article7TOC" textContent="The Transport Layer" className={styles.sectionHeader} />
        </ContentBlock>

        <ContentBlock className={styles.contentBlock}>
          <FocusButton id="article8" focus="article8TOC" textContent="The Application Layer" className={styles.sectionHeader} />
        </ContentBlock>

        <ContentBlock className={styles.contentBlock}>
          <FocusButton id="article9" focus="article9TOC" textContent="The Session Layer" className={styles.sectionHeader} />
        </ContentBlock>

        <ContentBlock className={styles.contentBlock}>
          <FocusButton id="article10" focus="article10TOC" textContent="The Presentation Layer" className={styles.sectionHeader} />
        </ContentBlock>

      </ContentBlock>
    </main>
  );
};
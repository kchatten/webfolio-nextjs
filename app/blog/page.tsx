import ContentBlock from "../components/content/contentblock";
import styles from "./page.module.css"


export default function BlogLandingPage() {

  return (
    <main>
      <ContentBlock className={styles.lander}>
        <h1 style={{ textDecoration: "underline" }}>About This Site</h1>
        <span>

          This website is built on the NextJS 14 Framework with an Express.JS server on the backend serving the static files. This website is not selfhosted.
          As a result, not everything may be optimal. At the time of writing I haven&apos;t even verified if I<em>am</em>serving them from the Express server.
          <p>I&apos;m like 99.99% sure though... &emsp;╮(╯^╰)╭</p>
          Such is the lament of many self-taught developers like myself. It&apos;s an incredibly arduous learning challenge that is as daunting and frustrating 
          as it is rewarding. So I hope you can find something of value from this blog, be it some humerous commiseration over a programming struggle or perhaps 
          even something genuinely insightful. 
        </span>
      </ContentBlock>
    </main>
  );
};
import ContentBlock from "../components/content/contentblock";
import styles from "./page.module.css"


export default function BlogLandingPage() {

  return (
    <main>
      <ContentBlock className={styles.lander}>
        <h1 style={{ textDecoration: "underline" }}>About This Site</h1>
        <span>
          <p>
            The sidebar can be hidden for convenience on mobile devices by tapping the stylized text in the top left corner.
          </p>
          <p>
            This website is built on the Next.js 14 Framework with an Express.JS server on the backend serving the static files. This website is not selfhosted.
            As a result, not everything may be optimal. At the time of writing I haven&apos;t even verified if I<em>am</em>serving them from the Express server.
          </p>
          <p>I&apos;m like 99.99% sure though... &emsp;╮(╯^╰)╭</p>
          <p>
            Such is the lament of many self-taught developers like myself. It&apos;s an incredibly arduous learning challenge that is as daunting and frustrating
            as it is rewarding. So I hope you can find something of value from this blog, be it some humerous commiseration over a programming struggle or perhaps
            even something genuinely insightful.
          </p>
          <p>
            With this blog I am currently learning Next.js 14, and TypeScript. I&apos;m appreciating the directory based app router and the incredible flexibility it offers.
            While I am not yet able to fully appreciate some of the more complex features like the ability to generate static pages based on dynamic route segments, I am
            excited to embark on that journey and explore the potential.
          </p>
          <p>
            I also recently had some exposure to Test Driven Development which I&apos;ve been practicing, with Jest and React Testing Library. Learning TypeScript at the same time
            is really opening my eyes to how relaxed JavaScript is and why many developers appreciate TypeScript.
          </p>
          <p>
            As mentioned on the homepage, I also am actively pursuing a career in IT so you will find many topics beyond programming. Currently I am building out the 
            Networking section in addition to the Web Development section as having a good understanding of the infrastructure of the internet is in my opinion a key skill for a web developer.
          </p>
        </span>
      </ContentBlock>
    </main>
  );
};
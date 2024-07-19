import ContentBlock from './components/content/contentblock';

export default function HomePage() {

  const children =
    <div style={{ placeContent: "center" }}>
      <p style={{ textAlign: "center" }}>
        Hi there, My name is Kyal Chatten and this is my webfolio.
      </p>
      <br />
      <p style={{ textAlign: "center" }}>
        I&apos;m a Web Developer, technical support specialist, technology enthusiast and lover of food, felines, and all forms of interactive media. I&apos;m currently based out of Ontario, Canada.
      </p>
      <br />
      <p>
        &emsp;From my earliest years playing Pokémon by dim passing streetlights or begging my parents for whatever silly cereal happened to be advertising
        a fancy new computer game, to the formative years I had shaped by the countless interactions I had with other Netizens, I&apos;ve always had a deep
        fascination with technology. Initially, I glossed over the seemingly &apos;magical&apos; underpinnings of the technologies that I long took for granted in
        favor of the mesmerizing sights, sounds and experiences — but as I progress along my IT career journey I have come to better appreciate the intricate inner
        workings that make much of our every day life possible.
      </p>
      <br />
      <p>
        &emsp;I actively upskill through engaging programs, workshops, personal projects and stay up to date with the latest technologies and trends in the industry by
        consuming a wide variety of content from industry professionals. I&apos;m motivated by the learning process and the satisfaction of closing a thousand tabs. With
        humility, I&apos;ve learned to embrace the inevitability of failure in the ever-shifting landscape of technology as a source of fuel that motivates and propels me
        forward along my journey of continued education.
      </p>
      <br />
      <p>
        &emsp;When I&apos;m disconnected from my work, I like to play guitar, tend to my garden or cook incredible food,
        and when I&apos;m not actively engaging with my personal or professional development I am cherishing time with friends and family.
      </p>
      <br />
      <p>
        &emsp;Currently I am working towards several IT related certifications like the CompTIA+ and CCST Cybersecurity certifications, and I have just recently earned my Google IT Support Professional Certification,
        as well as the Professional Scrum Master 1 and Professional Scrum Developer 1 certifications so I am hungry for the opportunity to contribute to an organization that values growth, transparency and innovation.
      </p>
      <br />
      <p style={{ textAlign: "center" }}>
        If that sounds like you or someone you know, I&apos;d love to hear more about the opportunity.
      </p>
      <br />
      <p style={{ textAlign: "center" }}>
        Please reach out to me via my Contact page.
      </p>
    </div>

  return (
    <main>
      <ContentBlock>
        {children}
      </ContentBlock>
    </main>
  );
}

import FocusButton from "@/app/components/buttons/focusbutton";
import ContentBlock from "../../../components/content/contentblock";
import styles from "./page.module.css"
import RouterButton from "@/app/components/buttons/routerbutton";


export default function WebDevBasicsPage() {

  return (
    <main>
      <ContentBlock className={styles.lander}>
        <ContentBlock className={styles.tocBlock}>
          <p style={{ textDecoration: "underline", marginBottom: "0.25rem" }}>Table of Contents</p>

          <ol>
            <li><FocusButton id="preambleTOC" focus="preamble" textContent="Preamble" className={styles.toc} /></li>
            <li><FocusButton id="article1TOC" focus="article1" textContent="What is the Internet?" className={styles.toc} /></li>
            <li><FocusButton id="article2TOC" focus="article2" textContent="How does the Internet work?" className={styles.toc} /></li>
            <li><FocusButton id="article3TOC" focus="article3" textContent="What is a web server?" className={styles.toc} /></li>
            <li><FocusButton id="article4TOC" focus="article4" textContent="What is a website?" className={styles.toc} /></li>
            <li><FocusButton id="article5TOC" focus="article5" textContent="How are websites built?" className={styles.toc} /></li>
            <li><FocusButton id="article6TOC" focus="article6" textContent="How are websites accessible?" className={styles.toc} /></li>
          </ol>
        </ContentBlock>

        <ContentBlock className={styles.contentBlock}>
          <FocusButton id="preamble" focus="preambleTOC" textContent="Preamble" className={styles.sectionHeader} />
          <p>


            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla ac neque eu urna consequat tincidunt eget sed nisi. Vivamus at laoreet tellus. Nam eget rutrum diam. Etiam ullamcorper libero sit amet magna semper, non ornare tortor malesuada. Morbi aliquam commodo lectus, vel tincidunt augue commodo ac. Interdum et malesuada fames ac ante ipsum primis in faucibus. Integer semper ipsum velit, at laoreet nibh tempor in. Ut commodo dui pellentesque orci ullamcorper dapibus. Vivamus euismod urna ac nulla maximus condimentum. Nam tincidunt convallis sapien sed condimentum.

            Suspendisse potenti. Duis ipsum neque, auctor ut semper vulputate, pellentesque a mi. Fusce non felis enim. Aenean eget ex ultricies justo fringilla varius. Donec non ipsum eget ligula pretium sollicitudin. In ac auctor sem. Fusce dictum, ante a euismod molestie, nisl elit efficitur sapien, et luctus ligula tellus id mauris. Donec malesuada eu mauris a convallis. Mauris vestibulum id ante at consequat. Cras hendrerit fringilla finibus. Nulla ac dapibus lectus. Mauris at nulla neque. Nullam ullamcorper tempus elementum.

            Sed et diam porta, fringilla ante a, volutpat neque. In ac fringilla enim. Donec lobortis elit dolor, laoreet sollicitudin augue hendrerit tempor. Ut ut vulputate nisl. Nulla sit amet vulputate metus, a sodales mi. Pellentesque auctor erat et sem ultricies consectetur. Donec mollis egestas congue.

            Aliquam arcu ex, ultricies non purus sit amet, vestibulum cursus ipsum. Ut vehicula scelerisque arcu, id imperdiet lectus fringilla in. Nulla id pulvinar orci, quis tempus libero. Integer id consectetur eros. Mauris a hendrerit sem. Pellentesque vehicula malesuada sapien a aliquam. Praesent at dui consequat, tempor mauris in, scelerisque felis. Cras scelerisque vel justo et auctor. Nam iaculis mauris non purus porttitor, ac aliquam est feugiat.

            Sed bibendum placerat dui nec lobortis. Aenean risus orci, tempus vitae mauris sed, auctor aliquam odio. Vestibulum placerat lectus ac augue mattis, a pretium sapien tristique. Praesent accumsan pharetra lorem ac convallis. In eget orci nibh. Nam feugiat elementum massa a suscipit. Cras volutpat magna et erat dictum, ac porta ipsum pellentesque. Pellentesque sodales tincidunt porttitor.

            Vestibulum varius in sapien quis sollicitudin. Donec varius quam ut consectetur elementum. Aliquam nisl dui, rutrum dignissim libero in, dapibus hendrerit felis. Suspendisse commodo bibendum mi sed malesuada. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Sed nec urna vel lacus porttitor tristique at ac ipsum. Pellentesque id metus ac enim laoreet gravida. In congue erat risus, vel ornare lorem euismod quis. Pellentesque ut euismod ligula, at fringilla mi. Ut tempus sem ac aliquet finibus. Etiam fermentum id dolor nec lobortis. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Duis auctor sapien felis, nec iaculis elit fringilla sit amet.

            Maecenas tempus ex nec feugiat cursus. Suspendisse ut nunc vel est varius cursus ac tempus erat. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Phasellus blandit odio arcu, id pulvinar lectus rutrum sed. Duis at dolor quis nisi suscipit maximus quis quis risus. Mauris elementum congue diam, in convallis tellus varius ac. Nulla libero ipsum, convallis eget pretium ut, ultricies non tellus. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Donec quis interdum odio. Aliquam semper nisl ac est molestie, nec dignissim orci porta.

            Vivamus et semper mi, vitae tempus mi. Nulla ut nunc urna. Mauris commodo convallis porta. Vestibulum egestas elit aliquam interdum aliquam. Donec tristique, ante et aliquam accumsan, urna nulla semper ex, eu elementum eros ante non risus. Vivamus porttitor urna at erat pretium, quis fringilla ante fringilla. Vivamus eget lorem a ligula luctus pretium. Vestibulum neque arcu, dapibus eget ante eget, venenatis porttitor turpis.

            In vel orci in orci dignissim scelerisque non in lectus. Pellentesque eu elit at diam imperdiet venenatis vitae ultricies massa. Integer vel libero urna. Pellentesque egestas dui ut aliquet pharetra. Duis sit amet lobortis neque. Sed porta eros ex, sed dictum metus fermentum ut. Nullam tincidunt interdum neque, ut interdum ipsum gravida ac. Cras mattis at mi eget convallis. Aliquam eleifend ex in sagittis ultrices. Quisque tellus nunc, scelerisque sed ex in, vestibulum mattis nisl. Vestibulum a urna consectetur, egestas tellus ut, varius lacus. Maecenas porttitor nisl eget consequat facilisis. Maecenas elit ante, elementum nec mauris finibus, pretium ullamcorper dui. Nunc auctor sodales magna vel iaculis. Donec non orci non nisl condimentum fringilla nec non diam. Curabitur vitae dictum sapien.

            Sed dolor mauris, efficitur in sollicitudin eu, pulvinar eget magna. Duis gravida euismod tortor at feugiat. Vivamus fringilla varius diam et venenatis. Mauris pellentesque nibh id lacus elementum, in auctor velit faucibus. Phasellus in arcu in justo lacinia facilisis ut nec urna. Suspendisse tincidunt nibh mi, vel viverra nibh suscipit ut. Vivamus ac neque at risus finibus iaculis eu a dui. Vestibulum nec sodales diam. Aenean at ante sed libero congue mattis. Donec maximus magna quam, nec suscipit arcu ornare eu.
            {/* Describe the contents of the article and set reader expectations */}
          </p>
        </ContentBlock>

        <ContentBlock className={styles.contentBlock}>
          <FocusButton id="article1" focus="article1TOC" textContent="What is the internet?" className={styles.sectionHeader} />
          <p>
            The internet at its core is a network of networks. End devices like the one you&apos;re reading this article on connect to the internet through a series of Routers.
            When you purchase internet service from an ISP (or Internet Service Provider), you are generally provided a device that is a combination Modem, Router and Switch.
            While separate versions of these devices do exist, the combination device you are likely most familiar with is deployed for its compact form factor and its relatively powerful capabilities.
            A <span style={{ textDecoration: "underline" }}>Mo</span>dulator-<span style={{ textDecoration: "underline" }}>dem</span>odulator is the device that converts your binary digital data into a format that can be transmitted across an analog medium,
            like electrical impulses, radio waves, or pulses of light. The Switch is a device that connects the devices on any particular network segment together and a Router is like a Switch but connects network segments rather than devices together.
          </p>
          <p>
            This all-in-one device connects your home network (also called a LAN or Local Area Network) to other Routers and Modems owned either by other service subscribers, or service providers. This interconnected network of networks is the internet!
          </p>
          <p>
            We won&apos;t address this topic too much further as it&apos;s a whole area of study itself that you can learn more about <RouterButton href="/blog/infotech/networking" textContent="here" className={styles.link} reload={true} /> but we will touch on concepts as necessary here because having a strong foundational knowledge
            in networking will give you important insight during your career as a developer. It will help you optimize your application or websites performance and troubleshoot, diagnose and resolve a multitude of network related issues.
          </p>
        </ContentBlock>

        <ContentBlock className={styles.contentBlock}>
          <FocusButton id="article2" focus="article2TOC" textContent="How does the internet work?" className={styles.sectionHeader} />
          <p>
            A Router is a device that connects one network to another, primarily through referencing something called a routing table. This table contains a set of IP addresses associated with devices it receives data from.
            It would be impossible for my Router to know how to get data to every single end device because there are literally hundreds of millions of Routers interconnecting billions of devices!
            (Yes, those are<em> real </em> numbers. It&apos;s estimated that there are nearly 1 billion Routers interconnecting close to <em>20 billion</em> devices. That is a truly staggering figure.)
            Instead my Router only needs to know if any of the devices it&apos;s immediately connected to is connected to your device.
            Since none of my devices are connected to yours, instead, it will look for the device that is the next best node on the network to send the data to, as determined by its routing protocol.
            Routers generally share their routing tables between one another to help make this more efficient.
            After however many hops necessary, the data winds up on a Router that is connected to your network.
            When your Router receives the broadcast asking if anyone knows you, it says &quot;Hey, I know that person!&quot; and it takes the data and passes it along to you.
          </p>

          <p>
            You may already be familiar with IP addresses that look similar to &apos;192.168.2.1&apos;.
            An IP (Internet Protocol) address is a unique identifier assigned to a single device, or in some cases a group of devices.
            For example, multiple devices might share a single IP address for load balancing purposes or when subscribed to IP-based policies such as Access Control Lists and Group Policy Objects.
            IP addresses serve as a fundamental component of network communication by allowing devices to identify and communicate with each other.
          </p>
          <p>
            IP addresses are four octets long, and an octet is a byte comprised of eight bits.
            That means the IP address 192.168.2.1 is actually 110000000.10101000.00000010.00000001.
            This translation happens for the purpose of network communication and you can read more about it <RouterButton href="/blog/infotech/networking" textContent="here" className={styles.link} reload={true} />.
            I hope you are already comfortable with the concept of abstraction, because you will become intimately familiar with it throughout your career in IT.
            192.168.2.1 is an <em>abstraction</em> of 11000000.10101000.00000010.00000001 because while they are saying something different, <em>the idea they are communicating</em> is identical.
            That idea being a device&apos;s location on the network.
            We actually can go a step further and abstract that again through the technology DNS (or Domain Name Service) which lets us assign an even more memorable identifier like kchat.dev or google.com to that IP address.
          </p>
          <p>
            This is because at their very core, the components that our devices are composed of truly only have the understanding of a single concept.
            This is the concept of state. It&apos;s not quite so complex that it&apos;s aware of its state in relation to its surroundings the way that may be associated with consciousness.
            No, instead it is important to make the distinction that the tiniest components that build up the larger components of our devices are only aware of their own state.
          </p>
          <p>
            These tiny electronics, called transistors, are like light switches that direct the flow of current. If a transistor is receiving current, it is active or &apos;on&apos;. If it isn&apos;t, it&apos;s inactive or &apos;off&apos;.
            These transistors can be used for a wide variety of complex computations or even can be used as storage.
            When used in storage, a transistor represents a bit of data.
            Since a transistor can only be on or off, it only has two potential states.
            This concept is called &apos;binary&apos; and it&apos;s the language that computers speak, also known as &apos;machine language&apos; because we are &apos;speaking&apos; to the computer components with the flow or lack thereof an electrical current.
          </p>
          <p>
            It would be a lot more difficult to remember and relay these addresses from person to person even though it is the only way a computer could understand it.
            So we have developed technologies called compilers that solely focus on taking higher level languages that are easier for us as developers to write and translates it all down into binary.
            That&apos;s right. Everything you&apos;re seeing right now made its way from my web server to your browser client entirely as combinations and collections of prearranged 1&apos;s and 0&apos;s and it got there based on a different set of combination and collection of 1&apos;s and 0&apos;s.
            Not only that, but the instructions that organized that data within your browser, the browser window within your monitor&apos;s viewport and even the position of your cursor as you move it around within your screen to click on buttons, and even all the cascading effects caused by those clicks?
            1&apos;s and 0&apos;s!
            That's a lot of work for just two numbers!
            Technology is incredible!
          </p>
          <p>
            Now you may be thinking that it must be impossible to distinguish beginnings and ends within the repeating string of 1&apos;s and 0&apos;s and you&apos;d be right if not for the astounding effort of engineers worldwide working to develop and maintain protocols
            that help dictate the transmission of data. Through a series of encapsulation steps, your payload data is wrapped in frames and headers which eventually build into a packet which is sent across the network.
            These frames and headers are added sequentially in such a way that aids in the efficiency of data transfer by ensuring that data is segmented logically, making the necessary information readily accessible at each step of transmission and de-encapsulation.
            There is a lot more to this topic that you can find <RouterButton href="/blog/infotech/networking" textContent="here" className={styles.link} reload={true} />.
            But for now what you need to know is that this process of de/encapsulation is a combination of two protocols.
            The TCP/IP (or Transmission Control Protocol / Internet Protocol) suite of protocols form the primary set of rules that governs communication on the internet.
          </p>
          <p>
            As we discussed earlier, the Internet Protocol is a protocol that helps devices identify and communicate with one another by giving them unique identifiers so that data can be sent from one device to another across the vast interconnected network of networks.
            The Transmission Control Protocol on the other hand is a protocol that dictates the standard of how data must be <em>structured</em> so that it can be transmitted across the internet.
            These aren&apos;t the only protocols you&apos;ve interacted with. I highly recommend visiting the Networking section to gain a better understanding of the wide variety of protocols and how they interact with one another.
            The main distinction that I would like to point out here is that these two protocols operate at lower levels of the networking model, which is to say these are rules for devices that are concerned with the transmission of any and all data across the internet because they are interacting with the digital binary data and the analogous transmission mediums.
          </p>
          <p>
            The next set of protocols you likely already have exposure to are the HTTP/S (or Hyper Text Transfer Protocol / Secure) protocols which specifically dictate the transmission of data across the World Wide Web.
            I would like to quickly point out that while the WWW exists on the internet, it is <em>not</em> the internet.
            It exists as a layer on top of the infrastructure of the internet.
            HTTP/S are application level protocols which exist higher up the networking model which also means data at this level is represented in more human readable formats that has yet to be encoded into binary.
            Instead, you will most commonly find HTML (or Hyper Text Markup Language), JS (JavaScript), JSON (JavaScript Object Notation) or media data at the application level.
            Ultimately these protocols help standardize and in theory make the internet safer.
          </p>
          <p>
            So now that we know how data gets from one computer to another, let's talk about the &apos;last mile&apos;.
            If you're unfamiliar with the phrase, it simply means the final leg of the data's transmission before it reaches its destination.
            &quot;But the files can already be routed to my machine!&quot; I hear you saying. Which is true! It can be routed to your machine. That however isn&apos;t entirely sufficient.
          </p>
          <p>
            The process that we've described so far is much like the regular process for mailing a letter in real life.
            We have to gather all of the contents of the package and make sure they fit in the envelope and that everything I'm sending is legal to send (which is to say that it fits the specifications set by the postal carrier for mail they will deliver), then I address the letter and send it on it's way.
            But what we've actually done so far is addressed the package for your <em>building</em>.
            There is still one more step in addressing that is crucial for ensuring a packet is sent to the correct destination.
          </p>
          <p>
            Ports.
            A computer is much like an apartment building, with every service and application having its own unique address within the apartment building itself.
            Ports are very similar to old telephone switchboards.
            Each port is like a switch on a switchboard, and each switch can only maintain a single connection at one time.
            When you're requesting resources from a web server using the HTTP protocol, you are actually making that request to the web servers IP address at port 80.
            When this connection is established, some magic happens that pushes this connection off of port 80 and onto what is called an ephemeral port which frees up port 80 for more HTTP connection requests.
          </p>
          <p>
            This is a gross oversimplification because the topic is really out of scope for this article but the main distinction to take away is that the port is the address for a specific application or service on your device.
            Without ports, we we wouldn't be able to request a web page from a web server to be returned and served by a web browser.
            Imagine an apartment building with no apartment numbers.
            That would be one chaotic mail room!
          </p>
        </ContentBlock>


        <ContentBlock className={styles.contentBlock}>
          <FocusButton id="article3" focus="article3TOC" textContent="What is a web server?" className={styles.sectionHeader} />
          <p>
            A web server or any server for that matter is simply a device that is configured to send back a resource in response to a request for a resource.
            In this particular case our server is configured to receive and respond to requests for resources from the World Wide Web.
            I would like to quickly point out that while web server <em>software</em> options are available, like Apache or Node.js, these are not <em>required</em>.
            You <em>do not need</em> to utilize these programs to create a web server.
            These softwares provide robust frameworks that facilitate the process.
          </p>

          <p>
            This topic is a bit extensive and you may have already noted that I inappropriately refer to Node.js as a web server software which is not accurate.
            However for the sake of brevity and keeping this article concise, the misattribution and those like it should be excused to allow the content to be more approachable.
            At this point in the article I do not believe it pertinent that you know that Apache is a web server software that works straight out of the box, or that Express.js is package that provides you the tools to write your own web server.
            This is because the landscape is quite vast and I'm making no presuppositions about what language or technologies you know or are interested in.
            This article is intended to cover the overarching concept of web development.
          </p>

          <p>In summary, a server is any device configured to send a resource in response to request for a resource.</p>
        </ContentBlock>

        <ContentBlock className={styles.contentBlock}>
          <FocusButton id="article4" focus="article4TOC" textContent="What is a website" className={styles.sectionHeader} />
          <p>
            So now that we&apos;ve talked a bit about the foundational networking concepts that helped establish the World Wide Web (commonly referred to as the internet), we now need to talk about the actual data being transported on the network.
            Pictures, text, and other forms of media are collected into relevant groups and are sent back to the web client. 
            These groups are webpages. 
            A website is a collection of webpages and other resources that are structured and presented in a logical and intuitive manner.
            These web pages are written in HTML (or Hyper Text Markup Language), which is a derivative of Markup. 
            Markup is a rich text formatting language that allowed you to render and apply side effects to raw text and create more visually complex arrangements.
            Markup however is quite restrictive and narrow in it&apos;s functional scope.
            HTML broadened the capabilities of Markup by allowing you to render and apply side effects to <em>elements</em> of which text was included but not limited to.
            Elements are semantic definitions for the expected behaviour of any particular grouping of data.
            An example of this is how the div element simply designates a division of space within the document.
            It does not presuppose a height or width, a title, a descriptor, a background color, nor does it even provide a unique identifier.
            That is because a div is simply a section of the document that has been divided and any behavior beyond that is to be determined by the developer.
            Further yet this can be illustrated by the anchor and paragraph elements.
            While on the surface these elements are identical -- displays of text, we will find that anchor text is rendered differently by default.
          </p>

          <p>
            Speaking of controlling rendering, you may have noticed that this website is not black text on a white background and in fact there are even some complex things happening like animated text in the header.
            While HTML is the skeleton of the website, providing the framing and the content that we wish to display we still need to determine how that content should be rendered.
            The technology CSS (or Cascading Style Sheets) is exactly like the skin of our website and is what allows us to control how our elements are rendered.
            This too is a subject deserving of individual attention so I will leave that for another section but I would like to highlight the <em>cascading</em> aspect of cascading style sheets.
            Unlike how we may be able to take a book and jam our thumb half way into it to jump into the middle, the same is simply not possible for electronic files. 
            Electronic files must be read sequentially and this creates a unique environment for a front-end web developer when we are dealing with CSS specifically.
            When a CSS file is loaded, it loads styles in from the top of the file to the bottom of the file. 
            If you set the color of a paragraph element twice in a CSS file, the second assignment will take precedence.
            If you have new stylings load in after a style has already been loaded, the new stylings take precedence.
            There is a way to circumvent this as necessary but it is pertinent to keep this cascading nature in mind.
          </p>

          <p>
            Last and certainly not least, JavaScript. The last of the &apos;holy trinity&apos; of Web Development.
            JavaScript is not necessary for a website, but you will find it difficult if not impossible to achieve much of what is on the web today without it.
            JavaScript is a programming language that was designed for the development of dynamic and interactive web applications by allowing asynchronous communication with servers, dynamically updating rendered content, and enhanced interactivity with user driven events,
          </p>
        </ContentBlock>

        <ContentBlock className={styles.contentBlock}>
          <FocusButton id="article5" focus="article5TOC" textContent="How is a website built?" className={styles.sectionHeader} />
          <p>
            Websites are generally built within an IDE (or Integrated Development Environment) like Vim, VSCode or VSCommunity.
            The benefit of using an advanced IDE like Vim or Visual Studio compared to a more rudimentary option like developers of yore were with lightweight text editors such as Notepad, are the advanced features.
            Syntax highlighting, terminal support, and other features like code completion bolster the incredible number of extensions available to a developer with an IDE.

            There also exists a wide variety of programming languages other than JavaScript that aide in the development, production and deployment of websites and web applications.
            Back-end languages like PHP, Ruby, Python and C# are focused on server-side logic, business logic and database interaction.
            User authentication, data storage, manipulation and even generation are all examples of functionality provided by these languages. 
      
          </p>
        </ContentBlock>
      </ContentBlock>
    </main>
  );
};
import BadgerImage from '../../assets/foxAndBadger.jpg'
import CatchImage from '../../assets/catchMyiPhone.png'
import ChromeImage from '../../assets/chromebook.jpg'
import WheelImage from '../../assets/wheel.jpg'
import CanadaImage from '../../assets/canada.png'

export const projects = [
  {
    id: "badgerFox",
    title: "Badger + Fox",
    description:
      "This children’s game template harnesses the OpenAI chatbot API for dynamic, natural language interactions. Extensive animations accompany vibrant illustrations to bring its fantasy world to life. The result is an immersive, playful, and educational experience tailored for young imaginations.",
    madeWith: ["ReactJS", "Styled-Components", "Restful API", "Framer-Motion"],
    imgSrc: BadgerImage,
    liveLink: "https://badgerandfox.netlify.app/",
    githubLink: "https://github.com/korzenstein/learningGame",
  },
  {
    id: "catchMyiPhone",
    title: "Catch My iPhone - Verizon",
    description:
      `This Webby Award-winning mobile AR experience for Verizon immerses users in a dynamic, music-infused environment. Featuring animations and the distinctive sounds of J Balvin, it brings fans closer to their favorite artist. Interactive elements and exclusive rewards, including the chance to win a new iPhone, heighten the excitement.`,
    madeWith: ["NextJS", "A-Frame", "8thwall", "ThreeJS", "TypeScript", "ReactJS"],
    imgSrc: CatchImage,
    liveLink: "https://www.judgeseyesonly.com/verizon-catch-my-iphone/",
  },
  {
    id: "chromebook",
    title: "Chromebook Gaming - Google",
    description:
      "This platform elegantly spotlights Google’s Chromebook as a capable gaming hub, seamlessly integrating thousands of titles into its ecosystem. Its design ensures users can effortlessly connect with an expansive range of games. The result highlights the device’s unexpectedly robust entertainment potential.",
    madeWith: ["Google Lit", "CSS3", "Contentful", "JavaScript"],
    imgSrc: ChromeImage,
    liveLink: "https://chromebookgaminghub.com/",
  },
  
  {
    id: "wheelOfConsent",
    title: "Wheel of Consent - DRVS",
    description:
      `Developed for Durham Region’s Victim Services, this custom interactive learning game teaches youth about consent in relationships. It leverages dynamic animations, text-to-speech capabilities, and hand-drawn illustrations to create a highly engaging, accessible experience.`,
    madeWith: ["NextJS", "Framer-Motion",  "TypeScript", "ReactJS"],
    imgSrc: WheelImage,
    liveLink: "https://www.victimservicesdurham.ca/game",
  },
  {
    id: "canadiana",
    title: "Encyclopedia Canadiana",
    description:
      "This bilingual digital encyclopedia weaves together Canadian facts and imagery within a vintage, curated aesthetic. Its elegant design, paired with carefully selected content, offers a unique and engaging user experience. The result celebrates Canada's rich heritage and inspires curiosity about its cultural tapestry.",
    madeWith: ["ReactJS", "Sass", "Restful API"],
    imgSrc: CanadaImage,
    liveLink: "https://canadaencylco.netlify.app/",
    githubLink: "https://github.com/korzenstein/canadaDay",
  },
];
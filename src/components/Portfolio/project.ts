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
      "This React.js children's game incorporates OpenAI's chatbot API integration for interactive natural language, and extensive animations to bring to the life rich illustrations of this fantasy world to life. ",
    madeWith: ["React", "Style-Components", "API", "Framer-Motion"],
    imgSrc: BadgerImage,
    liveLink: "https://badgerandfox.netlify.app/",
    githubLink: "https://github.com/korzenstein/learningGame",
  },
  {
    id: "catchMyiPhone",
    title: "Catch My iPhone - Verizon",
    description:
      `'Webby Award' winning mobile Augmented Reality game for Verizon, with immersive animations and the sounds of J Balvin, that brings users closer to their favourite artist and the chance of winning a new iPhone.`,
    madeWith: ["NextJS", "A-Frame", "8thwall", "ThreeJS", "TypeScript"],
    imgSrc: CatchImage,
    liveLink: "https://www.judgeseyesonly.com/verizon-catch-my-iphone/",
  },
  {
    id: "chromebook",
    title: "Chromebook Gaming - Google",
    description:
      "A beautiful showcase for Google's Chromebook laptop as a gaming platform, with integration into Google's library of thousands of titles to connect users with device's suprisingly endless potential. ",
    madeWith: ["Lit", "CSS3", "Contentful", "JavaScript"],
    imgSrc: ChromeImage,
    liveLink: "https://www.judgeseyesonly.com/verizon-catch-my-iphone/",
  },
  
  {
    id: "wheelOfConsent",
    title: "Wheel of Consent - DRVS",
    description:
      `A custom game built for Durham Region's Victims Services division to help teach youth about consent in relationships.`,
    madeWith: ["NextJS", "Framer-Motion",  "JavaScript"],
    imgSrc: WheelImage,
    liveLink: "https://www.victimservicesdurham.ca/game",
  },
  {
    id: "canadiana",
    title: "Encyclopedia Canadiana",
    description:
      "A simple, bilingual encyclopedia with a database powered by React.js + a custom REST API. This beautiful site stitches together Canadian facts and images in a vintage Encyclopedia aesthetic.",
    madeWith: ["React", "Sass", "API"],
    imgSrc: CanadaImage,
    liveLink: "https://canadaencylco.netlify.app/",
    githubLink: "https://github.com/korzenstein/canadaDay",
  },
];
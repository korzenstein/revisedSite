import BadgerImage from '../../assets/foxAndBadger.jpg'
import CatchImage from '../../assets/catchMyiPhone.png'
import ChromeImage from '../../assets/chromebook.jpg'
import WheelImage from '../../assets/wheel.jpg'


export const projects = [
  {
    id: "badgerFox",
    title: "Badger + Fox",
    description:
      "This React.js children's game incorporates OpenAI's GPT-3 powered API for interactive natural language, and extensive 'Framer Motion' animations to bring to the life rich illustrations of this fantasy world. ",
    madeWith: ["React", "Sass", "API"],
    imgSrc: BadgerImage,
    liveLink: "https://badgerandfox.netlify.app/",
    githubLink: "https://github.com/korzenstein/learningGame",
  },
  {
    id: "catchMyiPhone",
    title: "Catch My iPhone - Verizon",
    description:
      "AR game made with A-Frame, 8thWall, NextJS",
    madeWith: ["React", "Sass", "API"],
    imgSrc: CatchImage,
    liveLink: "https://www.judgeseyesonly.com/verizon-catch-my-iphone/",
  },
  {
    id: "chromebook",
    title: "Chromebook Gaming - Google",
    description:
      "AR game made with A-Frame, 8thWall, NextJS",
    madeWith: ["React", "Sass", "API"],
    imgSrc: ChromeImage,
    liveLink: "https://www.judgeseyesonly.com/verizon-catch-my-iphone/",
  },
  {
    id: "canadiana",
    title: "Encyclopedia Canadiana",
    description:
      "A simple, bilingual encyclopedia with a database powered by React.js + a custom REST API. This beautiful site stitches together Canadian facts and images in a vintage Encyclopedia aesthetic.",
    madeWith: ["React", "Sass", "API"],
    imgSrc: "./assets/canada.png",
    liveLink: "https://canadaencylco.netlify.app/",
    githubLink: "https://github.com/korzenstein/canadaDay",
  },
  {
    id: "wheelOfConsent",
    title: "Wheel of Consent - DRVS",
    description:
      "A custom game built for Durham Region's Victims Services division to help teach youth about consent.",
    madeWith: ["HTML5", "CSS3", "Sass", "JavaScript"],
    imgSrc: WheelImage,
    liveLink: "https://www.victimservicesdurham.ca/game",
  },
];
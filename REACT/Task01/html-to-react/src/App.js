import "./App.css";
import Header from "./components/Header/index";
import SectionOne from "./components/SectionOne/index";
import SectionTwo from "./components/SectionTwo/index";
import SectionThree from "./components/SectionThree/index";
import SectionFour from "./components/SectionFour/index";
import SectionQuote from "./components/SectionQuote/index";

function App() {
  const paragraphs = [
    {
      title: "PRODUCT",
      content: [
        "LinguaLive fosters students’ practical application of language skills acquired in the classroom by providing a platform for learners to engage in structured conversations with native speakers. We collaborated with secondary language students and professional linguists on this project after observing that language learners need a way to practice speaking because the goal of learning a new language is to have real-world conversations.",
      ],
    },
    {
      title: "THE SCOPE",
      content: [
        "Create wed responsive platform for students to practice speaking the language they are learning with native speakers;",
        "Enable students to engage in conversation topics of personal interest;",
        "Give students a sense of progress through structured dialogues that leverage knowledge acquired in the classroom;",
        "Allow native speakers to provide constructive feedback to foster student’s development.",
      ],
    },
    {
      title: "DESIGN PROCESS",
      subtitle: "Research",
      content: [
        "This process includes user interviews, competitive analysis, research synthesis, persona development, user stories and determination of the information architecture for the product. Below is a quote from one of our user interviews that encompasses a common sentiment of our users.",
      ],
    },{
      subtitle: "The problem",
      content: [
        'After interviewing several language students, we came up with a problem statement that encompasses the key pain point we aimed to solve with design thinking.'
      ],
    },  
  ];

  return (
    <div className="app">
      <Header />
      <SectionOne paragraphs={paragraphs} />
      <SectionTwo />
      <SectionThree paragraphs={paragraphs} />
      <SectionQuote />
      <SectionFour paragraphs={paragraphs}/>
    </div>
  );
}

export default App;

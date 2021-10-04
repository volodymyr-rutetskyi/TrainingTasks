import "./App.css";
import Header from "./components/Header/index";
import SectionOne from "./components/SectionOne/index";

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
  ];

  return (
    <div className="app">
      <Header />
      <SectionOne paragraphs={paragraphs} />
    </div>
  );
}

export default App;

import "./App.css";
import { useState } from "react";
// card properties
import Card from "@mui/material/Card";
import CardMedia from "@mui/material/CardMedia";
import CardContent from "@mui/material/CardContent";
import CardActions from "@mui/material/CardActions";
import IconButton from "@mui/material/IconButton";
import FavoriteIcon from "@mui/icons-material/Favorite";
import ShareIcon from "@mui/icons-material/Share";
import { Button } from "@mui/material";
import { ThemeProvider, createTheme } from "@mui/material/styles";

// import images
import quiz1img from "./images/www.jpg";
import quiz2img from "./images/maxim-hopman-Hin-rzhOdWs-unsplash.jpg";
import quiz3img from "./images/seo.jpg";
import quiz4img from "./images/pl langs.jpg";
import quiz5img from "./images/vir.jpg";

import CssBaseline from "@mui/material/CssBaseline";

const darkTheme = createTheme({
  palette: {
    mode: "dark",
  },
});

function App() {
  const question = [
    {
      questionText: "What does the Internet prefix WWW stand for ?",
      answerOptions: [
        { answerText: "A) Wide Width Wickets", isCorrect: false },
        { answerText: "B) World Wide Web", isCorrect: true },
        { answerText: "C) Worldwide Weather", isCorrect: false },
        { answerText: "D) Western Washington World", isCorrect: false },
      ],
      questionImg: quiz1img,
    },
    {
      questionText: "Who founded Apple Computer ?",
      answerOptions: [
        { answerText: "A) Stephen Fry", isCorrect: false },
        { answerText: "B) Bill Gates", isCorrect: false },
        { answerText: "C) Steve Jobs", isCorrect: true },
        { answerText: "D) Stephen Hawking", isCorrect: false },
      ],
      questionImg: quiz2img,
    },
    {
      questionText: "Which one is the first search engine in internet ?",
      answerOptions: [
        { answerText: "A) Google", isCorrect: false },
        { answerText: "B) Archie", isCorrect: true },
        { answerText: "C) Altavista", isCorrect: false },
        { answerText: "D) WAIS", isCorrect: false },
      ],
      questionImg: quiz3img,
    },
    {
      questionText: "How many computer languages are in use ?",
      answerOptions: [
        { answerText: "A) 2000", isCorrect: true },
        { answerText: "B) 500", isCorrect: false },
        { answerText: "C) 50", isCorrect: false },
        { answerText: "D) 20", isCorrect: false },
      ],
      questionImg: quiz4img,
    },
    {
      questionText: "First computer virus is known as ?",
      answerOptions: [
        { answerText: "A) Rabbit", isCorrect: false },
        { answerText: "B) Creeper Virus", isCorrect: false },
        { answerText: "C) SCA Virus", isCorrect: false },
        { answerText: "D) ELK Cloner", isCorrect: true },
      ],
      questionImg: quiz5img,
    },
  ];

  // result statement
  const resultStatement = [
    { resultText: "Huh ! YOU LOST 😵" },
    {
      resultText: "NEED SOME IMPROVEMENTS 👍",
    },
    {
      resultText: "LOOKS GOOD ! 👌",
    },
    {
      resultText: "THAT WAS SO CLOSE ! 🤩",
    },
    {
      resultText: "YaY, YOU WON ! 🏅",
    },
  ];

  const [questionCount, setQuestionCount] = useState(0);
  const [result, setResult] = useState(false);
  const [score, setScore] = useState(0);

  // handlers
  const updateQuizHandler = (isCorrect  ) => {
    if (isCorrect === true) {
      setScore(score + 1);
    }

    const nextquestion = questionCount + 1;

    if (nextquestion < question.length) {
      setQuestionCount(nextquestion);
    } else {
      setResult(true);
    }
  };

  return (
    <ThemeProvider theme={darkTheme}>
      <CssBaseline />

      <div className="App">
        <div className="header">
          <h1 className="logoText">Quizy</h1>
        </div>

        <Card
          sx={{
            width: 500,
            // height: 600,
            padding: "10px 40px",
            borderRadius: "10px",
            boxShadow: "0px 5px 15px rgba(0,0,0,0.5)",
          }}
        >
          {result ? (
            <div className="result">
              <h2>{resultStatement[score].resultText}</h2>

              <div className="scoreBoard">
                <p>Score</p>
                <h1>
                  {" "}
                  {score+1}/{question.length}
                </h1>
              </div>

              <div style={{ margin: "0 0 60px 0" }}>
                <Button
                  variant="outlined"
                  sx={{ fontWeight: "bold" }}
                  onClick={() => {
                    window.location.reload(true);
                  }}
                >
                  RESTART
                </Button>
              </div>
            </div>
          ) : (
            <div className="quizWrapper">
              <div className="cardHeader">
                <h1>
                  Question{" "}
                  <span>
                    {questionCount + 1}/<small>{question.length}</small>
                  </span>
                </h1>

                <CardActions sx={{ paddingRight: "0" }}>
                  <IconButton>
                    <FavoriteIcon sx={{ color: "#0088ff" }} />
                  </IconButton>

                  <IconButton>
                    <ShareIcon sx={{ color: "#0088ff", paddingRight: "0" }} />
                  </IconButton>
                </CardActions>
              </div>

              <CardMedia
                component="img"
                height="180"
                sx={{
                  bgcolor: "#adadad50",
                  borderRadius: "6px",
                  boxShadow: "0px 5px 15px rgba(0,0,0,0.3)",
                }}
                image={question[questionCount].questionImg}
                alt="Quiz Image"
              />

              <div className="cardContent">
                <div className="ques">
                  <p> {question[questionCount].questionText}</p>
                </div>

                <div className="options">
                  {question[questionCount].answerOptions.map((val, key) => {
                    return (
                      <button
                        className="optionBtn"
                        key={key}
                        onClick={() => {
                          updateQuizHandler(val.isCorrect);
                        }}
                      >
                        {val.answerText}
                      </button>
                    );
                  })}
                </div>
              </div>
            </div>
          )}
        </Card>
      </div>
    </ThemeProvider>
  );
}

export default App;

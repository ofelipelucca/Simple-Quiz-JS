var quiz = {
    questions: [
      {
        question: "(1/10) Quem foi a primeira pessoa a viajar no Espaço?",
        choices: ["Buzz Aldrin","Neil Armstrong","Yuri Gagarin","Laika"],
        answer: "Yuri Gagarin"
      },
      {
        question: "(2/10) Qual o ponto mais alto do Brasil?",
        choices: ["Pico da Neblina","Pico da Bandeira","Pico das Agulhas Negras","Monte Roraima"],
        answer: "Pico da Neblina"
      },
      {
        question: "(3/10) Quantos ossos temos no nosso corpo?",
        choices: ["200","206","126","167"],
        answer: "206"
      },
      {
        question: "(4/10) Qual o maior planeta do sistema solar?",
        choices: ["Marte","Júpiter","Saturno","Terra"],
        answer: "Júpiter"
      },
      {
        question: "(5/10) Qual tipo de sistema sempre colapsou e sempre vai colapsar alguma hora?",
        choices: ["Ditado pelo povo","Imperialista","Composto por hierarquias entre classes"],
        answer: "Composto por hierarquias entre classes"
      },
      {
        question: "(6/10) Depois do futebol, qual o esporte mais popular no Brasil?",
        choices: ["Vôlei","Basquete","Golfe","UFC"],
        answer: "Vôlei"
      },
      {
        question: "(7/10) Qual a primeira mulher a ganhar um prêmio Nobel?",
        choices: ["Madre Teresa de Calcutá","Marie Curie","Valentina Tereshkova","Irène Joliot-Curie"],
        answer:"Marie Curie"
      },
      {
        question: "(8/10) Qual dos impérios não possui um idioma escrito?",
        choices: ["Inca","Egípcio","Romano","Azteca"],
        answer:"Inca"
      },
      {
        question: "(9/10) Qual jogo ganhou o Game of The Year em 2018?",
        choices: ["FIFA 18","God of War","The Last of Us Part II","LOL"],
        answer:"God of War"
      },
      {
        question: "(10/10) Qual o maior time do mundo?",
        choices: ["O GALO DOIDO","outro"],
        answer:"O GALO DOIDO"
      }
    ],
    currentQuestion: 0,
    displayQuestion: function() {
      var question = quiz.questions[quiz.currentQuestion].question;
      var choices = quiz.questions[quiz.currentQuestion].choices;
      var choicesHTML = "";
      for (var i = 0; i < choices.length; i++) {
        choicesHTML += "<button onclick='quiz.checkAnswer(this)'>" + choices[i] + "</button>";
      }
      document.getElementById("question").innerHTML = question;
      document.getElementById("choices").innerHTML = choicesHTML;
    },

    checkAnswer: function(button) {
      var answer = quiz.questions[quiz.currentQuestion].answer;
      if (button.innerHTML == answer) {
          alert("ACERTOU!!!");
        quiz.currentQuestion++;
        if (quiz.currentQuestion < quiz.questions.length) {
          quiz.displayQuestion();
        } else {
          window.location.href = "end.html";
        }
      } else {
        window.location.href = "quizMiss.html";
      }
    }
  }
  
  quiz.displayQuestion();
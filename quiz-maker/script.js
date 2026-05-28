let quizzes = [];
let currentQuiz = null;
let currentQuestionIndex = 0;
let score = 0;

// ADD QUESTION

function addQuestion(){

    const title = document.getElementById("quizTitle").value;

    const question = document.getElementById("question").value;

    const option1 = document.getElementById("option1").value;
    const option2 = document.getElementById("option2").value;
    const option3 = document.getElementById("option3").value;
    const option4 = document.getElementById("option4").value;

    const correctAnswer = document.getElementById("correctAnswer").value;

    if(
        title === "" ||
        question === "" ||
        option1 === "" ||
        option2 === "" ||
        option3 === "" ||
        option4 === "" ||
        correctAnswer === ""
    ){
        alert("Please fill all fields");
        return;
    }

    let quiz = quizzes.find(q => q.title === title);

    const newQuestion = {
        question: question,
        options: [option1, option2, option3, option4],
        correct: parseInt(correctAnswer)
    };

    if(quiz){
        quiz.questions.push(newQuestion);
    }else{
        quizzes.push({
            title: title,
            questions: [newQuestion]
        });
    }

    document.getElementById("createMessage").innerText =
        "Question added successfully!";

    clearForm();

    renderQuizList();
}

// CLEAR FORM

function clearForm(){

    document.getElementById("question").value = "";
    document.getElementById("option1").value = "";
    document.getElementById("option2").value = "";
    document.getElementById("option3").value = "";
    document.getElementById("option4").value = "";
    document.getElementById("correctAnswer").value = "";
}

// SAVE QUIZ

function saveQuiz(){

    if(quizzes.length === 0){
        alert("Add at least one question");
        return;
    }

    document.getElementById("createMessage").innerText =
        "Quiz saved successfully!";
}

// RENDER QUIZ LIST

function renderQuizList(){

    const quizList = document.getElementById("quizList");

    quizList.innerHTML = "";

    quizzes.forEach((quiz,index) => {

        const div = document.createElement("div");

        div.classList.add("quiz-item");

        div.innerHTML = `
            <h3>${quiz.title}</h3>
            <p>${quiz.questions.length} Questions</p>
            <button onclick="startQuiz(${index})">
                Start Quiz
            </button>
        `;

        quizList.appendChild(div);

    });

}

// START QUIZ

function startQuiz(index){

    currentQuiz = quizzes[index];

    currentQuestionIndex = 0;

    score = 0;

    showQuestion();
}

// SHOW QUESTION

function showQuestion(){

    const questionData =
        currentQuiz.questions[currentQuestionIndex];

    document.getElementById("activeQuizTitle").innerText =
        currentQuiz.title;

    document.getElementById("activeQuestion").innerText =
        questionData.question;

    const optionsBox =
        document.getElementById("optionsBox");

    optionsBox.innerHTML = "";

    questionData.options.forEach((option,index) => {

        const button =
            document.createElement("button");

        button.classList.add("option-btn");

        button.innerText = option;

        button.onclick = () => selectAnswer(index);

        optionsBox.appendChild(button);

    });

    document.getElementById("nextBtn").style.display =
        "none";
}

// SELECT ANSWER

function selectAnswer(selectedIndex){

    const correctIndex =
        currentQuiz.questions[currentQuestionIndex].correct;

    if(selectedIndex === correctIndex){
        score++;
    }

    document.getElementById("nextBtn").style.display =
        "block";
}

// NEXT QUESTION

function nextQuestion(){

    currentQuestionIndex++;

    if(
        currentQuestionIndex <
        currentQuiz.questions.length
    ){
        showQuestion();
    }else{
        showResult();
    }
}

// SHOW RESULT

function showResult(){

    document.getElementById("scoreText").innerText =
        `You scored ${score} out of ${currentQuiz.questions.length}`;

    let feedback = "";

    if(score === currentQuiz.questions.length){
        feedback = "Excellent Performance 🚀";
    }
    else if(score >= 2){
        feedback = "Good Job 🔥";
    }
    else{
        feedback = "Keep Practicing 💡";
    }

    document.getElementById("feedbackText").innerText =
        feedback;

    document.getElementById("result").scrollIntoView({
        behavior:"smooth"
    });
}
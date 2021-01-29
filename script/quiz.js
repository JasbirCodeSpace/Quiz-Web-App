let question_number = 0
let score = 0
let responses = new Array(10)
let user_name = ""
let quiz_time = 2*60
let time_taken = 0
let timer = quiz_time

window.onload = ()=>{
    document.getElementsByClassName('buttons')[0].style.display = 'none'
    takeUserName()
    shuffleQuestions()
}

startQuiz = (e)=>{
    e.preventDefault()
    let user = document.getElementById('user-name').value
    if(user!==null && user!==''){
        user_name = user.trim()
        document.getElementsByClassName('buttons')[0].style.display = 'flex'
        displayQuestion(question_number)
        startTimer(quiz_time,"time")
    }else{
        alert('Enter your name before starting quiz')
    }

}
displayQuestion = (number)=>{
    let container = document.getElementById('quiz-question')
    let question = questions[number]
    let options = question.options
    let content= `<h3 class="question-heading">Q${number+1}) ${question.question}</h3>
                    <ul class="options-group">`;
    options.forEach((option, index) => {
        content += `<li class="option">${option}</li>`
    });
    content +=`</ul>`
    container.innerHTML = content
    if(responses[number]!=null){
        let list_items = document.querySelectorAll('li.option')
        let checked_list_item = list_items[responses[number]-1]
        if(checkResponse(questions[number], number)){
            changeColor(checked_list_item,'#00e600', '#fff' )
        }else{
            changeColor(checked_list_item,'#ff0000', '#fff' )
            changeColor(list_items[questions[question_number].answer-1], '#00e600', '#fff')
        }
    }
    toggleActive()
}

toggleActive = ()=>{
    let options = document.querySelectorAll('li.option')
    options.forEach((option,index) => {
        option.onclick = ()=>{
            if(responses[question_number])return
            [].forEach.call(options, function (el) {
                changeColor(el, '#fff', '#000')
                el.classList.remove('active')
            })
            option.classList.add('active')
            setResponse(question_number, index)
            if(checkResponse(questions[question_number],question_number)){
                changeColor(option, '#00e600', '#fff')
            }
            else{
                changeColor(option, '#ff0000', '#fff')
                changeColor(options[questions[question_number].answer-1], '#00e600', '#fff')
            }
            
        }
    });

}

previous = ()=>{
    document.getElementById('next').innerText = 'Next Question'
    if(question_number===0){

    }else{
        question_number--
        displayQuestion(question_number)
    }

}

next = ()=>{
    if(question_number==questions.length-1){
        document.getElementById('next').innerText = 'Submit'
        submitQuiz()
    }
    else{
        question_number++
        displayQuestion(question_number)
        if(question_number==questions.length-1){
            document.getElementById('next').innerText = 'Submit'
        }
    }


}

setResponse = (question, index)=>{
    responses[question]= index+1
}

checkResponse = (question, index)=>{
    return question.answer == responses[index]
}

getTotalScore = ()=>{
    score = 0
    questions.forEach((question, index)=> {
        if(question.answer === responses[index])
            score++
    });
    return score
}

changeColor = (element, background_color, text_color)=>{
    element.style.backgroundColor = background_color
    element.style.color = text_color
}

submitQuiz = ()=>{
    time_taken = quiz_time - timer
    let minutes = parseInt(time_taken / 60, 10)
    let seconds = parseInt(time_taken % 60, 10)
    getTotalScore()
    setHighScore()
    let high_scorer = localStorage.getItem('quiz_highscorer')
    let high_score = localStorage.getItem('quiz_highscore')
    let container = document.getElementById('quiz-question')
    document.getElementsByClassName('buttons')[0].style.display = 'none'
    document.getElementById('quiz-time').style.display = 'none'
    let content = `
    <div id='score-card'>
    <img src="images/medal.svg" alt="" width="100px" height="100px">
    <h2>Well done! <span>${user_name}</span></h2>
    <h2 id='score'>Your Score <span>${score}/10</span></h2>
    <h3 id='time_taken'>Time taken <span>${minutes} min ${seconds} sec</span></h3>
    <div id='high-score'>
    <h2>High Score: <span>${high_score}</span></h2>
    <h2>User: <span>${high_scorer}</span></h2>
    </div>
    </div>`
    container.innerHTML = content
}

takeUserName = ()=>{
    let container = document.getElementById('quiz-question')
    content = `
    <form class="user-form" name="user-form" onsubmit="startQuiz(event)">
        <input type="text" id="user-name" name="user-name" placeholder="Enter your name ...">
        <button class='button'>Start Quiz</button>
    </form>
    `   
    container.innerHTML = content
}

shuffleQuestions = ()=>{
    for (let i = questions.length-1; i >0; i--) {
        const j = Math.floor(Math.random()*(i+1))
        let temp = questions[j]
        questions[j] = questions[i]
        questions[i] = temp
        
    }
}

startTimer = (duration, id)=>{
    let minutes, seconds
    let element = document.getElementById(id)
    setInterval(function () {
        minutes = parseInt(timer / 60, 10)
        seconds = parseInt(timer % 60, 10)

        minutes = minutes < 10 ? "0" + minutes : minutes
        seconds = seconds < 10 ? "0" + seconds : seconds

        element.textContent = minutes + ":" + seconds
        if (--timer < 0) {
            timer = 0
           submitQuiz()
        }
    }, 1000)
}

setHighScore = ()=>{
let score = getTotalScore()
let highscore = localStorage.getItem("quiz_highscore")
let user = localStorage.getItem("quiz_highscorer")

if(highscore !== null){
    if (score > highscore) {
        localStorage.setItem("quiz_highscore", score)  
        localStorage.setItem("quiz_highscorer", user_name)  
    }
}
else{
    localStorage.setItem("quiz_highscore", score)
    localStorage.setItem("quiz_highscorer", user_name) 
}
}
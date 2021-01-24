let question_number = 0;
let score = 0;

window.onload = ()=>{
    displayQuestion(question_number)
}

displayQuestion = (number)=>{
    let container = document.getElementById('quiz-question')
    let question = questions[number]
    let options = question.options
    let content= `<h3 class="question-heading">Q${number+1}) ${question.question}</h3>
                    <ul class="options-group">`;
    options.forEach(option => {
        content += `<li class="option">${option}</li>`
    });
    content +=`</ul>`
    container.innerHTML = content
    toggleActive()
}

toggleActive = ()=>{
    let options = document.querySelectorAll('li.option')
    options.forEach(option => {
        option.onclick = ()=>{
            [].forEach.call(options, function (el) {
                el.classList.remove('active')
            })
            option.classList.add('active')
        }
    });

}

previous = ()=>{
    if(question_number==0){

    }else{
        question_number--
    }
    displayQuestion(question_number)
}

next = ()=>{
    if(question_number==questions.length-1){}
    else{
        question_number++
    }
    displayQuestion(question_number)

}


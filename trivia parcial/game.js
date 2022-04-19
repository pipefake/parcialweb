const question = document.querySelector('#question');
const choices = Array.from(document.querySelectorAll('.choice-text'));
const progressText = document.querySelector('#progressText');
const scoreText = document.querySelector('#score');
const scoreTextBad = document.querySelector('#scoreBad');
const progressBarFull = document.querySelector('#progressBarFull');

let currentQuestion = {}
let acceptingAnswers = true
let score = 0
let scorebad =0
let questionCounter = 0
let availableQuestions = []

let questions = [
    { question:'¿Cuantos grammys ganó Bad Bunny?',
    choice1:'6',
    choice2:'3',
    choice3:'4',
    choice4:'2',
    answer: 1,
    },
    { question:'¿Cuantos años tiene Karol G?',
    choice1:'30',
    choice2:'29',
    choice3:'28',
    choice4:'31',
    answer:4,
    },
    { question:'¿Cuál es el nombre de Maluma?',
    choice1:'Jose Manuel',
    choice2:'Ramiro Andres',
    choice3:'Juan Luis ',
    choice4:'Cesar',
    answer:3,
    },
    { question:'¿Cuál es el álbum más famoso de Daddy Yankee?',
    choice1:'Barrio Fino',
    choice2:'Prestige',
    choice3:'Mundial',
    choice4:'LegenDaddy',
    answer:1,
    },
    { question:'¿Cuántos álbumes tiene Anuel AA?',
    choice1:'1',
    choice2:'3',
    choice3:'4',
    choice4:'2',
    answer:3,
    },
    { question:'¿Cuantós años tiene Bad Bunny?',
    choice1:'23',
    choice2:'26',
    choice3:'25',
    choice4:'28',
    answer:4,
    },
    { question:'¿Cuál es el apodo de Karol G?',
    choice1:'Karola',
    choice2:'Reina',
    choice3:'Bichota',
    choice4:'Peliazul',
    answer:3,
    },
    { question:'¿Cuántos años tiene Maluma?',
    choice1:'30',
    choice2:'25',
    choice3:'28',
    choice4:'27',
    answer: 3,
    },
    { question:'¿Cómo se llama Daddy Yankee?',
    choice1:'Raúl',
    choice2:'Jorge',
    choice3:'Manuel',
    choice4:'Ramón',
    answer:4,
    },
    { question:'¿Cómo se llama Anuel AA?',
    choice1:'Emanuel',
    choice2:'Manuel',
    choice3:'Miguel',
    choice4:'Luis',
    answer:1,
    },
]

const SCORE_POINTS = 1
const MAX_QUESTIONS = 10

startGame = () => {
    questionCounter = 0
    score = 0
    availableQuestions = [...questions]
    getNewQuestion()
}

getNewQuestion = () => {
    if(availableQuestions.length === 0 || questionCounter > MAX_QUESTIONS) {
        localStorage.setItem('mostRecentScore', score)

        return window.location.assign('end.html')
    }

    questionCounter++
    progressText.innerText = `Pregunta ${questionCounter} de ${MAX_QUESTIONS}`
    progressBarFull.style.width = `${(questionCounter/MAX_QUESTIONS) * 100}%`
    
    const questionsIndex = Math.floor(Math.random() * availableQuestions.length)
    currentQuestion = availableQuestions[questionsIndex]
    question.innerText = currentQuestion.question

    choices.forEach(choice => {
        const number = choice.dataset['number']
        choice.innerText = currentQuestion['choice' + number]
    })

    availableQuestions.splice(questionsIndex, 1)

    acceptingAnswers = true
}

choices.forEach(choice => {
    choice.addEventListener('click', e => {
        if(!acceptingAnswers) return

        acceptingAnswers = false
        const selectedChoice = e.target
        const selectedAnswer = selectedChoice.dataset['number']

        let classToApply = selectedAnswer == currentQuestion.answer ? 'correct' : 'incorrect'

        if(classToApply === 'correct') {
            incrementScore(SCORE_POINTS)
        }else{
            incrementBadScore(SCORE_POINTS)
        }

        selectedChoice.parentElement.classList.add(classToApply)

        setTimeout(() => {
            selectedChoice.parentElement.classList.remove(classToApply)
            getNewQuestion()

        }, 1000)
    })
})

incrementScore = num => {
    score +=num
    scoreText.innerText = score
}
incrementBadScore = num => {
    scorebad +=num
    scoreTextBad.innerText = scorebad
}

startGame()
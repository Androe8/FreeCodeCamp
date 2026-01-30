const questions =[
{
  category: "easy",
  question: "Who is the president of Colombia this year?",
  choices : ["Gustavo Petro", "xxx1", "xxx2"],
  answer:"Gustavo Petro"
},
{
  category: "medium",
  question: "What is the result of mixing yellow and blue?",
  choices : ["pink", "green", "black"],
  answer:"green"
},
{
  category: "medium",
  question: "What is the result of 25 + 3 * 2 + 2?",
  choices : ["33", "58", "56"],
  answer:"33"
},
{
  category: "easy",
  question: "2, 6, 12, 20, 30, ?",
  choices : ["40", "32", "42"],
  answer:"42"
},
{
  category: "easy",
  question: "The first president of Chile is?",
  choices : ["Manuel Blanco", "Andres Rodriguez", "Nicole Chilin"],
  answer:"Manuel Blanco"
}
]

function getRandomQuestion(array){
  const index = Math.floor(Math.random()*array.length)
  return array[index]
}

function getRandomComputerChoice(choicesArray){
  const choice = Math.floor(Math.random()*choicesArray.length)
  return choicesArray[choice]
}

function getResults(questionObj, computersChoice){
    if(questionObj.answer === computersChoice){
      return "The computer's choice is correct!"
    }else
    {
     return `The computer's choice is wrong. The correct answer is: ${questionObj.answer}`
    }
}

const randomQuestion = getRandomQuestion(questions)
const pcRamdomChoice= getRandomComputerChoice(randomQuestion.choices)
const result = getResults(randomQuestion,pcRamdomChoice)

console.log(randomQuestion.question)
console.log(pcRamdomChoice)
console.log(result)



// 

const play = document.querySelector(".play");
const btnque = document.querySelector(".question")
const start = document.querySelector(".start")
const main_1 = document.querySelector(".main_1")
play.addEventListener("click", () => {
  start.style.display = "none"
  mainDiv.style.display = "block"
  startTheGame()
});

btnque.addEventListener("click", () => {
  start.style.display = "none"
  mainDiv.style.display = "none"
  crearteQuestions()
});

const body = document.querySelector("body")

const hangManQu = [
  {
    que : "commonly referred to as the domestic pet or house pet",
    ans : "cat",
  },
  {
    que : "An animal use all four limbs—two arms and two legs—to walk and run. Their hands and feet are good for grasping tree branches",
    ans : "monkey",
  },
  {
    que : "A pet animal has sharp teeth so that it can eat flesh very easily, it has four legs, sometimes used for hunting",
    ans : "dog"
  },
  {
    que : "the largest animal on earth and have distinctly massive bodies, large ears, and long trunks. They use their trunks to pick up objects, trumpet warnings",
    ans : "elephant"
  },
]

const alphabet = ["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z",];

let images = ["PIC/hangman_pic_1.png","PIC/hangman_pic_2.png","PIC/hangman_pic_3.png","PIC/hangman_pic_4.png","PIC/hangman_pic_5.png","PIC/hangman_pic_6.png","PIC/hangman_pic_7.png"]

const ansSpace = []

const mainDiv = document.createElement("div")
mainDiv.classList.add("main_2")
const timerDiv = document.createElement("div")
timerDiv.classList.add("timer")
const question = document.createElement("div")
const pics = document.createElement("img")
const alpha = document.createElement("div")
alpha.classList.add("alphaChar")
const divSpace = document.createElement("div")
const btn_1 = document.createElement("button")
btn_1.innerText = "Play again"
const btn_2 = document.createElement("button")
btn_2.innerText = "Quit"
btn_1.style.alignItems = "center"

// create more que's from the user
const styleDiv = document.createElement("div")
styleDiv.classList.add("q_div_layout")
const queDiv = document.createElement("div")
queDiv.innerText = "question"
queDiv.classList.add("que_div")
const queInput = document.createElement("textarea")
queInput.rows = 10
queInput.classList.add("que_input_div")
const ansDiv = document.createElement("div")
ansDiv.innerText = "answer"
ansDiv.classList.add("ans_div")
const ansInput = document.createElement("input")
ansInput.classList.add("ans_input_div")
const btnInput = document.createElement("button")
btnInput.innerText = "Insert the question"
btnInput.classList.add("btn_input_div")
const btnBack = document.createElement("button")
btnBack.innerText = "Back"
btnBack.classList.add("btn_back_div")
//const btnInputLayout = document.createElement("button")

// question function
const crearteQuestions = () =>
{
  // insert elements
  main_1.append(styleDiv)
  styleDiv.append(queDiv,queInput,ansDiv,ansInput,btnInput,btnBack)
  styleDiv.style.display = "block"
}
// insert button
btnInput.addEventListener("click" , ()=>
{
  insertF()
})

// back to main
btnBack.addEventListener("click" , ()=>
{
  styleDiv.style.display = "none"
  restart()
})

// insert function
const insertF = () =>
{
  hangManQu.push({que:queInput.value , ans:ansInput.value}) 
  console.log(hangManQu)
}


const getRandomInt = (max) => {
  return Math.floor(Math.random() * max);
}

let q = hangManQu[getRandomInt(hangManQu.length)]

let min = 60

const timeOut = () =>
{
  if(min > 0)
  {
    min = min -1
    timerDiv.innerText = min
  }
  if(min === 0)
  {
    timerDiv.innerText = min
    pics.src = images[images.length - 1]
    document.querySelector(".alphaChar").innerText = ""
    finish()
  }
}

let t

const startTheGame = () =>
{
    for(let i = 0 ; i < q.ans.length ; i++)
    {
      ansSpace.push("_")
    }

    t = setInterval(timeOut, 1000)

    alphabet.forEach((char , i)=>{
      const btn = document.createElement("button")
      btn.innerText = char
      alpha.append(btn)
      btn.addEventListener("click",(e)=>{
        if(q.ans.includes(e.target.innerText))
        {
          for(const key in q.ans) 
          {
            if(q.ans[key] === e.target.innerText)
            {
              ansSpace.splice(key, 1, q.ans[key]);
              divSpace.innerText = ansSpace.join(" ")
            }
          }
          if(!divSpace.innerText.includes("_"))
          {
            finish()
          }
        }
        else
        {
          console.log("f")
          e.target.style.display = "none"
          images.shift()
          if(images[0] === undefined)
          {
            document.querySelector(".alphaChar").innerText = ""
            finish()
          }
          else
          {
            pics.src = images[0]
          }
        }
    })

    question.innerText = q.que
    divSpace.innerText = ansSpace.join(" ")
    pics.src = images[0]
    body.append(mainDiv)
    mainDiv.append(timerDiv,pics,question,alpha)
    question.append(divSpace)
  })
}

const finish = () =>
{
  clearInterval(t)
  btn_1.style.display = "block"
  btn_2.style.display = "block"
  console.log(divSpace.innerText)
  body.append(btn_1)
  body.append(btn_2)
  document.querySelector(".alphaChar").innerText = ""
  btn_1.addEventListener("click" , ()=>
  {
    document.querySelector(".alphaChar").innerText = ""
    palyAgain()
  })
  btn_2.addEventListener("click" , ()=>
  {
    document.querySelector(".alphaChar").innerText = ""
    restart()
  })
}

const restart = () =>
{
  clearInterval(t)
  min = 60
  mainDiv.style.display = "none"
  start.style.display = "block"
  images = ["PIC/hangman_pic_1.png","PIC/hangman_pic_2.png","PIC/hangman_pic_3.png","PIC/hangman_pic_4.png","PIC/hangman_pic_5.png","PIC/hangman_pic_6.png","PIC/hangman_pic_7.png"]
  for(let i = 0 ; i<q.ans.length ; i++)
  {
    ansSpace.shift()
  }
  btn_1.style.display = "none"
  btn_2.style.display = "none"
  q = hangManQu[getRandomInt(hangManQu.length)]
  console.log(alpha)
}

const palyAgain = () =>
{
  clearInterval(t)
  min = 60
  images = ["PIC/hangman_pic_1.png","PIC/hangman_pic_2.png","PIC/hangman_pic_3.png","PIC/hangman_pic_4.png","PIC/hangman_pic_5.png","PIC/hangman_pic_6.png","PIC/hangman_pic_7.png"]
  for(let i = 0 ; i<q.ans.length ; i++)
  {
    ansSpace.shift()
  }
  btn_1.style.display = "none"
  btn_2.style.display = "none"
  q = hangManQu[getRandomInt(hangManQu.length)]
  
  startTheGame()
}


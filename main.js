
const play = document.querySelector(".play");
const start = document.querySelector(".start")
play.addEventListener("click", () => {
  start.style.display = "none"
  mainDiv.style.display = "block"
  startTheGame()
});

const body = document.querySelector("body")

const hangManQu = [
  {
      que : "commonly referred to as the domestic pet or house pet",
      ans : "catc",
  },
  {
    que : "An animal often used when describing the Zionist entity",
    ans : "pig",
  },
  {
    que : "An animal use all four limbs—two arms and two legs—to walk and run. Their hands and feet are good for grasping tree branches",
    ans : "monkey",
  },
]

const alphabet = ["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z",];

let images = ["PIC/hangman_pic_1.png","PIC/hangman_pic_2.png","PIC/hangman_pic_3.png","PIC/hangman_pic_4.png","PIC/hangman_pic_5.png","PIC/hangman_pic_6.png","PIC/hangman_pic_7.png"]

const ansSpace = []

const mainDiv = document.createElement("div")
mainDiv.classList.add("main_2")
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

const getRandomInt = (max) => {
  return Math.floor(Math.random() * max);
}

let q = hangManQu[getRandomInt(hangManQu.length)]

const startTheGame = () =>
{
    for(let i = 0 ; i < q.ans.length ; i++)
    {
      ansSpace.push("_")
    }
    
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
    mainDiv.append(pics,question,alpha)
    question.append(divSpace)
  })
}

const finish = () =>
{
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



const play = document.querySelector(".play");
const start = document.querySelector(".start")
play.addEventListener("click", () => {
  start.style.display = "none"
  startTheGame()
});

const body = document.querySelector("body")

const hangManQu = [
    {
        que : "commonly referred to as the domestic pet or house pet",
        ans : "catc",
        space : "_ _ _"//should be array
    },
]

const alphabet = ["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z",];

const images = ["PIC/hangman_pic_1.png"]

const ansSpace = []

const startTheGame = () =>
{
  hangManQu.forEach((q , i) => {
    const mainDiv = document.createElement("div")
    mainDiv.classList.add("main_2")
    const question = document.createElement("div")
    const pics = document.createElement("img")
    const alpha = document.createElement("div")
    const divSpace = document.createElement("div")

    for (const key in q.ans)
    {
      console.log(q.ans[key])
    }

    alphabet.forEach((char , i)=>{
      const btn = document.createElement("button")
      btn.innerText = char
      alpha.append(btn)
      btn.addEventListener("click",(e)=>{
      for (const key in q.ans)
      {
        if(q.ans[key] === e.target.innerText)
        {
          console.log(key)//q.ans.lastIndexOf(e.target.innerText))
        }
      }
      })
    })

    question.innerText = q.que
    divSpace.innerText = q.space
    pics.src = images[0]
    body.append(mainDiv)
    mainDiv.append(pics,question,alpha)
    question.append(divSpace)
    console.log(q)
  })
}




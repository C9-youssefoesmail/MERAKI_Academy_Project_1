
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
]

const alphabet = ["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z",];

const images = ["PIC/hangman_pic_1.png","PIC/hangman_pic_2.png","PIC/hangman_pic_3.png","PIC/hangman_pic_4.png","PIC/hangman_pic_5.png","PIC/hangman_pic_6.png","PIC/hangman_pic_7.png"]

const ansSpace = []

const mainDiv = document.createElement("div")
mainDiv.classList.add("main_2")
const question = document.createElement("div")
const pics = document.createElement("img")
const alpha = document.createElement("div")
const divSpace = document.createElement("div")

const startTheGame = () =>
{
  hangManQu.forEach((q , i) => {

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
        }
        else
        {
          console.log("f")
          e.target.style.display = "none"
          images.shift()
          if(images[0] === undefined)
          {
            restart()
          }
          else
          {
            pics.src = images[0]
          }
        }
      })
    })

    question.innerText = q.que
    divSpace.innerText = ansSpace.join(" ")
    pics.src = images[0]
    body.append(mainDiv)
    mainDiv.append(pics,question,alpha)
    question.append(divSpace)
  })
}

const restart = () =>
{
  mainDiv.style.display = "none"
  start.style.display = "block"
}



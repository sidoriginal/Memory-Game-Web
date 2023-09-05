const cardArray = [
    {
        name: "fries",
        img:'images/fries.png',
    },
    {
        name: "cheeseburger",
        img:'images/cheeseburger.png',
    },
    {
        name: "hotdog",
        img:'images/hotdog.png',
    },
    {
        name: "ice-cream",
        img:'images/ice-cream.png',
    },
    {
        name: "milkshake",
        img:'images/milkshake.png',
    },
    {
        name: "pizza",
        img:'images/pizza.png',
    },
    {
        name: "fries",
        img:'images/fries.png',
    },
    {
        name: "cheeseburger",
        img:'images/cheeseburger.png',
    },
    {
        name: "hotdog",
        img:'images/hotdog.png',
    },
    {
        name: "ice-cream",
        img:'images/ice-cream.png',
    },
    {
        name: "milkshake",
        img:'images/milkshake.png',
    },
    {
        name: "pizza",
        img:'images/pizza.png',
    }
]

cardArray.sort(()=> 0.5-Math.random())
const grid=document.querySelector("#grid")
const result=document.querySelector("#result")
let cardsChosen=[]
let cardsChosenIDs=[]
const cardsWon=[]

function createBoard(){
    for(let i=0;i<cardArray.length;i++){
        const card=document.createElement('img')
        card.setAttribute('src','images/blank.png')
        card.setAttribute('data-id',i)
        card.addEventListener('click',flipCard)
        grid.appendChild(card)
    }
}

function checkMatch(){
    const cards=document.querySelectorAll('#grid img')
    if(cardsChosenIDs[0]==cardsChosenIDs[1]){
        cards[cardsChosenIDs[0]].setAttribute("src","images/blank.png")
        cards[cardsChosenIDs[1]].setAttribute("src","images/blank.png")
    }

    else if(cardsChosen[0]==cardsChosen[1]){
        cards[cardsChosenIDs[0]].setAttribute("src","images/white.png")
        cards[cardsChosenIDs[1]].setAttribute("src","images/white.png")
        cards[cardsChosenIDs[0]].removeEventListener("click",flipCard)
        cards[cardsChosenIDs[1]].removeEventListener("click",flipCard)
        cardsWon.push(cardsChosen)
    }
    else{
        cards[cardsChosenIDs[0]].setAttribute("src","images/blank.png")
        cards[cardsChosenIDs[1]].setAttribute("src","images/blank.png")
    }
    result.innerHTML=cardsWon.length
    cardsChosen=[]
    cardsChosenIDs=[]

    if(cardsWon.length==(cardArray.length)/2){
        result.innerHTML="Congratulations"
    }
}

function flipCard(){
    let cardID=this.getAttribute('data-id')
    cardsChosen.push(cardArray[cardID].name)
    cardsChosenIDs.push(cardID)
    this.setAttribute('src',cardArray[cardID].img)
    if(cardsChosen.length==2){
        setTimeout(checkMatch,500)
    }

}

createBoard()
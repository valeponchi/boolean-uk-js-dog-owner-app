console.log(data);
// We create individual components here

let dogListUlEl = document.querySelector(`.dogs-list`)
let main = document.querySelector(`main`)
let noDogsQ = document.querySelector(`.main__dog-section`)
let ulEl = document.querySelector(`.dogs-list`) 


// FUNCTIONS:
// 1.createDogButton
// 2.cardsWhenClickBtn
// 3.creationOfDogCard

function createDogButton() {
  for (i=0; i<data.length; i++) {

    let dogButton = document.createElement(`li`)
    dogButton.innerText = data[i].name
    dogButton.setAttribute(`class`, `dogs-list__button`)
    dogListUlEl.append(dogButton)
    
    function cardsWhenClickBtn() {
      for (const li of ulEL) {
        dogButton.addEventListener(`click`, function(event) {
          creationOfDogCard()
          
          event.stopPropagation() //stop this event to happen to each of this El's parent
      }) } }
  }
}



function creationOfDogCard() {
  noDogsQ.remove()
  let mainDogSection = document.createElement(`section`)     //SECTION WRAPPER OF THE CARD
  mainDogSection.setAttribute(`class`, `main__dog-section`)  //CLASS
  main.append(mainDogSection)                       //WHERE IS IT ON THE PAGE
  
    let cardName = document.createElement(`h2`)        //SECT-CHILD = TITLE
    cardName.innerText = data[0].name
    mainDogSection.append(cardName)
  
    let imgCard = document.createElement(`img`)        //SECT-CHILD = IMG
    imgCard.setAttribute(`src`, data[0].image)
    mainDogSection.append(imgCard)
  
    let bioSection = document.createElement(`div`)     //SECT-CHILD = BIO DIV
    bioSection.setAttribute(`class`, `main__dog-section__desc`)
    mainDogSection.append(bioSection)
    
        let bioTitle = document.createElement(`h3`)    // BIO-CHILD
        bioSection.append(bioTitle)
        bioTitle.innerText = `Bio`
        
        let bioText = document.createElement(`p`)      //BIO-CHILD
        bioSection.append(bioText)
        bioText.innerText = data[0].bio
     
    let behaviourSection = document.createElement(`div`)    //SECT-CHILD = BEHAVIOUR DIV
    behaviourSection.setAttribute(`class`, `main__dog-section__btn`)
    mainDogSection.append(behaviourSection)
  
        let naughtyGoodQ = document.createElement(`p`)      //BEHAVIOUR-CHILD
        behaviourSection.append(naughtyGoodQ)
        naughtyGoodQ.setAttribute(`class`, `em`) //I added stuff in CSS file
        naughtyGoodQ.innerText = `Is naughty?`
  
        let behaviourText = document.createElement(`p`)     //BEHAVIOUR-CHILD
        behaviourSection.append(behaviourText)
        behaviourText.innerText = `No!`
  
        let behaviourButton = document.createElement(`button`) //BEHAVIOUR-CHILD
        behaviourSection.append(behaviourButton)
        behaviourButton.innerText = `Bad Dog`
  }
 


// CALLING FUNCTIONS:
createDogButton()
// cardsWhenClickBtn()
//QUESTION:
// creationOfDogCard() //this is called inside the buttons?





//remember:
// event.preventDefault() //prevent the Default refresh of the Form
// event.reset() //clear all the inputs
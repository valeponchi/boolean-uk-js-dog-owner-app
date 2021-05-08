console.log(data);


let dogListUlEl = document.querySelector(`.dogs-list`)
let mainDogSection = document.querySelector(`.main__dog-section`) //WRAPPER
let addDogListEl = document.querySelector(".dogs-list__button--add");


function createDogButtons(array) {
  for (i=0; i<array.length; i++) {
    createDogButton(array[i])
  }
}

function createDogButton(dog){

  let dogButton = document.createElement(`li`)
  dogButton.innerText = dog.name
  dogButton.setAttribute(`class`, `dogs-list__button`)
  dogListUlEl.append(dogButton)
  
      dogButton.addEventListener(`click`, function() {
        
        mainDogSection.innerHTML = ""
        creationOfDogCard(dog)
    }) 
}

function creationOfDogCard(dog) {
  mainDogSection.innerHTML = "";

    let cardName = document.createElement(`h2`)        //SECT-CHILD = TITLE
    cardName.innerText = dog.name
  
    let imgCard = document.createElement(`img`)        //SECT-CHILD = IMG
    imgCard.setAttribute(`src`, dog.image)
    imgCard.setAttribute(`alt`, dog.name);
    imgCard.setAttribute(`height`, 300);
  
    let bioSection = document.createElement(`div`)     //SECT-CHILD = BIO DIV
    bioSection.setAttribute(`class`, `main__dog-section__desc`)
    
        let bioTitle = document.createElement(`h3`)    // BIO-CHILD
        bioTitle.innerText = `Bio`
        
        let bioText = document.createElement(`p`)      //BIO-CHILD
        bioText.innerText = dog.bio

        bioSection.append(bioTitle, bioText)
     
    let naughtyLine = document.createElement("p")

        let naughtyQ = document.createElement("em")
        naughtyQ.innerText = "Is naughty?"

        let isDogNaughty = !dog.isGoodDog
        naughtyLine.append(naughtyQ, isDogNaughty ? " yes!" : " no!");
  
    let behaviourButton = document.createElement(`button`) //BEHAVIOUR-CHILD
    behaviourButton.innerText = isDogNaughty ? "Good dog!" : "Bad dog!";
    
    behaviourButton.addEventListener("click", function () {
      // toggle the dog's goodness
      dog.isGoodDog = !dog.isGoodDog;
      
      // render the dog
      creationOfDogCard(dog);
    });
    
    mainDogSection.append(cardName, imgCard, bioSection, naughtyLine, behaviourButton)
  }
 


createDogButtons(data)


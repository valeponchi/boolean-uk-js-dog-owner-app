console.log(data);
// We create individual components here

let dogListUlEl = document.querySelector(`.dogs-list`)

function createDogButton() {
  for (i=0; i<data.length; i++) {

    let dogButton = document.createElement(`li`)
    dogButton.innerText = data[i].name
    dogButton.setAttribute(`class`, `dogs-list__button`)
    dogListUlEl.append(dogButton)
  }

  // dogButton.addEventListener(`click`, function(event){
  //   // <section class="main__dog-section">
  //   let mainDogSection = document.createElement(`section`) //SECTION WRAPPER OF THE CARD

  //   //     <h2>Mr. Bonkers</h2>
  //   let cardName = document.createElement(`h2`) //SECT CHILD - TITLE

  //   //     <img src="https://curriculum-content.s3.amazonaws.com/js/woof-woof/dog_1.jpg" alt=""/>
  //   let imgCard = document.createElement(`img`) //SECT CHILD - IMG


  //   //     <div class="main__dog-section__desc"> //SECT CHILD - BIO
  //   let bioSection = document.createElement(`div`)
  //   //       <h3>Bio</h3>
  //   let bioTitle = document.createElement(`h3`) // BIO CHILD
  //   //       <p>Lorem blablabla</p>
  //   let bioText = document.createElement(`p`) //BIO CHILD
  //   //     </div>
          

  //   //     <div class="main__dog-section__btn">
  //   let behaviourSection = document.createElement(`div`) //SECT CHILD --BEHAVIOUR
  //   //       <p><em>Is naughty?</em> No!</p>
  //   let behaviourText = document.createElement(`p`) //BEHAVIOUR CHILD
  //   //       <button>Bad Dog</button>
  //   let behaviourButton = document.createElement(`button`) //BEHAVIOUR CHILD
  //   //     </div>
  //   //   </section>     
  // })
  
  
  
}

createDogButton()



// event.preventDefault() //prevent the Default refresh of the Form
// event.reset() //clear all the inputs
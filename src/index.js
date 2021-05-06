console.log(data);
// We create individual components here

let dogList = document.querySelector(`.dogs-list`)

let dogButton = document.createElement(`li`)
dogButton.innerText = data[0].name
dogList.append(dogButton)

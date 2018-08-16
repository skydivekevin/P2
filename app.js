let name = document.querySelector('#name')
let submit = document.querySelector('#submit')
let info = document.querySelector('#info')
let testButton = document.querySelector('#testButton')
let searchInput = document.querySelector('#character')
let image = document.querySelector('#image')
let nameOfCharacter = document.querySelector('#nameOfCharacter')
let characterInfo = document.querySelector('#characterInfo')
let height = document.querySelector('#height')
let mass = document.querySelector('#mass')
let birthyear = document.querySelector('#birthyear')
let storedName = localStorage.getItem("characterName")

// console.log(storedName)

axios.get(`https://swapi.co/api/people/?search=${storedName}`)
  .then(result => {
    image.setAttribute('src', `images/${storedName}.jpg`)
    // let infoArr = result.data.results
    // console.log(infoArr)

    // let characterName = result.data.results[0]['name']
    // nameOfCharacter.textContent = characterName
    // height.textContent = result.data.results[0]['height']
    // mass.textContent = infoArr['mass']
    // birthyear.textContent = infoArr['birth_year']
    // image.setAttribute('src', `images/"${characterName}".jpg`)
    // localStorage.setItem("characterName", `"${characterName}"`);
    // searchInput.value = ''
  })


submit.addEventListener('click', () => {

  let nameLength = name.value.length
  let randomNumber = getRandomInt()

  axios.get(`https://swapi.co/api/people/`)

    .then(result => {
      let infoArr = result.data.results[randomNumber]['name']
      let characterName = JSON.stringify(infoArr)
      nameOfCharacter.textContent = characterName
      image.setAttribute('src', `images/${characterName}.jpg`)
      let info = result.data.results[randomNumber]
      height.textContent = result.data.results[randomNumber]['height']
      mass.textContent = result.data.results[randomNumber]['mass']
      birthyear.textContent = result.data.results[randomNumber]['birth_year']
      name.value = ''

    })
})


testButton.addEventListener('click', () => {
  axios.get(`https://swapi.co/api/people/?search=${searchInput.value}`)
    .then(result => {
      let infoArr = result.data.results[0]
      let characterName = result.data.results[0]['name']
      nameOfCharacter.textContent = characterName
      height.textContent = infoArr['height']
      mass.textContent = infoArr['mass']
      birthyear.textContent = infoArr['birth_year']
      image.setAttribute('src', `images/"${characterName}".jpg`)
      localStorage.setItem("characterName", `"${characterName}"`);
      searchInput.value = ''
    })
})
const getRandomInt = () => {
  let randomNumber = Math.floor(Math.random() * 9)
  return randomNumber
}

// localStorage.setItem("characterName", "John");






// for (let i = 0; i < result.data.results.length; i++) {
//   if (infoArr[i]['name'] === '')
//     var characterInfo = infoArr[i]
//   info.textContent = JSON.stringify(characterInfo)

// }
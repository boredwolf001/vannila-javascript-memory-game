const grid = document.querySelector('.grid')
const images = [
  'images/Bat.png',
  'images/Bat.png',
  'images/Bones.png',
  'images/Bones.png',
  'images/Cauldron.png',
  'images/Cauldron.png',
  'images/Dracula.png',
  'images/Dracula.png',
  'images/Eye.png',
  'images/Eye.png',
  'images/Ghost.png',
  'images/Ghost.png',
  'images/Pumpkin.png',
  'images/Pumpkin.png',
  'images/Skull.png',
  'images/Skull.png',
]

displayImages()

const cards = document.querySelectorAll('.flip-card')
const winModal = document.querySelector('.win-modal-container')

let prevCardChosen = ''

function displayImages() {
  //   shuffleArray(images)

  images.forEach((img) => {
    const el = document.createElement('div')
    el.className = 'flip-card img-box'

    el.innerHTML = `
      <div class="flip-card-inner">
          <div class="flip-card-front">
            <div class="front-face"></div>
          </div>
          <div class="flip-card-back">
            <img src="${img}" alt="" />
          </div>
      </div>
    `

    grid.appendChild(el)
  })
}

cards.forEach((card) => {
  card.addEventListener('click', (e) => {
    card.classList.add('show-back')

    checkWin()

    if (!prevCardChosen) {
      prevCardChosen = card
    } else {
      if (card.isEqualNode(prevCardChosen)) {
        console.log('Match')

        prevCardChosen = ''
      } else {
        console.log("Didn't match")
        setTimeout(() => {
          prevCardChosen.classList.remove('show-back')
          card.classList.remove('show-back')

          prevCardChosen = ''
        }, 1000)
      }
    }
  })
})

function checkWin() {
  let cardsContainingShowBackClass = Array.from(cards).filter((card) => {
    return !card.classList.contains('show-back')
  })

  if (cardsContainingShowBackClass.length == 0) {
    winModal.classList.add('show')
  }
}

function shuffleArray(array) {
  for (var i = array.length - 1; i > 0; i--) {
    var j = Math.floor(Math.random() * (i + 1))
    var temp = array[i]
    array[i] = array[j]
    array[j] = temp
  }
}

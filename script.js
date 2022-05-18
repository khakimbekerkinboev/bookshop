fetch('./books.json')
  .then((response) => {
    return response.json()
  })
  .then((data) => {})

//========================
// Header
//========================
const wrapper = document.createElement('div')
wrapper.classList.add('wrapper')
document.body.append(wrapper)

const header = document.createElement('header')
header.classList.add('header')
wrapper.append(header)

const logo = document.createElement('div')
logo.classList.add('logo')
header.append(logo)

const logoH1 = document.createElement('h1')
const logoH4 = document.createElement('h4')
logoH1.innerHTML = 'Bookshop'
logoH4.innerHTML = "It's all about books!"
logo.append(logoH1)
logo.append(logoH4)

const navbar = document.createElement('nav')
navbar.classList.add('navbar')
header.append(navbar)

const navbarUl = document.createElement('ul')
navbar.append(navbarUl)

const a1 = document.createElement('a')
a1.setAttribute('href', '#')
a1.innerHTML = 'Home'
navbarUl.append(a1)

const a2 = document.createElement('a')
a2.setAttribute('href', '#')
a2.innerHTML = 'Books'
navbarUl.append(a2)

const a3 = document.createElement('a')
a3.setAttribute('href', '#')
a3.innerHTML = 'Order'
navbarUl.append(a3)

const a4 = document.createElement('a')
a4.setAttribute('href', '#')
a4.innerHTML = 'About us'
navbarUl.append(a4)

//========================
// Main
//========================
// books section

const main = document.createElement('main')
main.classList.add('main')
wrapper.append(main)

const booksSection = document.createElement('section')
booksSection.classList.add('books')
main.append(booksSection)

const booksTitle = document.createElement('h1')
booksTitle.classList.add('books-title')
booksTitle.innerHTML = 'book catalog'
booksSection.append(booksTitle)

const cards = document.createElement('div')
cards.classList.add('cards')
booksSection.append(cards)

fetch('./books.json')
  .then((response) => {
    return response.json()
  })
  .then((data) => {
    for (let i = 0; i < data.length; i++) {
      let singleCard = document.createElement('div')
      singleCard.classList.add('single-card')
      singleCard.innerHTML = `<div class="top">
              <img src="${data[i].imageLink}" alt="img" />
              <h4 class="author">${data[i].author}:</h4>
              <h2 class="title">${data[i].title}</h2>
              <h4 class="price"><span>Price:</span> $${data[i].price}</h4>
              </div>
              <div class="bottom">
              <div class="bottom-links">
                <a href="">Show more</a>
                <a href="">Add to bag</a>
              </div>
              </div>`
      cards.append(singleCard)
    }
  })

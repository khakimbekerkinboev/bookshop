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
      const singleCard = document.createElement('div')
      singleCard.classList.add('single-card')

      //divs
      const firstDiv = document.createElement('div')
      const secondDiv = document.createElement('div')

      //first-div items
      const imgCard = document.createElement('img')
      imgCard.setAttribute('src', `${data[i].imageLink}`)
      imgCard.setAttribute('alt', 'img')
      firstDiv.append(imgCard)

      const author = document.createElement('h4')
      author.classList.add('author')
      author.innerHTML = `${data[i].author}:`
      firstDiv.append(author)

      const title = document.createElement('h2')
      title.classList.add('title')
      title.innerHTML = `${data[i].title}`
      firstDiv.append(title)

      const price = document.createElement('h4')
      price.classList.add('price')
      price.innerHTML = `<span>Price:</span> $${data[i].price}`
      firstDiv.append(price)

      //second-div items
      const bottomLinks = document.createElement('div')
      bottomLinks.classList.add('bottom-links')
      const showMore = document.createElement('a')
      showMore.innerHTML = 'Show more'
      showMore.setAttribute('href', '#')
      showMore.classList.add('show-more-btn')
      const addToBag = document.createElement('a')
      addToBag.innerHTML = 'Add to bag'
      addToBag.setAttribute('href', '#')

      bottomLinks.append(showMore)
      bottomLinks.append(addToBag)
      secondDiv.append(bottomLinks)

      //insertion
      singleCard.append(firstDiv)
      singleCard.append(secondDiv)
      cards.append(singleCard)
    }
  })

fetch('./books.json')
  .then((response) => {
    return response.json()
  })
  .then((data) => {
    //modal window
    const cardDesc = document.createElement('div')
    cardDesc.classList.add('card-description')
    cardDesc.classList.add('inactive')
    document.body.append(cardDesc)

    //description-banner
    const descBanner = document.createElement('div')
    descBanner.classList.add('description-banner')
    cardDesc.append(descBanner)

    //h1 and p
    const descH1 = document.createElement('h1')
    const descP = document.createElement('p')
    // ============================================================
    const showMoreBtns = document.querySelectorAll('.show-more-btn')
    showMoreBtns.forEach((button) => {
      button.addEventListener('click', (e) => {
        //change title
        descH1.innerText =
          e.currentTarget.parentElement.parentElement.previousElementSibling.children[2].innerText

        //change description
        data.forEach((obj) => {
          if (
            obj.title ==
            e.currentTarget.parentElement.parentElement.previousElementSibling
              .children[2].innerText
          ) {
            descP.innerText = obj.description
          }
        })
        //show the modal window
        cardDesc.classList.remove('inactive')
      })
    })
    // ============================================================
    descBanner.append(descH1)
    descBanner.append(descP)

    //i
    const descI = document.createElement('i')
    descI.classList.add('fa-solid')
    descI.classList.add('fa-xmark')
    descBanner.append(descI)

    //hide the modal window
    descI.addEventListener('click', () => {
      cardDesc.classList.add('inactive')
    })
  })

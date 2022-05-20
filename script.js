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
a2.innerHTML = 'Catalog'
navbarUl.append(a2)

const a3 = document.createElement('a')
a3.setAttribute('href', '#')
a3.innerHTML = 'Order'
navbarUl.append(a3)

const a4 = document.createElement('a')
a4.setAttribute('href', '#')
a4.innerHTML = 'About us'
navbarUl.append(a4)

const a5 = document.createElement('a')
a5.setAttribute('href', '#')
a5.innerHTML = `<i class="fa-solid fa-cart-shopping"></i>`
const cartItems = document.createElement('span')
cartItems.innerHTML = 0
a5.append(cartItems)
navbarUl.append(a5)
//========================
// Books section
//========================
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
      singleCard.setAttribute('draggable', 'true')

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
      addToBag.classList.add('add-to-bag')
      addToBag.setAttribute('href', 'javascript:void(0)')

      bottomLinks.append(showMore)
      bottomLinks.append(addToBag)
      secondDiv.append(bottomLinks)

      //insertion
      singleCard.append(firstDiv)
      singleCard.append(secondDiv)
      cards.append(singleCard)
    }
  })

//========================
// Modal window
//========================

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
    descI.innerHTML = `<i class="fa-regular fa-circle-xmark"></i>`
    descBanner.append(descI)

    //hide the modal window
    descI.addEventListener('click', () => {
      cardDesc.classList.add('inactive')
    })
  })
//========================
// Bag
//========================
fetch('./books.json')
  .then((response) => {
    return response.json()
  })
  .then((data) => {
    //bag
    const bag = document.createElement('div')
    bag.classList.add('bag')
    bag.classList.add('bag-inactive')
    document.body.append(bag)
    //bag title
    const bagTitle = document.createElement('h1')
    bagTitle.classList.add('bag-title')
    bagTitle.innerHTML = 'Shopping Bag'
    bag.append(bagTitle)
    //bag items
    const bagItems = document.createElement('div')
    bagItems.classList.add('bag-items')
    bag.append(bagItems)

    //===========================================================

    const addToBag = document.querySelectorAll('.add-to-bag')

    //create a function that creates a single item and adds it to the item list
    const addItemToBag = (e) => {
      //find author, title and price
      const author =
        e.currentTarget.parentElement.parentElement.previousElementSibling
          .children[1].innerHTML
      const title =
        e.currentTarget.parentElement.parentElement.previousElementSibling
          .children[2].innerHTML
      const price = Number(
        e.currentTarget.parentElement.parentElement.previousElementSibling.children[3].innerText.replace(
          'Price: $',
          ''
        )
      )
      //create an item with those variables
      //single bag
      const bagItem = document.createElement('div')
      bagItem.classList.add('bag-item')
      bagItems.append(bagItem) //add the item to the list
      //item left
      const itemLeft = document.createElement('div')
      itemLeft.classList.add('item-left')
      const itemLeftH4 = document.createElement('h4')
      itemLeftH4.innerHTML = `${author} <span>${title}</span>`
      itemLeft.append(itemLeftH4)
      bagItem.append(itemLeft)
      //item right
      const itemRight = document.createElement('div')
      itemRight.classList.add('item-right')
      const itemRightH4 = document.createElement('h4')
      itemRightH4.innerHTML = `$${price}`
      itemRight.append(itemRightH4)
      const itemRightI = document.createElement('i')
      itemRightI.classList.add('fa-regular')
      itemRightI.classList.add('fa-circle-xmark')
      itemRightI.classList.add('delete-item')
      itemRight.append(itemRightI)
      bagItem.append(itemRight)
      //increase the number on the shopping-cart icon
      cartItems.innerHTML++
      //delete item
      itemRightI.addEventListener('click', (e) => {
        //remove the item
        e.currentTarget.parentElement.parentElement.remove()
        //decrease the number on the shopping-cart icon
        cartItems.innerHTML--
        //decrease total
        totalItemsH22.innerHTML = `$${
          Number(totalItemsH22.innerHTML.replace('$', ' ')) -
          Number(
            e.currentTarget.parentElement.children[0].innerHTML.replace(
              '$',
              ' '
            )
          )
        }`
      })

      //increase the total
      totalItemsH22.innerHTML = `$${
        Number(totalItemsH22.innerHTML.replace('$', ' ')) + price
      }`
    }
    //add to the bag
    addToBag.forEach((button) => {
      button.addEventListener('click', addItemToBag)
    })

    const singleCards = document.querySelectorAll('.single-card')
    singleCards.forEach((card) => {
      card.addEventListener('dragstart', (e) => {
        e.target.style.opacity = '0.5'
      })
      card.addEventListener('dragend', (e) => {
        e.target.style.opacity = '1'
      })
      bag.addEventListener('dragover', (e) => {
        e.preventDefault()
      })
      bag.addEventListener('drop', (e) => {
        e.preventDefault()
        console.log('hello world')
      })
    })

    //total items
    const totalItems = document.createElement('div')
    totalItems.classList.add('total-items')
    bag.append(totalItems)
    const totalItemsH21 = document.createElement('h2')
    totalItemsH21.innerHTML = 'Total:'
    totalItems.append(totalItemsH21)
    const totalItemsH22 = document.createElement('h2')
    totalItemsH22.innerHTML = 0
    totalItems.append(totalItemsH22)
    //confirm button
    const confirm = document.createElement('div')
    confirm.classList.add('confirm')
    bag.append(confirm)
    const confirmA = document.createElement('a')
    confirmA.setAttribute('href', '#')
    confirmA.innerHTML = 'Confirm order'
    confirm.append(confirmA)
    //bag exit
    const bagExit = document.createElement('i')
    bagExit.classList.add('fa-solid')
    bagExit.classList.add('fa-arrow-right-to-bracket')
    bagExit.classList.add('bag-exit')
    bag.append(bagExit)

    //bag in-and-out
    bagExit.addEventListener('click', () => {
      bag.classList.add('bag-inactive')
    })
    a5.addEventListener('click', () => {
      bag.classList.remove('bag-inactive')
    })
  })

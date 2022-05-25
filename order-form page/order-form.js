//form
const form = document.getElementById('form')
//inputs
const name = document.getElementById('name')
const surname = document.getElementById('surname')
const deliveryDate = document.getElementById('date')
const street = document.getElementById('street')
const houseNumber = document.getElementById('house-number')
const flatNumber = document.getElementById('flat-number')

const cash = document.getElementById('cash')
const card = document.getElementById('card')

const gift = document.getElementById('gift')
const postcard = document.getElementById('postcard')
const discount = document.getElementById('discount')
const pencil = document.getElementById('pencil')
//complete button
const completeBtn = document.querySelector('.complete-btn')

function addCondition(input) {
  input.addEventListener('blur', function () {
    if (input.checkValidity() == true) {
      input.style.borderColor = '#c0c0c0'
    } else if (input.checkValidity() == false) {
      input.style.borderColor = 'red'
      input.reportValidity()
    }
  })
}

addCondition(name)
addCondition(surname)

//delivery date
const today = new Date()
let tomorrow = new Date(today)
tomorrow.setDate(tomorrow.getDate() + 1)
tomorrow = tomorrow.toISOString().split('T')[0]
deliveryDate.setAttribute('min', tomorrow)

addCondition(street)

//house number
houseNumber.addEventListener('blur', function () {
  if (Number(houseNumber.value) > 0) {
    houseNumber.setCustomValidity('')
  } else if (houseNumber.value == '') {
    houseNumber.setCustomValidity('Please fill out this field.')
  } else if (Number(houseNumber.value) <= 0) {
    houseNumber.setCustomValidity('Positive numbers only')
  } else {
    houseNumber.setCustomValidity('')
  }

  if (houseNumber.checkValidity() == true) {
    houseNumber.style.borderColor = '#c0c0c0'
  } else if (houseNumber.checkValidity() == false) {
    houseNumber.style.borderColor = 'red'
    houseNumber.reportValidity()
  }
})

houseNumber.addEventListener('input', function () {
  if (Number(houseNumber.value) > 0) {
    houseNumber.setCustomValidity('')
  } else if (houseNumber.value == '') {
    houseNumber.setCustomValidity('Please fill out this field.')
  } else if (Number(houseNumber.value) <= 0) {
    houseNumber.setCustomValidity('Positive numbers only')
  } else {
    houseNumber.setCustomValidity('')
  }
})

flatNumber.addEventListener('blur', function (e) {
  if (flatNumber.value == 0) {
    flatNumber.setCustomValidity('Positive numbers only')
  } else if (Number(flatNumber.value) == 0) {
    flatNumber.setCustomValidity('')
  } else if (Number(flatNumber.value) > 0) {
    flatNumber.setCustomValidity('')
  } else if (flatNumber.value == '') {
    flatNumber.setCustomValidity('Please fill out this field.')
  } else if (Number(flatNumber.value) <= 0) {
    flatNumber.setCustomValidity('Positive numbers only')
  } else {
    flatNumber.setCustomValidity('')
  }

  if (flatNumber.checkValidity() == true) {
    flatNumber.style.borderColor = '#c0c0c0'
  } else if (flatNumber.checkValidity() == false) {
    flatNumber.style.borderColor = 'red'
    flatNumber.reportValidity()
  }
})
flatNumber.addEventListener('input', function () {
  if (flatNumber.value == 0) {
    flatNumber.setCustomValidity('Positive numbers only')
  } else if (Number(flatNumber.value) == 0) {
    flatNumber.setCustomValidity('')
  } else if (Number(flatNumber.value) > 0) {
    flatNumber.setCustomValidity('')
  } else if (flatNumber.value == '') {
    flatNumber.setCustomValidity('Please fill out this field.')
  } else if (Number(flatNumber.value) <= 0) {
    flatNumber.setCustomValidity('Positive numbers only')
  } else {
    flatNumber.setCustomValidity('')
  }
})
// //checkbox
const checkboxContainer = document.querySelector('.checkbox-container')
const checkboxes = Array.from(checkboxContainer.querySelectorAll('input'))

checkboxes.forEach((e) => {
  e.addEventListener('change', function () {
    const checkedItems = checkboxes.filter((item) => item.checked)
    if (checkedItems.length > 2) {
      this.checked = false
    }
  })
})

//complete button
form.addEventListener('input', function () {
  if (form.checkValidity()) {
    completeBtn.classList.add('active')
  } else {
    completeBtn.classList.remove('active')
  }

  form.addEventListener('submit', (e) => {
    if (form.checkValidity() == false) {
      e.preventDefault()
    }
  })
})

//after submitting the form
const results = document.querySelector('.results')
const resName = document.querySelector('.r-name')
const resSurname = document.querySelector('.r-surname')
const resStreet = document.querySelector('.r-street')
const resHouseNumber = document.querySelector('.r-house-number')
const resFlatNumber = document.querySelector('.r-flat-number')
const resDeliveryDate = document.querySelector('.r-delivery-date')
const resPaymentType = document.querySelector('.r-payment-type')
const resExitBtn = document.querySelector('.result-exit')

form.addEventListener('submit', function (e) {
  resName.textContent = name.value
  resSurname.textContent = surname.value
  resStreet.textContent = street.value
  resHouseNumber.textContent = houseNumber.value
  resFlatNumber.textContent = flatNumber.value
  resDeliveryDate.textContent = deliveryDate.value
  //radio buttons
  const paymentTypeDiv = document.querySelector('.payment-type')
  const selectedRadio = paymentTypeDiv.querySelector(
    "input[name='payment-type']:checked"
  )
  resPaymentType.textContent = selectedRadio.value
  results.classList.remove('inactive')
  e.preventDefault()
})

//results exit button
resExitBtn.addEventListener('click', function () {
  results.classList.add('inactive')
})

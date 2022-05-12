// const getElement = (selector) => {
//   const element = document.querySelector(selector)

//   if (element) return element
//   throw Error(
//     `Please double check your class names, there is no ${selector} class`
//   )
// }

// const links = getElement('.nav-links')
// const navBtnDOM = getElement('.nav-btn')

// navBtnDOM.addEventListener('click', () => {
//   links.classList.toggle('show-links')
// })

// const date = getElement('#date')
// const currentYear = new Date().getFullYear()
// date.textContent = currentYear

const getElement = (selector) => {
  const element = document.querySelector(selector);
  if (element) return element;
  throw Error(`Please check the selector class, we didn't find any selector named ${selector}`)
}

// show and hide menu on nav button click
const links = getElement('.nav-links')
const navBtnDOM = getElement('.nav-btn');

navBtnDOM.addEventListener('click', () => {
  links.classList.toggle('show-links')
})

// show current year in footer
const date = getElement("#date");
const currentYear = new Date().getFullYear();
date.textContent = currentYear;
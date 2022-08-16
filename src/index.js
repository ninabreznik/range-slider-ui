module.exports = rangeSlider

function rangeSlider () {
  const el = document.createElement('div')
  el.classList.add('container')
  const shadow = el.attachShadow({ mode: 'closed'})

  const input = document.createElement('input')
  input.type = 'range'

  const style = document.createElement('style')
  style.textContent = get_theme() 

  shadow.append(style, input)
  return el
}

function get_theme () {
  return `
    :host(.container) {
      background-color: red;
    }
    input {
      width: 60%;
    }
  `
}
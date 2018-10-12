/**
 * read CSS dynamically
 * @param url
 */
const readCss = (url) => {
  const font = document.createElement('link')
  font.href = url
  font.rel = 'stylesheet'
  document.getElementsByTagName('head')[0].appendChild(font)
}

readCss('https://fonts.googleapis.com/css?family=Space+Mono')

/**
 * ToC
 */
const generateToC = () => {
  const links = document.querySelectorAll('a.selflink[href^="#"]')
  const toc = document.createElement('aside')
  toc.classList.add("Right_Nav")
  const tocList = document.createElement('ul')


  links.forEach(link => {
    const cloneAnchor = link.cloneNode(true)
    const list = document.createElement('li')

    cloneAnchor.innerText = link.parentNode.innerText
    list.appendChild(cloneAnchor)
    tocList.appendChild(list)
  })

  toc.appendChild(tocList)
  document.getElementsByTagName('body')[0].appendChild(toc)
}

generateToC()

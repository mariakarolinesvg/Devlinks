function toggleMode() {
  const html = document.documentElement
  html.classList.toggle("light")

  // pegar a tag img

  const img = document.querySelector("#profile img")

  // substituir a imagem
  if (html.classList.contains("light")) {
    // se tiver light mode, adicionar a imagem light
    img.setAttribute("src", "./assets/lightmode.png")
  } else {
    // se tiver sem light mode, manter a imagem normal
    img.setAttribute("src", "./assets/darkmode.png")
  }

  // pegar a tag alt
  const alt = document.querySelector("#profile img")

  // substituir o texto alternativo
  if (html.classList.contains("light")) {
    // se tiver light mode, manter o texto alternativo
    img.setAttribute("alt", "Foto de Mayk brito modo light")
  } else {
    // se tiver sem light mode, modificar o texto alternativo
    img.setAttribute("alt", "foto de Mayk brito em dark mode")
  }
}

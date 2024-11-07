function toggleMode() {
  const html = document.documentElement

  /*if(html.classList.contains('light')) {
    html.classList.remove('light')
  }
  else {
    html.classList.add('light')
  } */
 html.classList.toggle('light')

 // pegar a tag img
  const img = document.querySelector('#profile img')
  
  // substituir a imagem
  if (html.classList.contains('light')) {
    // se tiver light mode, adicionar a img light
    img.setAttribute('src', './assets/assets/avatar-light.png')
    img.setAttribute('alt', 'Foto de Mayk Brito, usando óculos de sol, sem barba e casaco preto')
  } else {
    // se tiver sem light mode, manter a imagem normal 
    img.setAttribute('src', './assets/assets/avatar.png')
  }
  
}

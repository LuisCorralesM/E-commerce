export {mostrarDetalleM, mostrarDetalleH}

const templatedCard = document.querySelector('.templated-card').content
const fragment = document.createDocumentFragment()
const container = document.querySelector('.container')
const cardMujeres = document.querySelector('#cardMujeres')
const cardHombres = document.querySelector('#cardHombres')


const mostrarDetalleM = e =>{
    const infoCard = e.target.parentElement
    // console.log(infoCard);
   if(infoCard.classList.contains('card')){
       console.log('IMG-PRODUCTO');
       const enlace = infoCard.querySelector('img').getAttribute('src')
       console.log(enlace);
       const titulo = infoCard.querySelector('h5').textContent
       console.log(titulo);
       const precio = infoCard.querySelector('p').textContent
       console.log(precio);
       const dataId = infoCard.querySelector('#carrito').dataset.id

       cardMujeres.remove()

       templatedCard.querySelector('img').setAttribute('src', enlace)
       templatedCard.querySelector('h5').textContent = titulo
       templatedCard.querySelector('p').textContent = precio
       templatedCard.querySelector('#carrito').dataset.id = dataId
       const clone = templatedCard.cloneNode(true)
       fragment.append(clone)       

   }
   container.append(fragment)

}

const mostrarDetalleH = e =>{
const infoCard = e.target.parentElement
// console.log(infoCard);
if(infoCard.classList.contains('card')){
   console.log('yes');
   const enlace = infoCard.querySelector('img').getAttribute('src')
   console.log(enlace);
   const titulo = infoCard.querySelector('h5').textContent
   console.log(titulo);
   const precio = infoCard.querySelector('p').textContent
   console.log(precio);
   const dataId = infoCard.querySelector('#carrito').dataset.id

   cardHombres.remove()

   templatedCard.querySelector('img').setAttribute('src', enlace)
   templatedCard.querySelector('h5').textContent = titulo
   templatedCard.querySelector('p').textContent = precio
   templatedCard.querySelector('#carrito').dataset.id = dataId
   const clone = templatedCard.cloneNode(true)
   fragment.append(clone)       

}
container.append(fragment)

}

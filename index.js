import {getProductos} from './script/getProductos.js'
import {mostrarDetalleM, mostrarDetalleH} from './script/detProd.js'

const cardMujeres = document.querySelector('#cardMujeres')
const cardHombres = document.querySelector('#cardHombres')

document.addEventListener('DOMContentLoaded', (e)=>{
    getProductos()
})

if(cardMujeres){
    cardMujeres.addEventListener('click', e =>{
        mostrarDetalleM(e)
        addAlCarrito(e)
    })
}

if(cardHombres){
    cardHombres.addEventListener('click', e =>{
        mostrarDetalleH(e)
        addAlCarrito(e)
    })
}

const addAlCarrito = e =>{
    const infoCard = e.target.parentElement
    console.log(infoCard);
    if(infoCard.querySelector('i')){
        console.log('BTN-CARRITO');
    }

}


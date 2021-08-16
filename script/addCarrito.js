export {addAlCarrito}

const items = document.querySelector('#items')
const footer = document.querySelector('#footer')
const cards = document.querySelector('#cards')
const templateCarrito = document.getElementById('template-carrito').content
const templateFooter = document.getElementById('template-footer').content
const templateCard = document.getElementById('template-card').content
const fragment = document.createDocumentFragment()
const iconoCarrito = document.querySelector('.icono-carrito span')

let carrito = {}

const addAlCarrito = e =>{
    const infoCard = e.target.parentElement
    // console.log(infoCard);

    if(e.target.matches('#btn-carrito')){
        console.log('BTN-CARRITO');

        const producto = {
            id: infoCard.querySelector('i').dataset.id,
            titulo: infoCard.querySelector('h5').textContent,
            precio: infoCard.querySelector('p').textContent,
            cantidad: 1
        }

        if(carrito.hasOwnProperty(producto.id)){
            producto.cantidad = carrito[producto.id].cantidad + 1
        }

        // console.log(producto);
        carrito[producto.id] = {...producto}
        pintarCarrito()
    }


}

const pintarCarrito = ()=>{
    console.log(carrito);
    items.innerHTML = ''
    Object.values(carrito).forEach(producto =>{
        templateCarrito.querySelector('th').textContent = producto.id
        templateCarrito.querySelectorAll('td')[0].textContent = producto.titulo
        templateCarrito.querySelectorAll('td')[1].textContent = producto.cantidad
        templateCarrito.querySelector('.btn-info').dataset.id = producto.id
        templateCarrito.querySelector('.btn-danger').dataset.id = producto.id 
        templateCarrito.querySelector('span').textContent = producto.cantidad * producto.precio

        const clone = templateCarrito.cloneNode(true)
        fragment.append(clone)
    })
    items.append(fragment)

    pintarFooter()
}

const pintarFooter = ()=>{
    footer.innerHTML= ''
    if(Object.keys(carrito).length === 0){
        footer.innerHTML = `<th scope="row" colspan="5">Carrito vacío - comience a comprar!</th>`
        iconoCarrito.textContent = ''
        return
    }

    const nCantidad = Object.values(carrito).reduce((acc,{cantidad}) => acc + cantidad,0)
    const nPrecio = Object.values(carrito).reduce((acc,{cantidad, precio}) => acc + (cantidad * 
    precio),0)

    templateFooter.querySelectorAll('td')[0].textContent = nCantidad
    templateFooter.querySelector('span').textContent = nPrecio
    // Pasar la cantidad al icono carrito del nav
    iconoCarrito.textContent = nCantidad

    const clone = templateFooter.cloneNode(true)
    fragment.append(clone)
    footer.append(fragment)

    const btnVaciar = document.querySelector('#vaciar-carrito')
    btnVaciar.addEventListener('click', ()=>{
        carrito = {}
        pintarCarrito()
    })

}
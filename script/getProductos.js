export {getProductos} 

const templatedCard = document.querySelector('.templated-card').content
const fragment = document.createDocumentFragment()
const cardMujeres = document.querySelector('#cardMujeres')
const cardHombres = document.querySelector('#cardHombres')

const getProductos = async ()=>{
    try {
        const res = await fetch('https://jsonplaceholder.typicode.com/photos')
        const data = await res.json()
        pintarCards(data)
    } catch (error) {
        console.log(error);
    }
}

const pintarCards = (data)=>{
            if(cardMujeres){
                data.forEach(foto => {
                    if(foto.albumId == 1){
                        console.log('seccion mujeres');
                        console.log(foto.albumId)
    
                        const {url, title, albumId, id} = foto
                        templatedCard.querySelector('img').setAttribute('src', url)
                        templatedCard.querySelector('h5').textContent = title
                        const clone = templatedCard.cloneNode(true)
                        fragment.append(clone)       
                    }
                });
                cardMujeres.append(fragment)
            } 

            if(cardHombres){
                data.forEach(foto => {
                    if(foto.albumId == 2){
                        console.log('seccion hombres');
                        console.log(foto.albumId)
    
                        const {url, title, albumId, id} = foto
                        templatedCard.querySelector('img').setAttribute('src', url)
                        templatedCard.querySelector('h5').textContent = title
                        const clone = templatedCard.cloneNode(true)
                        fragment.append(clone)       
                    }
                });
                cardHombres.append(fragment)
            } 

                    

}

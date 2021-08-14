export {getData} 
const templatedCard = document.querySelector('.templated-card').content
const fragment = document.createDocumentFragment()
const section = document.querySelector('#section')
const getData = async ()=>{
    try {
        const res = await fetch('https://jsonplaceholder.typicode.com/photos')
        const data = await res.json()
        pintarCards(data)
    } catch (error) {
        console.log(error);
    }
}

const pintarCards = (data)=>{
    data.forEach(foto => {
        const {url, title} = foto
        templatedCard.querySelector('img').setAttribute('src', url)
        templatedCard.querySelector('h5').textContent = title
        const clone = templatedCard.cloneNode(true)
        fragment.append(clone)
    });
    section.append(fragment)

}
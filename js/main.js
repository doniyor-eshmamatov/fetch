let elForm = document.querySelector('.form')
let elInput = document.querySelector('.input')
let elList = document.querySelector('.list')
let elTemplate = document.createElement('template')

let elArr = [];



function render(array, node) {
    array.forEach(el => {
        let elLi = document.createElement('li')
        let elImg = document.createElement('img')
        let elTitle = document.createElement('h3')
        let elYear = document.createElement('p')

        elImg.src = el.Poster;
        elTitle.textContent = el.Title;
        elYear.textContent = el.Year;

        elLi.setAttribute('class', 'list-item')
        elImg.setAttribute('class', 'item-img')
        elTitle.setAttribute('class', 'item-title')
        elYear.setAttribute('class', 'item-year')

        elLi.appendChild(elImg)
        elLi.appendChild(elTitle)
        elLi.appendChild(elYear)

        node.appendChild(elLi);
    });
    
}


elForm.addEventListener('submit', evt => {
    evt.preventDefault();

    fetch(`http://www.omdbapi.com/?apikey=6e537db6&s=${elInput.value}`).then((response) => response.json()).then((data) => {
    if (data) {
        elArr = data.Search
        console.log(elArr)
        render(elArr, elList)
    }
})
})





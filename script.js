const dogImageDiv = document.getElementById('dogImage')
const dogButton = document.getElementById('dogButton')


const getNewDog = () => {
    fetch('https://dog.ceo/api/breeds/image/random')
        .then(response => response.json())
        .then(json => {
            dogImageDiv.innerHTML = `<img src='${json.message}' height=400 width= 400/>`
        })
}

dogButton.onclick = () => getNewDog()

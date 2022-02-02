document.querySelector('form').addEventListener('submit', addMovie)

let message = document.querySelector('#message')

function addMovie(event){
    event.preventDefault()
    let inputField = document.querySelector('input')
    let movie = document.createElement('li')
    let movieTitle = document.createElement('span')
    movieTitle.textContent = inputField.value
    movieTitle.addEventListener('click', crossOffMovie)
    movie.appendChild(movieTitle)
    //---------------------------------------
    let deleteBtn = document.createElement('button')
    deleteBtn.textContent = 'x'
    deleteBtn.addEventListener('click', deleteMovie)
    //---------------------------------------
    movie.appendChild(deleteBtn)
    document.querySelector('ul').appendChild(movie)
    inputField.value = ''
}
function deleteMovie(event){
    event.target.parentNode.remove()
    message.textContent = 'Movie Deleted!'
}

function crossOffMovie(event){
    event.target.classList.toggle('checked')

    if(event.target.classList.contains('checked')){
        message.textContent = 'Movie Watched!'
    }
    else{
        message.textContent = 'Movie Re-Added!'
    }
}
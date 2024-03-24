const jokesDiv = document.getElementById("jokesDiv")
const jokesBtn = document.getElementById("jokesBtn")
 
const fetchData = async () => {
    const url = "https://hindi-jokes-api.onrender.com/jokes?api_key=1e8a9eb09f0f77c5b75b530fce44"
    const response = await fetch(url);
    const data = await response.json();
    renderData(data)
}

function renderData(joke){
    jokesDiv.innerHTML = "";
    const newDiv = document.createElement('p');
    newDiv.textContent = joke.jokeContent
    jokesDiv.appendChild(newDiv)
}


jokesBtn.addEventListener('click' , fetchData)
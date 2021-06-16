async function apiUri() {
    return process.env.APP_API_URI || 'http://localhost:5000/api'
}

async function getUsers() {
    const response = await fetch(apiUri() + '/users');
    const data = await response.json();
    return data
}

function fillUsers() {
    getUsers().then(data => {
        console.log(data.users);
        const ulElement = document.getElementById("ulUsers");
        data.users.forEach(user => {
          const liUser = document.createElement("li");
          const texto = document.createTextNode(user);
          liUser.appendChild(texto);
          ulElement.appendChild(liUser);
        })
    })
}
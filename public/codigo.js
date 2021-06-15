async function getReverse() {
    let response = await fetch('http://localhost:3000/api/users');
    let data = await response.json();
    return data
}

getReverse().then(data => console.log(data));
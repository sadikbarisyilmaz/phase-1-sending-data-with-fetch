// Add your code here
const result = document.querySelector("#result") 
const submitData = (name, email) => {
    
    return fetch("http://localhost:3000/users", {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
            Accept: "application/json",
        },
        body: JSON.stringify({ name, email })
    })
    .then(res => res.json())
    .then(data => result.innerHTML = data.id)
    .catch(err => result.innerHTML = err.message)
    
}

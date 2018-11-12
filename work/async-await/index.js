// Promises
fetch("https://api.github.com/users/mccoyrjm")
    .then(res => res.json())
    .then(json => { console.log("Promise:", json); })
    .catch(error => { console.log(error); });

// await-async
async function fetchProfile(user) {
    try {
        const data = await fetch(`https://api.github.com/users/${user}`)
        const json = await data.json();
        console.log("await-async:", json);
    } catch (err) {
        console.log("Error:", err);
    }

}
fetchProfile("mccoyrjm");
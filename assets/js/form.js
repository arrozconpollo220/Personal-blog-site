const modeButton = document.getElementById("mode");

const body = document.getElementById("body");

modeButton.addEventListener("click", function () {

    body.classList.toggle("dark-mode");

    if (modeButton.textContent === "Light Mode") {
        modeButton.textContent = "Dark Mode";
    } else {
        modeButton.textContent = "Light Mode";
    }
});

window.localStorage.getItem("saved-thoughts");
console.log(JSON.parse(window.localStorage.getItem('saved-thoughts')));

const usernameFromLocalStorage = localStorage.getItem('username')

if (usernameFromLocalStorage) {
    const userName = JSON.parse(usernameFromLocalStorage)
    userName.textContent
}
 
// const usernameFromLocalStorage = localStorage.getItem("username");
// console.log(usernameFromLocalStorage);

// const titleFromLocalStorage = localStorage.getItem("title");
// console.log(titleFromLocalStorage);

// const thoughtFromLocalStorage = localStorage.getItem("thought");
// console.log(thoughtFromLocalStorage);





// light mode dark mode
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

// local storage
function handleThoughtFormSubmit(event){
    event.preventDefault()
    console.log("FORM SUBMITTED!!!!")
    var usernameInputEl = document.getElementById("username-input").value.trim();
    console.log(usernameInputEl)
    var titleInputEl = document.getElementById("title-input").value.trim();
    var thoughtInputEl = document.getElementById("thought-input").value.trim();
  
    var newThought = {username: usernameInputEl, title: titleInputEl, thought: thoughtInputEl}
    saveToStorage(newThought)

}

function saveToStorage(newItem){
    console.log("Saving to storage: ", newItem)
    var myStorage = JSON.parse(localStorage.getItem("saved-thoughts"))
    myStorage.push(newItem);
    localStorage.setItem("saved-thoughts", JSON.stringify(myStorage))
}

function initiateLocalStorageIfNotThere(){
    var myStorage = JSON.parse(localStorage.getItem("saved-thoughts"))
    console.log(myStorage)
    if(myStorage != null){
        return
    } 
    localStorage.setItem("saved-thoughts", JSON.stringify([]))
}

var formEl = document.getElementById("thought-form");
formEl.addEventListener("submit", handleThoughtFormSubmit);
console.log(formEl);
initiateLocalStorageIfNotThere();

function handleThoughtFormSubmit(event) {
  event.preventDefault(); 
  window.location.href = "blog.html";
  formEl.reset();
}


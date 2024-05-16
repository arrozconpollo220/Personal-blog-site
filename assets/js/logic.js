//Boolean = true false
//Number = 5.5 or 10
//String = "", '', or ``
//Array = [element,element,element] access elements using their index arrayName[0]
//Objects = {key: value, key: value} i access keys with objectName.property notation
//ARRAY IS GOOD FOR STORING MULTIPLE THINGS
//OBJECTS ARE GOOD FOR STORING MULTIPLE THINGS ABOUT ONE THING



//localStorage lets me save data
// multiple things -> savedNotes = []
// each thing in the array is an object = {username:value, title: value, thought: value}


// const modeButton = document.getElementById("mode");

// const body = document.getElementById("body");

// modeButton.addEventListener("click", function () {

//     body.classList.toggle("dark-mode");

//     if (modeButton.textContent === "Light Mode") {
//         modeButton.textContent = "Dark Mode";
//     } else {
//         modeButton.textContent = "Light Mode";
//     }
// });



//FORM YOU NEED TO HAVE TWO THINGS


function handleThoughtFormSubmit(event){
    event.preventDefault()
    console.log("FORM SUBMITTED!!!!")
    var usernameInputEl = document.getElementById("username-input").value.trim();
    console.log(usernameInputEl)
    var titleInputEl = document.getElementById("title-input").value.trim();
    var thoughtInputEl = document.getElementById("thought-input").value.trim();
    // if(usernameInputEl.contains()){
    //     return
    // }
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

//the form itself
//the function to handleTheForm
    // - validate your inputs
    // - if they are invalid, you don't want to continue
    // - if valid: process the data => {username: usernameinput.value, }
    //  - saveToStorage(theprocessedData)

var formEl = document.getElementById("thought-form")
formEl.addEventListener("submit", handleThoughtFormSubmit)
console.log(formEl)
initiateLocalStorageIfNotThere()
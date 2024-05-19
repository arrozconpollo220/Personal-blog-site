//light mode dark mode
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

// Display saved thoughts
const savedThoughts = JSON.parse(window.localStorage.getItem("saved-thoughts"));
const section = document.querySelector("section");

if (savedThoughts) {
  savedThoughts.forEach((thought) => {
    const thoughtContainer = document.createElement("div");
    thoughtContainer.classList.add("thought-container");

    const usernameElement = document.createElement("h3");
    usernameElement.textContent = `Username: ${thought.username}`;
    thoughtContainer.appendChild(usernameElement);
    const titleElement = document.createElement("h4");
    titleElement.textContent = `Title: ${thought.title}`;
    thoughtContainer.appendChild(titleElement);

    const thoughtElement = document.createElement("p");
    thoughtElement.textContent = `Thought: ${thought.thought}`;
    thoughtContainer.appendChild(thoughtElement);

    section.appendChild(thoughtContainer);
  });
}

const usernameFromLocalStorage = localStorage.getItem("username");

if (usernameFromLocalStorage) {
  const userName = JSON.parse(usernameFromLocalStorage);
  userName.textContent;
}


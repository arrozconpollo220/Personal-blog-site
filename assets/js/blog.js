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

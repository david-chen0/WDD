function toggleTheme() {
    let body = document.querySelector("body");
    body.classList.toggle("dark-mode");
}

let toggleButton = document.getElementById("toggleButton");
toggleButton.onclick = toggleTheme;
function toggleSongs() {
    let songSecondHalf = document.getElementById("songs-second-half");

    songSecondHalf.classList.toggle("hidden");
}

let toggleButton  = document.getElementById("toggle-button");
toggleButton.onclick = toggleSongs;


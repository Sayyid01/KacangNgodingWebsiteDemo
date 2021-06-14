function showSnackbar() {
    var x = document.getElementById("snackbar");
    x.className = "show";
    setTimeout(function () {
        x.className = x.className.replace("show", "");
    }, 3000);
}

function showAbout() {
    document.getElementById("about-overlay").style.display = "block";
}

function off() {
    document.getElementById("about-overlay").style.display = "none";
}

function showHowToExit() {
    const x = document.getElementById("showHowToExit");
    x.style.visibility = "visible";
    setTimeout(function () {
        x.style.visibility = x.style.visibility.replace("visible", "");
    }, 6000);
}

function scrollToContent() {
    document.querySelector('#content').scrollIntoView({
        behavior: 'smooth'
    });
}

function scrollToFindMe() {
    document.querySelector('#findMe').scrollIntoView({
        behavior: 'smooth'
    });
}
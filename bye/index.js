function bye () {
    var _afk = document.getElementById("bye");
    var positionInfo = _afk.getBoundingClientRect();
    var width = positionInfo.width / 2;
    _afk.style.left = "" + (screen.availWidth / 2) - width + "px";
}
bye();

function thanks() {
    var _afk = document.getElementById("thanks");
    var positionInfo = _afk.getBoundingClientRect();
    var width = positionInfo.width / 2;
    _afk.style.left = "" + (screen.availWidth / 2) - width + "px";
}
thanks();
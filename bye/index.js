function bye () {
    var _bye = document.getElementById("bye");
    var positionInfo = _bye.getBoundingClientRect();
    var width = positionInfo.width / 2;
    _bye.style.left = "" + (screen.availWidth / 2) - width + "px";
}
bye();

function thanks() {
    var _thanks = document.getElementById("thanks");
    var positionInfo = _thanks.getBoundingClientRect();
    var width = positionInfo.width / 2;
    _thanks.style.left = "" + (screen.availWidth / 2) - width + "px";
}
thanks();
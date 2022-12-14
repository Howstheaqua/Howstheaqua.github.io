window.onload = function () {
    importContactInfo();
}

function importContactInfo(){
    var xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function() {
    if (this.readyState == 4 && this.status == 200) {
     document.getElementById("info").innerHTML = this.responseText;
    }
    };
    xhttp.open("GET", "components/contact_info.html", true);
    xhttp.send();
}
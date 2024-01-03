const modal = document.getElementById("myModal");
const infobtn = document.getElementById("infoBtn");
const span = document.getElementsByClassName("close")[0];

infobtn.onclick = function() {
  modal.style.display = "block";
}

span.onclick = function() {
  modal.style.display = "none";
}

window.onclick = function(event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
}
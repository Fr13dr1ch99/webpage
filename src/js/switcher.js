
function hideAll() {
  let cards = document.getElementsByClassName("card");
  for(let card of cards) {
    card.style.display = "none";
  }
}

function switcher(newElement, element) {
  if(element != null) {
    element.style.display = "none";
  }
  document.getElementById(newElement).style.display = "";
}

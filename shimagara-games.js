function openNavbar() {
  var x = document.getElementById("navigation");
  if (x.className === "navigation") {
    x.className += " responsive";
  } else {
    x.className = "navigation";
  }
}

function scrollDown() {
  document.getElementById("scrollDown").scrollIntoView({behavior: "smooth"});
}
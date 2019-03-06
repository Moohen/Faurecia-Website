function myFirstButton() {
  var lessText = document.getElementById("less-1");
  var moreText = document.getElementById("more-1");
  var btnText = document.getElementById("myBtn-1");

  if (lessText.style.display === "none") {
    lessText.style.display = "inline";
    btnText.innerHTML = "Czytaj dalej"; 
    moreText.style.display = "none";
  } else {
    lessText.style.display = "none";
    btnText.innerHTML = "Zwiń"; 
    moreText.style.display = "inline";
  }
}

function mySecondButton() {
  var lessText = document.getElementById("less-2");
  var moreText = document.getElementById("more-2");
  var btnText = document.getElementById("myBtn-2");

  if (lessText.style.display === "none") {
    lessText.style.display = "inline";
    btnText.innerHTML = "Czytaj dalej"; 
    moreText.style.display = "none";
  } else {
    lessText.style.display = "none";
    btnText.innerHTML = "Zwiń"; 
    moreText.style.display = "inline";
  }
}

function myThirdButton() {
  var lessText = document.getElementById("less-3");
  var moreText = document.getElementById("more-3");
  var btnText = document.getElementById("myBtn-3");

  if (lessText.style.display === "none") {
    lessText.style.display = "inline";
    btnText.innerHTML = "Czytaj dalej"; 
    moreText.style.display = "none";
  } else {
    lessText.style.display = "none";
    btnText.innerHTML = "Zwiń"; 
    moreText.style.display = "inline";
  }
}

// Get the modal
var modal = document.getElementById('myModal');

// Get the button that opens the modal
var btn = document.getElementById("myBtn");

// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close")[0];

var menu = document.getElementsByClassName("close-menu")[0];
var about = document.getElementsByClassName("close-about")[0];
var people = document.getElementsByClassName("close-people")[0];
var joinUs = document.getElementsByClassName("close-join-us")[0];
var newsFeed = document.getElementsByClassName("close-newsfeed")[0];
var contact = document.getElementsByClassName("close-contact")[0];

// When the user clicks the button, open the modal 
btn.onclick = function() {
  modal.style.display = "block";
};

// When the user clicks on <span> (x), close the modal
span.onclick = function() {
  modal.style.display = "none";
};

menu.onclick = function() {
  modal.style.display = "none";
};

about.onclick = function() {
  modal.style.display = "none";
};

people.onclick = function() {
  modal.style.display = "none";
};

joinUs.onclick = function() {
  modal.style.display = "none";
};

newsFeed.onclick = function() {
  modal.style.display = "none";
};

contact.onclick = function() {
  modal.style.display = "none";
};

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
  if (event.target === modal) {
    modal.style.display = "none";
  }
};
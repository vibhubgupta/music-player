$(document).ready(function(){
  let firstmajor = $('#firstmajor');
  let backgrounds = new Array(
      'url("1stmajor.jpg")'
    , 'url("2ndmajor.jpg")'
    , 'url("3rdmajor.jpg")'
  );
  let current = 0;
  function nextBackground() {
      current++;
      current = current % backgrounds.length;
      firstmajor.css('background-image', backgrounds[current]);
  }
  setInterval(nextBackground, 2000);
  firstmajor.css('background-image', backgrounds[0]);
});
$(document).ready(function(){
  let secondmajor = $('#secondmajor');
  let backgrounds = new Array(
      'url("2ndmajor.jpg")'
    , 'url("3rdmajor.jpg")'
    , 'url("1stmajor.jpg")'
  );
  let current = 0;
  function nextBackground() {
      current++;
      current = current % backgrounds.length;
      secondmajor.css('background-image', backgrounds[current]);
  }
  setInterval(nextBackground, 2000);
  secondmajor.css('background-image', backgrounds[0]);
});
$(document).ready(function(){
  let thirdmajor = $('#thirdmajor');
  let backgrounds = new Array(
      'url("3rdmajor.jpg")'
    , 'url("1stmajor.jpg")'
    , 'url("2ndmajor.jpg")'
  );
  let current = 0;
  function nextBackground() {
      current++;
      current = current % backgrounds.length;
      thirdmajor.css('background-image', backgrounds[current]);
  }
  setInterval(nextBackground, 2000);
  thirdmajor.css('background-image', backgrounds[0]);
});








/*toggle between hiding and showing the dropdown content */
function myFunction() {
  document.getElementById("myDropdown").classList.toggle("show");
}

function myListFunction(){
  document.getElementById('list-myDropdown').classList.toggle("list-show");
}

// Close the dropdown menu if the user clicks outside of it
window.onclick = function(event){
  if (!event.target.matches('.dropbtn')){
    let dropdowns = document.getElementsByClassName("dropdown-content");
    let i;
    for (i = 0; i < dropdowns.length; i++) {
      let openDropdown = dropdowns[i];
      if (openDropdown.classList.contains('show')) {
        openDropdown.classList.remove('show');
      }
    }
  }
  if(!event.target.matches('.list-dropbtn')){
    let dropdowns = document.getElementsByClassName("list-dropdown-content");
    let i;
    for (i = 0; i < dropdowns.length; i++) {
      let openDropdown = dropdowns[i];
      if (openDropdown.classList.contains('list-show')) {
        openDropdown.classList.remove('list-show');
      }
    }
  }
}

function makeFav(x){
  x.classList.toggle("fas");
}


// javascript


// for the NYUAD Logo
const nyuadLogo = document.querySelector("#header1 img");
const nyuadLink = document.querySelector("#nyuadLink");

nyuadLogo.addEventListener("click", function() {
  window.location.href = nyuadLink.href;
});

//for the minimap under the marhaba box
const campusMinimap = document.querySelector("#minimap img");
const mapLink = document.querySelector("#mapLink");

campusMinimap.addEventListener("click", function() {
  window.location.href = mapLink.href;
});

//for the big map in the deep violet strip
const campusGuide = document.querySelector("#campusGuide img");
const guideLink = document.querySelector("#guideLink");

campusGuide.addEventListener("click", function() {
  window.location.href = guideLink.href;
});

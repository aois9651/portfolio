// image zoom
const zoom = document.querySelectorAll(".zoom");
const zoomback = document.getElementById("zoomback");
const zooming = document.getElementById("zooming");

zoom.forEach(function(value){
  value.addEventListener("click",kakudai);
});

function kakudai(e){
  zoomback.style.display = "flex";
  zooming.setAttribute("src",e.target.getAttribute("src"));
}

zoomback.addEventListener("click",modosu);

function modosu(){
  zoomback.style.display = "none";
}
var start = new Date().getTime();
function getRandomColor() {
  var letters = "0123456789ABCDEF";
  var color = "#";
  for (var i = 0; i < 6; i++) {
    color += letters[Math.floor(Math.random() * 16)];
  }
  return color;
}
function move() {
  var left = Math.random() * 300;
  var right = Math.random() * 300;
  var wh = Math.random() * 400 + 100;
  document.getElementById("Shape").style.left = left;
  document.getElementById("Shape").style.right = right;
  document.getElementById("Shape").style.height = wh;
  document.getElementById("Shape").style.width = wh;
  document.getElementById("Shape").style.display = "block";
  document.getElementById("Shape").style.backgroundColor = getRandomColor();
  start = new Date().getTime();
}
document.getElementById("Shape").onclick = function () {
  document.getElementById("Shape").style.display = "none";
  var end = new Date().getTime();
  var time = (end - start) / 1000;
  alert(time);
  move();
};

var slider = document.getElementById("slider");
var active = document.getElementById("active");
var lin1 = document.getElementById("lin1");
var lin2 = document.getElementById("lin2");
var lin3 = document.getElementById("lin3");
var lin4 = document.getElementById("lin4");

lin1.onclick = function () {
  slider.style.transform = "translateX(0)";
  active.style.top = "0px";
};
lin2.onclick = function () {
  slider.style.transform = "translateX(-25%)";
  active.style.top = "80px";
};
lin3.onclick = function () {
  slider.style.transform = "translateX(-50%)";
  active.style.top = "160px";
};
lin4.onclick = function () {
  slider.style.transform = "translateX(-75%)";
  active.style.top = "240px";
};

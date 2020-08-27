
let btn = document.getElementsByClassName('avatar-small')[0],
    nav = document.getElementsByClassName('nav')[0];

btn.addEventListener('click', function () {
  nav.style.right = 0;
}, false);

document.onclick = function (ev) {
  var e = ev || event;
  var target = e.target || e.srcElement;
  if (e.target.id.indexOf('avatar-small')=="-1") 
  {
    nav.style.right = '-7rem';
  }
}
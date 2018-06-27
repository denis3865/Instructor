if(document.querySelector('.teachers-names ul')){
var w1 = document.querySelector('.teachers-names ul'),
  w2 = document.querySelector('.allteachers-items'),
  w3 = document.querySelector('.allteachers-images');
[].forEach.call(w1.children, function(i,ind) {
  i.ind = ind;
});
[].forEach.call(w2.children, function(i,ind) {
  i.ind = ind;
});
[].forEach.call(w3.children, function(i,ind) {
  i.ind = ind;
});
w1.addEventListener('click', function (e) {
  var t = e.target;
  if(t.ind === undefined) return;
  [].forEach.call(w3.children, function(i) {
    i.classList.remove('active');
  });
  [].forEach.call(w2.children, function(i) {
    i.classList.remove('active');
  });
  [].forEach.call(w1.children, function(i) {
    i.classList.remove('active');
  });
  w3.children[t.ind].classList.add('active');
  w2.children[t.ind].classList.add('active');
  w1.children[t.ind].classList.add('active')
});
}